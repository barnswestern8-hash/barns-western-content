---
task: "Review"
order: 1
input: |
  - feed_post: Arquivo feed-post.md com post de Feed completo
  - reel_script: Arquivo reel-script.md com roteiro de Reel completo
  - stories_sequence: Arquivo stories-sequence.md com sequência de Stories completa
output: |
  - review_report: Arquivo review-report.md com scorecard completo por peça, veredicto e path to approval em caso de rejeição
---

# Review

Avalia todo o conteúdo produzido no run — Feed, Reels e Stories — contra os critérios de voz da Barns Western e especificações de cada plataforma. Emite scorecard por peça com veredicto APROVAR / REJEITAR / APROVAR CONDICIONAL e, em caso de rejeição, path to approval com mudanças específicas e localizadas.

## Process

1. **Ler os 3 arquivos de output do run**: `feed-post.md`, `reel-script.md`, `stories-sequence.md`. Carregar `pipeline/data/quality-criteria.md`, `pipeline/data/tone-of-voice.md` e `pipeline/data/anti-patterns.md`.

2. **Verificar anti-padrões (PASS/FAIL)** para cada peça — qualquer anti-padrão = FAIL automático:
   - Legenda genérica sem personalidade
   - Urgência artificial
   - Superlativo vago
   - Pergunta como hook
   - "Item" para descrever produto
   - Manifesto misturado com desconto
   - Mais de 5 hashtags
   - Stories com tema diferente do Feed

3. **Avaliar cada peça individualmente com scorecard 1-10** nos critérios definidos em `quality-criteria.md`:
   - Feed: Voz da marca, Hook, Formato de carrossel, Slide cover, Densidade de slides, Caption specs, Direção visual
   - Reels: Voz da marca, Hook visual 2s, Duração, Subtítulos, Ritmo, Loop design, CTA
   - Stories: Alinhamento Feed, Quantidade frames, Elemento interativo, Texto por frame, Link sticker, Tom casual

4. **Calcular score médio** por peça e aplicar regras de veredicto:
   - APROVAR: score ≥ 7.0 E nenhum critério < 4 E anti-padrões = PASS
   - REJEITAR: score < 7.0 OU qualquer critério < 4 OU anti-padrões = FAIL
   - APROVAR CONDICIONAL: score ≥ 7.0 E PASS mas 1+ critério não-crítico entre 4-6

5. **Para cada REJEITAR**: listar mudanças obrigatórias com localização exata (ex: "frase 1 da legenda", "slide 3, supporting text") e proposta de correção. Distinguir mudança obrigatória de sugestão não-bloqueante.

6. **Rastrear ciclo de revisão**: reportar "Revisão X de 3". No ciclo 3: escalar para o usuário com relatório completo e recomendação de ação.

## Output Format

```markdown
# Revisão Barns Western — Run #[NNN]

**Feed**: "[título/produto do post]"
**Reels**: "[título/produto do reel]"
**Stories**: "[produto — N frames]"
**Revisão**: [X] de 3

---

## Feed

| Critério | Score | Resumo |
|---|---|---|
| Voz da marca | [N]/10 | [justificativa em 1 linha] |
| Hook (125 chars) | [N]/10 | [justificativa] |
| Formato carrossel | [N]/10 | [justificativa] |
| Slide cover | [N]/10 | [justificativa] |
| Densidade slides | [N]/10 | [justificativa] |
| Caption specs | [N]/10 | [justificativa] |
| Direção visual | [N]/10 | [justificativa] |
| Anti-padrões | PASS/FAIL | [se FAIL: qual anti-padrão] |

**SCORE FEED**: [média]/10 — [APROVAR / REJEITAR / APROVAR CONDICIONAL]

[Se REJEITAR ou APROVAR CONDICIONAL:]
**Mudança obrigatória**: [descrição + localização exata + correção proposta]
**Sugestão (não-bloqueante)**: [se houver]

---

## Reels

[mesma estrutura]

---

## Stories

[mesma estrutura]

---

## Veredicto Geral

[APROVAR / REJEITAR / APROVAR CONDICIONAL]

[Se APROVAR]: Conteúdo aprovado. [Sugestões opcionais se houver]
[Se REJEITAR]: Retornar ao step 4 (Fernanda Feed) para reescrita. Prioridades: [lista de mudanças bloqueantes]
[Se APROVAR CONDICIONAL]: Mudanças opcionais listadas acima. Pode prosseguir para publicação.
```

## Output Example

> Use como referência de qualidade, não como template rígido.

```markdown
# Revisão Barns Western — Run #001

**Feed**: "Óculos UV400 Vaqueiro — Ângulo Pertencimento"
**Reels**: "UV400 — O que ninguém te explica"
**Stories**: "Vaqueiro — 5 frames"
**Revisão**: 1 de 3

---

## Feed

| Critério | Score | Resumo |
|---|---|---|
| Voz da marca | 9/10 | Tom firme, assinatura "This is Barns." presente, vocabulário canônico correto |
| Hook (125 chars) | 8/10 | "O campo não é pra qualquer um. E o seu olhar não deveria ser." — funciona standalone |
| Formato carrossel | 9/10 | Storytelling / Narrativa adequado ao driver Pertencimento |
| Slide cover | 8/10 | Título bold em caixa alta, promessa clara, para o scroll |
| Densidade slides | 7/10 | Slides 2-6 respeitam mínimo de 40 palavras; slide 7 abaixo (32 palavras) |
| Caption specs | 9/10 | 5 hashtags, assinatura presente, CTA claro |
| Direção visual | 8/10 | assets/products/ referenciado, prompt de IA com --reference documentado |
| Anti-padrões | PASS | Nenhum identificado |

**SCORE FEED**: 8.3/10 — APROVAR

Sugestão (não-bloqueante): Slide 7 tem 32 palavras — adicionar 1 frase de contexto sobre o @barns.western para chegar ao mínimo de 40 palavras sem alterar a função do slide.

---

## Reels

| Critério | Score | Resumo |
|---|---|---|
| Voz da marca | 8/10 | Tom conversacional correto, vocabulário de campo presente |
| Hook visual 2s | 9/10 | Text overlay "UV400 NÃO É O QUE VOCÊ PENSA." — impacto imediato, legível sem som |
| Duração | 8/10 | 28s — dentro do alvo de 15-30s |
| Subtítulos | 9/10 | Text overlays especificados para todas as falas do delivery |
| Ritmo | 8/10 | Cortes a cada 5s no delivery — dentro do limite |
| Loop design | 8/10 | Loop documentado com instrução visual específica |
| CTA | 8/10 | "Compara antes de comprar. Link na bio." — específico e acionável |
| Anti-padrões | PASS | Nenhum identificado |

**SCORE REELS**: 8.5/10 — APROVAR

---

## Stories

| Critério | Score | Resumo |
|---|---|---|
| Alinhamento Feed | 9/10 | Mesmo produto (Vaqueiro), mesmo tema, mesma vibe visual |
| Quantidade frames | 9/10 | 5 frames com arco narrativo completo |
| Elemento interativo | 9/10 | Poll no frame 3 com prompt específico |
| Texto por frame | 9/10 | Máx 3 linhas respeitado em todos os frames |
| Link sticker | 9/10 | Presente no frame 5 com contexto textual antes do sticker |
| Tom casual | 8/10 | Tom mais próximo que o Feed — voz de DM confirmada |
| Anti-padrões | PASS | Nenhum identificado |

**SCORE STORIES**: 8.8/10 — APROVAR

---

## Veredicto Geral

APROVAR

Conteúdo aprovado para publicação. Nenhuma mudança obrigatória.
Sugestão opcional (Feed, slide 7): adicionar 1 frase para atingir mínimo de 40 palavras.
```

## Quality Criteria

- [ ] Os 3 arquivos de output avaliados com scorecard completo (não parcial)
- [ ] Todo score (1-10) tem justificativa em pelo menos 1 linha
- [ ] Anti-padrões verificados com resultado PASS ou FAIL explícito por peça
- [ ] Veredicto não ambíguo por peça (APROVAR / REJEITAR / APROVAR CONDICIONAL)
- [ ] Toda rejeição tem mudança obrigatória com localização exata e correção proposta
- [ ] Ciclo de revisão rastreado e reportado (X de 3)

## Veto Conditions

Rejeitar e refazer se QUALQUER uma for verdadeira:
1. Review feito sem ler um dos 3 arquivos de output — scorecard parcial é pior que nenhum review
2. Score emitido sem justificativa — número sem explicação não orienta correção nem repetição do acerto