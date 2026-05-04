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
  const mime = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', webp: 'image/webp', svg: 'image/svg+xml' }[ext] || 'image/jpeg';
  const b64 = fs.readFileSync(full).toString('base64');
  return `data:${mime};base64,${b64}`;
}

async function generateImageFromAI(prompt) {
  if (!OPENROUTER_API_KEY) {
    console.warn('  ⚠ OPENROUTER_API_KEY não configurado — usando fundo CSS');
    return null;
  }
  console.log('  🎨 Gerando imagem com Flux...');
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

    // Response format: choices[0].message.images[0].image_url.url
    const images = data.choices?.[0]?.message?.images;
    if (Array.isArray(images) && images[0]?.image_url?.url) return images[0].image_url.url;

    // Fallback: content array with image_url
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

// ── Image assignments ──────────────────────────────────────────────
const IMG_INFLUENCER = path.join(ASSETS, 'influencers', '@luanbraganholi', 'Imagem do WhatsApp de 2025-05-22 à(s) 15.57.01_4d2bafef.jpg');
const IMG_LOGO = path.join(ASSETS, 'brand', 'Logo branco.png');

// ── Frame definitions ──────────────────────────────────────────────
const files = [
  {
    file: 'feed-editorial.html', w: 1080, h: 1080, out: 'feed-editorial.png',
    bg: IMG_INFLUENCER, prompt: null
  },
  {
    file: 'stories-frame-1.html', w: 1080, h: 1920, out: 'stories-frame-1.png',
    bg: IMG_INFLUENCER, prompt: null
  },
  {
    file: 'stories-frame-2.html', w: 1080, h: 1920, out: 'stories-frame-2.png',
    bg: IMG_INFLUENCER, prompt: null
  },
  {
    file: 'stories-frame-3.html', w: 1080, h: 1920, out: 'stories-frame-3.png',
    bg: null,
    prompt: 'Cinematic vertical photo of Brazilian cerrado countryside at golden hour, dry golden grass field, dramatic sunset sky with deep amber and orange tones, glowing horizon line, lone dark tree silhouette in distance, moody atmospheric photography, dark vignette edges, western rural aesthetic, no people, no text, no watermark, 9:16 aspect ratio'
  },
  {
    file: 'stories-frame-4.html', w: 1080, h: 1920, out: 'stories-frame-4.png',
    bg: null,
    prompt: 'Cinematic vertical photo inside old rustic wooden barn, dramatic light rays piercing through wooden plank gaps, warm golden dust particles floating in dark air, chiaroscuro lighting, deep shadows with amber warm tones, western rustic atmosphere, no people, no text, no watermark, 9:16 aspect ratio'
  },
  {
    file: 'stories-frame-5.html', w: 1080, h: 1920, out: 'stories-frame-5.png',
    bg: null, prompt: null
  },
  {
    file: 'stories-frame-6.html', w: 1080, h: 1920, out: 'stories-frame-6.png',
    bg: null,
    prompt: 'Cinematic vertical photo of empty dirt road stretching to horizon, dramatic dusk sky, deep orange amber glow on horizon line, dark foreground silhouette, wide open sertão landscape, moody western atmosphere, dark tones, no people, no text, no watermark, 9:16 aspect ratio'
  },
];

// ── Runner ─────────────────────────────────────────────────────────
(async () => {
  if (!OPENROUTER_API_KEY) {
    console.log('⚠  OPENROUTER_API_KEY não encontrado em .env — frames 3, 4, 6 usarão fundo CSS');
  } else {
    console.log('✓  OpenRouter configurado — gerando imagens com Flux para frames 3, 4, 6\n');
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
          // CSS-only frames: use AI image as body bg, hide decorative CSS layers
          document.body.style.backgroundImage = `url('${src}')`;
          document.body.style.backgroundSize = 'cover';
          document.body.style.backgroundPosition = 'center';
          [
            '.sky-layer', '.sky', '.ground', '.earth',
            '.horizon', '.horizon-glow', '.horizon-line', '.central-glow',
            '.field-texture', '.perspective-left', '.perspective-right', '.silhouette',
            '.plank', '.grain', '.skylight',
            '.road-line-left', '.road-line-right', '.frame-border'
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
  console.log('✅ Pronto. Imagens salvas em output/2026-04-27-run003/slides/');
})();
