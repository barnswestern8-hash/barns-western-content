# Output Examples: Análise de Saúde Financeira

## Exemplo 1: Relatório de Métricas Financeiras (Felipe Financeiro)

```markdown
# Métricas Financeiras — Barns Western
**Período:** Março 2026 | **Fonte:** planilha-marco-2026.csv

---

## Receita

| Item | Valor |
|------|-------|
| Receita Bruta | R$ 87.400 |
| (-) Devoluções (3,1%) | R$ -2.710 |
| (-) Taxas plataforma (8%) | R$ -6.992 |
| (-) Taxas gateway (2,5%) | R$ -2.185 |
| **Receita Líquida** | **R$ 75.513** |

---

## Custos

| Categoria | Valor | % da Receita Líquida |
|-----------|-------|----------------------|
| CMV (custo dos produtos) | R$ 31.715 | 42,0% |
| Frete de saída | R$ 10.572 | 14,0% ⚠️ |
| Marketing / Tráfego pago | R$ 18.879 | 25,0% |
| Equipe (operação) | R$ 4.531 | 6,0% |
| Ferramentas e SaaS | R$ 1.510 | 2,0% |
| **Total de Custos** | **R$ 67.207** | **89,0%** |

---

## Margens

| Métrica | Valor |
|---------|-------|
| Lucro Bruto | R$ 43.798 |
| **Margem Bruta** | **58,0%** ✅ |
| Lucro Líquido | R$ 8.306 |
| **Margem Líquida** | **11,0%** ⚠️ |

---

## Unit Economics

| Métrica | Valor | Status |
|---------|-------|--------|
| Novos clientes no período | 284 | — |
| Investimento em marketing | R$ 18.879 | — |
| **CAC** | **R$ 66,47** | ⚠️ Atenção |
| Ticket médio | R$ 307,75 | — |
| Frequência anual estimada | 2,1x | — |
| Vida útil estimada | 2 anos | — |
| **LTV** | **R$ 1.292,55** | — |
| **Razão LTV:CAC** | **19,4:1** | ✅ Excelente |
| **Payback period** | **2,5 meses** | ✅ Excelente |

---

## Ponto de Equilíbrio

| Métrica | Valor |
|---------|-------|
| Custos fixos mensais | R$ 6.041 |
| Margem de contribuição | 44,0% |
| **PE em receita** | **R$ 13.729** |
| Receita atual vs PE | +450% acima do PE |
| Distância de segurança | ✅ Confortável |

---

## Projeção de Caixa — 90 dias

| Mês | Receita Projetada | Custos Projetados | Saldo Projetado |
|-----|-------------------|-------------------|-----------------|
| Abril 2026 | R$ 83.530 | R$ 74.350 | R$ +9.180 |
| Maio 2026 | R$ 79.850 | R$ 71.120 | R$ +8.730 |
| Junho 2026 | R$ 76.400 | R$ 68.050 | R$ +8.350 |

*Projeção baseada em tendência de -4,5% MoM (sazonalidade pós-carnaval)*

---

## Alertas

⚠️ **ATENÇÃO** — Custo de frete em 14,0% da receita líquida (benchmark: < 10%)
⚠️ **ATENÇÃO** — Margem líquida de 11,0% (abaixo do ideal de 15%+ para e-commerce escalado)
✅ **POSITIVO** — LTV:CAC de 19,4:1 muito acima do benchmark de 3:1
✅ **POSITIVO** — Ponto de equilíbrio confortavelmente superado (+450%)
```

---

## Exemplo 2: Diagnóstico Estratégico (Gustavo Gestor)

```markdown
# Diagnóstico Estratégico — Barns Western
**Referência:** Métricas de Março 2026

---

## Executive Summary

- **A operação é lucrativa mas a margem líquida de 11% está sendo comprimida pelo custo logístico de 14%**, que é o principal vazamento financeiro do período. Sem correção, a margem tende a cair para < 8% até Junho conforme a sazonalidade reduz o volume.
- **O unit economics é excepcional (LTV:CAC de 19,4:1)** — a máquina de aquisição está funcionando com eficiência acima do mercado. Há capacidade de escalar o marketing com segurança dentro dos limites indicados.
- **Ação imediata recomendada:** renegociar contratos de frete e auditar os 5 produtos de maior volume para identificar quais têm frete subsidiando margem negativa.

---

## Situação Atual

**Receita:** A Barns Western faturou R$ 87.400 brutos em Março, resultando em R$ 75.513 de receita líquida após devoluções e taxas. A taxa de devolução de 3,1% está dentro do aceitável para acessórios (benchmark < 5%).

**Margem Bruta (58,0%) — ✅ Saudável:**
A margem bruta de 58% está dentro da faixa ideal para moda/acessórios (45-65%). O CMV está controlado. O problema não está no custo do produto.

**Margem Líquida (11,0%) — ⚠️ Compressão visível:**
A margem líquida de 11% é positiva, mas está sendo comprimida principalmente pelo frete (14% da receita) e pelo marketing (25% da receita). A combinação dos dois consome 39% da receita antes de qualquer custo operacional.

**Logística — ⚠️ Problema prioritário:**
Frete em 14% da receita líquida é 40% acima do benchmark de 10%. Em termos absolutos: R$ 10.572 pagos em frete. Cada ponto percentual acima de 10% representa R$ 755 de margem perdida por mês.

---

## Problemas Identificados

1. **Custo logístico excessivo (14% vs benchmark 10%)** — Impacto direto: -R$ 3.020/mês de margem perdida vs benchmark. Prioridade: ALTA
2. **Marketing em 25% sem segmentação por canal** — Impossível saber quais canais têm ROI positivo e quais estão queimando dinheiro. Prioridade: ALTA
3. **Margem líquida em queda sazonal previsível** — Sem intervenção, Junho pode fechar com margem líquida < 8%, comprometendo capital para reposição de estoque. Prioridade: MÉDIA

---

## Vazamentos de Margem

| Área | Custo Atual | Benchmark | Excesso Estimado |
|------|-------------|-----------|-----------------|
| Frete de saída | 14,0% | 10,0% | R$ -3.020/mês |
| Marketing sem segmentação | 25,0% | 20% (com ROI) | R$ -3.776 em risco |
| **Total de vazamento estimado** | | | **R$ -6.796/mês** |

---

## Capacidade de Escala

**Veredicto: ESCALA POSSÍVEL com limitações**

O LTV:CAC de 19,4:1 e o payback de 2,5 meses indicam que a máquina de aquisição é altamente eficiente. É possível aumentar o investimento em marketing sem comprometer o caixa — **mas somente após resolver o problema logístico**. Escalar com frete em 14% ampliará o vazamento proporcionalmente.

**Limite recomendado de investimento em marketing:** até 22% da receita projetada (R$ +R$ 3.000 adicionais em Abril, monitorado).

---

## Plano de Ação — Priorizado

| # | Ação | Impacto Esperado | Confiança | Esforço | Prazo |
|---|------|-----------------|-----------|---------|-------|
| 1 | Renegociar contrato de frete (cotação com 3 transportadoras) | +R$ 1.500-3.000/mês de margem | Alta | Baixo | 7 dias |
| 2 | Auditar margem por produto nos top-10 SKUs por volume | Identificar produtos vampiros para descontinuar ou reajustar preço | Alta | Baixo | 3 dias |
| 3 | Segmentar relatório de marketing por canal (Meta Ads vs orgânico) | Identificar canais com ROI < 3:1 para corte ou otimização | Alta | Médio | 14 dias |
| 4 | Criar reserva de caixa para sazonalidade (Jun-Jul) | Evitar comprometer capital de giro na baixa temporada | Alta | Baixo | Imediato |
| 5 | Testar aumento de R$ 3.000 em marketing de desempenho após frete resolvido | Escalar aquisição com margem saudável | Média | Baixo | 30 dias |

---

## Alocação de Capital Recomendada (Abril 2026)

- **Reposição de estoque (produtos de alta margem):** R$ 3.500 (42%)
- **Reserva de caixa / sazonalidade:** R$ 2.000 (24%)
- **Marketing (manutenção — sem aumento até frete resolvido):** R$ 2.000 (24%)
- **Outros operacionais:** R$ 806 (10%)
- **NÃO retirar como pró-labore em Abril** — preservar caixa para ciclo de baixa sazonalidade

---

## Projeção com e sem Ações Recomendadas

| Cenário | Margem Líquida Jun/26 | Lucro Líquido Jun/26 |
|---------|----------------------|----------------------|
| Sem ações (tendência atual) | ~7,5% | ~R$ 5.700 |
| Com ações (frete + segmentação) | ~13,5% | ~R$ 10.300 |
| **Diferença** | **+6pp** | **+R$ 4.600/mês** |
```