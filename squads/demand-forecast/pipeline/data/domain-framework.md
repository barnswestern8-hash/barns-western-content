# Domain Framework — Previsão de Demanda para E-commerce

## Framework Operacional em 6 Etapas

### Etapa 1 — Coleta e Validação de Dados
- Receber arquivo CSV/Excel exportado da plataforma de e-commerce
- Verificar período coberto (mínimo 6 meses, ideal 12+ meses)
- Validar campos obrigatórios: data da venda, SKU/produto, quantidade, receita
- Remover devoluções das vendas brutas
- Padronizar nomes de SKU (remover duplicatas, espaços extras, variações de grafia)
- Identificar e documentar outliers (semanas com promoções, datas especiais)

### Etapa 2 — Classificação ABC
- Calcular receita total por SKU no período
- Ordenar por receita decrescente
- Calcular percentual acumulado de receita
- Classificar: A = até 80% acumulado; B = 80-95%; C = 95-100%
- Contar produtos por classe e calcular % de SKUs em cada classe

### Etapa 3 — Análise de Tendência e Sazonalidade
- Calcular vendas mensais por SKU (volume e receita)
- Calcular taxa de crescimento mês-a-mês (MoM) e período-a-período (YoY quando disponível)
- Calcular índice de sazonalidade por mês: Média(mês) / Média(global)
- Identificar picos (índice > 1.2) e vales (índice < 0.8) por produto e por categoria
- Sinalizar produtos em declínio consistente (queda em 3+ meses consecutivos)
- Sinalizar produtos em crescimento consistente (alta em 3+ meses consecutivos)

### Etapa 4 — Projeção de Demanda
- Selecionar método de previsão por tipo de produto:
  - Produtos estáveis (baixo desvio): Média Móvel Ponderada
  - Produtos com crescimento/queda: Tendência Linear + ajuste sazonal
  - Produtos altamente voláteis: Suavização Exponencial (alpha = 0.3-0.5)
- Calcular previsão para 30, 60 e 90 dias
- Ajustar pelo índice de sazonalidade do período correspondente
- Atribuir nível de confiança (Alto/Médio/Baixo) com base na consistência histórica

### Etapa 5 — Planejamento de Estoque
- Calcular velocidade de venda diária por SKU
- Calcular DIO (dias de cobertura) com estoque atual
- Calcular ponto de reposição: (venda diária média × lead time) + estoque de segurança
- Gerar sugestão de quantidade a comprar: Previsão(período) + Estoque de Segurança − Estoque Atual
- Priorizar: comprar primeiro os SKUs Classe A com DIO < 30 dias
- Sinalizar excesso de estoque: SKUs com DIO > 90 dias

### Etapa 6 — Identificação de Oportunidades e Riscos
- **Potencial de Escala:** SKUs com crescimento MoM > 20% E classificação A ou B
- **Risco de Ruptura:** SKUs com DIO < 15 dias E classificação A ou B
- **Risco de Excesso:** SKUs com DIO > 90 dias E tendência de queda
- **Sazonalidade Desfavorável:** SKUs com índice de sazonalidade < 0.7 no próximo mês
- Calcular impacto financeiro estimado de cada risco (receita em risco)

---

## Critérios de Decisão

| Situação | Ação Recomendada |
|----------|-----------------|
| SKU Classe A com DIO < 15 dias | Compra emergencial imediata |
| SKU Classe A com DIO 15-30 dias | Compra prioritária no próximo ciclo |
| SKU Classe B com DIO < 20 dias | Compra no ciclo regular |
| SKU Classe C com DIO < 15 dias | Avaliar se vale manter no portfólio |
| SKU com crescimento MoM > 20% por 2+ meses | Aumentar pedido em 30-50% acima da previsão linear |
| SKU com queda MoM > 15% por 3+ meses | Reduzir estoque, avaliar descontinuação |
| DIO > 90 dias com tendência de queda | Não recomprar; considerar promoção para girar estoque |

---

## KPIs de Saúde do Estoque

| KPI | Alvo | Crítico |
|-----|------|---------|
| DIO médio Classe A | 30-45 dias | < 15 dias ou > 60 dias |
| DIO médio Classe B | 45-60 dias | < 20 dias ou > 90 dias |
| Taxa de ruptura (SKUs zerados) | < 2% do portfólio | > 5% |
| Acurácia de previsão (MAPE) | < 20% | > 35% |
| Giro de estoque anual | > 6x | < 3x |
