const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const ROOT = path.resolve(__dirname, '../../../../..');
const ASSETS = path.join(ROOT, 'squads', 'barns-western-content', 'assets');
const OUT = __dirname;

function toDataUri(imgPath) {
  if (!imgPath || !fs.existsSync(imgPath)) return null;
  const ext = path.extname(imgPath).toLowerCase().replace('.', '');
  const mime = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png' }[ext] || 'image/png';
  return `data:${mime};base64,${fs.readFileSync(imgPath).toString('base64')}`;
}

const LOGO = path.join(ASSETS, 'brand', 'logo branco.png');

// Product: Óculos Hunter (masculino UV400)
const HUNTER_BASE = path.join(ASSETS, 'products', 'Óculos', 'Óculos Masculino');
const PRODUCT = path.join(HUNTER_BASE, 'Óculos Hunter (3).png');

// Creatives data
const creatives = [
  {
    id: 'protocolo-A-feed-1x1',
    bg: path.join(OUT, 'protocolo-A-feed-1x1.png'),
    w: 1080, h: 1080,
    gancho: 'Chapéu? Certeiro. Bota? No ponto. Camisa? Fechou.\nVocê monta o look inteiro, olha a foto depois e...\nainda estava faltando algo.',
    cta: 'Comprar agora',
    layout: 'feed'
  },
  {
    id: 'protocolo-A-reels-9x16',
    bg: path.join(OUT, 'protocolo-A-reels-9x16.png'),
    w: 1080, h: 1920,
    gancho: 'Sabe aquela sensação de montar\no visual country todo e na foto\nainda parecer que faltou uma peça?',
    cta: 'Ver modelos — link na bio',
    layout: 'reels'
  },
  {
    id: 'protocolo-B-feed-1x1',
    bg: path.join(OUT, 'protocolo-B-feed-1x1.png'),
    w: 1080, h: 1080,
    gancho: 'Chapéu ✓  Bota ✓  Camisa ✓\nÓculos ___',
    cta: 'Ver Coleção',
    layout: 'feed'
  },
  {
    id: 'protocolo-B-reels-9x16',
    bg: path.join(OUT, 'protocolo-B-reels-9x16.png'),
    w: 1080, h: 1920,
    gancho: 'Chapéu ✓\nBota ✓\nCamisa ✓\nÓculos ___',
    cta: 'Fechar o checklist — link na bio',
    layout: 'reels'
  },
  {
    id: 'protocolo-C-feed-1x1',
    bg: path.join(OUT, 'protocolo-C-feed-1x1.png'),
    w: 1080, h: 1080,
    gancho: 'Você vai em rodeio todo mês e\nainda não fez essa conta.\nVai mudar como você pensa em óculos.',
    cta: 'Saiba Mais',
    layout: 'feed'
  },
  {
    id: 'protocolo-C-reels-9x16',
    bg: path.join(OUT, 'protocolo-C-reels-9x16.png'),
    w: 1080, h: 1920,
    gancho: 'Cento e sessenta reais num óculos.\nParece caro?\nEspera eu te mostrar a conta.',
    cta: 'Ver modelos — link na bio',
    layout: 'reels'
  }
];

function buildFeedHtml(bgUri, productUri, logoUri, gancho, cta) {
  const ganchoHtml = gancho.split('\n').map(l => `<span>${l}</span>`).join('<br>');
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 1080px; height: 1080px; overflow: hidden; font-family: 'Georgia', serif; }

  .bg {
    position: absolute; inset: 0;
    background: ${bgUri ? `url('${bgUri}')` : '#1a0f07'} center/cover no-repeat;
  }

  /* scrim gradient: transparent top, dark bottom */
  .scrim {
    position: absolute; inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0,0,0,0.15) 0%,
      rgba(0,0,0,0.05) 35%,
      rgba(0,0,0,0.55) 65%,
      rgba(0,0,0,0.85) 100%
    );
  }

  .ui {
    position: absolute; inset: 0;
    display: flex; flex-direction: column;
    justify-content: space-between;
    padding: 52px 60px 64px;
  }

  /* Logo top-left */
  .logo img { height: 52px; width: auto; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.6)); }
  .logo-text {
    color: #fff; font-size: 28px; font-weight: 900;
    letter-spacing: 6px; text-transform: uppercase;
    text-shadow: 0 2px 12px rgba(0,0,0,0.8);
  }

  /* Product: bottom-right corner */
  .product-wrap {
    position: absolute;
    bottom: 160px; right: 56px;
    width: 320px;
    filter: drop-shadow(0 8px 24px rgba(0,0,0,0.7));
  }
  .product-wrap img { width: 100%; height: auto; }

  /* Bottom copy area */
  .copy-area {
    display: flex; flex-direction: column; gap: 24px;
    max-width: 660px;
  }

  .gancho {
    color: #fff;
    font-size: 40px;
    font-weight: 700;
    line-height: 1.25;
    text-shadow: 0 2px 16px rgba(0,0,0,0.9);
    letter-spacing: -0.3px;
  }

  .cta-btn {
    display: inline-block;
    background: #c8962a;
    color: #fff;
    font-size: 26px;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 18px 40px;
    border-radius: 6px;
    width: fit-content;
    text-shadow: none;
    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
  }

  /* UV badge */
  .uv-badge {
    position: absolute;
    top: 52px; right: 60px;
    background: rgba(255,255,255,0.12);
    border: 1.5px solid rgba(255,255,255,0.35);
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 2px;
    padding: 8px 18px;
    border-radius: 4px;
    backdrop-filter: blur(4px);
  }
</style>
</head>
<body>
  <div class="bg"></div>
  <div class="scrim"></div>

  <div class="ui">
    <div class="logo">
      ${logoUri ? `<img src="${logoUri}" alt="Barns Western">` : '<div class="logo-text">BARNS WESTERN</div>'}
    </div>
    <div class="copy-area">
      <div class="gancho">${ganchoHtml}</div>
      <div class="cta-btn">${cta}</div>
    </div>
  </div>

  ${productUri ? `
  <div class="product-wrap">
    <img src="${productUri}" alt="Óculos Hunter UV400">
  </div>` : ''}

  <div class="uv-badge">UV400</div>
</body>
</html>`;
}

function buildReelsHtml(bgUri, productUri, logoUri, gancho, cta) {
  const ganchoHtml = gancho.split('\n').map(l => `<span>${l}</span>`).join('<br>');
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 1080px; height: 1920px; overflow: hidden; font-family: 'Georgia', serif; }

  .bg {
    position: absolute; inset: 0;
    background: ${bgUri ? `url('${bgUri}')` : '#1a0f07'} center/cover no-repeat;
  }

  .scrim {
    position: absolute; inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0,0,0,0.75) 0%,
      rgba(0,0,0,0.1) 30%,
      rgba(0,0,0,0.1) 55%,
      rgba(0,0,0,0.80) 100%
    );
  }

  .ui {
    position: absolute; inset: 0;
    display: flex; flex-direction: column;
    justify-content: space-between;
    padding: 80px 72px 96px;
  }

  /* Top area: logo + gancho */
  .top-area {
    display: flex; flex-direction: column; gap: 36px;
  }

  .logo img { height: 60px; width: auto; filter: drop-shadow(0 2px 10px rgba(0,0,0,0.7)); }
  .logo-text {
    color: #fff; font-size: 32px; font-weight: 900;
    letter-spacing: 6px; text-transform: uppercase;
    text-shadow: 0 2px 12px rgba(0,0,0,0.8);
  }

  .gancho {
    color: #fff;
    font-size: 56px;
    font-weight: 700;
    line-height: 1.2;
    text-shadow: 0 2px 20px rgba(0,0,0,0.95);
    letter-spacing: -0.5px;
  }

  /* Product: centered in vertical space */
  .product-wrap {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 480px;
    filter: drop-shadow(0 12px 40px rgba(0,0,0,0.75));
  }
  .product-wrap img { width: 100%; height: auto; }

  /* Bottom: CTA */
  .cta-btn {
    display: inline-block;
    background: #c8962a;
    color: #fff;
    font-size: 34px;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 24px 56px;
    border-radius: 8px;
    width: fit-content;
    box-shadow: 0 6px 24px rgba(0,0,0,0.6);
    align-self: flex-start;
  }

  /* UV badge top-right */
  .uv-badge {
    position: absolute;
    top: 80px; right: 72px;
    background: rgba(255,255,255,0.12);
    border: 1.5px solid rgba(255,255,255,0.4);
    color: #fff;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 2px;
    padding: 10px 22px;
    border-radius: 4px;
    backdrop-filter: blur(4px);
  }
</style>
</head>
<body>
  <div class="bg"></div>
  <div class="scrim"></div>

  <div class="ui">
    <div class="top-area">
      <div class="logo">
        ${logoUri ? `<img src="${logoUri}" alt="Barns Western">` : '<div class="logo-text">BARNS WESTERN</div>'}
      </div>
      <div class="gancho">${ganchoHtml}</div>
    </div>
    <div class="cta-btn">${cta}</div>
  </div>

  ${productUri ? `
  <div class="product-wrap">
    <img src="${productUri}" alt="Óculos Hunter UV400">
  </div>` : ''}

  <div class="uv-badge">UV400</div>
</body>
</html>`;
}

(async () => {
  console.log('Gerando criativos compostos (background IA + produto real + copy)\n');

  const logoUri = toDataUri(LOGO);
  const productUri = toDataUri(PRODUCT);

  if (!productUri) {
    console.error('ERRO: Imagem do produto não encontrada em:', PRODUCT);
    process.exit(1);
  }

  console.log('Produto:', PRODUCT.split(path.sep).pop());
  console.log('Logo:', logoUri ? 'OK' : 'não encontrado — usando texto fallback');
  console.log('');

  const browser = await chromium.launch();

  for (const c of creatives) {
    console.log(`[${c.id}]`);

    const bgUri = toDataUri(c.bg);
    if (!bgUri) {
      console.log('  AVISO: background não encontrado, usando cor sólida');
    }

    const html = c.layout === 'feed'
      ? buildFeedHtml(bgUri, productUri, logoUri, c.gancho, c.cta)
      : buildReelsHtml(bgUri, productUri, logoUri, c.gancho, c.cta);

    const page = await browser.newPage();
    await page.setViewportSize({ width: c.w, height: c.h });
    await page.setContent(html, { waitUntil: 'networkidle' });
    await page.waitForTimeout(800);

    const outFile = path.join(OUT, `${c.id}-v2.png`);
    await page.screenshot({ path: outFile, fullPage: false });
    console.log(`  Salvo: ${c.id}-v2.png`);
    await page.close();
  }

  await browser.close();

  console.log('\nConcluído. 6 criativos compostos em:');
  console.log('squads/ad-creative-architect/output/2026-04-30-181601/assets/');
})();
