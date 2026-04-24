---
task: "Create Feed"
order: 1
input: |
  - selected_angle: Arquivo selected-angle.md com o ângulo escolhido (driver, hook, narrativa, tipo de post)
  - briefing: Arquivo briefing.md com produto/tema e detalhes do run
output: |
  - feed_post: Arquivo feed-post.md com: formato de carrossel, todos os slides, legenda completa, hashtags, direção visual de imagem
---

# Create Feed

Cria post de Feed completo para o Instagram da Barns Western: formato de carrossel adequado ao ângulo, slides com hierarquia visual (headline + supporting text), legenda com hook nos primeiros 125 chars, hashtags e direção visual de imagem com produto correto.

## Process

1. **Ler `selected-angle.md` e `briefing.md`**: Identificar driver emocional, hook do ângulo, narrativa, tipo de post e produto featured. Carregar `pipeline/data/tone-of-voice.md` e `pipeline/data/output-examples.md`.

2. **Escolher formato de carrossel** baseado no driver emocional:
   - Status/Pertencimento → Storytelling / Narrativa (6-8 slides com arco hero)
   - Medo/Educacional → Problema→Solução (4-6 slides) ou Listicle
   - Contrário → Editorial (4-5 slides com confronto de crenças)
   - Lançamento → Single Image (impacto visual máximo) ou Editorial curto (3-4 slides)
   - Prova Social → Depoimento / UGC (3-5 slides centrados no cliente)

3. **Escrever todos os slides** com estrutura de dois níveis:
   - **Slide 1 (Cover)**: Título bold em caixa alta, máx 20 palavras, contraste alto, para o scroll — pode ser o hook do ângulo diretamente
   - **Slides intermediários**: Headline bold (máx 10 palavras) + supporting text (40-80 palavras) — cada slide = uma ideia
   - **Último slide**: Assinatura Barns + CTA específico com instrução visual

4. **Escrever legenda completa**:
   - Primeiros 125 chars: hook que funciona standalone antes do "...mais"
   - Corpo: 2-3 parágrafos curtos com contexto de identidade
   - Assinatura: "🎖️ This is Barns." ou variante (ex: "O celeiro guarda a essência do Cowboy.")
   - CTA: "Link na bio." + 3-5 hashtags (#barnswestern + hashtags de nicho)

5. **Coordenar imagem do produto**:
   - Verificar `assets/products/` — existe foto do produto do briefing? → indicar o arquivo
   - Se não existir: gerar prompt de IA com `--reference` apontando para a foto de produto mais próxima em `assets/products/`
   - Documentar a decisão de imagem na seção "Direção Visual" do output
   - Nunca gerar imagem de IA sem `--reference` de produto Barns

6. **Salvar output completo em `feed-post.md`** — Sofia Stories lê esse arquivo como input. Output incompleto gera Stories incoerentes.

## Output Format

```markdown
# Feed Post — [Produto/Tema] — [Nome do Ângulo]

## Formato
[Nome do formato de carrossel escolhido] ([N] slides)

## Slides

### Slide 1 (Cover)
**Título**: [TITULO EM CAIXA ALTA — MÁXIMO 20 PALAVRAS]
**Visual**: [descrição da imagem ou instrução visual]
**Background**: cover photo / dark / light / accent

### Slide 2 ([função no arco])
**Headline**: [Headline bold — máximo 10 palavras]
**Supporting text**: [Texto de apoio — 40-80 palavras]
**Accent keywords**: [palavras para destacar visualmente]
**Visual**: [descrição da imagem se slide tiver foto]
**Background**: dark / light / accent

[...slides intermediários...]

### Slide [N] (CTA)
**CTA**: [chamada para ação específica]
**Visual**: [produto + contexto]
**Background**: [cor ou cover photo]

## Legenda

[Primeiros 125 chars — hook standalone]

[Parágrafo 2 — contexto de identidade]

[Parágrafo 3 — argumento ou prova]

🎖️ This is Barns.

[CTA] #barnswestern #[hashtag2] #[hashtag3]

## Direção Visual

**Produto featured**: [nome exato do produto]
**Fonte de imagem**: [assets/products/nome-do-arquivo.jpg OU "IA — sem foto disponível em assets/"]
**Prompt de IA (se aplicável)**: "[prompt com --reference path/para/foto.jpg]"
**Estilo visual**: [ambient, lighting, framing instructions]
```

## Output Example

> Use como referência de qualidade, não como template rígido.

```markdown
# Feed Post — Óculos UV400 Vaqueiro — Pertencimento

## Formato
Storytelling / Narrativa (8 slides)

## Slides

### Slide 1 (Cover)
**Título**: FEITO PRA QUEM VIVE O CAMPO DE VERDADE.
**Visual**: Horizonte de campo ao amanhecer, homem de chapéu de costas
**Background**: cover photo

### Slide 2 (Setup)
**Headline**: O campo não é só paisagem. É rotina.
**Supporting text**: Pra quem acorda antes do sol e volta depois do anoitecer, cada detalhe do visual importa. Não é vaidade — é identidade. E o seu olhar diz de onde você é antes de você abrir a boca.
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

## Quality Criteria

- [ ] Formato de carrossel explicitamente nomeado e adequado ao driver do ângulo
- [ ] Slide cover tem título bold, máx 20 palavras, contraste alto, para o scroll
- [ ] Cada slide intermediário tem headline (máx 10 palavras) + supporting text (mínimo 40 palavras)
- [ ] Primeiros 125 chars da legenda funcionam como hook standalone
- [ ] Assinatura Barns presente na legenda ("🎖️ This is Barns." ou variante)
- [ ] 3-5 hashtags no máximo
- [ ] Direção visual especificada com produto correto e fonte de imagem documentada
- [ ] `feed-post.md` salvo completo (Sofia Stories depende desse arquivo)

## Veto Conditions

Rejeitar e refazer se QUALQUER uma for verdadeira:
1. Primeiros 125 chars da legenda dependem do visual para fazer sentido — hook não funciona standalone
2. Imagem de IA especificada sem `--reference` de produto Barns em `assets/products/` — produto gerado não representará o que é vendido