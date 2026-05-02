---
execution: inline
agent: felipe-financeiro
inputFile: squads/financial-health/output/contexto-periodo.md
outputFile: squads/financial-health/output/metricas-financeiras.md
---

# Step 2: Análise Financeira — Felipe Financeiro

## Context Loading

Carregue estes arquivos antes de executar:
- `squads/financial-health/output/contexto-periodo.md` — contexto do período e dados financeiros fornecidos pelo usuário no Step 1
- `squads/financial-health/pipeline/data/domain-framework.md` — framework de análise financeira com fórmulas e benchmarks
- `squads/financial-health/pipeline/data/anti-patterns.md` — erros comuns a evitar na análise financeira
- `_opensquad/_memory/company.md` — contexto da Barns Western (modelo de negócio, produtos, canais)

## Instructions

### Process

1. **Ler o contexto do período** em `contexto-periodo.md`. Identificar o período analisado e extrair todos os dados financeiros disponíveis. Se o usuário colou os dados diretamente, usá-los. Se informou o caminho de um arquivo, ler o arquivo.

2. **Mapear os dados disponíveis**: Verificar quais campos estão presentes e quais estão ausentes. Para campos ausentes (ex: número de novos clientes), declarar a premissa que será usada para estimar.

3. **Calcular Receita Líquida**: Descontar taxas de plataforma, gateway de pagamento e devoluções da receita bruta. Apresentar cada dedução com valor absoluto e percentual.

4. **Calcular estrutura de custos**: Para cada categoria de custo, calcular o valor como % da receita líquida. Classificar com ✅ (abaixo do benchmark), ⚠️ (acima do benchmark mas não crítico) ou 🔴 (crítico).

5. **Calcular margens**: Margem bruta (após CMV) e margem líquida (após todos os custos). Apresentar a fórmula com valores substituídos para cada cálculo.

6. **Calcular Unit Economics**: CAC, ticket médio, LTV (com premissa declarada se frequência/vida útil estimados), LTV:CAC, payback period. Se dados de novos clientes não estiverem disponíveis, informar "Dado ausente — CAC indisponível".

7. **Calcular Ponto de Equilíbrio**: Separar custos fixos de variáveis. Calcular PE em R$ de receita e distância de segurança percentual.

8. **Projetar Fluxo de Caixa 30-60-90 dias**: Identificar tendência MoM. Aplicar ajuste sazonal se houver dados históricos ou se o usuário mencionou sazonalidade. Declarar premissa de projeção.

9. **Compilar Alertas**: Listar todas as métricas que ultrapassam thresholds de atenção ou críticos. Classificar como ⚠️ ou 🔴. Listar métricas saudáveis como ✅.

10. **Salvar em `metricas-financeiras.md`** seguindo rigorosamente o Output Format abaixo.

## Output Format

```
# Métricas Financeiras — [Nome da Empresa]
**Período:** [mês/período] | **Fonte:** [origem dos dados]

---

## Receita

| Item | Valor |
|------|-------|
| Receita Bruta | R$ X |
| (-) Devoluções (X%) | R$ -X |
| (-) Taxas plataforma (X%) | R$ -X |
| (-) Taxas gateway (X%) | R$ -X |
| **Receita Líquida** | **R$ X** |

---

## Custos

| Categoria | Valor | % da Receita Líquida | Status |
|-----------|-------|----------------------|--------|
[linhas por categoria de custo]
| **Total de Custos** | **R$ X** | **X%** | — |

---

## Margens

| Métrica | Fórmula | Valor | Benchmark | Status |
|---------|---------|-------|-----------|--------|
| Lucro Bruto | Rec. Líq. - CMV | R$ X | — | — |
| Margem Bruta | Lucro Bruto / Rec. Líq. | X% | 45-65% | [status] |
| Lucro Líquido | Rec. Líq. - Total Custos | R$ X | — | — |
| Margem Líquida | Lucro Líq. / Rec. Líq. | X% | > 15% | [status] |

---

## Unit Economics

| Métrica | Fórmula | Valor | Benchmark | Status |
|---------|---------|-------|-----------|--------|
[linhas de unit economics]

---

## Ponto de Equilíbrio

| Métrica | Valor |
|---------|-------|
| Custos fixos mensais | R$ X |
| Margem de contribuição | X% |
| **PE em receita** | **R$ X** |
| Receita atual (líquida) | R$ X |
| Distância de segurança | [+X% acima do PE] |

---

## Projeção de Caixa — 90 dias

| Mês | Receita Projetada | Custos Projetados | Saldo Projetado |
|-----|-------------------|-------------------|-----------------|
[3 linhas de projeção]

*Premissa: [descrever base da projeção]*

---

## Alertas

[Lista de métricas com status ⚠️ 🔴 ✅]
```

## Output Example

Consulte `pipeline/data/output-examples.md` para um exemplo completo de metricas-financeiras.md com dados reais da Barns Western.

## Veto Conditions

Rejeitar e recalcular se QUALQUER uma for verdadeira:
1. Margem bruta calculada usando receita bruta no denominador em vez de receita líquida — produz margem inflada em 10-15pp
2. Projeção de caixa ausente ou sem premissa declarada — usuário não consegue avaliar risco de caixa dos próximos meses

## Quality Criteria

- [ ] Receita líquida calculada com todas as deduções explicitadas
- [ ] Fórmulas visíveis para margem bruta, margem líquida, CAC, LTV e ponto de equilíbrio
- [ ] Todos os custos com % sobre receita líquida e benchmark de status
- [ ] Projeção de caixa para 3 meses com premissa declarada
- [ ] Seção de Alertas com classificação ⚠️ / 🔴 / ✅ por métrica