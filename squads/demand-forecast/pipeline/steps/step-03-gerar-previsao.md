---
execution: inline
agent: squads/demand-forecast/agents/paulo-previsao
inputFile: squads/demand-forecast/output/analise-dados.md
outputFile: squads/demand-forecast/output/previsao-estoque.csv
---

# Step 03: Gerar Previsão e Plano de Estoque (Paulo Previsão)

## Context Loading

Carregar estes arquivos antes de executar:
- `squads/demand-forecast/output/analise-dados.md` — relatório completo da Ana Analítica: classificação ABC, DIO, velocidade de venda, tendências MoM, índices de sazonalidade e outliers documentados
- `squads/demand-forecast/output/data-input.md` — verificar se o usuário forneceu meta de vendas para o período (campo opcional no checkpoint)
- `squads/demand-forecast/pipeline/data/domain-framework.md` — Etapas 4, 5 e 6 do framework operacional: previsão, planejamento de compras e identificação de riscos
- `squads/demand-forecast/pipeline/data/output-examples.md` — exemplos completos do CSV esperado como referência de qualidade
- `squads/demand-forecast/pipeline/data/quality-criteria.md` — critérios de aprovação que Rita Revisão vai aplicar

## Instructions

### Process

1. **Verificar integridade do input.**
   Confirmar que `analise-dados.md` contém classificação ABC completa e DIO para todos os SKUs Classe A e B. Se algum campo crítico estiver ausente, parar e reportar: "O relatório de Ana Analítica está incompleto — campo [X] ausente para SKU [Y]. Por favor, verifique o Step 02."

2. **Selecionar método de previsão por SKU e gerar previsões.**
   Aplicar o método correto por perfil de demanda conforme o task file `agents/paulo-previsao/tasks/generate-forecast.md`. Calcular previsão para 30, 60 e 90 dias ajustada pelo índice de sazonalidade do período correspondente. Atribuir nível de confiança com justificativa.

3. **Calcular sugestões de compra.**
   Aplicar a fórmula: Compra = Previsão(60d) − Estoque Atual + Estoque de Segurança. Verificar DIO pós-compra para todas as sugestões 🔴 e 🟠. Atribuir prioridade e calcular investimento estimado. Ordenar por prioridade (🔴 primeiro).

4. **Identificar potencial de escala e riscos.**
   Critério de escala: crescimento MoM > 15% em 2+ meses consecutivos + Classe A ou B. Calcular impacto de receita adicional. Identificar todos os riscos com probabilidade e receita em risco (R$).

5. **Análise de gap vs meta (se meta foi fornecida no checkpoint).**
   Se o usuário informou meta de vendas: calcular a soma das previsões de 90 dias de todos os SKUs Classe A e B. Comparar com a meta declarada. Se gap existir: identificar os SKUs com maior potencial de contribuir para fechar o gap (maior crescimento + estoque adequado). Adicionar comentário na seção POTENCIAL DE ESCALA: "Gap vs meta: R$ X — produtos abaixo identificam a contribuição necessária."

6. **Montar, validar e salvar o CSV.**
   Gerar `previsao-estoque.csv` com as 4 seções em ordem. Verificar: nenhum campo obrigatório em branco, cabeçalhos consistentes, valores numéricos limpos (sem texto misturado em colunas de quantidade/R$), ordenação por prioridade dentro de cada seção. Verificar os Veto Conditions do task file antes de salvar.

## Output Format

```csv
# SEÇÃO 1 — PREVISÃO DE DEMANDA
SKU,Produto,Classe,Método,Venda Média/Mês,Índice Saz. {mês},Previsão 30d,Previsão 60d,Previsão 90d,Confiança,Justificativa

# SEÇÃO 2 — SUGESTÃO DE COMPRA
SKU,Produto,Classe,Estoque Atual,DIO Atual,Previsão 60d,Est. Segurança,Compra Sugerida,DIO Pós-Compra,Prioridade,Justificativa,Investimento Est. (R$)

# SEÇÃO 3 — POTENCIAL DE ESCALA
SKU,Produto,Classe,Crescimento MoM,Meses Consecutivos,Ação Recomendada,Impacto Receita Est. (R$/mês)

# SEÇÃO 4 — RISCOS
SKU,Produto,Classe,Tipo de Risco,Probabilidade,Receita em Risco (R$/mês),Ação Recomendada
```

## Output Example

```csv
# SEÇÃO 1 — PREVISÃO DE DEMANDA
SKU,Produto,Classe,Método,Venda Média/Mês,Índice Saz. Mai,Previsão 30d,Previsão 60d,Previsão 90d,Confiança,Justificativa
BW-001,Óculos UV400 Clássico Preto,A,MMP,96 un,0.82,79 un,145 un,198 un,Alto,12 meses histórico consistente; sazonalidade bem mapeada
BW-002,Óculos UV400 Tartaruga,A,Tendência Linear,75 un,0.82,62 un,114 un,155 un,Alto,Crescimento 4 meses consecutivos +15% MoM
BW-007,Boné Structured Country,A,Tendência Linear,24 un,1.25,30 un,58 un,82 un,Médio,Crescimento 3 meses; pico sazonal favorável mai/jun

# SEÇÃO 2 — SUGESTÃO DE COMPRA
SKU,Produto,Classe,Estoque Atual,DIO Atual,Previsão 60d,Est. Segurança,Compra Sugerida,DIO Pós-Compra,Prioridade,Justificativa,Investimento Est. (R$)
BW-002,Óculos UV400 Tartaruga,A,20 un,8 dias,114 un,38 un,132 un,61 dias,🔴 Urgente,Ruptura em menos de 2 semanas; Classe A,R$ 3.960
BW-007,Boné Structured Country,A,11 un,14 dias,58 un,24 un,71 un,89 dias,🟠 Alta,DIO insuficiente para o pico sazonal de maio,R$ 2.840
BW-001,Óculos UV400 Clássico Preto,A,70 un,22 dias,145 un,48 un,123 un,60 dias,🟡 Normal,Reposição preventiva — cobertura de 60 dias,R$ 3.690

# SEÇÃO 3 — POTENCIAL DE ESCALA
SKU,Produto,Classe,Crescimento MoM,Meses Consecutivos,Ação Recomendada,Impacto Receita Est. (R$/mês)
BW-007,Boné Structured Country,A,+22%,3 meses,Aumentar pedido 40% acima da previsão linear; explorar variações de cor para jun/jul,+R$ 2.800
BW-002,Óculos UV400 Tartaruga,A,+15%,4 meses,Garantir estoque robusto pré-vale sazonal para sustentar o crescimento,+R$ 2.100

# SEÇÃO 4 — RISCOS
SKU,Produto,Classe,Tipo de Risco,Probabilidade,Receita em Risco (R$/mês),Ação Recomendada
BW-002,Óculos UV400 Tartaruga,A,Ruptura de estoque,Alta,R$ 2.250,Compra emergencial — 132 unidades com prioridade máxima
BW-007,Boné Structured Country,A,Ruptura antes do pico sazonal,Alta,R$ 900,Compra antes de 15/05 para garantir estoque no pico jun/jul
BW-010,Canivete Inox Cabo Madeira,B,Excesso + queda estrutural,Alta,R$ 480 imobilizados,Não recomprar; avaliar promoção 20-30% para girar o estoque de 110 dias
```

## Veto Conditions

Rejeitar e refazer se QUALQUER condição for verdadeira:
1. Algum SKU Classe A com DIO < 15 dias não aparece na Seção 2 com prioridade 🔴 Urgente
2. Alguma linha da Seção 2 tem DIO Pós-Compra > 90 dias sem nota explicando sazonalidade de pico no período coberto

## Quality Criteria

- [ ] CSV tem exatamente 4 seções com cabeçalhos corretos
- [ ] Toda previsão tem método, ajuste sazonal, confiança e justificativa
- [ ] Sugestão de compra ordenada por prioridade (🔴 primeiro)
- [ ] DIO Pós-Compra calculado e presente para todas as linhas de Seção 2
- [ ] Todo risco tem receita em risco (R$/mês) e ação recomendada específica
- [ ] Nenhum campo obrigatório em branco nas seções 1 e 2
