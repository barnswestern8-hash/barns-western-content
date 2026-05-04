---
execution: inline
agent: vera-veredito
outputFile: squads/social-media/output/review-report.md
on_reject: 4
---

# Step 7: Review

Vera Veredito avalia o conteúdo completo do run — Feed, Reels e Stories — contra os critérios de voz da Barns Western e specs de cada plataforma. Emite scorecard com veredicto por peça. Em caso de rejeição, retorna ao Step 4 (Fernanda Feed) para reescrita.

## Context Loading

Load these files before executing:
- `squads/social-media/output/feed-post.md` — post de Feed do run
- `squads/social-media/output/reel-script.md` — roteiro de Reel do run
- `squads/social-media/output/stories-sequence.md` — sequência de Stories do run
- `squads/social-media/pipeline/data/quality-criteria.md` — critérios de avaliação e regras de veredicto
- `squads/social-media/pipeline/data/tone-of-voice.md` — guia de voz da marca
- `squads/social-media/pipeline/data/anti-patterns.md` — anti-padrões que geram rejeição automática

## Instructions

### Process
1. Ler os 3 arquivos de output. Verificar anti-padrões (PASS/FAIL) para cada peça — qualquer anti-padrão presente = FAIL automático.
2. Avaliar cada peça individualmente com scorecard 1-10 nos critérios de `quality-criteria.md`.
3. Calcular score médio por peça e aplicar regras: APROVAR ≥ 7.0 + nenhum critério < 4; REJEITAR < 7.0 ou qualquer critério < 4; APROVAR CONDICIONAL ≥ 7.0 com 1+ critério não-crítico entre 4-6.
4. Para rejeição: listar mudanças obrigatórias com localização exata e correção proposta. Distinguir de sugestões não-bloqueantes.
5. Rastrear e reportar ciclo de revisão (X de 3). No ciclo 3: escalar para o usuário.

## Output Format

```
# Revisão Barns Western — Run #[NNN]

**Feed**: "[produto/tema]"
**Reels**: "[produto/tema]"
**Stories**: "[produto — N frames]"
**Revisão**: [X] de 3

---

## Feed
| Critério | Score | Resumo |
|---|---|---|
| Voz da marca | [N]/10 | [justificativa] |
| Hook (125 chars) | [N]/10 | [justificativa] |
| Formato carrossel | [N]/10 | [justificativa] |
| Slide cover | [N]/10 | [justificativa] |
| Densidade slides | [N]/10 | [justificativa] |
| Caption specs | [N]/10 | [justificativa] |
| Direção visual | [N]/10 | [justificativa] |
| Anti-padrões | PASS/FAIL | [se FAIL: qual] |

**SCORE FEED**: [N]/10 — [APROVAR / REJEITAR / APROVAR CONDICIONAL]
[Mudanças obrigatórias + sugestões se aplicável]

## Reels
[mesma estrutura de tabela]

## Stories
[mesma estrutura de tabela]

---

## Veredicto Geral
[APROVAR / REJEITAR / APROVAR CONDICIONAL]
[Próximos passos]
```

## Output Example

```
# Revisão Barns Western — Run #001

**Feed**: "Óculos UV400 Vaqueiro — Pertencimento"
**Reels**: "UV400 — O que ninguém te explica"
**Stories**: "Vaqueiro — 5 frames"
**Revisão**: 1 de 3

---

## Feed
| Critério | Score | Resumo |
|---|---|---|
| Voz da marca | 9/10 | Tom firme, assinatura Barns presente, vocabulário canônico correto |
| Hook (125 chars) | 8/10 | "O campo não é pra qualquer um." funciona standalone |
| Formato carrossel | 9/10 | Storytelling adequado ao driver Pertencimento |
| Slide cover | 8/10 | Caixa alta, promessa clara, contraste alto |
| Densidade slides | 7/10 | Slides 2-6 ok; slide 7 abaixo do mínimo (32 palavras) |
| Caption specs | 9/10 | 5 hashtags, assinatura, CTA claro |
| Direção visual | 8/10 | assets/products/ referenciado, prompt com --reference |
| Anti-padrões | PASS | Nenhum identificado |

**SCORE FEED**: 8.3/10 — APROVAR
Sugestão (não-bloqueante): Slide 7 — adicionar 1 frase para atingir mínimo de 40 palavras.

## Reels
| Critério | Score | Resumo |
|---|---|---|
| Voz da marca | 8/10 | Tom conversacional, vocabulário de campo presente |
| Hook visual 2s | 9/10 | "UV400 NÃO É O QUE VOCÊ PENSA." — impacto imediato |
| Duração | 8/10 | 28s — dentro do alvo |
| Subtítulos | 9/10 | Text overlays em todas as falas |
| Ritmo | 8/10 | Cortes a cada 5s no delivery |
| Loop design | 8/10 | Documentado com instrução visual |
| CTA | 8/10 | "Compara antes de comprar." — específico |
| Anti-padrões | PASS | Nenhum identificado |

**SCORE REELS**: 8.5/10 — APROVAR

## Stories
| Critério | Score | Resumo |
|---|---|---|
| Alinhamento Feed | 9/10 | Mesmo produto e tema do Feed |
| Quantidade frames | 9/10 | 5 frames com arco completo |
| Elemento interativo | 9/10 | Poll frame 3 com prompt específico |
| Texto por frame | 9/10 | Máx 3 linhas respeitado |
| Link sticker | 9/10 | Frame 5 com contexto textual + sticker |
| Tom casual | 8/10 | Mais próximo que o Feed — voz de DM |
| Anti-padrões | PASS | Nenhum identificado |

**SCORE STORIES**: 8.8/10 — APROVAR

---

## Veredicto Geral
APROVAR

Conteúdo aprovado para publicação. Nenhuma mudança obrigatória.
Sugestão opcional: Feed slide 7 — adicionar 1 frase para atingir mínimo de 40 palavras.
```

## Veto Conditions

Rejeitar e redo se QUALQUER uma for verdadeira:
1. Review feito sem ler um dos 3 arquivos de output — scorecard parcial invalida o review
2. Score emitido sem justificativa em pelo menos 1 linha — número sem explicação não orienta correção

## Quality Criteria

- [ ] Os 3 arquivos de output avaliados com scorecard completo
- [ ] Todo score tem justificativa em pelo menos 1 linha
- [ ] Anti-padrões verificados com PASS ou FAIL explícito por peça
- [ ] Veredicto não ambíguo (APROVAR / REJEITAR / APROVAR CONDICIONAL)
- [ ] Toda rejeição tem mudança obrigatória com localização e correção proposta
- [ ] Ciclo de revisão rastreado (X de 3)