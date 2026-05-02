---
execution: inline
agent: squads/email-marketing/agents/roberto-revisao
inputFile: squads/email-marketing/output/email-copy.md
outputFile: squads/email-marketing/output/review-verdict.md
---

# Step 07: Revisão de Qualidade

## Context Loading

Carregue estes arquivos antes de executar:

- `squads/email-marketing/output/email-copy.md` — Copy completo do e-mail (assunto, corpo, CTA, PS)
- `squads/email-marketing/output/email-banner.jpg` — Banner gerado pela Beatriz (modo production)
- `squads/email-marketing/pipeline/data/quality-criteria.md` — Critérios de qualidade do squad
- `squads/email-marketing/pipeline/data/tone-of-voice.md` — Guia de tom da Barns Western
- `squads/email-marketing/output/strategy-brief.md` — Estratégia original para verificar alinhamento

## Instructions

### Process

1. **Carregar critérios de qualidade e guia de tom** antes de ler qualquer conteúdo.
2. **Leitura completa do e-mail**: assunto, corpo, CTA, PS, do início ao fim — sem scoring durante a leitura.
3. **Verificação do banner**: composição, paleta country/western, ausência de texto na imagem.
4. **Verificação de conformidade legal PRIMEIRO**: link de descadastro presente? Endereço físico no rodapé? Se ausentes, REPROVADO imediato.
5. **Scoring por critério** (1-10 com justificativa): linha de assunto, corpo, CTA, alinhamento de marca, banner, conformidade legal.
6. **Aplicar regras de veredicto**: APROVADO (média >= 7, nenhum < 4) | REPROVADO (média < 7 ou qualquer < 4) | APROVADO COM RESSALVAS (>= 7 com não-críticos entre 4-6).
7. **Escrever review-verdict.md** no formato padrão com tabela de scores, feedback por critério, alterações obrigatórias, sugestões, veredicto.

**Em caso de REPROVADO:** O pipeline retorna ao Step 3 (Carlos Conversão) para correção do copy. Máx. 3 revisões antes de escalar para o usuário.

## Output Format

```
==============================
 VEREDICTO: [APROVADO / REPROVADO / APROVADO COM RESSALVAS]
==============================

E-mail: [nome da campanha]
Revisão: [N] de 3

TABELA DE SCORES:
| Critério                  | Score | Justificativa                               |
|---------------------------|-------|---------------------------------------------|
| Linha de assunto          | X/10  | [justificativa específica]                  |
| Corpo do e-mail           | X/10  | [justificativa específica]                  |
| CTA                       | X/10  | [justificativa específica]                  |
| Alinhamento de marca      | X/10  | [justificativa específica]                  |
| Banner visual             | X/10  | [justificativa específica]                  |
| Conformidade legal        | X/10  | [justificativa específica]                  |

GERAL: X.X/10

[PONTO FORTE: especificidade do que está bem e por quê]

[ALTERAÇÃO OBRIGATÓRIA: o que está errado, onde, como corrigir]
[SUGESTÃO (não-bloqueante): melhoria opcional]

[CAMINHO PARA APROVAÇÃO (se REPROVADO): lista numerada de alterações]

VEREDICTO: [APROVADO / REPROVADO / APROVADO COM RESSALVAS] — [justificativa em 1 frase]
```

## Output Example

```
==============================
 VEREDICTO: APROVADO
==============================

E-mail: Abandono de carrinho — Óculos UV400 (E-mail 2 — 24h)
Revisão: 1 de 3

TABELA DE SCORES:
| Critério                  | Score | Justificativa                                                         |
|---------------------------|-------|-----------------------------------------------------------------------|
| Linha de assunto          | 9/10  | 45 chars, driver urgência + especificidade (nome do produto + prazo)  |
| Corpo do e-mail           | 8/10  | PAS correto, parágrafos curtos, prova social com número ("1.200")     |
| CTA                       | 9/10  | Verbo imperativo, benefício explícito (10% OFF), seta direcional      |
| Alinhamento de marca      | 8/10  | "Ei [Nome]", "Abraço country" — tom descontraído da Barns Western     |
| Banner visual             | 7/10  | Composição country adequada, paleta quente, sem texto renderizado ✓   |
| Conformidade legal        | 10/10 | Unsubscribe presente, endereço físico no rodapé ✓                     |

GERAL: 8.5/10

PONTO FORTE: A combinação de prova social ("1.200 clientes") + urgência real ("válido por 24h") imediatamente antes do CTA é o padrão ideal para abandono de carrinho — gera CTOR acima do benchmark.

SUGESTÃO (não-bloqueante): O PS poderia reforçar o nome do produto específico: "Depois que o prazo do óculos UV400 acabar..." cria memória mais forte do produto no final.

VEREDICTO: APROVADO — E-mail pronto para envio pelo Eduardo Envio.
```

## Veto Conditions

Rejeitar e retornar ao Step 3 se:

1. Qualquer critério com score < 4/10 (gatilho hard de rejeição)
2. Conformidade legal ausente (sem unsubscribe ou sem endereço físico)

## Quality Criteria

- [ ] Todos os 6 critérios avaliados com score e justificativa
- [ ] Conformidade legal verificada primeiro (bloqueante)
- [ ] Alterações obrigatórias distinguidas de sugestões
- [ ] Veredicto inequívoco (APROVADO/REPROVADO/APROVADO COM RESSALVAS)
- [ ] Ciclo de revisão rastreado (N de 3)
- [ ] REPROVADO acompanhado de caminho para aprovação