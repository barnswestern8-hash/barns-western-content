# Output Examples — Previsão de Demanda Barns Western

## Exemplo 1: Relatório de Análise de Dados (Ana Analítica)

```
# Análise de Vendas — Barns Western
Período: 01/10/2025 a 31/03/2026 (6 meses)
Gerado em: 2026-04-30

## Resumo Executivo
- **Total de SKUs analisados:** 38 produtos ativos
- **Receita total no período:** R$ 142.800
- **Produtos Classe A (top 80% do faturamento):** 8 SKUs (21% do portfólio)
- **SKUs em risco de ruptura (DIO < 15 dias):** 3 produtos — receita semanal em risco: R$ 4.200
- **SKUs com excesso (DIO > 90 dias):** 5 produtos — capital imobilizado estimado: R$ 8.600

## Classificação ABC

| SKU | Produto | Receita 6m | % Acum | Classe | Venda/Dia | DIO Atual |
|-----|---------|-----------|--------|-------|-----------|----------|
| BW-001 | Óculos UV400 Clássico Preto | R$ 28.400 | 19,9% | A | 3,2 un | 22 dias |
| BW-002 | Óculos UV400 Tartaruga | R$ 22.100 | 35,3% | A | 2,5 un | 8 dias ⚠️ |
| BW-003 | Cinto Couro Trançado 40mm | R$ 14.600 | 45,5% | A | 1,6 un | 31 dias |
| BW-004 | Óculos UV400 Espelhado Dourado | R$ 12.300 | 54,1% | A | 1,4 un | 45 dias |
| BW-005 | Fivela Rodeo Bull | R$ 9.800 | 60,9% | A | 1,1 un | 27 dias |
| BW-006 | Bracelete de Cobre Triplo | R$ 8.200 | 66,6% | A | 0,9 un | 38 dias |
| BW-007 | Boné Structured Country | R$ 7.100 | 71,6% | A | 0,8 un | 14 dias ⚠️ |
| BW-008 | Corrente Aço Inox 60cm | R$ 5.900 | 75,7% | A | 0,7 un | 29 dias |
| BW-009 | Cinto Couro Liso 35mm | R$ 4.400 | 78,8% | B | 0,5 un | 56 dias |
| BW-010 | Canivete Inox Cabo Madeira | R$ 3.200 | 81,0% | B | 0,4 un | 110 dias 🔴 |
...

## Tendências por Categoria

| Categoria | MoM Dez/Jan | MoM Jan/Fev | MoM Fev/Mar | Tendência |
|-----------|------------|------------|------------|---------|
| Óculos UV400 | +12% | +8% | +15% | 📈 Crescimento |
| Cintos e Fivelas | +3% | +1% | -2% | ➡️ Estável |
| Bonés | -5% | +18% | +22% | 📈 Crescimento |
| Braceletes/Pulseiras | -8% | -12% | -9% | 📉 Queda |
| Canivetes | -3% | -6% | -8% | 📉 Queda |

## Índice de Sazonalidade (histórico 2025)

| Mês | Óculos UV400 | Cintos/Fivelas | Bonés |
|-----|-------------|--------------|------|
| Jan | 1.35 (pico) | 0.90 | 0.95 |
| Fev | 1.28 (pico) | 0.88 | 0.92 |
| Mar | 1.15 | 0.95 | 1.02 |
| Abr | 1.00 | 1.05 | 1.18 |
| Mai | 0.82 | 1.12 | 1.25 (pico) |
| Jun | 0.71 (vale) | 1.20 | 1.30 (pico) |
| Jul | 0.68 (vale) | 1.18 | 1.28 |
| Ago | 0.75 | 1.10 | 1.20 |
| Set | 0.90 | 1.05 | 1.15 |
| Out | 1.05 | 1.00 | 1.00 |
| Nov | 1.25 (pico) | 0.95 | 0.98 |
| Dez | 1.45 (pico) | 0.92 | 0.90 |
```

---

## Exemplo 2: Relatório de Previsão e Plano de Compras (Paulo Previsão)

```csv
# SEÇÃO 1 — PREVISÃO DE DEMANDA
SKU,Produto,Classe,Venda Média/Mês,Índice Sazonal Mai,Previsão 30 dias,Previsão 60 dias,Previsão 90 dias,Confiança,Justificativa
BW-001,Óculos UV400 Clássico Preto,A,96,0.82,79 un,145 un,198 un,Alto,"12 meses de histórico consistente; sazonalidade baixa em mai/jun mas recupera em jul"
BW-002,Óculos UV400 Tartaruga,A,75,0.82,62 un,114 un,155 un,Alto,"Crescimento forte (+15% MoM); sazonalidade desfavorável atenua crescimento no curto prazo"
BW-007,Boné Structured Country,A,24,1.25,30 un,58 un,82 un,Médio,"Crescimento recente (+22% MoM) mas histórico de apenas 4 meses de alta; índice de pico para maio"

# SEÇÃO 2 — SUGESTÃO DE COMPRA
SKU,Produto,Classe,Estoque Atual,DIO Atual,Previsão 60 dias,Compra Sugerida (un),Prioridade,Justificativa,Investimento Estimado
BW-002,Óculos UV400 Tartaruga,A,20 un,8 dias,114 un,120 un,🔴 URGENTE,"DIO crítico de 8 dias; ruptura em menos de 2 semanas; produto Classe A",R$ 3.600
BW-007,Boné Structured Country,A,11 un,14 dias,58 un,60 un,🟠 ALTA,"DIO de 14 dias com entrada no pico sazonal de maio/junho; crescimento acelerado",R$ 2.400
BW-001,Óculos UV400 Clássico Preto,A,70 un,22 dias,145 un,100 un,🟡 NORMAL,"Cobertura ok mas abaixo do ideal para próximos 60 dias; reposição preventiva",R$ 3.000

# SEÇÃO 3 — PRODUTOS COM POTENCIAL DE ESCALA
SKU,Produto,Classe,Crescimento MoM,Meses Consecutivos Crescendo,Ação Recomendada,Impacto de Receita Estimado
BW-007,Boné Structured Country,A,+22%,3 meses,Aumentar pedido em 40% acima da previsão linear + investir em variações de cor,+R$ 2.800/mês se mantiver tendência
BW-002,Óculos UV400 Tartaruga,A,+15%,4 meses,Garantir estoque robusto antes do período de menor sazonalidade (jun/jul) para aproveitar crescimento,+R$ 2.100/mês
BW-003,Cinto Couro Trançado 40mm,A,+8%,5 meses,Crescimento modesto mas consistente; manter reposição regular sem over-stock,+R$ 900/mês

# SEÇÃO 4 — RISCOS
SKU,Produto,Classe,Tipo de Risco,Probabilidade,Receita em Risco (mensal),Ação Recomendada
BW-002,Óculos UV400 Tartaruga,A,Ruptura de estoque,Alta,R$ 2.250,Compra emergencial imediata — 120 unidades
BW-010,Canivete Inox Cabo Madeira,B,Excesso de estoque + queda de demanda,Alta,R$ 480 imobilizados,Não recomprar; avaliar promoção para girar estoque (DIO: 110 dias)
BW-007,Boné Structured Country,A,Ruptura de estoque,Alta,R$ 900,Compra prioritária antes do pico sazonal de maio
BW-009,Cinto Couro Liso 35mm,B,Sazonalidade desfavorável em fev/mar,Média,R$ 320,Reduzir reposição em 30% no próximo ciclo
```
