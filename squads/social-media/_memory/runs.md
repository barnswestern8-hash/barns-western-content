# Histórico de Runs — Barns Western Content

Log de todos os runs executados por este squad.

---

## Tabela de Runs

| Data | Run ID | Tema | Output | Resultado |
|------|--------|------|--------|-----------|
| 2026-05-03 | 2026-05-03-172846 | Fivela Tex — Lançamento — STATUS | Feed 7 slides + Reel 22s + Stories 5 frames | Aprovado |
| 2026-04-28 | — | Boné Yellowstone — Lifestyle/Desejo — PERTENCIMENTO | Feed Carrossel + Stories 5 frames | Aprovado |
| 2026-04-27 | — | Manifesto STATUS — sem produto | Feed Foto Editorial + Stories 6 frames | Aprovado |
| 2026-04-23 | — | Óculos Roper — Autoridade — STATUS | Feed Foto Editorial + Stories 6 frames | Aprovado |
| 2026-04-22 | — | Óculos Roper — Origem — HOMENAGEM | Feed Carrossel 6 slides + Reel 25s + Stories 6 frames | Aprovado |

---

## Formato de Registro

```
### Run #NNN — YYYY-MM-DD
**Produto/Tema**: [produto ou tema do post]
**Ângulo escolhido**: [nome do ângulo — ex: Pertencimento]
**Formatos**: Feed [tipo de carrossel] + Reels [duração] + Stories [N frames]
**Veredicto Vera**: APROVAR / REJEITAR / APROVAR CONDICIONAL (ciclo X de 3)
**Publicado**: Sim / Não
**Notas**: [observações relevantes para runs futuros]
```

---

## Runs

### Run #005 — 2026-05-03
**Produto/Tema**: Óculos Hunter (Masculino) — UV400
**Pilar do dia**: Educativo / STATUS
**Ângulo escolhido**: STATUS — "QUEM ENTENDE UV400 NÃO NEGOCIA PROTEÇÃO."
**Formatos**: Feed Editorial/Tese (7 slides 1080x1080) + Reel 22s + Stories 5 frames (1080x1920)
**Imagens IA**: Stories frame 2 — cerrado ao entardecer (golden hour, árvore solitária) via OpenRouter Gemini Flash Image
**Veredicto Vera**: APROVADO — ciclo 1 de 3 (Feed 9.0 | Reels 9.1 | Stories 9.6)
**Publicado**: Não — 12 PNGs gerados, aguarda publicação manual
**Notas**:
- Skill de copywriting injetada em todos os agentes de copy a partir deste run (Fernanda, Rodrigo, Sofia). Instrução permanente do usuário.
- `background-blend-mode: multiply` é a técnica correta para remover fundo branco de fotos de produto sobre fundo ouro (#FFBF1A). Usar `#product-area` com `background-image` + `background-blend-mode: multiply` — não funciona em `<img>` com `mix-blend-mode` dentro de container com z-index (cria stacking context isolado).
- Stories frame 2 com imagem IA de cerrado ao entardecer + scrim escuro + texto branco = resultado forte. Padrão a repetir.
- Vera aprovada no ciclo 1 sem mudanças obrigatórias. Sugestão não-bloqueante: logo versão escura para slides com fundo ouro (não existe no `assets/brand/` — apenas `logo branco.png`).

---

### Run #004 — 2026-04-28
**Produto/Tema**: Boné Yellowstone (Barns Western)
**Pilar do dia**: Terça — Lifestyle / Desejo
**Ângulo escolhido**: PERTENCIMENTO — "BONÉS DE QUEM VIVE O CAMPO. NÃO DE QUEM VISITA."
**Formatos**: Feed Carrossel Storytelling (4 slides 1080x1080) + Stories 5 frames (1080x1920)
**Imagens IA**: Stories frame 3 — campo ao entardecer (cerrado, golden hour) via OpenRouter Nano Banana
**Veredicto**: APROVADO pelo usuário (após ajustes ciclo 1)
**Publicado**: Não — salvo para publicação manual
**Notas**:
- Emojis nas imagens HTML não funcionam bem visualmente — removidos de todos os frames. Regra estabelecida: zero emojis nas imagens renderizadas.
- Palavras de formalidade excessiva proibidas: "antecede" substituído por "fala por você" — manter vocabulário direto e coloquial.
- Anglicismos proibidos para produto masculino/unissex: "look" → "estilo" ou "visual". "Souvenir" eliminado. Regra documentada em anti-patterns.md.
- Enquetes e stickers interativos (poll, quiz, emoji slider) removidos a pedido do usuário — não usar interatividade nativa do Instagram nos próximos runs até nova instrução.
- Palavra "raiz" usada no máximo 2x por run (slide 2 + reel). Regra de não-repetição de âncoras documentada.
- Frame 3 Stories com imagem IA de campo ao entardecer + declaração "DO CAMPO PRO ASFALTO. O ESTILO PERMANECE." funcionou muito bem visualmente.

---

### Run #003 — 2026-04-27
**Produto/Tema**: Manifesto de marca — STATUS "QUEM CHEGOU CHEGOU. SEM EXPLICAÇÃO." (sem produto específico)
**Pilar do dia**: Domingo — Editorial Visual / Brand Manifesto
**Ângulo escolhido**: STATUS — identidade de quem chegou sem precisar explicar
**Formatos**: Feed Foto Editorial (1 slide 1080x1080) + Stories 6 frames (1080x1920)
**Influencer**: @luanbraganholi — fotos do banco `assets/influencers/@luanbraganholi/`
**Imagens IA**: Frames 3, 4, 6 gerados com `google/gemini-2.5-flash-image` via OpenRouter
**Veredicto**: APROVADO pelo usuário
**Publicado**: Não — salvo para publicação manual
**Notas**:
- Primeira integração de geração de imagens com IA (OpenRouter Nano Banana) — funcional
- Vários ciclos de ajuste antes da aprovação final. Ver aprendizados consolidados em memories.md
- Logo deve ser `height: 130px` mínimo e posicionado fora da zona de UI do Instagram
- Texto dourado sobre fundo quente = ilegível — usar branco com scrim escuro
- Remover textos filler ("Postamos algo diferente hoje.", "Ver post completo no feed")
- Posts manifesto sem produto: não usar imagens de produto nos Stories

---

### Run #002 — 2026-04-23
**Produto/Tema**: Óculos UV400 modelo Roper
**Pilar do dia**: Autoridade de Marca (quinta-feira)
**Ângulo escolhido**: STATUS — "O ROPER NÃO SE EXPLICA. SE USA."
**Formatos**: Feed Foto Editorial (1 slide 1080x1080) + Stories 6 frames (1080x1920)
**Veredicto Vera**: APROVAR — ciclo 1 de 3 (Feed 9.2 | Stories 9.2)
**Publicado**: Não — salvo para publicação manual
**Notas**: Correção de paleta aplicada durante o run — vermelho (#990200) removido de todos os elementos após feedback do usuário. Paleta correta: preto + branco + gold #FFBF1A conforme Branding Master Board atualizado. Fonte Montserrat usada corretamente no corpo (não mais Roboto). Foto editorial com modelo real usando o produto teve forte impacto visual. Stories frame 3 — sugestão não-bloqueante de reduzir watermark produto para 5% de opacidade.

---

### Run #001 — 2026-04-22
**Produto/Tema**: Óculos UV400 modelo Roper (barnswestern.com.br/products/oculos-roper)
**Ângulo escolhido**: ORIGEM / HOMENAGEM — "O ROPER NASCEU NO LAÇO." (homenagem ao Team Roping)
**Formatos**: Feed Carrossel Editorial Origem (6 slides) + Reel narrativo 25s + Stories 6 frames
**Veredicto Vera**: APROVAR — ciclo 1 de 3 (Feed 8.4 | Reel 8.6 | Stories 9.7)
**Publicado**: Não — salvo para publicação manual
**Notas**: assets/products/ não existia. Imagens reais encontradas em barnswestern.com.br/products/oculos-roper. Pasta criada com README. Recomendado baixar imagens antes da geração de arte final. Slide 5 do Feed ficou abaixo de 40 palavras — sugestão de expansão deixada em review-report.md.