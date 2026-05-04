---
task: "Create Stories"
order: 1
input: |
  - feed_post: Arquivo feed-post.md com o post de Feed completo do mesmo run (OBRIGATÓRIO)
  - selected_angle: Arquivo selected-angle.md com o ângulo do run
output: |
  - stories_sequence: Arquivo stories-sequence.md com sequência de 3-7 frames, elementos interativos e notas de sequência
---

# Create Stories

Lê o feed-post.md do run atual e cria sequência de Stories derivada do mesmo tema, produto e narrativa — em tom mais casual e conversacional. Inclui mínimo 1 elemento interativo e frame de CTA com link sticker quando há produto disponível para compra.

## Process

1. **Ler `feed-post.md` (OBRIGATÓRIO antes de qualquer frame)**: Identificar produto featured, tema central, hook principal usado no Feed, assinatura Barns. Ler também `selected-angle.md` para contexto do driver emocional. Carregar `pipeline/data/tone-of-voice.md`.

2. **Planejar arco narrativo da sequência** (3-7 frames):
   - Frame 1 (Opener): entrada visual com tom casual — pode usar foto do produto ou frase de efeito leve
   - Frame 2 (Contexto): ampliar o tema do Feed em voz de DM, não de legenda
   - Frame 3 (Interativo): poll, quiz, question box ou emoji slider — prompt específico, não vago
   - Frame 4-5 (Produto/Argumento, se necessário): close do produto, especificação ou prova
   - Último frame (CTA): instrução de ação + link sticker para barnswestern.com.br

3. **Escrever cada frame** com:
   - Visual: instrução de imagem ou fundo (cor, foto do produto, fundo escuro/claro)
   - Text Overlay: máx 3 linhas grandes — se precisar de mais, dividir em 2 frames
   - Sticker/Element: tipo de elemento interativo ou decorativo

4. **Frame interativo obrigatório**: escolher o tipo mais adequado ao driver emocional do ângulo:
   - Status/Pertencimento → Poll de identidade ("Você se identifica com o estilo country? Sim 🤠 / Só às vezes")
   - Educacional/Medo → Quiz de conhecimento ("Qual o nível máximo de proteção UV? 200nm / 400nm / 600nm")
   - Lifestyle → Question box aberta ("Me conta: qual o seu look country favorito?")
   - Lançamento → Emoji slider ("Qual a sua vibe pra esse lançamento? 🤠")

5. **Frame de CTA**: sempre que o post tiver produto disponível para compra, o último frame inclui link sticker para barnswestern.com.br com contexto textual antes do sticker.

## Output Format

```markdown
# Stories Sequence — [Produto/Tema] — [Nome do Ângulo]

## FRAME 1 (Opener)
[Visual]: [instrução visual — foto do produto, fundo, composição]
[Text Overlay]: [texto do frame — máx 3 linhas]
[Sticker/Element]: [música, gif, ou nenhum]

## FRAME 2 (Contexto)
[Visual]: [instrução visual]
[Text Overlay]: [texto — máx 3 linhas]
[Sticker/Element]: [nenhum ou gif]

## FRAME 3 (Interativo)
[Visual]: [fundo de cor ou foto]
[Text Overlay]: [pergunta ou prompt do interativo]
[Interactive Element]: [Poll — "Opção A" vs "Opção B"] / [Quiz — resposta correta: X] / [Question box] / [Emoji slider — emoji]

## FRAME [N] (Produto, se aplicável)
[Visual]: [close do produto ou imagem lifestyle]
[Text Overlay]: [especificação ou argumento — máx 3 linhas]
[Sticker/Element]: [nenhum]

## FRAME [ÚLTIMO] (CTA)
[Visual]: [produto + contexto]
[Text Overlay]: [instrução de ação — máx 2 linhas]
[Sticker/Element]: Link sticker → barnswestern.com.br

## Sequence Notes
Total frames: [N]
Estimated view time: [X-Y] segundos
Primary goal: [Engajamento (poll) / Tráfego (link) / Descoberta / Retenção]
```

## Output Example

> Use como referência de qualidade, não como template rígido.

```markdown
# Stories Sequence — Óculos UV400 Vaqueiro — Pertencimento

## FRAME 1 (Opener)
[Visual]: Foto do produto Vaqueiro em campo — mesma visual vibe do slide cover do Feed
[Text Overlay]: O olhar que define quem você é. 🤠
[Sticker/Element]: Música country ambiente (volume baixo)

## FRAME 2 (Contexto)
[Visual]: Fundo escuro, texto grande centralizado
[Text Overlay]: Novo no nosso celeiro.
Proteção de verdade
pra quem vive o campo.
[Sticker/Element]: Nenhum

## FRAME 3 (Interativo)
[Visual]: Fundo tom de terra (accent da marca)
[Text Overlay]: Você costuma usar óculos com proteção UV?
[Interactive Element]: Poll — "Sim, sempre 🤠" vs "Nem sabia que importava"

## FRAME 4 (Produto)
[Visual]: Close extremo da lente polarizada do Vaqueiro — textura e reflexo dourado
[Text Overlay]: UV400. 100% UVA + UVB.
Lente polarizada.
Feito pra durar.
[Sticker/Element]: Nenhum

## FRAME 5 (CTA)
[Visual]: Produto Vaqueiro + horizonte de campo ao pôr do sol
[Text Overlay]: Garante o seu Vaqueiro. 👇
[Sticker/Element]: Link sticker → barnswestern.com.br

## Sequence Notes
Total frames: 5
Estimated view time: 20-25 segundos
Primary goal: Engajamento (poll no frame 3) + Tráfego (link sticker no frame 5)
```

## Quality Criteria

- [ ] `feed-post.md` lido antes de criar qualquer frame — tema e produto do Feed alinhados
- [ ] Sequência de 3-7 frames com arco narrativo completo (opener → interativo → CTA)
- [ ] Mínimo 1 frame com elemento interativo e prompt específico (não vago)
- [ ] Máximo 3 linhas de texto por frame
- [ ] Frame de CTA com link sticker presente quando post tem produto para compra
- [ ] Tom mais casual que o Feed do mesmo run (voz de DM, não de legenda)

## Veto Conditions

Rejeitar e refazer se QUALQUER uma for verdadeira:
1. Produto ou tema dos Stories é diferente do produto/tema do Feed do mesmo run — Stories e Feed devem ser coerentes no mesmo run
2. Nenhum frame tem elemento interativo — poll, quiz, question box ou emoji slider são obrigatórios em toda sequência de Stories da Barns Western