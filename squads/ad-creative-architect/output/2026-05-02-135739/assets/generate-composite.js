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
  D: path.join(ASSETS_DIR, 'protocolo-D-base.jpg'),
  E: path.join(ASSETS_DIR, 'protocolo-E-base.jpg'),
  F: path.join(ASSETS_DIR, 'protocolo-F-base.jpg'),
  G: path.join(ASSETS_DIR, 'protocolo-G-base.jpg'),
};

function toDataUri(imgPath) {
  if (!imgPath || !fs.existsSync(imgPath)) return null;
  const ext = path.extname(imgPath).toLowerCase().replace('.', '');
  const mime = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png' }[ext] || 'image/png';
  return `data:${mime};base64,${fs.readFileSync(imgPath).toString('base64')}`;
}

// 15 criativos — Bracelete de Cobre Apéx × O Buscador de Resultado [Visionário]
// CTA calibrado para Nível Morno: exploração, não conversão direta
// Tom 1 — Tribal Aspiracional | Creator/UGC: Tom 5 — Narrativo
const CREATIVES = [
  // --- Ângulo 2.1: Pertencimento pela Tribo ---
  {
    id: 'C1-pertencimento-angulo',
    protocol: 'A',
    headline: 'O DETALHE DE QUEM\nVIVE ISSO DE VERDADE',
    subtitle: 'Bracelete de Cobre Apéx — o elemento que quem é do meio reconhece de longe.',
    cta: 'VER O PRODUTO',
    ctaStyle: 'solid',
  },
  {
    id: 'C2-pertencimento-conceito',
    protocol: 'A',
    headline: 'CAMPO NA ESSÊNCIA.\nCOBRE NO PULSO.',
    subtitle: 'O Apéx. O detalhe que quem é do meio reconhece sem precisar de legenda.',
    cta: 'CONHECER A LINHA',
    ctaStyle: 'solid',
  },
  {
    id: 'C3-pertencimento-dsb',
    protocol: 'A',
    headline: 'O VISUAL TÁ QUASE PRONTO.\nFALTA O APÉX.',
    subtitle: 'O Apéx resolve isso. Sem forçar.',
    cta: 'VER O PRODUTO',
    ctaStyle: 'solid',
  },
  // Creator/UGC — Tom 5
  {
    id: 'C4-pertencimento-ugc',
    protocol: 'B',
    headline: '"Fui sem saber o que estava procurando.\nVoltei com o Apéx no pulso."',
    subtitle: 'Bracelete de Cobre Barns Western — o detalhe que você não sabia que precisava.',
    cta: 'vai lá e vê',
    ctaStyle: 'organic',
  },
  // DNA do Produto
  {
    id: 'C5-pertencimento-dna',
    protocol: 'C',
    headline: 'COBRE ARTESANAL.\nNÃO É BIJUTERIA.',
    subtitle: 'Bracelete Apéx — cobre com acabamento artesanal, peso real, design com referência cultural western genuína.',
    cta: 'VER DETALHES',
    ctaStyle: 'solid',
  },

  // --- Ângulo 1.1: Identificação pelo Olhar no Espelho ---
  {
    id: 'C6-espelho-angulo',
    protocol: 'D',
    headline: 'O VISUAL TÁ QUASE.\nVOCÊ SABE DISSO.',
    subtitle: 'O bracelete que fecha o conjunto sem precisar explicar.',
    cta: 'VER O PRODUTO',
    ctaStyle: 'solid',
  },
  {
    id: 'C7-espelho-conceito',
    protocol: 'D',
    headline: 'O CONJUNTO É A SOMA DAS PARTES\n— E UMA PARTE FALTA.',
    subtitle: 'O Apéx. O elemento que você não sabia que estava procurando.',
    cta: 'CONHECER O APÉX',
    ctaStyle: 'solid',
  },
  {
    id: 'C8-espelho-dsb',
    protocol: 'D',
    headline: 'CONJUNTO COUNTRY SEM O ELEMENTO\nQUE FECHA — SEMPRE VAI FALTAR ALGO.',
    subtitle: 'O Apéx resolve isso. Sem forçar.',
    cta: 'VER O PRODUTO',
    ctaStyle: 'solid',
  },
  // Creator/UGC — Tom 5
  {
    id: 'C9-espelho-ugc',
    protocol: 'E',
    headline: '"Ficava olhando pro espelho\nachando que faltava algo. Era o Apéx."',
    subtitle: 'Bracelete de Cobre Barns Western — o elemento que você não sabia que estava procurando.',
    cta: 'vai lá ver se é o teu também',
    ctaStyle: 'organic',
  },
  // DNA do Produto
  {
    id: 'C10-espelho-dna',
    protocol: 'C',
    headline: 'DESIGN FEITO PRA COMPLETAR.\nNÃO PRA GRITAR.',
    subtitle: 'Bracelete Apéx — proporção, acabamento e cobre que integram ao conjunto sem forçar.',
    cta: 'VER DETALHES',
    ctaStyle: 'solid',
  },

  // --- Ângulo 1.3: Confronto da Crença ---
  {
    id: 'C11-confronto-angulo',
    protocol: 'F',
    headline: 'VOCÊ NÃO VAI PARECER QUE TÁ FORÇANDO.\nVAI PARECER QUE É VOCÊ.',
    subtitle: 'O Apéx tem design que saiu da cultura, não de catálogo. Essa é a diferença.',
    cta: 'VER O PRODUTO',
    ctaStyle: 'solid',
  },
  {
    id: 'C12-confronto-conceito',
    protocol: 'F',
    headline: 'AUTÊNTICO NÃO É QUEM VOCÊ É.\nÉ DE ONDE VEM O QUE VOCÊ USA.',
    subtitle: 'O Apéx tem origem. Por isso não parece forçado.',
    cta: 'CONHECER A LINHA',
    ctaStyle: 'solid',
  },
  {
    id: 'C13-confronto-dsb',
    protocol: 'F',
    headline: 'A DOR: MEDO DE FORÇAR.\nA SOLUÇÃO: O PRODUTO CERTO.',
    subtitle: 'O Apéx. Cobre artesanal. Design que saiu da cultura. Encaixa sem gritar.',
    cta: 'VER O PRODUTO',
    ctaStyle: 'solid',
  },
  // Creator/UGC — Tom 5
  {
    id: 'C14-confronto-ugc',
    protocol: 'G',
    headline: '"Tinha medo de parecer que tava forçando.\nAté entender de onde vinha o Apéx."',
    subtitle: 'Bracelete de Cobre Barns Western — feito por quem vive isso, não pra quem quer parecer que vive.',
    cta: 'vai lá ver',
    ctaStyle: 'organic',
  },
  // DNA do Produto
  {
    id: 'C15-confronto-dna',
    protocol: 'C',
    headline: 'O QUE DIFERENCIA O APÉX\nDE UM ACESSÓRIO COUNTRY DE CATÁLOGO.',
    subtitle: 'Cobre artesanal. Design com referência cultural western genuína. Processo manual — não linha de fábrica genérica.',
    cta: 'VER DETALHES',
    ctaStyle: 'solid',
  },
];

// 4:5 principal + 9:16 para Creator/UGC
const UGC_IDS = ['C4-pertencimento-ugc', 'C9-espelho-ugc', 'C14-confronto-ugc'];

const FORMATS_STANDARD = [
  { suffix: '4x5', w: 1080, h: 1350 },
];
const FORMATS_UGC = [
  { suffix: '4x5', w: 1080, h: 1350 },
  { suffix: '9x16', w: 1080, h: 1920 },
];

function buildHtml(bgUri, logoUri, headline, subtitle, cta, ctaStyle, w, h) {
  const isUGC = ctaStyle === 'organic';
  const headlineHtml = headline.split('\n').map(l => `<span>${l}</span>`).join('<br>');
  const headlineSize = h >= 1920 ? '58px' : h >= 1350 ? '50px' : '44px';
  const subtitleSize = h >= 1920 ? '24px' : h >= 1350 ? '22px' : '19px';
  const ctaSizeStyle = isUGC
    ? (h >= 1350 ? '22px' : '18px')
    : (h >= 1920 ? '28px' : h >= 1350 ? '26px' : '22px');
  const padV = h >= 1920 ? '72px' : h >= 1350 ? '60px' : '52px';

  const ctaBlock = isUGC
    ? `<div class="cta-organic">${cta}</div>`
    : `<div class="cta-btn">${cta}</div>`;

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;600&family=Poppins:wght@400;500&display=swap" rel="stylesheet">
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
      rgba(0,0,0,0.10) 0%,
      rgba(0,0,0,0.04) 28%,
      rgba(0,0,0,0.52) 56%,
      rgba(0,0,0,0.92) 100%
    );
  }

  .ui {
    position: absolute; inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${padV} 64px 68px;
  }

  .logo img {
    height: 48px;
    width: auto;
    filter: drop-shadow(0 2px 8px rgba(0,0,0,0.7));
  }
  .logo-text {
    color: #FFBF1A;
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: 28px;
    letter-spacing: 8px;
    text-transform: uppercase;
    text-shadow: 0 2px 12px rgba(0,0,0,0.9);
  }

  .copy-area {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 940px;
  }

  .headline {
    color: #fff;
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: ${headlineSize};
    font-weight: 400;
    line-height: 1.10;
    letter-spacing: 1.5px;
    text-shadow: 0 2px 20px rgba(0,0,0,1);
  }

  .subtitle {
    color: rgba(255,255,255,0.88);
    font-family: 'Montserrat', Arial, sans-serif;
    font-size: ${subtitleSize};
    font-weight: 400;
    line-height: 1.45;
    text-shadow: 0 1px 10px rgba(0,0,0,0.95);
    max-width: 860px;
  }

  .cta-btn {
    display: inline-block;
    background: #FFBF1A;
    color: #000000;
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-size: ${ctaSizeStyle};
    font-weight: 400;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    padding: 16px 48px;
    border-radius: 4px;
    width: fit-content;
    box-shadow: 0 4px 24px rgba(0,0,0,0.55);
  }

  .cta-organic {
    display: inline-block;
    color: rgba(255,255,255,0.72);
    font-family: 'Poppins', Arial, sans-serif;
    font-size: ${ctaSizeStyle};
    font-weight: 400;
    letter-spacing: 0.3px;
    padding: 0;
    border-bottom: 1px solid rgba(255,255,255,0.35);
    width: fit-content;
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
      ${ctaBlock}
    </div>
  </div>
</body>
</html>`;
}

(async () => {
  console.log('Gerando criativos compostos — Bracelete de Cobre Apéx × O Buscador de Resultado [Visionário]');
  const totalCreatives = CREATIVES.length;
  const ugcCount = UGC_IDS.length;
  const total = (totalCreatives - ugcCount) * 1 + ugcCount * 2;
  console.log(`${totalCreatives} criativos × formatos (padrão 4:5 + UGC 4:5+9:16) = ${total} arquivos\n`);

  const logoUri = toDataUri(LOGO);
  console.log('Logo:', logoUri ? 'carregado' : 'não encontrado — usando texto fallback BARNS WESTERN em dourado');

  for (const [key, p] of Object.entries(PROTOCOLS)) {
    const exists = fs.existsSync(p);
    console.log(`Protocolo ${key} background:`, exists ? 'OK' : 'AUSENTE — usando fallback de cor escura');
  }
  console.log('');

  const browser = await chromium.launch();

  for (const c of CREATIVES) {
    const isUGC = UGC_IDS.includes(c.id);
    const formats = isUGC ? FORMATS_UGC : FORMATS_STANDARD;
    const bgUri = toDataUri(PROTOCOLS[c.protocol]);

    for (const fmt of formats) {
      const fileId = `${c.id}-${fmt.suffix}`;
      process.stdout.write(`[${fileId}] `);

      const html = buildHtml(bgUri, logoUri, c.headline, c.subtitle, c.cta, c.ctaStyle, fmt.w, fmt.h);
      const page = await browser.newPage();
      await page.setViewportSize({ width: fmt.w, height: fmt.h });
      await page.setContent(html, { waitUntil: 'networkidle' });
      await page.waitForTimeout(900);

      const outFile = path.join(ASSETS_DIR, `${fileId}.png`);
      await page.screenshot({ path: outFile, fullPage: false });
      console.log(`salvo → ${path.basename(outFile)}`);
      await page.close();
    }
  }

  await browser.close();
  console.log('\nConcluído.');
  const files = fs.readdirSync(ASSETS_DIR).filter(f => f.endsWith('.png'));
  console.log(`${files.length} arquivos PNG em: squads/ad-creative-architect/output/2026-05-02-135739/assets/`);
})();