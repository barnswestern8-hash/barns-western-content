const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const ROOT = path.resolve(__dirname, '../../../../..');
const ASSETS_DIR = __dirname;
const BRAND = path.join(ROOT, 'squads', 'barns-western-content', 'assets', 'brand');
const LOGO = path.join(BRAND, 'logo branco.png');

const PROTOCOLS = {
  A: path.join(ASSETS_DIR, 'protocolo-A-base.jpg'),
  B: path.join(ASSETS_DIR, 'protocolo-B-base.jpg'),
  C: path.join(ASSETS_DIR, 'protocolo-C-base.jpg'),
};

function toDataUri(imgPath) {
  if (!imgPath || !fs.existsSync(imgPath)) return null;
  const ext = path.extname(imgPath).toLowerCase().replace('.', '');
  const mime = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png' }[ext] || 'image/png';
  return `data:${mime};base64,${fs.readFileSync(imgPath).toString('base64')}`;
}

// 9 criativos — Bracelete de Cobre × O Buscador de Resultado [Visionário]
// CTA calibrado para Nível Morno: exploração, não conversão direta
const CREATIVES = [
  {
    id: 'C1-checklist-angulo',
    protocol: 'A',
    headline: 'CHAPÉU ✓ — BOTA ✓\nCAMISA ✓ — PULSO ___',
    subtitle: 'O detalhe que fecha o look que já é seu.',
    cta: 'CONHEÇA O BRACELETE',
  },
  {
    id: 'C2-checklist-conceito',
    protocol: 'A',
    headline: 'O VISUAL JÁ ERA SEU.\nFALTAVA ISSO.',
    subtitle: 'O detalhe que transforma quase em completamente.',
    cta: 'VER O BRACELETE',
  },
  {
    id: 'C3-checklist-dsb',
    protocol: 'A',
    headline: 'O PULSO VAZIO\nQUANDO O RESTO ESTÁ CERTO.',
    subtitle: 'O bracelete de cobre que fecha o visual que já é seu.',
    cta: 'VER O PRODUTO',
  },
  {
    id: 'C4-confronto-angulo',
    protocol: 'B',
    headline: 'OS ACESSÓRIOS COUNTRY\nFORAM FEITOS PRA QUEM VISITA.',
    subtitle: 'O bracelete feito pra quem vive esse universo, não pra quem quer parecer.',
    cta: 'CONHECER A BARNS',
  },
  {
    id: 'C5-confronto-conceito',
    protocol: 'B',
    headline: 'O COUNTRY DE CATÁLOGO.\nE O COUNTRY DE RAIZ.',
    subtitle: 'Barns Western. Nasceu no campo. Chegou até você.',
    cta: 'CONHEÇA A ORIGEM',
  },
  {
    id: 'C6-confronto-dsb',
    protocol: 'B',
    headline: 'TENTOU ACESSÓRIO COUNTRY.\nFICOU PARECENDO FESTA JUNINA.',
    subtitle: 'Bracelete de cobre com design de referência real — não de catálogo.',
    cta: 'VER O PRODUTO',
  },
  {
    id: 'C7-pertencimento-angulo',
    protocol: 'C',
    headline: 'TEM QUEM USA PRA PARECER.\nE TEM QUEM USA PORQUE É.',
    subtitle: 'Barns Western. Pra quem não precisa explicar.',
    cta: 'VER O BRACELETE',
  },
  {
    id: 'C8-pertencimento-conceito',
    protocol: 'C',
    headline: 'O QUE VOCÊ PORTA FALA\nANTES DE VOCÊ ABRIR A BOCA.',
    subtitle: 'Um detalhe que diz tudo — sem dizer nada.',
    cta: 'VER O DETALHE',
  },
  {
    id: 'C9-pertencimento-dsb',
    protocol: 'C',
    headline: 'APARECER NO RODEIO E\nPARECER QUE SE FANTASIOU?',
    subtitle: 'O bracelete de cobre que fecha o look com identidade — não com fantasia.',
    cta: 'CONHECER A BARNS',
  },
];

const FORMATS = [
  { suffix: '4x5', w: 1080, h: 1350 },
  { suffix: '1x1', w: 1080, h: 1080 },
];

function buildHtml(bgUri, logoUri, headline, subtitle, cta, w, h) {
  const headlineHtml = headline.split('\n').map(l => `<span>${l}</span>`).join('<br>');
  const headlineSize = h === 1350 ? '54px' : '48px';
  const subtitleSize = h === 1350 ? '23px' : '20px';
  const ctaSize = h === 1350 ? '28px' : '24px';
  const padV = h === 1350 ? '60px' : '52px';

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;600&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: ${w}px; height: ${h}px; overflow: hidden; }

  .bg {
    position: absolute; inset: 0;
    background: ${bgUri ? `url('${bgUri}')` : '#1a0a00'} center/cover no-repeat;
  }

  .scrim {
    position: absolute; inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0,0,0,0.08) 0%,
      rgba(0,0,0,0.04) 30%,
      rgba(0,0,0,0.50) 58%,
      rgba(0,0,0,0.90) 100%
    );
  }

  .ui {
    position: absolute; inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${padV} 60px 64px;
  }

  .logo img {
    height: 48px;
    width: auto;
    filter: drop-shadow(0 2px 8px rgba(0,0,0,0.7));
  }
  .logo-text {
    color: #fff;
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 26px;
    letter-spacing: 7px;
    text-transform: uppercase;
    text-shadow: 0 2px 12px rgba(0,0,0,0.8);
  }

  .copy-area {
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-width: 920px;
  }

  .headline {
    color: #fff;
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: ${headlineSize};
    font-weight: 400;
    line-height: 1.12;
    letter-spacing: 1.5px;
    text-shadow: 0 2px 20px rgba(0,0,0,1);
  }

  .subtitle {
    color: rgba(255,255,255,0.85);
    font-family: 'Montserrat', Arial, sans-serif;
    font-size: ${subtitleSize};
    font-weight: 400;
    line-height: 1.45;
    text-shadow: 0 1px 10px rgba(0,0,0,0.95);
    max-width: 820px;
  }

  .cta-btn {
    display: inline-block;
    background: #FFBF1A;
    color: #000000;
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: ${ctaSize};
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 16px 44px;
    border-radius: 4px;
    width: fit-content;
    box-shadow: 0 4px 24px rgba(0,0,0,0.6);
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
      <div class="headline">${headlineHtml}</div>
      <div class="subtitle">${subtitle}</div>
      <div class="cta-btn">${cta}</div>
    </div>
  </div>
</body>
</html>`;
}

(async () => {
  console.log('Gerando criativos compostos — Bracelete de Cobre × Visionário');
  console.log(`9 criativos × 2 formatos = 18 arquivos\n`);

  const logoUri = toDataUri(LOGO);
  console.log('Logo:', logoUri ? 'carregado' : 'não encontrado — usando texto fallback');

  for (const p of Object.keys(PROTOCOLS)) {
    const exists = fs.existsSync(PROTOCOLS[p]);
    console.log(`Protocolo ${p} background:`, exists ? 'OK' : 'AUSENTE — usando fallback de cor');
  }
  console.log('');

  const browser = await chromium.launch();

  for (const c of CREATIVES) {
    const bgUri = toDataUri(PROTOCOLS[c.protocol]);

    for (const fmt of FORMATS) {
      const id = `${c.id}-${fmt.suffix}`;
      process.stdout.write(`[${id}] `);

      const html = buildHtml(bgUri, logoUri, c.headline, c.subtitle, c.cta, fmt.w, fmt.h);
      const page = await browser.newPage();
      await page.setViewportSize({ width: fmt.w, height: fmt.h });
      await page.setContent(html, { waitUntil: 'networkidle' });
      await page.waitForTimeout(800);

      const outFile = path.join(ASSETS_DIR, `${id}.png`);
      await page.screenshot({ path: outFile, fullPage: false });
      console.log(`salvo`);
      await page.close();
    }
  }

  await browser.close();
  console.log('\nConcluído.');
  console.log('Arquivos em: squads/ad-creative-architect/output/2026-05-01-175223/assets/');
})();
