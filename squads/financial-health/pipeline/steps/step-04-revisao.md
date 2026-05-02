---
execution: inline
agent: renata-revisao
inputFile: squads/financial-health/output/diagnostico-estrategico.md
outputFile: squads/financial-health/output/revisao.md
---

# Step 4: Revisão do Diagnóstico — Renata Revisão

## Context Loading

Carregue estes arquivos antes de executar:
- `squads/financial-health/output/metricas-financeiras.md` — métricas calculadas pelo Felipe (base para verificação matemática)
- `squads/financial-health/output/diagnostico-estrategico.md` — diagnóstico estratégico do Gustavo (conteúdo principal a revisar)
- `squads/financial-health/pipeline/data/quality-criteria.md` — critérios de aprovação e thresholds de rejeição automática

## Instructions

### Process

1. **Ler quality-criteria.md** completamente. Os critérios são a fonte de verdade — não impressões pessoais.

2. **Verificar matematicamente os cálculos do Felipe** em metricas-financeiras.md:
   - Somar as deduções da receita bruta manualmente e comparar com a Receita Líquida reportada
   - Calcular Margem Bruta = Lucro Bruto / Receita Líquida e comparar com o valor reportado
   - Calcular Margem Líquida = Lucro Líquido / Receita Líquida e comparar
   - Verificar CAC = Investimento em Marketing / Novos Clientes
   - Verificar LTV:CAC = LTV / CAC
   - Verificar Ponto de Equilíbrio = Custos Fixos / Margem de Contribuição
   - Para cada cálculo: marcar ✅ (correto, valor coincide) ou ❌ (incorreto, indicar valor correto)

3. **Verificar integridade do diagnóstico do Gustavo**:
   - ES tem exatamente 3 bullets?
   - Cada bullet do ES tem métrica + implicação + ação?
   - O ES é consistente com o corpo do relatório (sem contradições)?
   - Cada problema tem impacto estimado?
   - Tabela de vazamentos presente com excesso em R$/mês?
   - Veredicto de escala presente?
   - Plano de ação tem máximo 5 itens com todos os 5 campos?
   - Projeção comparativa presente?

4. **Rastrear recomendações**: Para cada item do Plano de Ação, identificar o dado correspondente nas métricas do Felipe. Se não houver dado de suporte, classificar como "Rastreabilidade ausente" e incluir no feedback.

5. **Pontuar cada seção** de 1-10 com justificativa em 1 frase.

6. **Emitir veredicto**:
   - APROVADO: todas as seções ≥ 7/10 e nenhum critério de rejeição automática ativo
   - APROVADO COM RESSALVAS: média ≥ 7 mas alguma seção entre 5-6
   - REJEITADO: qualquer seção < 5 OU critério de rejeição automática ativo (cálculo errado, recomendação sem dados, projeção ausente)

7. **Salvar em `revisao.md`** com Output Format abaixo. Em REJEITADO: incluir Caminho para Aprovação com lista numerada de correções obrigatórias.

## Output Format

```
# Revisão do Diagnóstico Financeiro
**Veredicto:** [APROVADO / APROVADO COM RESSALVAS / REJEITADO]
**Relatório:** [nome e período]
**Revisão número:** [N] de 3

---

## Tabela de Pontuação

| Seção | Pontuação | Justificativa |
|-------|-----------|---------------|
| Completude matemática (Felipe) | X/10 | [frase] |
| Integridade dos cálculos (Felipe) | X/10 | [frase] |
| Executive Summary (Gustavo) | X/10 | [frase] |
| Diagnóstico por área (Gustavo) | X/10 | [frase] |
| Plano de ação (Gustavo) | X/10 | [frase] |
| Rastreabilidade das recomendações | X/10 | [frase] |
| **Média** | **X/10** | — |

---

## Verificação de Cálculos

| Cálculo | Valor Reportado | Verificação | Status |
|---------|----------------|-------------|--------|
| Receita Líquida | R$ X | R$ X (calculado) | ✅/❌ |
| Margem Bruta | X% | X% (calculado) | ✅/❌ |
| Margem Líquida | X% | X% (calculado) | ✅/❌ |
| CAC | R$ X | R$ X (calculado) | ✅/❌ |
| LTV:CAC | X:1 | X:1 (calculado) | ✅/❌ |
| Ponto de Equilíbrio | R$ X | R$ X (calculado) | ✅/❌ |

---

## Feedback Detalhado

[Seções de Força:, Requer correção:, Sugestão (não bloqueante):]

---

## Caminho para Aprovação
(apenas se REJEITADO)

1. [Correção específica]
2. [Correção específica]
```

## Output Example

Consulte `pipeline/data/output-examples.md` ou o Output Example no arquivo de task `agents/renata-revisao/tasks/review-diagnostic.md` para referência de qualidade.

## Veto Conditions

Rejeitar e refazer a revisão se QUALQUER uma for verdadeira:
1. Verificação matemática não foi feita — Renata reportou status sem calcular os valores independentemente. Aprovação sem verificação é endosso cego
2. Alguma recomendação do plano de ação não tem dado de suporte e Renata não sinalizou "Rastreabilidade ausente" — inconsistência entre dados e recomendações não detectada na revisão

## Quality Criteria

- [ ] Veredicto na primeira linha do documento
- [ ] Tabela de pontuação com 6 seções, todas com justificativa
- [ ] Todos os 6 cálculos principais verificados com resultado explícito
- [ ] Toda recomendação do plano de ação rastreada a dado ou "Rastreabilidade ausente:" declarada
- [ ] Pelo menos 1 "Força:" específico presente
- [ ] Em caso de REJEITADO: Caminho para Aprovação com correções numeradas e específicas