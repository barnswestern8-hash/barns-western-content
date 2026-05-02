const fs = require('fs');
const path = require('path');

// Load API key from .env
const envPath = path.join(__dirname, '..', '..', '..', '..', '..', '.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const apiKey = envContent.match(/OPENROUTER_API_KEY=(.+)/)?.[1]?.trim();
if (!apiKey) { console.error('OPENROUTER_API_KEY not found'); process.exit(1); }

const images = [
  {
    file: 'protocolo-A-feed-1x1.png',
    label: 'Protocolo A — A Peça Que Faltava | Feed 1:1',
    prompt: 'Brazilian country western man, 28-35 years old, medium athletic build, 3-day stubble beard, wearing brown felt cowboy hat, beige flannel textured shirt, dark wash jeans, worn brown leather boots, Barns Western UV400 sunglasses on face integrated into the look, standing by rustic wooden fence on rural Brazilian farmland, golden hour late afternoon 5:30pm, soft natural warm sidelight from right at 45°, warm 4200K amber light, relaxed confident expression looking slightly to the horizon, waist-up American crop, shallow depth of field f/2.0 soft bokeh background with dried golden grass and wooden fence, earthy color palette caramel brown hat olive flannel amber sunlight dark denim, editorial country lifestyle photography, Wrangler campaign aesthetic, authentic rural sertanejo atmosphere, photorealistic, hyperrealistic detail, professional photography, square 1:1 format'
  },
  {
    file: 'protocolo-A-reels-9x16.png',
    label: 'Protocolo A — A Peça Que Faltava | Reels 9:16',
    prompt: 'Brazilian country western man, 28-35 years old, medium athletic build, 3-day stubble beard, wearing brown felt cowboy hat, beige flannel shirt, dark jeans, worn leather boots, Barns Western UV400 sunglasses on face, full body to knee shot at rural rodeo arena or wooden fence setting, golden hour afternoon warm light, soft natural sidelight, confident relaxed stance looking slightly off-camera, centered vertical composition with open negative space at top 30% for text overlay, shallow depth of field bokeh background with arena gates or fence, earthy warm color palette caramel olive amber, authentic Brazilian sertanejo country lifestyle photography, editorial style, photorealistic, vertical 9:16 format'
  },
  {
    file: 'protocolo-B-feed-1x1.png',
    label: 'Protocolo B — De Quase Lá Para Chegou | Feed 1:1',
    prompt: 'Brazilian country western man, 28-35 years old, putting on Barns Western UV400 sunglasses, moment of completion gesture hand bringing glasses to face, brown felt hat, beige flannel shirt, dark jeans, worn leather boots, at rodeo arena backstage or open rural field, golden hour late afternoon with warm rim light from behind creating amber halo on hat and shoulders, soft fill light from front, medium shot waist up, hands and face in frame, f/1.8 shallow depth of field arena gates or fence bokeh background, earthy dramatic warm palette caramel amber dark brown with golden rim light, editorial event country photography, authentic Brazilian sertanejo rodeo atmosphere, photorealistic, cinematic feel, square 1:1 format'
  },
  {
    file: 'protocolo-B-reels-9x16.png',
    label: 'Protocolo B — De Quase Lá Para Chegou | Reels 9:16',
    prompt: 'Brazilian country western man, 28-35 years, just placed Barns Western UV400 sunglasses on face, confident settled expression, brown felt hat, flannel shirt, jeans, leather boots, standing at rodeo arena entrance with arena lights in background, golden hour warm rim light backlit silhouette effect, amber and caramel tones, centered vertical composition, space at top for text overlay checklist graphic, medium to full body shot, shallow bokeh background of arena or field, photorealistic editorial country lifestyle photography, transformation moment visual storytelling, vertical 9:16 format'
  },
  {
    file: 'protocolo-C-feed-1x1.png',
    label: 'Protocolo C — O Custo Por Uso | Feed 1:1',
    prompt: 'Brazilian country western man, 28-35 years old, wearing Barns Western UV400 sunglasses, brown felt cowboy hat, beige flannel shirt, dark jeans, worn leather boots, looking directly at camera with calm confident expression, at Brazilian country rodeo event or open field with clear afternoon sky, midday to afternoon sun 3-5pm, clean clear natural light from front-left at 20 degree angle, temperature 5200K neutral daylight, waist-up shot centered in frame, sunglasses clearly visible on face product shot, moderate depth of field f/3.5 bokeh background with crowd or arena faintly visible, neutral warm color palette blue sky caramel brown clear daylight, editorial lifestyle product photography, authentic and direct gaze, photorealistic, square 1:1 format'
  },
  {
    file: 'protocolo-C-reels-9x16.png',
    label: 'Protocolo C — O Custo Por Uso | Reels 9:16',
    prompt: 'Brazilian country western man, 28-35 years old, Barns Western UV400 sunglasses clearly visible on face, brown felt hat, flannel shirt, jeans, boots, direct eye contact with camera confident calm expression, at outdoor country event or rodeo arena, afternoon clear daylight 4pm, front-left natural light clean and even, chest-to-head vertical crop centered composition, open space top 25% for text overlay, background of arena or event slightly blurred f/3.5, warm neutral daylight palette, talking directly to viewer energy, authentic Brazilian sertanejo event context, photorealistic editorial photography, vertical 9:16 format'
  }
];

async function generateImage(item, index) {
  console.log(`\n[${index + 1}/6] Gerando: ${item.label}`);

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://barnswestern.com.br'
    },
    body: JSON.stringify({
      model: 'google/gemini-2.5-flash-image',
      messages: [{ role: 'user', content: item.prompt }],
      modalities: ['image']
    })
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`API error ${response.status}: ${err}`);
  }

  const data = await response.json();
  const imageUrl = data?.choices?.[0]?.message?.images?.[0]?.image_url?.url;

  if (!imageUrl) {
    console.log('  Resposta completa:', JSON.stringify(data, null, 2));
    throw new Error('Image URL not found in response');
  }

  // Decode base64 and save
  const base64 = imageUrl.replace(/^data:image\/\w+;base64,/, '');
  const buffer = Buffer.from(base64, 'base64');
  const outPath = path.join(__dirname, item.file);
  fs.writeFileSync(outPath, buffer);
  console.log(`  Salvo: ${item.file} (${(buffer.length / 1024).toFixed(0)}KB)`);
}

(async () => {
  console.log('Nano Banana — Gerando 6 imagens para Ad Creative Architect');
  console.log('Modelo: google/gemini-2.5-flash-preview-05-20 via OpenRouter\n');

  for (let i = 0; i < images.length; i++) {
    try {
      await generateImage(images[i], i);
      if (i < images.length - 1) {
        console.log('  Aguardando 3s...');
        await new Promise(r => setTimeout(r, 3000));
      }
    } catch (err) {
      console.error(`  ERRO em ${images[i].file}:`, err.message);
    }
  }

  console.log('\nConcluído. Imagens salvas em:');
  console.log('squads/ad-creative-architect/output/2026-04-30-181601/assets/');
})();
