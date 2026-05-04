const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

// ── Paths ──────────────────────────────────────────────────────────────────
const SQUAD_ROOT = path.resolve(__dirname, '../../..');
const ASSETS = path.join(SQUAD_ROOT, 'assets');
const OCULOS = path.join(ASSETS, 'products', 'Óculos', 'Óculos Masculino');

// Load OPENROUTER_API_KEY from root .env
const ENV_FILE = path.resolve(__dirname, '../../../../../.env');
let OPENROUTER_API_KEY = '';
if (fs.existsSync(ENV_FILE)) {
  const envContent = fs.readFileSync(ENV_FILE, 'utf8');
  const match = envContent.match(/^OPENROUTER_API_KEY=(.+)$/m);
  if (match) OPENROUTER_API_KEY = match[1].trim();
}

// ── Image paths — Óculos Hunter ────────────────────────────────────────────
const IMG_HUNTER_1 = path.join(OCULOS, 'Óculos Hunter (1).png');
const IMG_HUNTER_2 = path.join(OCULOS, 'Óculos Hunter (2).png');
const IMG_HUNTER_3 = path.join(OCULOS, 'Óculos Hunter (3).png');
const IMG_LOGO     = path.join(ASSETS, 'brand', 'logo branco.png');

// ── AI Prompt — cerrado ao entardecer (Stories Frame 2) ───────────────────
const PROMPT_CAMPO = 'Cinematic vertical photo of Brazilian cerrado countryside at golden hour, dry golden grass field, dramatic sunset sky with deep amber and orange tones, glowing horizon line, lone dark tree silhouette in distance, moody atmospheric photography, dark vignette edges, western rural aesthetic, no people, no text, no watermark, 9:16 aspect ratio';

// ── Utilities ──────────────────────────────────────────────────────────────
function toDataUri(imgPath) {
  if (!imgPath) return null;
  const full = path.resolve(imgPath);
  if (!fs.existsSync(full)) {
    console.warn('  ! Image not found:', full);
    return null;
  }
  const ext = path.extname(full).toLowerCase().replace('.', '');
  const mime = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', webp: 'image/webp' }[ext] || 'image/jpeg';
  const b64 = fs.readFileSync(full).toString('base64');
  return `data:${mime};base64,${b64}`;
}

async function generateImageFromAI(prompt) {
  if (!OPENROUTER_API_KEY) {
    console.warn('  ! OPENROUTER_API_KEY nao configurado — usando fundo CSS');
    return null;
  }
  console.log('  Gerando imagem IA via OpenRouter (Gemini Flash Image)...');
  try {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://barnswestern.com.br',
        'X-Title': 'Barns Western Content Squad'
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash-image',
        messages: [{ role: 'user', content: prompt }],
        modalities: ['image']
      })
    });

    if (!res.ok) {
      console.error('  x API error:', res.status, (await res.text()).slice(0, 200));
      return null;
    }

    const data = await res.json();
    const images = data.choices?.[0]?.message?.images;
    if (Array.isArray(images) && images[0]?.image_url?.url) return images[0].image_url.url;

    const content = data.choices?.[0]?.message?.content;
    if (Array.isArray(content)) {
      const img = content.find(c => c.type === 'image_url');
      if (img?.image_url?.url) return img.image_url.url;
    }
    if (data.images?.[0]) return data.images[0];

    console.error('  x Formato inesperado:', JSON.stringify(data).slice(0, 300));
    return null;
  } catch (err) {
    console.error('  x Erro:', err.message);
    return null;
  }
}

// ── Frame definitions ──────────────────────────────────────────────────────
const files = [
  // Feed — 7 slides 1080x1080
  { file: 'feed-slide-1-cover.html',      out: 'feed-slide-1-cover.png',      w: 1080, h: 1080, product: IMG_HUNTER_1, prompt: null },
  { file: 'feed-slide-2-tese.html',       out: 'feed-slide-2-tese.png',       w: 1080, h: 1080, product: null,         prompt: null },
  { file: 'feed-slide-3-problema.html',   out: 'feed-slide-3-problema.png',   w: 1080, h: 1080, product: null,         prompt: null },
  { file: 'feed-slide-4-diagnostico.html',out: 'feed-slide-4-diagnostico.png',w: 1080, h: 1080, product: null,         prompt: null },
  { file: 'feed-slide-5-produto.html',    out: 'feed-slide-5-produto.png',    w: 1080, h: 1080, product: IMG_HUNTER_3, prompt: null },
  { file: 'feed-slide-6-prova.html',      out: 'feed-slide-6-prova.png',      w: 1080, h: 1080, product: null,         prompt: null },
  { file: 'feed-slide-7-cta.html',        out: 'feed-slide-7-cta.png',        w: 1080, h: 1080, product: IMG_HUNTER_2, prompt: null },
  // Stories — 5 frames 1080x1920
  { file: 'stories-frame-1.html', out: 'stories-frame-1.png', w: 1080, h: 1920, product: IMG_HUNTER_1, prompt: null          },
  { file: 'stories-frame-2.html', out: 'stories-frame-2.png', w: 1080, h: 1920, product: null,         prompt: PROMPT_CAMPO  },
  { file: 'stories-frame-3.html', out: 'stories-frame-3.png', w: 1080, h: 1920, product: null,         prompt: null          },
  { file: 'stories-frame-4.html', out: 'stories-frame-4.png', w: 1080, h: 1920, product: IMG_HUNTER_3, prompt: null          },
  { file: 'stories-frame-5.html', out: 'stories-frame-5.png', w: 1080, h: 1920, product: null,         prompt: null          }
];

// ── Runner ─────────────────────────────────────────────────────────────────
(async () => {
  if (!OPENROUTER_API_KEY) {
    console.log('! OPENROUTER_API_KEY nao encontrado em .env — stories-frame-2 usara fundo CSS\n');
  } else {
    console.log('OpenRouter configurado — gerando imagem IA para Stories Frame 2\n');
  }

  const logoUri = toDataUri(IMG_LOGO);
  if (!logoUri) console.log('! Logo nao encontrado — usando fallback texto');

  // Pre-load all product images as data URIs
  const hunter1Uri = toDataUri(IMG_HUNTER_1);
  const hunter2Uri = toDataUri(IMG_HUNTER_2);
  const hunter3Uri = toDataUri(IMG_HUNTER_3);

  // Generate AI image for Stories Frame 2 (campo ao entardecer)
  let aiCampoUri = null;
  const needsAI = files.some(f => f.prompt === PROMPT_CAMPO);
  if (needsAI) {
    console.log('Gerando imagem IA (cerrado ao entardecer) — Stories Frame 2...');
    aiCampoUri = await generateImageFromAI(PROMPT_CAMPO);
    if (aiCampoUri) {
      console.log('  OK Imagem IA gerada\n');
    } else {
      console.log('  ! Imagem IA nao gerada — usando fundo CSS gradient\n');
    }
  }

  const browser = await chromium.launch();

  for (const f of files) {
    console.log('Processando:', f.out);
    const page = await browser.newPage();
    await page.setViewportSize({ width: f.w, height: f.h });

    const url = 'file:///' + path.join(__dirname, f.file).replace(/\\/g, '/');
    await page.goto(url, { waitUntil: 'networkidle' });

    // Inject AI background
    const bgUri = f.prompt ? (aiCampoUri || null) : null;
    if (bgUri) {
      await page.evaluate((src) => {
        const bgEl = document.getElementById('bg-image');
        if (bgEl) {
          bgEl.style.backgroundImage = `url('${src}')`;
          bgEl.style.display = 'block';
          const css = document.querySelector('.css-field');
          if (css) css.style.display = 'none';
        }
      }, bgUri);
    }

    // Inject product image
    if (f.product) {
      const productUri = (() => {
        if (f.product === IMG_HUNTER_1) return hunter1Uri;
        if (f.product === IMG_HUNTER_2) return hunter2Uri;
        if (f.product === IMG_HUNTER_3) return hunter3Uri;
        return toDataUri(f.product);
      })();
      if (productUri) {
        const isGoldBg = f.file === 'feed-slide-5-produto.html' || f.file === 'stories-frame-4.html';
        if (isGoldBg) {
          // Gold-bg slides use #product-area with background-blend-mode: multiply
          // to remove the white background from product photos
          await page.evaluate((src) => {
            const el = document.getElementById('product-area');
            if (el) el.style.backgroundImage = `url('${src}')`;
          }, productUri);
        } else {
          await page.evaluate((src) => {
            const el = document.getElementById('product-img');
            if (el) { el.src = src; el.style.display = 'block'; }
          }, productUri);
        }
      }
    }

    // Inject logo (white logo only — gold bg slides use text fallback)
    const isGoldBg = f.file === 'feed-slide-5-produto.html' || f.file === 'stories-frame-4.html';
    if (logoUri && !isGoldBg) {
      await page.evaluate((src) => {
        const el = document.getElementById('brand-logo');
        if (el) el.innerHTML = `<img src="${src}" style="height:130px;width:auto;">`;
      }, logoUri);
    }

    await page.waitForTimeout(2000);

    const outPath = path.join(__dirname, f.out);
    await page.screenshot({ path: outPath, fullPage: false });
    console.log('  OK', f.out, '\n');
    await page.close();
  }

  await browser.close();

  console.log('Concluido! 12 imagens salvas em:');
  console.log(' ', __dirname);
  console.log('  Feed:    feed-slide-1 a feed-slide-7 (7 slides 1080x1080)');
  console.log('  Stories: stories-frame-1 a stories-frame-5 (5 frames 1080x1920)');

  // Remove HTML source files — only PNGs remain
  const htmlFiles = files.map(f => path.join(__dirname, f.file));
  for (const htmlPath of htmlFiles) {
    if (fs.existsSync(htmlPath)) fs.unlinkSync(htmlPath);
  }
  console.log('\nArquivos HTML removidos. Pasta contem apenas as imagens PNG.');
})();
