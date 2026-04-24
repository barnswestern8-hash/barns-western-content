---
execution: subagent
agent: fernanda-feed
format: instagram-feed
inputFile: squads/barns-western-content/output/selected-angle.md
outputFile: squads/barns-western-content/output/feed-post.md
model_tier: powerful
---

# Step 4: Create Feed

Fernanda Feed cria o post de Feed completo: formato de carrossel adequado ao ângulo, todos os slides com hierarquia visual (headline + supporting text), legenda com hook nos primeiros 125 chars, hashtags e direção visual de imagem com produto correto.

## Context Loading

Load these files before executing:
- `squads/barns-western-content/output/selected-angle.md` — ângulo escolhido com driver, hook, narrativa e tipo de post
- `squads/barns-western-content/output/briefing.md` — produto featured e detalhes do run
- `squads/barns-western-content/pipeline/data/tone-of-voice.md` — guia de voz da marca Barns Western
- `squads/barns-western-content/pipeline/data/output-examples.md` — exemplos de referência de posts aprovados
- `squads/barns-western-content/pipeline/data/anti-patterns.md` — anti-padrões a evitar

## Instructions

### Process
1. Ler `selected-angle.md` e `briefing.md`. Identificar driver emocional, hook do ângulo, narrativa, tipo de post e produto featured.
2. Escolher formato de carrossel adequado ao driver: Status/Pertencimento → Storytelling; Educacional/Medo → Problema→Solução; Contrário → Editorial; Lançamento → Single Image ou Editorial curto.
3. Escrever todos os slides com estrutura de dois níveis: headline bold (máx 10 palavras) + supporting text (mín 40 palavras). Slide cover: título em caixa alta, máx 20 palavras, para o scroll.
4. Escrever legenda completa: hook nos primeiros 125 chars (standalone), corpo de 2-3 parágrafos, assinatura "🎖️ This is Barns.", CTA + 3-5 hashtags.
5. Verificar `assets/products/` para foto real do produto. Se não encontrar: gerar prompt com `--reference` para imagem de produto mais próxima. Documentar decisão de imagem.
6. Salvar output completo em `feed-post.md` — Sofia Stories depende desse arquivo no Step 5.

## Output Format

```
# Feed Post — [Produto] — [Ângulo]

## Formato
[Nome do carrossel] ([N] slides)

## Slides

### Slide 1 (Cover)
**Título**: [TITULO EM CAIXA ALTA]
**Visual**: [instrução visual]
**Background**: [cover photo / dark / light / accent]

### Slide 2 ([função])
**Headline**: [headline bold]
**Supporting text**: [texto 40-80 palavras]
**Accent keywords**: [palavras em destaque]
**Background**: [cor]

[...slides intermediários...]

### Slide [N] (CTA)
**CTA**: [chamada de ação]
**Visual**: [produto + contexto]
**Background**: [cor]

## Legenda

[Hook 125 chars — standalone]

[Parágrafo 2]

[Parágrafo 3]

🎖️ This is Barns.

[CTA] #barnswestern #hashtag2 #hashtag3

## Direção Visual

**Produto featured**: [nome do produto]
**Fonte de imagem**: [assets/products/arquivo.jpg OU IA com reference]
**Prompt de IA (se aplicável)**: "[prompt --reference path]"
**Estilo visual**: [instrução de luz, ambiente, composição]
```

## Output Example

```
# Feed Post — Óculos UV400 Vaqueiro — Pertencimento

## Formato
Storytelling / Narrativa (8 slides)

## Slides

### Slide 1 (Cover)
**Título**: FEITO PRA QUEM VIVE O CAMPO DE VERDADE.
**Visual**: Horizonte de campo ao amanhecer, silhueta de homem com chapéu
**Background**: cover photo

### Slide 2 (Setup)
**Headline**: O campo não é só paisagem. É rotina.
**Supporting text**: Pra quem acorda antes do sol e volta depois do anoitecer, cada detalhe do visual importa. Não é vaidade — é identidade. O seu olhar diz de onde você é antes de você abrir a boca.
**Accent keywords**: identidade
**Background**: dark

### Slide 3 (Conflito)
**Headline**: A maioria dos óculos não foi feita pra isso.
**Supporting text**: Sol na cara por 10 horas. Poeira. Calor. Um óculos de shopping não aguenta essa rotina. E proteção falsa é pior que nenhuma — o olho relaxa achando que está protegido quando não está.
**Accent keywords**: proteção falsa
**Background**: light

### Slide 4 (Virada)
**Headline**: UV400 não é detalhe técnico.
**Supporting text**: É o padrão que bloqueia 100% dos raios UVA e UVB até 400 nanômetros. A diferença entre ver bem daqui a 20 anos ou começar a perder a visão aos 45.
**Accent keywords**: 100%
**Background**: accent

### Slide 5 (Produto)
**Headline**: Conheça o Vaqueiro.
**Visual**: Close nos óculos UV400 Vaqueiro — lente polarizada em destaque
**Supporting text**: Lente polarizada. Armação reforçada. Proteção de verdade pro look country de verdade.
**Accent keywords**: Vaqueiro
**Background**: dark

### Slide 6 (Identidade)
**Headline**: Quem usa Barns não precisa explicar de onde é.
**Supporting text**: O óculos certo não é acessório. É declaração. E a sua já diz tudo o que precisa ser dito antes mesmo da primeira palavra.
**Accent keywords**: declaração
**Background**: light

### Slide 7 (Prova)
**Headline**: 84 mil pessoas já escolheram.
**Supporting text**: @barns.western — O celeiro guarda a essência do Cowboy. Junte-se a quem já sabe o que proteção de verdade significa.
**Background**: dark

### Slide 8 (CTA)
**CTA**: Link na bio. Garanta o seu Vaqueiro. 🤠
**Visual**: Produto + horizonte dourado de pôr do sol
**Background**: cover photo

## Legenda

O campo não é pra qualquer um. E o seu olhar não deveria ser.

Proteção UV400. Armação que aguenta a lida. Um óculos feito pra quem vive de verdade — não pra aparecer.

O Vaqueiro chegou. Link na bio.

🎖️ This is Barns.

#barnswestern #country #UV400 #oculos #rodeio

## Direção Visual

**Produto featured**: Óculos UV400 Vaqueiro
**Fonte de imagem**: assets/products/oculos-uv400-vaqueiro.jpg
**Prompt de IA (se aplicável)**: "Cowboy wearing UV400 sunglasses, golden hour light, open field, authentic lifestyle photography 4K portrait 3:4 --reference assets/products/oculos-uv400-vaqueiro.jpg"
**Estilo visual**: Golden hour, campo aberto, luz natural forte, tons quentes de terra
```

## Veto Conditions

Rejeitar e redo se QUALQUER uma for verdadeira:
1. Primeiros 125 chars da legenda dependem do visual para fazer sentido — hook não funciona standalone
2. Imagem de IA especificada sem `--reference` de produto em `assets/products/`

## Quality Criteria

- [ ] Formato de carrossel nomeado e adequado ao driver do ângulo
- [ ] Slide cover com título bold, máx 20 palavras, contraste alto
- [ ] Cada slide intermediário: headline + supporting text com mínimo 40 palavras
- [ ] Hook nos primeiros 125 chars funciona como standalone
- [ ] Assinatura Barns presente na legenda
- [ ] Máximo 5 hashtags
- [ ] Direção visual com produto correto e fonte documentada
- [ ] `feed-post.md` salvo completo (Sofia Stories depende deste arquivo)