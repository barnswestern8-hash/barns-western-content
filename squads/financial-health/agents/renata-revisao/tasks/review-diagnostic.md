---
task: "Review Diagnostic"
order: 1
input: |
  - metricas_financeiras: Arquivo metricas-financeiras.md (cálculos do Felipe Financeiro)
  - diagnostico_estrategico: Arquivo diagnostico-estrategico.md (diagnóstico do Gustavo Gestor)
  - quality_criteria: Arquivo pipeline/data/quality-criteria.md (critérios de aprovação)
output: |
  - revisao: Arquivo revisao.md com veredicto, tabela de pontuação, feedback por seção e caminho para aprovação (se rejeitado)
---

# Review Diagnostic

Valida a integridade do relatório financeiro: verifica os cálculos matematicamente, confirma que as recomendações estão ancoradas em dados, identifica inconsistências entre o Executive Summary e o corpo do relatório, e emite veredicto estruturado com feedback acionável.

## Process

1. **Ler quality-criteria.md** completamente antes de qualquer leitura dos relatórios. Os critérios são a fonte de verdade da revisão — não impressões pessoais.

2. **Ler metricas-financeiras.md** e verificar matematicamente as operações principais:
   - Receita Líquida = Receita Bruta - todas as deduções (somar manualmente)
   - Lucro Bruto = Receita Líquida - CMV
   - Margem Bruta = Lucro Bruto / Receita Líquida (calcular e comparar com o relatório)
   - Lucro Líquido = Receita Líquida - Total de Custos
   - Margem Líquida = Lucro Líquido / Receita Líquida
   - CAC = Investimento em marketing / Novos clientes
   - LTV:CAC = LTV / CAC
   - Ponto de equilíbrio = Custos Fixos / Margem de Contribuição
   - Para cada cálculo verificado: marcar ✅ (correto) ou ❌ (incorreto com valor correto indicado)

3. **Ler diagnostico-estrategico.md** e verificar:
   - Executive Summary tem exatamente 3 bullets
   - Cada bullet do ES tem métrica específica + implicação + ação
   - O ES é consistente com o corpo do relatório (sem contradições)
   - Cada problema identificado tem impacto estimado em R$ ou %
   - Tabela de vazamentos está presente com excesso em R$/mês
   - Veredicto de capacidade de escala está presente
   - Plano de ação tem no máximo 5 itens com todos os 5 campos
   - Projeção comparativa presente

4. **Rastrear recomendações a dados:** Para cada item do Plano de Ação, identificar o dado correspondente nas métricas do Felipe. Se não houver dado de suporte, classificar como "Rastreabilidade ausente" e rejeitar.

5. **Verificar consistência interna:** Se o ES diz "operação saudável" mas o diagnóstico indica margem crítica, há contradição — classificar como "Inconsistência entre ES e corpo do relatório".

6. **Calcular pontuação por seção** (1-10 com justificativa):
   - Completude matemática (Felipe): 1-10
   - Integridade dos cálculos (Felipe): 1-10
   - Qualidade do Executive Summary (Gustavo): 1-10
   - Diagnóstico por área (Gustavo): 1-10
   - Plano de ação (Gustavo): 1-10
   - Rastreabilidade das recomendações: 1-10

7. **Emitir veredicto** usando as regras:
   - APROVADO: todas as seções ≥ 7/10 e nenhum critério de rejeição automática ativo
   - APROVADO COM RESSALVAS: média ≥ 7/10 mas alguma seção entre 5-6/10 — listar ressalvas não bloqueantes
   - REJEITADO: qualquer seção < 5/10 OU qualquer critério de rejeição automática ativo

8. **Escrever revisao.md** com o Output Format abaixo. Em caso de REJEITADO, incluir Caminho para Aprovação com lista ordenada de correções necessárias.

## Output Format

```markdown
# Revisão do Diagnóstico Financeiro
**Veredicto:** [APROVADO / APROVADO COM RESSALVAS / REJEITADO]
**Relatório revisado:** [Nome do relatório e período]
**Revisão número:** [N] de 3

---

## Tabela de Pontuação

| Seção | Pontuação | Justificativa |
|-------|-----------|---------------|
| Completude matemática (Felipe) | [N]/10 | [justificativa em 1 frase] |
| Integridade dos cálculos (Felipe) | [N]/10 | [justificativa] |
| Executive Summary (Gustavo) | [N]/10 | [justificativa] |
| Diagnóstico por área (Gustavo) | [N]/10 | [justificativa] |
| Plano de ação (Gustavo) | [N]/10 | [justificativa] |
| Rastreabilidade das recomendações | [N]/10 | [justificativa] |
| **Média** | **[N]/10** | — |

---

## Verificação de Cálculos

| Cálculo | Valor no Relatório | Verificação | Status |
|---------|-------------------|-------------|--------|
| Receita Líquida | R$ [X] | R$ [X calculado] | ✅/❌ |
| Margem Bruta | [%] | [% calculado] | ✅/❌ |
| Margem Líquida | [%] | [% calculado] | ✅/❌ |
| CAC | R$ [X] | R$ [X calculado] | ✅/❌ |
| LTV:CAC | [N]:1 | [N calculado]:1 | ✅/❌ |
| Ponto de Equilíbrio | R$ [X] | R$ [X calculado] | ✅/❌ |

---

## Feedback Detalhado

[Seção de forças e correções necessárias — ver prefixos]

---

## Caminho para Aprovação (apenas se REJEITADO)

1. [Correção 1 — específica e acionável]
2. [Correção 2]
[...]
```

## Output Example

> Use como referência de qualidade, não como template rígido.

```markdown
# Revisão do Diagnóstico Financeiro
**Veredicto:** APROVADO COM RESSALVAS
**Relatório revisado:** Diagnóstico Financeiro — Barns Western — Março 2026
**Revisão número:** 1 de 3

---

## Tabela de Pontuação

| Seção | Pontuação | Justificativa |
|-------|-----------|---------------|
| Completude matemática (Felipe) | 9/10 | Todas as métricas principais presentes; projeção de caixa com premissa declarada |
| Integridade dos cálculos (Felipe) | 10/10 | Todos os cálculos verificados matematicamente — zero divergências |
| Executive Summary (Gustavo) | 9/10 | 3 bullets com métrica + implicação + ação; ES consistente com o corpo |
| Diagnóstico por área (Gustavo) | 8/10 | Todas as áreas analisadas; marketing analisado sem segmentação por canal disponível |
| Plano de ação (Gustavo) | 7/10 | 5 itens com todos os campos; ação #3 poderia ter prazo mais específico |
| Rastreabilidade das recomendações | 9/10 | 4 de 5 recomendações totalmente rastreáveis; ação #5 tem confiança Média declarada |
| **Média** | **8,7/10** | — |

---

## Verificação de Cálculos

| Cálculo | Valor no Relatório | Verificação | Status |
|---------|-------------------|-------------|--------|
| Receita Líquida | R$ 75.513 | R$ 87.400 - R$ 2.710 - R$ 6.992 - R$ 2.185 = R$ 75.513 | ✅ |
| Margem Bruta | 58,0% | R$ 43.798 / R$ 75.513 = 57,99% ≈ 58,0% | ✅ |
| Margem Líquida | 11,0% | R$ 8.306 / R$ 75.513 = 11,0% | ✅ |
| CAC | R$ 66,47 | R$ 18.879 / 284 = R$ 66,47 | ✅ |
| LTV:CAC | 19,5:1 | R$ 1.294 / R$ 66,47 = 19,47 ≈ 19,5 | ✅ |
| Ponto de Equilíbrio | R$ 13.730 | R$ 6.041 / 0,44 = R$ 13.730 | ✅ |

---

## Feedback Detalhado

**Força:** Os 6 cálculos principais foram verificados e estão matematicamente corretos. O Felipe apresentou fórmulas explícitas com valores substituídos — o padrão de transparência está correto.

**Força:** O Executive Summary do Gustavo é lido de forma independente e captura com precisão os 3 pontos mais relevantes: compressão de margem por logística, excelência do unit economics, e risco de caixa sazonal. Consistente com o corpo do relatório.

**Força:** A tabela de Vazamentos de Margem quantifica o excesso em R$/mês — "R$ 3.020/mês de margem perdida" é informação acionável, não abstrata.

**Sugestão (não bloqueante):** A ação #3 do Plano ("Segmentar relatório de marketing por canal") tem prazo de "14 dias" mas não especifica o output esperado — adicionar "Output: planilha com ROAS por canal e recomendação de corte/manutenção" tornaria a ação mais diretamente verificável.

**Sugestão (não bloqueante):** A seção de Projeção de Caixa do Felipe não inclui um cenário de ruptura (o que acontece se receita cair 20% além da tendência). Para uma empresa com runway dependente de sazonalidade, um cenário pessimista seria informativo.

---

**VEREDICTO FINAL: APROVADO COM RESSALVAS** — Os 2 itens não bloqueantes acima são melhorias recomendadas para a próxima rodada, mas não impedem a utilização do diagnóstico para tomada de decisão.
```

## Quality Criteria

- [ ] Veredicto na primeira linha — sem suspense
- [ ] Tabela de pontuação com 6 seções, todas com justificativa em 1 frase
- [ ] Todos os 6 cálculos principais verificados matematicamente com resultado explícito
- [ ] Toda recomendação do plano de ação rastreada a dado específico ou "Rastreabilidade ausente:" declarada
- [ ] Pelo menos 1 "Força:" específico presente (mesmo em REJEITADO)
- [ ] Todo feedback bloqueante com correção específica

## Veto Conditions

Rejeitar e refazer se QUALQUER uma for verdadeira:
1. A verificação matemática não foi feita — Renata reportou "correto" sem calcular os valores independentemente. Aprovação sem verificação é endosso cego e o maior risco de qualidade deste squad
2. Há recomendação no plano de ação sem dado de suporte e Renata não sinalizou "Rastreabilidade ausente" — a inconsistência entre dados e recomendações é o padrão de erro mais perigoso para o usuário final