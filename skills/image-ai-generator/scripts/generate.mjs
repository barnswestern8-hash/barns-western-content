#!/usr/bin/env node
/**
 * Image Generator — Node.js port of generate.py
 * Calls OpenRouter API to generate images and saves locally.
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const MODELS = {
  test: 'sourceful/riverflow-v2-fast',
  production: 'google/gemini-3.1-flash-image-preview',
};

const API_URL = 'https://openrouter.ai/api/v1/chat/completions';

function loadApiKey() {
  if (process.env.OPENROUTER_API_KEY) return process.env.OPENROUTER_API_KEY;
  const candidates = [
    path.join(process.cwd(), '.env'),
    path.join(__dirname, '..', '..', '..', '.env'),
  ];
  for (const p of candidates) {
    if (fs.existsSync(p)) {
      for (const line of fs.readFileSync(p, 'utf8').split('\n')) {
        const trimmed = line.trim();
        if (trimmed.startsWith('OPENROUTER_API_KEY=') && !trimmed.startsWith('#')) {
          return trimmed.split('=', 2)[1].replace(/^['"]|['"]$/g, '').trim();
        }
      }
    }
  }
  console.error('ERROR: OPENROUTER_API_KEY not found');
  process.exit(1);
}

function httpsPost(url, data, headers) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const body = JSON.stringify(data);
    const req = https.request({
      hostname: urlObj.hostname,
      path: urlObj.pathname,
      method: 'POST',
      headers: { ...headers, 'Content-Length': Buffer.byteLength(body) },
    }, (res) => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        const raw = Buffer.concat(chunks).toString('utf8');
        if (res.statusCode >= 400) {
          reject(new Error(`API error [${res.statusCode}]: ${raw.slice(0, 300)}`));
        } else {
          resolve(JSON.parse(raw));
        }
      });
    });
    req.on('error', reject);
    req.setTimeout(180000, () => { req.destroy(new Error('Request timeout')); });
    req.write(body);
    req.end();
  });
}

async function generateImage(prompt, outputPath, mode, apiKey, referencePath) {
  const model = MODELS[mode] || MODELS.test;
  fs.mkdirSync(path.dirname(path.resolve(outputPath)), { recursive: true });

  let content;
  if (referencePath && fs.existsSync(referencePath)) {
    const ext = path.extname(referencePath).toLowerCase();
    const mimeMap = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp' };
    const mime = mimeMap[ext] || 'image/png';
    const imgB64 = fs.readFileSync(referencePath).toString('base64');
    content = [
      { type: 'image_url', image_url: { url: `data:${mime};base64,${imgB64}` } },
      { type: 'text', text: `Generate an image using the product shown in the reference image above as inspiration for the product's design and colors. ${prompt}. Only output the image, no text.` },
    ];
  } else {
    content = `Generate an image: ${prompt}. Only output the image, no text.`;
  }

  const data = await httpsPost(API_URL, {
    model,
    messages: [{ role: 'user', content }],
  }, {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  });

  // Extract image from response
  const msg = data?.choices?.[0]?.message || {};
  let imgData = null;

  if (msg.images?.length) {
    const url = msg.images[0]?.image_url?.url || '';
    imgData = url.startsWith('data:') ? url.split(',', 2)[1] : url;
  } else if (typeof msg.content === 'string' && msg.content.startsWith('data:image')) {
    imgData = msg.content.split(',', 2)[1];
  } else if (typeof msg.content === 'string' && msg.content.length > 100) {
    // Sometimes returned as raw base64
    imgData = msg.content;
  }

  if (!imgData) {
    console.error(`  No image returned by model ${model}`);
    console.error('  Response:', JSON.stringify(data).slice(0, 400));
    return false;
  }

  fs.writeFileSync(outputPath, Buffer.from(imgData, 'base64'));
  const sizeKb = Math.round(fs.statSync(outputPath).size / 1024);
  console.log(`  OK: ${outputPath} (${sizeKb} KB)`);
  return true;
}

async function main() {
  const args = process.argv.slice(2);
  const get = (flag) => { const i = args.indexOf(flag); return i >= 0 ? args[i + 1] : null; };

  const batchFile = get('--batch');
  const prompt = get('--prompt');
  const output = get('--output');
  const mode = get('--mode') || 'test';
  const reference = get('--reference');

  const apiKey = loadApiKey();
  const model = MODELS[mode];
  console.log(`Image Generator — Mode: ${mode} | Model: ${model}\n`);

  if (batchFile) {
    const items = JSON.parse(fs.readFileSync(batchFile, 'utf8'));
    console.log(`Generating ${items.length} images...\n`);
    let success = 0;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      console.log(`[${i + 1}/${items.length}] ${path.basename(item.output)}...`);
      try {
        if (await generateImage(item.prompt, item.output, mode, apiKey, item.reference)) success++;
      } catch (e) {
        console.error(`  Error: ${e.message}`);
      }
      if (i < items.length - 1) await new Promise(r => setTimeout(r, 1500));
    }
    console.log(`\nDone: ${success}/${items.length} images generated.`);
    process.exit(success === items.length ? 0 : 1);
  } else if (prompt && output) {
    try {
      const ok = await generateImage(prompt, output, mode, apiKey, reference);
      process.exit(ok ? 0 : 1);
    } catch (e) {
      console.error(`Error: ${e.message}`);
      process.exit(1);
    }
  } else {
    console.error('Usage: node generate.mjs --batch file.json --mode production');
    console.error('   or: node generate.mjs --prompt "..." --output "path.png" --mode production');
    process.exit(1);
  }
}

main();
