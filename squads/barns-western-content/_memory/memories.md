# Squad Memory: Barns Western Content

## Estilo de Escrita

- Ângulo ORIGEM/HOMENAGEM funciona bem para produtos com nome ligado a esporte ou cultura: conecta o produto a uma história antes de apresentá-lo. Usar quando o nome do produto tiver referência cultural específica.
- "Conheça o [nome do produto]" como slide de apresentação de produto (padrão Tecovas) foi validado pela Vera — manter como padrão.
- Slide cover "O ROPER NASCEU NO LAÇO." (5 palavras, caixa alta) — modelo de cover para ângulos de lançamento com storytelling de origem.

## Design Visual

- Imagens dos produtos: usar URL direta do CDN da Barns nos HTMLs (ex: `https://barnswestern.com.br/cdn/shop/files/...`). Playwright carrega a URL remota no momento do screenshot — não é necessário baixar arquivos localmente.
- Para obter as URLs das imagens de um produto, fazer WebFetch na página do produto (ex: barnswestern.com.br/products/oculos-roper) e extrair os links .webp/.jpg do CDN.
- Pasta assets/products/ não deve mais ser usada. Não criar nem referenciar arquivos locais de imagem.

## Estrutura de Conteúdo

- Slide de produto (Slide 5 no formato Editorial Origem) tende a ter menos palavras que os demais — verificar contagem e expandir para atingir mínimo de 40 palavras em runs futuros.
- Stories com 2 elementos interativos (Poll + Emoji Slider) teve score 10/10 em elemento interativo — manter padrão de 2 elementos quando viável.

## Proibições Explícitas

- Não usar em-dashes — usar dois-pontos ou ponto conforme tone-of-voice.md.
- Não inserir emojis dentro de HTMLs/imagens renderizadas — emojis não renderizam bem via Playwright e não combinam com o visual premium da marca. Emojis podem aparecer apenas em legendas de texto (Instagram caption).
- Não usar anglicismos em produtos masculinos ou unissex: "look" → "estilo" ou "visual". "Souvenir" → "acessório de verdade". Proibidos: "look", "souvenir", "style", "premium" (sem especificidade).
- Não usar palavras de formalidade excessiva: "antecede", "precede", "concebe". Substituir por linguagem direta e coloquial do campo.
- Não incluir enquetes (poll), quizzes, question boxes, emoji sliders nos frames — o usuário não realiza ações de interatividade com o público no Instagram. Frames de Stories devem ser declarativos, sem instrução de sticker interativo.
- Não repetir palavra-âncora ("raiz", "campo", "identidade") mais de 2x no mesmo run completo.

## Run #002 — Aprendizados

- Foto editorial com modelo real usando o produto foi aprovada com score alto (9.2). Manter como formato padrão para posts de STATUS e pilar Autoridade.
- Paleta correta confirmada em produção: preto base + branco tipo + gold #FFBF1A acento. Zero vermelho.
- Fonte Montserrat no corpo funciona bem — tipografia correta confirmada.
- Stories frame 3 com watermark de produto 8% cria leve ruído visual sob cards — usar 5% em próximos runs.
- Foto editorial (1 slide) como formato de quinta-feira (Autoridade) funcionou bem — sem necessidade de carrossel para post de STATUS.

## Atualização de Branding (2026-04-23)

- Tipografia de corpo corrigida: usar **Montserrat** (não Roboto). O Branding Master Board atualizado especifica Bebas Neue (títulos) + Montserrat (parágrafos). Os slides do Run #001 usaram Roboto — corrigir em runs futuros.
- Dois documentos oficiais adicionados à memória do squad: Branding Master Board + Manual Mestre de Conteúdo. Ver branding.md e content-strategy.md.
- Arquétipo primário confirmado como **Herói** (não Fora-da-lei). Secundário: Explorador. Terciário: Rebelde controlado.

## Geração de Imagens com IA (OpenRouter)

- Modelo validado: `google/gemini-2.5-flash-image` via OpenRouter (conhecido internamente como "Nano Banana")
- Chave armazenada em: `c:\Users\tarik\Desktop\Cloude\.env` → variável `OPENROUTER_API_KEY`
- Formato de resposta da API: `choices[0].message.images[0].image_url.url` (retorna data URI base64 PNG)
- Quando usar IA para backgrounds:
  - Post SEM produto específico (manifesto, STATUS): IA para todos os frames atmosféricos (campo, celeiro, estrada etc.)
  - Post COM produto específico: foto real do produto para frames principais; IA apenas para frames atmosféricos de contexto
  - Frames com influencer: sempre usar fotos do banco `assets/influencers/` — nunca substituir por IA
- Template de generate.js com integração OpenRouter validado em Run #003 — reutilizar como base

## Produção Visual — Padrões Técnicos HTML/CSS (validados em Run #003)

### Logo
- Tamanho mínimo no generate.js: `height: 130px`
- Posição segura em Stories: `bottom: 380px` mínimo (Instagram cobre os últimos ~300px com UI de resposta)
- Nunca posicionar logo em `bottom < 300px` em Stories — será encoberto pela caixa de comentários
- Para Feed (1080x1080): posição `top: 44px; right: 52px` funciona bem (sem UI cobrindo)

### Tamanhos mínimos de fonte — Stories HTML (1080x1920)
- Headlines (Bebas Neue): mínimo **136px**
- Body / corpo (Montserrat weight 500): mínimo **44px**
- CTA / texto pequeno: mínimo **30px**
- Opções de enquete (poll): mínimo **60px**

### Contraste de texto sobre imagem
- `#FFBF1A` (ouro) SOMENTE sobre fundos escuros (#000 ou tons muito escuros)
- Backgrounds quentes/dourados/laranja (campo ao entardecer, pôr do sol, celeiro): usar headline **BRANCA** (#fff)
- Sempre adicionar div `.text-zone` (scrim escuro) em frames com imagem IA de tons quentes
- Fórmula de text-shadow para fundos complexos: `2px 2px 0 rgba(0,0,0,0.85), 0 0 40px rgba(0,0,0,0.9)`
- CTA text em backgrounds brilhantes: usar `rgba(255,255,255,0.9)` (branco) em vez de ouro

### Composição de influencer
- `background-size: 155-160%` para dar zoom e mostrar mais o rosto/torso
- Ajustar `background-position` para reduzir céu vazio — o influencer deve ocupar a maior parte do frame

## Textos Proibidos em Stories

- Nunca usar: "Postamos algo diferente hoje." — genérico, não agrega
- Nunca usar: "Ver post completo no feed" / "↓ Ver post completo no feed" — filler sem valor
- Imagens de produto não devem aparecer em Stories de posts manifesto/STATUS sem produto específico

## Técnico (específico do squad)

- Run #001: Produto Roper, ângulo Origem/Homenagem. Veredicto: APROVAR ciclo 1. Não publicado.
- Imagens do produto Roper: https://barnswestern.com.br/cdn/shop/files/56_900c1521-e1ea-4244-8652-e3beb40d997c.webp (principal)
- Preço Roper em 2026-04-22: R$ 159,90 (promo) / R$ 269,90 (original). Material: TR 90. Cores: marrom, preto, azul.