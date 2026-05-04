const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

// ── Paths ──────────────────────────────────────────────────────────────────
const SQUAD_ROOT = path.resolve(__dirname, '../../..');
const ASSETS = path.join(SQUAD_ROOT, 'assets');
const FIVELAS = path.join(ASSETS, 'products', 'Fivelas', 'Unissex');

// Load OPENROUTER_API_KEY from root .env
const ENV_FILE = path.resolve(__dirname, '../../../../../.env');
let OPENROUTER_API_KEY = '';
if (fs.existsSync(ENV_FILE)) {
  const envContent = fs.readFileSync(ENV_FILE, 'utf8');
  const match = envContent.match(/^OPENROUTER_API_KEY=(.+)$/m);
  if (match) OPENROUTER_API_KEY = match[1].trim();
}

// ── Image paths — Fivela Tex ───────────────────────────────────────────────
const IMG_TEX_1  = path.join(FIVELAS, 'Fivela Tex (1).png');
const IMG_TEX_10 = path.join(FIVELAS, 'Fivela Tex (10).png');
const IMG_TEX_15 = path.join(FIVELAS, 'Fivela Tex (15).png');
const IMG_TEX_18 = path.join(FIVELAS, 'Fivela Tex (18).png');
const IMG_LOGO   = path.join(ASSETS, 'brand', 'Logo branco.png');

// ── AI Prompt — campo ao entardecer (Slide 4 Feed + Frame 2 Stories) ───────
const PROMPT_CAMPO = 'Campo aberto ao entardecer no sertao brasileiro. Luz dourada de final de tarde. Silhueta de cowboy de costas com cinto e fivela visivel, ceu alaranjado profundo. Estilo fotografico, grao de filme analogico. Sem texto. Sem produto em destaque. Ambiente rural, chapada, moody.';

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
// product: path to product image for <img id="product-img">
// bg: path for #bg-image background injection
// prompt: AI image generation prompt (generates bg)
// grid: array of 4 product paths for 2x2 grid (slides 7 and stories 5)
const files = [
  // Feed — 7 slides 1080x1080
  {
    file: 'feed-slide-1-cover.html',
    out:  'feed-slide-1-cover.png',
    w: 1080, h: 1080,
    product: IMG_TEX_1,
    bg: null,
    prompt: null,
    grid: null
  },
  {
    file: 'feed-slide-2-setup.html',
    out:  'feed-slide-2-setup.png',
    w: 1080, h: 1080,
    product: null,
    bg: null,
    prompt: null,
    grid: null
  },
  {
    file: 'feed-slide-3-identidade.html',
    out:  'feed-slide-3-identidade.png',
    w: 1080, h: 1080,
    product: IMG_TEX_10,
    bg: null,
    prompt: null,
    grid: null
  },
  {
    file: 'feed-slide-4-conflict.html',
    out:  'feed-slide-4-conflict.png',
    w: 1080, h: 1080,
    product: null,
    bg: null,
    prompt: PROMPT_CAMPO,
    grid: null
  },
  {
    file: 'feed-slide-5-produto.html',
    out:  'feed-slide-5-produto.png',
    w: 1080, h: 1080,
    product: IMG_TEX_1,
    bg: null,
    prompt: null,
    grid: null
  },
  {
    file: 'feed-slide-6-takeaway.html',
    out:  'feed-slide-6-takeaway.png',
    w: 1080, h: 1080,
    product: IMG_TEX_15,
    bg: null,
    prompt: null,
    grid: null
  },
  {
    file: 'feed-slide-7-cta.html',
    out:  'feed-slide-7-cta.png',
    w: 1080, h: 1080,
    product: null,
    bg: null,
    prompt: null,
    grid: [IMG_TEX_1, IMG_TEX_10, IMG_TEX_15, IMG_TEX_18]
  },
  // Stories — 5 frames 1080x1920
  {
    file: 'stories-frame-1.html',
    out:  'stories-frame-1.png',
    w: 1080, h: 1920,
    product: IMG_TEX_1,
    bg: null,
    prompt: null,
    grid: null
  },
  {
    file: 'stories-frame-2.html',
    out:  'stories-frame-2.png',
    w: 1080, h: 1920,
    product: null,
    bg: null,
    prompt: PROMPT_CAMPO,
    grid: null
  },
  {
    file: 'stories-frame-3.html',
    out:  'stories-frame-3.png',
    w: 1080, h: 1920,
    product: null,
    bg: null,
    prompt: null,
    grid: null
  },
  {
    file: 'stories-frame-4.html',
    out:  'stories-frame-4.png',
    w: 1080, h: 1920,
    product: IMG_TEX_1,
    bg: null,
    prompt: null,
    grid: null
  },
  {
    file: 'stories-frame-5.html',
    out:  'stories-frame-5.png',
    w: 1080, h: 1920,
    product: null,
    bg: null,
    prompt: null,
    grid: [IMG_TEX_1, IMG_TEX_10, IMG_TEX_15, IMG_TEX_18]
  }
];

// ── Runner ─────────────────────────────────────────────────────────────────
(async () => {
  if (!OPENROUTER_API_KEY) {
    console.log('! OPENROUTER_API_KEY nao encontrado em .env — frames com IA usarao fundo CSS\n');
  } else {
    console.log('OpenRouter configurado — gerando imagens IA para Slide 4 e Stories Frame 2\n');
  }

  const logoUri = toDataUri(IMG_LOGO);
  if (!logoUri) console.log('! Logo nao encontrado — usando fallback texto');

  // Pre-load all product images as data URIs
  const tex1Uri  = toDataUri(IMG_TEX_1);
  const tex10Uri = toDataUri(IMG_TEX_10);
  const tex15Uri = toDataUri(IMG_TEX_15);
  const tex18Uri = toDataUri(IMG_TEX_18);

  // Cache AI images (both Slide 4 and Frame 2 use the same prompt — generate once)
  let aiCampoUri = null;
  const needsAI = files.some(f => f.prompt === PROMPT_CAMPO);
  if (needsAI) {
    console.log('Gerando imagem IA (campo ao entardecer) — usada no Slide 4 e Frame 2...');
    aiCampoUri = await generateImageFromAI(PROMPT_CAMPO);
    if (aiCampoUri) {
      console.log('  OK Imagem IA gerada com sucesso\n');
    } else {
      console.log('  ! Imagem IA nao gerada — usando fundo CSS\n');
    }
  }

  const browser = await chromium.launch();

  for (const f of files) {
    console.log('Processando:', f.out);
    const page = await browser.newPage();
    await page.setViewportSize({ width: f.w, height: f.h });

    const url = 'file:///' + path.join(__dirname, f.file).replace(/\\/g, '/');
    await page.goto(url, { waitUntil: 'networkidle' });

    // Resolve AI background for frames that need it
    const finalBgUri = f.prompt ? (aiCampoUri || null) : (f.bg ? toDataUri(f.bg) : null);

    // Inject #bg-image background
    if (finalBgUri) {
      await page.evaluate((src) => {
        const bgEl = document.getElementById('bg-image');
        if (bgEl) {
          bgEl.style.backgroundImage = `url('${src}')`;
          bgEl.style.display = 'block';
          // Hide CSS fallback layers
          ['css-field', '.sky', '.ground'].forEach(sel => {
            document.querySelectorAll(sel.startsWith('.') ? sel : '.' + sel)
              .forEach(el => el.style.display = 'none');
          });
        }
      }, finalBgUri);
    }

    // Inject product image (single product)
    if (f.product) {
      const productUri = (() => {
        if (f.product === IMG_TEX_1)  return tex1Uri;
        if (f.product === IMG_TEX_10) return tex10Uri;
        if (f.product === IMG_TEX_15) return tex15Uri;
        if (f.product === IMG_TEX_18) return tex18Uri;
        return toDataUri(f.product);
      })();
      if (productUri) {
        await page.evaluate((src) => {
          const el = document.getElementById('product-img');
          if (el) { el.src = src; el.style.display = 'block'; }
        }, productUri);
      }
    }

    // Inject 2x2 grid products
    if (f.grid) {
      const gridUris = f.grid.map(p => {
        if (p === IMG_TEX_1)  return tex1Uri;
        if (p === IMG_TEX_10) return tex10Uri;
        if (p === IMG_TEX_15) return tex15Uri;
        if (p === IMG_TEX_18) return tex18Uri;
        return toDataUri(p);
      });
      await page.evaluate((uris) => {
        ['product-1', 'product-2', 'product-3', 'product-4'].forEach((id, i) => {
          const el = document.getElementById(id);
          if (el && uris[i]) { el.src = uris[i]; el.style.display = 'block'; }
        });
      }, gridUris);
    }

    // Inject logo
    if (logoUri) {
      await page.evaluate((src) => {
        const el = document.getElementById('brand-logo');
        if (el) el.innerHTML = `<img src="${src}" style="height:130px;width:auto;">`;
      }, logoUri);
    }

    // Wait for images to render
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

  // Remove HTML source files — only PNGs are needed
  const htmlFiles = files.map(f => path.join(__dirname, f.file));
  for (const htmlPath of htmlFiles) {
    if (fs.existsSync(htmlPath)) {
      fs.unlinkSync(htmlPath);
    }
  }
  console.log('\nArquivos HTML removidos. Pasta contem apenas as imagens PNG.');
})();
