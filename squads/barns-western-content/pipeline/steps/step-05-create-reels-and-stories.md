---
execution: subagent
parallel: true
model_tier: fast
agents:
  - id: rodrigo-reels
    format: instagram-reels
    inputFile: squads/barns-western-content/output/selected-angle.md
    outputFile: squads/barns-western-content/output/reel-script.md
  - id: sofia-stories
    format: instagram-stories
    inputFile: squads/barns-western-content/output/feed-post.md
    outputFile: squads/barns-western-content/output/stories-sequence.md
---

# Step 5: Create Reels and Stories

Rodrigo Reels e Sofia Stories trabalham em paralelo para criar, respectivamente, o roteiro de Reel e a sequência de Stories — ambos alinhados ao ângulo e produto do run.

**Importante**: Sofia Stories lê `feed-post.md` (output do Step 4), não apenas `selected-angle.md`. Stories derivam do Feed do mesmo run.

---

## Rodrigo Reels

### Context Loading
- `squads/barns-western-content/output/selected-angle.md` — ângulo com driver, hook e narrativa
- `squads/barns-western-content/output/briefing.md` — produto featured
- `squads/barns-western-content/pipeline/data/tone-of-voice.md` — voz da marca

### Instructions

#### Process
1. Ler `selected-angle.md` e `briefing.md`. Identificar driver emocional e produto.
2. Definir duração alvo: 15-30s. Acima de 30s somente com justificativa documentada.
3. Escrever hook (0-2s): text overlay de impacto, máx 10 palavras, sem logo ou saudação.
4. Escrever setup (2-5s): 1-2 frases de contexto que justificam continuar assistindo.
5. Escrever delivery (5-[N]s): valor central com cortes a cada 3-5s, text overlays para informações-chave, narração em ritmo de conversa.
6. Escrever CTA (últimos 3-5s): ação específica + text overlay legível.
7. Documentar loop design: como o final conecta ao início.
8. Escrever legenda (hook 125 chars + corpo + assinatura + 3-5 hashtags) e sugestão de áudio.

### Output Format
```
# Reel Script — [Produto] — [Ângulo]
## Duração Alvo: [N]s
## Script
### HOOK (0-2s): [visual] / [audio] / [Text Overlay]
### SETUP (2-5s): [visual] / [script] / [text overlay se aplicável]
### DELIVERY ([5-Xs]): [visual com cortes] / [script] / [text overlays]
### CTA ([X-fim]): [visual] / [script] / [Text Overlay]
## Loop Design: [instrução]
## Legenda: [hook 125 chars] / [corpo] / 🎖️ This is Barns. / #hashtags
## Audio Note: [sugestão]
```

---

## Sofia Stories

### Context Loading
- `squads/barns-western-content/output/feed-post.md` — post de Feed completo do mesmo run (OBRIGATÓRIO)
- `squads/barns-western-content/output/selected-angle.md` — contexto do ângulo
- `squads/barns-western-content/pipeline/data/tone-of-voice.md` — voz da marca

### Instructions

#### Process
1. Ler `feed-post.md` (OBRIGATÓRIO) — identificar produto, tema, hook e assinatura do Feed.
2. Planejar arco declarativo: 3-7 frames com opener → identidade → declarativo → produto → CTA. Todos os frames são declarativos — zero elementos interativos.
3. Escrever cada frame: visual, text overlay (máx 3 linhas). Nenhum sticker, nenhuma enquete, nenhum emoji nos frames HTML.
4. Frame de CTA com URL do produto visível (barnswestern.com.br) quando há produto para compra. Sem emoji no frame.
5. Tom mais casual que o Feed — voz de DM, não de legenda.
6. **Proibido em todos os frames**: emojis no HTML, elementos interativos (poll/quiz/slider), instruções de sticker do Instagram, anglicismos em produtos masculinos/unissex.

### Output Format
```
# Stories Sequence — [Produto] — [Ângulo]
## FRAME 1 (Opener): [visual] / [text overlay declarativo — máx 3 linhas]
## FRAME 2 (Identidade): [visual] / [text overlay]
## FRAME 3 (Declarativo): [visual] / [text overlay — declaração de marca ou produto]
## FRAME [N] (Produto, se necessário): [visual] / [text overlay]
## FRAME [ÚLTIMO] (CTA): [visual] / [text overlay com URL barnswestern.com.br]
## Sequence Notes: total frames / estimated view time / primary goal
```
**Regra**: Nenhum frame contém `[Poll]`, `[Quiz]`, `[Question]`, `[Slider]`, emojis no HTML ou instrução de sticker.

---

## Veto Conditions (ambos os agentes)

Rejeitar e redo se:
1. **Rodrigo**: Hook começa com logo, nome da marca ou saudação — os primeiros 2s sem impacto imediato fazem o viewer sair
2. **Sofia**: Tema ou produto dos Stories é diferente do Feed do mesmo run

## Quality Criteria

**Rodrigo Reels**:
- [ ] Hook nos primeiros 2s com text overlay (máx 10 palavras)
- [ ] Duração 15-30s respeitada
- [ ] Text overlays nas informações-chave do delivery
- [ ] Loop design documentado
- [ ] CTA específico e acionável

**Sofia Stories**:
- [ ] `feed-post.md` lido — produto e tema alinhados ao Feed
- [ ] 3-7 frames com arco declarativo (opener → identidade → declarativo → produto → CTA)
- [ ] Zero elementos interativos em qualquer frame
- [ ] Zero emojis nos frames HTML
- [ ] Máximo 3 linhas de texto por frame
- [ ] Link sticker no CTA quando há produto