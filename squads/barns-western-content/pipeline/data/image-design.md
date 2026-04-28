# Padrões Técnicos de Produção Visual — Barns Western Content
# Última atualização: 2026-04-27 (Run #003)

Padrões validados em produção para geração de slides HTML → PNG via Playwright.
Todos os agentes que produzem especificações visuais devem seguir estas regras.

---

## Formatos de Saída

| Formato | Dimensões | Uso |
|---------|-----------|-----|
| Feed editorial | 1080 × 1080 px | Post principal do Instagram Feed |
| Stories | 1080 × 1920 px | Sequência de Stories (3–7 frames) |

---

## Logo da Marca

- Arquivo: `assets/brand/Logo branco.png`
- Tamanho de injeção no generate.js: **`height: 130px` mínimo** (nunca abaixo disso)
- Posição segura em **Stories**: `bottom: 380px` mínimo
  - Instagram cobre os ~300px inferiores com a UI de resposta/comentários
  - Nunca posicionar em `bottom < 300px` em Stories
- Posição em **Feed**: `top: 44px; right: 52px` (canto superior direito)
- Injeção via generate.js: `el.innerHTML = '<img src="${logoUri}" style="height:130px;width:auto;">'`

---

## Tipografia — Tamanhos Mínimos

### Stories (1080 × 1920)

| Elemento | Fonte | Tamanho mínimo | Weight |
|----------|-------|----------------|--------|
| Headline principal | Bebas Neue | **136px** | — |
| Subtítulo destaque | Bebas Neue | **72px** | — |
| Body / corpo | Montserrat | **44px** | 500 |
| CTA / texto auxiliar | Montserrat | **30px** | 500 |
| Opções de enquete (poll) | Bebas Neue | **60px** | — |

### Feed (1080 × 1080)

| Elemento | Fonte | Tamanho mínimo | Weight |
|----------|-------|----------------|--------|
| Headline principal | Bebas Neue | **156px** | — |
| Subtítulo destaque | Bebas Neue | **56px** | — |

---

## Regras de Contraste de Texto

### Cor do texto por tipo de fundo

| Tipo de fundo | Headline | Destaque/Subtítulo | Corpo |
|---------------|----------|--------------------|-------|
| Escuro (#000 ou tons muito escuros) | #FFFFFF ou #FFBF1A | #FFBF1A | rgba(255,255,255,0.88) |
| Quente / dourado / laranja (campo, sunset, celeiro) | **#FFFFFF obrigatório** | **#FFFFFF** | rgba(255,255,255,0.95) |
| Imagem com influencer (escurecida por gradiente) | #FFFFFF | #FFBF1A | rgba(255,255,255,0.88) |

**Regra crítica**: `#FFBF1A` (ouro) nunca sobre fundos quentes/amarelados — resulta em texto ilegível.

### Text-shadow para fundos complexos

Usar esta fórmula quando o fundo for imagem IA, foto de paisagem ou qualquer background não-sólido:

```css
/* Headlines */
text-shadow: 2px 2px 0 rgba(0,0,0,0.85), 0 0 40px rgba(0,0,0,0.9);

/* Body text */
text-shadow: 1px 1px 6px rgba(0,0,0,0.9);

/* CTA / texto pequeno */
text-shadow: 1px 1px 4px rgba(0,0,0,0.9);
```

### Scrim de contraste (.text-zone)

Sempre adicionar quando usar imagem IA de tons quentes (campo, pôr do sol, celeiro):

```css
/* Para conteúdo na metade inferior do frame */
.text-zone {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 68%;
  background: linear-gradient(to bottom,
    rgba(0,0,0,0.0) 0%,
    rgba(0,0,0,0.55) 22%,
    rgba(0,0,0,0.72) 55%,
    rgba(0,0,0,0.78) 100%
  );
  z-index: 4;
}

/* Para conteúdo centralizado verticamente */
.text-zone {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom,
    rgba(0,0,0,0.25) 0%,
    rgba(0,0,0,0.55) 30%,
    rgba(0,0,0,0.6) 55%,
    rgba(0,0,0,0.45) 75%,
    rgba(0,0,0,0.2) 100%
  );
  z-index: 4;
}
```

---

## Geração de Imagens com IA

### Quando usar IA vs. foto real

| Situação | Fonte da imagem |
|----------|-----------------|
| Post com produto específico — frame do produto | Foto real de `assets/products/` |
| Post com produto — frame de influencer | Foto real de `assets/influencers/` |
| Post manifesto / STATUS (sem produto) — frames atmosféricos | IA (OpenRouter Nano Banana) |
| Post com produto — frames de contexto/paisagem | IA (OpenRouter Nano Banana) |
| Frames com influencer em qualquer post | Sempre foto real — nunca substituir por IA |

### Configuração OpenRouter

- **Modelo**: `google/gemini-2.5-flash-image` (apelido OpenRouter: "Nano Banana")
- **Endpoint**: `https://openrouter.ai/api/v1/chat/completions`
- **API key**: `OPENROUTER_API_KEY` em `c:\Users\tarik\Desktop\Cloude\.env`
- **Formato da resposta**: `data.choices[0].message.images[0].image_url.url` (data URI base64 PNG)
- **Headers obrigatórios**: `Authorization: Bearer {key}`, `HTTP-Referer: https://barnswestern.com.br`

### Estrutura da chamada (generate.js)

```javascript
body: JSON.stringify({
  model: 'google/gemini-2.5-flash-image',
  messages: [{ role: 'user', content: prompt }],
  modalities: ['image']
})
```

### Prompts por tipo de cena (validados em produção)

**Campo ao entardecer (frame manifesto de raiz/campo):**
```
Cinematic vertical photo of Brazilian cerrado countryside at golden hour, dry golden grass field,
dramatic sunset sky with deep amber and orange tones, glowing horizon line, lone dark tree silhouette
in distance, moody atmospheric photography, dark vignette edges, western rural aesthetic, no people,
no text, no watermark, 9:16 aspect ratio
```

**Interior de celeiro (frame origem da marca / storytelling):**
```
Cinematic vertical photo inside old rustic wooden barn, dramatic light rays piercing through wooden
plank gaps, warm golden dust particles floating in dark air, chiaroscuro lighting, deep shadows with
amber warm tones, western rustic atmosphere, no people, no text, no watermark, 9:16 aspect ratio
```

**Estrada ao horizonte (frame CTA / visão de futuro):**
```
Cinematic vertical photo of empty dirt road stretching to horizon, dramatic dusk sky, deep orange
amber glow on horizon line, dark foreground silhouette, wide open sertão landscape, moody western
atmosphere, dark tones, no people, no text, no watermark, 9:16 aspect ratio
```

---

## Composição de Frames com Influencer

```css
#bg-image {
  background-size: 155%;        /* ou 160% — zoom que mostra rosto/torso */
  background-position: 58% 58%; /* ajustar para reduzir céu vazio */
  background-repeat: no-repeat;
}
```

Princípio: o influencer deve ocupar a maior parte do frame. Ajustar `background-position` para centralizar no rosto/torso, minimizando fundo/céu vazio.

---

## Textos e Elementos Proibidos em Slides

Nunca usar nos frames:

- `"Postamos algo diferente hoje."` — genérico, não pertence à voz Barns
- `"Ver post completo no feed"` / `"↓ Ver post completo no feed"` — não acrescenta nada
- Qualquer variante de "swipe para ver mais" como única mensagem de um frame
- `"[ adicione a enquete nativa do Instagram ]"` ou qualquer instrução de sticker interativo — a Barns não utiliza enquetes ou elementos interativos nos Stories
- Anglicismos em produtos masculinos/unissex: "look", "souvenir", "style" — usar equivalentes em português

## Emojis — Regra Definitiva

**Emojis são proibidos dentro de frames HTML.** Não renderizam bem via Playwright e não combinam com o visual premium da marca Barns Western.

- **Proibido**: `🤠`, `👇`, `☀️`, `🎖️` ou qualquer emoji dentro de arquivos `.html`
- **Permitido**: emojis apenas nas legendas de texto do Instagram (caption), nunca nas imagens
- Esta regra se aplica a todos os formatos: Feed slides, Stories frames, qualquer HTML renderizado via Playwright

---

## generate.js — Referência de Template

O arquivo `output/2026-04-28-run004/slides/generate.js` é o template validado.
Copiar e adaptar em cada run. Pontos de atenção:

1. Logo: `height: 130px` no `el.innerHTML`
2. Ler `OPENROUTER_API_KEY` do `.env` no root (5 níveis acima de `slides/`)
3. Para frames com imagem IA: `bg: null, prompt: '...'`
4. Para frames com foto real: `bg: IMG_PATH, prompt: null`
5. Injeção de imagem IA em CSS-only frames: usar `document.body.style.backgroundImage` + ocultar divs decorativos
6. **Limpeza obrigatória ao final**: deletar todos os `.html` após gerar os PNGs — a pasta `slides/` deve conter apenas imagens PNG

```javascript
// Ao final do loop de geração, após browser.close():
const htmlFiles = files.map(f => path.join(__dirname, f.file));
for (const htmlPath of htmlFiles) {
  if (fs.existsSync(htmlPath)) fs.unlinkSync(htmlPath);
}
console.log('🗑  Arquivos HTML removidos. Pasta contém apenas as imagens PNG.');
```
