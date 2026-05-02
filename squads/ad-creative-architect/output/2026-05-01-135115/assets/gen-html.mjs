#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const BASE = 'C:/Users/tarik/Desktop/Cloude';
const ASSETS = `${BASE}/squads/ad-creative-architect/output/2026-05-01-135115/assets`;
const HTTP = 'http://127.0.0.1:8891';
const ASSETS_URL = `${HTTP}/squads/ad-creative-architect/output/2026-05-01-135115/assets`;
const LOGO_URL = `${HTTP}/squads/barns-western-content/assets/brand/logo%20branco.png`;

// Feed standard: 1080x1350 (4:5) for all
const creatives = [
  {
    id: 'c1-angulo',
    width: 1080, height: 1350,
    bg: `${ASSETS_URL}/protocolo-A-feed-4x5.png`,
    headline: '‘COMPREI DESCONFIADO. CHEGOU EXATO.’',
    subtitle: 'O óculos que chegou igual à foto. E a troca que seria fácil se precisasse.',
    cta: 'CONHEÇA O HUNTER',
  },
  {
    id: 'c6-angulo',
    width: 1080, height: 1350,
    bg: `${ASSETS_URL}/protocolo-B-feed-4x5.png`,
    headline: '30 DIAS PRA DECIDIR. TROCA POR NOSSA CONTA.',
    subtitle: 'O Hunter chega, você usa, você decide. Sem complicação se mudar de ideia.',
    cta: 'EXPERIMENTAR AGORA',
  },
  {
    id: 'c11-angulo',
    width: 1080, height: 1350,
    bg: `${ASSETS_URL}/protocolo-C-gancho-4x5.png`,
    headline: 'AQUELE MOMENTO EM QUE VOCÊ ABRE A CAIXA E...',
    subtitle: 'O Hunter chega igual à foto. E tem 30 dias pra você confirmar.',
    cta: 'CONHEÇA O HUNTER',
  },
];

function makeHtml(c) {
  const headlineSize = c.headline.length > 35 ? '76px' : '90px';
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;600&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: ${c.width}px; height: ${c.height}px; overflow: hidden; background: #000; }
  .frame { width: ${c.width}px; height: ${c.height}px; position: relative; overflow: hidden; }
  .bg { width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; display: block; }
  .top-scrim {
    position: absolute; top: 0; left: 0; right: 0; height: 55%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.28) 40%, transparent 100%);
  }
  .bottom-scrim {
    position: absolute; bottom: 0; left: 0; right: 0; height: 30%;
    background: linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.50) 55%, transparent 100%);
  }
  .headline {
    position: absolute; top: 0; left: 0; right: 0;
    padding: 50px 54px 0;
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-weight: 400;
    color: #ffffff;
    font-size: ${headlineSize};
    line-height: 1.0;
    text-shadow: 2px 2px 0 rgba(0,0,0,0.85), 0 0 40px rgba(0,0,0,0.9);
  }
  .bottom-content {
    position: absolute; bottom: 0; left: 0; right: 0;
    padding: 0 54px 50px;
  }
  .subtitle {
    font-family: 'Montserrat', Arial, sans-serif;
    font-weight: 400;
    color: rgba(255,255,255,0.95);
    font-size: 30px;
    line-height: 1.45;
    margin-bottom: 22px;
    text-shadow: 1px 1px 6px rgba(0,0,0,0.9);
  }
  .cta-row { display: flex; align-items: center; justify-content: space-between; }
  .cta {
    font-family: 'Bebas Neue', Impact, sans-serif;
    font-weight: 400; font-size: 38px;
    background: #FFBF1A; color: #000000;
    padding: 12px 36px; letter-spacing: 2px;
    display: inline-block; line-height: 1;
  }
  .logo { height: 56px; }
</style>
</head>
<body>
<div class="frame">
  <img class="bg" src="${c.bg}" />
  <div class="top-scrim"></div>
  <div class="bottom-scrim"></div>
  <div class="headline">${c.headline}</div>
  <div class="bottom-content">
    <div class="subtitle">${c.subtitle}</div>
    <div class="cta-row">
      <div class="cta">${c.cta}</div>
      <img class="logo" src="${LOGO_URL}" />
    </div>
  </div>
</div>
</body>
</html>`;
}

for (const c of creatives) {
  const outPath = path.join(ASSETS.replace('C:/', 'C:\\').replace(/\//g, '\\'), `${c.id}.html`);
  fs.writeFileSync(outPath, makeHtml(c), 'utf8');
  console.log(`Written: ${c.id}.html`);
}

console.log('\nAll HTML files ready (1080x1350).');
