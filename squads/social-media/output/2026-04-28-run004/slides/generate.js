const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const SQUAD_ROOT = path.resolve(__dirname, '../../..');
const ASSETS = path.join(SQUAD_ROOT, 'assets');

// Load OPENROUTER_API_KEY from root .env
const ENV_FILE = path.resolve(__dirname, '../../../../../.env');
let OPENROUTER_API_KEY = '';
if (fs.existsSync(ENV_FILE)) {
  const envContent = fs.readFileSync(ENV_FILE, 'utf8');
  const match = envContent.match(/^OPENROUTER_API_KEY=(.+)$/m);
  if (match) OPENROUTER_API_KEY = match[1].trim();
}

function toDataUri(imgPath) {
  if (!imgPath) return null;
  const full = path.resolve(imgPath);
  if (!fs.existsSync(full)) {
    console.warn('Image not found:', full);
    return null;
  }
  const ext = path.extname(full).toLowerCase().replace('.', '');
  const mime = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', webp: 'image/webp' }[ext] || 'image/jpeg';
  const b64 = fs.readFileSync(full).toString('base64');
  return `data:${mime};base64,${b64}`;
}

async function generateImageFromAI(prompt) {
  if (!OPENROUTER_API_KEY) {
    console.warn('  ⚠ OPENROUTER_API_KEY não configurado — usando fundo CSS');
    return null;
  }
  console.log('  🎨 Gerando imagem com Nano Banana (Gemini Flash Image)...');
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
      console.error('  ✗ API error:', res.status, (await res.text()).slice(0, 200));
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

    console.error('  ✗ Formato inesperado:', JSON.stringify(data).slice(0, 300));
    return null;
  } catch (err) {
    console.error('  ✗ Erro:', err.message);
    return null;
  }
}

// ── Image assignments — Boné Yellowstone ──────────────────────────────
const IMG_BONE_1 = path.join(ASSETS, 'products', 'Bonés', 'Boné Yellowstone (1).jpg');
const IMG_BONE_2 = path.join(ASSETS, 'products', 'Bonés', 'Boné Yellowstone (2).jpg');
const IMG_BONE_3 = path.join(ASSETS, 'products', 'Bonés', 'Boné Yellowstone (3).jpg');
const IMG_BONE_4 = path.join(ASSETS, 'products', 'Bonés', 'Boné Yellowstone (4).jpg');
const IMG_BONE_5 = path.join(ASSETS, 'products', 'Bonés', 'Boné Yellowstone (5).jpg');
const IMG_LOGO   = path.join(ASSETS, 'brand', 'Logo branco.png');

// ── AI prompt — campo ao entardecer (Stories frame 3) ──────────────────
const PROMPT_CAMPO = 'Cinematic vertical photo of Brazilian cerrado countryside at golden hour, dry golden grass field, dramatic sunset sky with deep amber and orange tones, glowing horizon line, lone dark tree silhouette in distance, moody atmospheric photography, dark vignette edges, western rural aesthetic, no people, no text, no watermark, 9:16 aspect ratio';

// ── Frame definitions ──────────────────────────────────────────────────
const files = [
  // Feed Carrossel — 4 slides 1080x1080
  { file: 'feed-slide-1-cover.html',    w: 1080, h: 1080, out: 'feed-slide-1-cover.png',    bg: IMG_BONE_1, prompt: null },
  { file: 'feed-slide-2-identidade.html', w: 1080, h: 1080, out: 'feed-slide-2-identidade.png', bg: null,      prompt: null },
  { file: 'feed-slide-3-produto.html',  w: 1080, h: 1080, out: 'feed-slide-3-produto.png',  bg: IMG_BONE_3, prompt: null },
  { file: 'feed-slide-4-cta.html',      w: 1080, h: 1080, out: 'feed-slide-4-cta.png',      bg: IMG_BONE_5, prompt: null },

  // Stories — 5 frames 1080x1920
  { file: 'stories-frame-1.html', w: 1080, h: 1920, out: 'stories-frame-1.png', bg: IMG_BONE_2, prompt: null },
  { file: 'stories-frame-2.html', w: 1080, h: 1920, out: 'stories-frame-2.png', bg: null,       prompt: null },
  { file: 'stories-frame-3.html', w: 1080, h: 1920, out: 'stories-frame-3.png', bg: null,       prompt: PROMPT_CAMPO },
  { file: 'stories-frame-4.html', w: 1080, h: 1920, out: 'stories-frame-4.png', bg: IMG_BONE_4, prompt: null },
  { file: 'stories-frame-5.html', w: 1080, h: 1920, out: 'stories-frame-5.png', bg: null,       prompt: null },
];

// ── Runner ─────────────────────────────────────────────────────────────
(async () => {
  if (!OPENROUTER_API_KEY) {
    console.log('⚠  OPENROUTER_API_KEY não encontrado em .env — frame 3 (Stories) usará fundo CSS\n');
  } else {
    console.log('✓  OpenRouter configurado — gerando imagem IA para Stories frame 3\n');
  }

  const logoUri = toDataUri(IMG_LOGO);
  if (!logoUri) console.log('ℹ  Logo não encontrado — usando fallback texto');

  const browser = await chromium.launch();

  for (const f of files) {
    console.log(`▶ ${f.out}`);
    const page = await browser.newPage();
    await page.setViewportSize({ width: f.w, height: f.h });

    const url = 'file:///' + path.join(__dirname, f.file).replace(/\\/g, '/');
    await page.goto(url, { waitUntil: 'networkidle' });

    // Generate AI image if prompt exists
    let aiBgUri = null;
    if (f.prompt) {
      aiBgUri = await generateImageFromAI(f.prompt);
    }

    // Inject background
    const bgUri = f.bg ? toDataUri(f.bg) : null;
    const finalBgUri = aiBgUri || bgUri;

    if (finalBgUri) {
      await page.evaluate((src) => {
        const bgEl = document.getElementById('bg-image');
        if (bgEl) {
          bgEl.style.backgroundImage = `url('${src}')`;
        } else {
          // CSS-only frames (frame-2, frame-3 fallback, frame-5): apply as body bg
          document.body.style.backgroundImage = `url('${src}')`;
          document.body.style.backgroundSize = 'cover';
          document.body.style.backgroundPosition = 'center';
          // Hide CSS decorative layers
          ['.sky-layer', '.sky', '.ground', '.earth',
           '.horizon', '.horizon-glow', '.field-texture', '.silhouette'
          ].forEach(sel => {
            document.querySelectorAll(sel).forEach(el => el.style.display = 'none');
          });
        }
      }, finalBgUri);
    }

    // Inject logo
    if (logoUri) {
      await page.evaluate((src) => {
        const el = document.getElementById('brand-logo');
        if (el) el.innerHTML = `<img src="${src}" style="height:130px;width:auto;">`;
      }, logoUri);
    }

    await page.waitForTimeout(1800);
    await page.screenshot({ path: path.join(__dirname, f.out), fullPage: false });
    console.log('  ✓ Salvo\n');
    await page.close();
  }

  await browser.close();
  console.log('✅ Pronto! 9 imagens salvas em output/2026-04-28-run004/slides/');
  console.log('   Feed: feed-slide-1 a 4 (carrossel 4 slides)');
  console.log('   Stories: stories-frame-1 a 5');

  // Remove HTML source files — only PNGs are needed
  const htmlFiles = files.map(f => path.join(__dirname, f.file));
  for (const htmlPath of htmlFiles) {
    if (fs.existsSync(htmlPath)) {
      fs.unlinkSync(htmlPath);
    }
  }
  console.log('🗑  Arquivos HTML removidos. Pasta contém apenas as imagens PNG.');
})();
