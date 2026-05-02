---
task: "Gerar Previsão de Demanda e Plano de Estoque"
order: 1
input: |
  - analise-dados.md: Relatório da Ana Analítica com classificação ABC, DIO, velocidade de venda, tendências e índices de sazonalidade
  - meta_vendas: Meta de vendas da empresa para o próximo período (se fornecida no checkpoint)
output: |
  - previsao-estoque.csv: CSV estruturado com 4 seções — Previsão de Demanda, Sugestão de Compra, Potencial de Escala, Riscos
---

# Gerar Previsão de Demanda e Plano de Estoque

Transforma o relatório analítico da Ana Analítica em previsões de vendas (30/60/90 dias) e plano de compras acionável. Gera CSV com quatro seções prontas para importar no Google Sheets da Barns Western.

## Process

1. **Carregar e internalizar o relatório da Ana Analítica.**
   Ler `analise-dados.md` na íntegra. Extrair: classificação ABC de cada SKU, velocidade de venda diária, DIO atual, tendência (Crescimento/Estável/Queda), índice de sazonalidade por mês. Verificar que todos os SKUs Classe A e B têm DIO calculado — se algum estiver faltando, parar e reportar para correção antes de continuar.

2. **Selecionar método de previsão por SKU.**
   - **Média Móvel Ponderada (MMP):** Produtos Classe A e B com tendência Estável. Usar janela de 3 meses, ponderando: mês mais recente ×3, mês anterior ×2, dois meses atrás ×1. Normalizar pelos 6 pesos.
   - **Tendência Linear + Ajuste Sazonal:** Produtos com tendência Crescimento ou Queda consistente (2+ meses). Calcular taxa de crescimento média MoM e projetar linearmente. Ajustar pelo índice de sazonalidade do mês alvo.
   - **Suavização Exponencial (alpha = 0.4):** Produtos com alta volatilidade (desvio padrão > 30% da média). Fórmula: Previsão(t) = 0.4 × Venda(t-1) + 0.6 × Previsão(t-1).
   Para todos os métodos: multiplicar o resultado pelo índice de sazonalidade do mês correspondente ao horizonte de previsão.

3. **Calcular previsões para 3 horizontes.**
   Para cada SKU: gerar previsão para 30, 60 e 90 dias a partir da data da análise. Atribuir nível de confiança: Alto (12+ meses de histórico, tendência consistente), Médio (6-11 meses ou tendência de 2-3 meses), Baixo (menos de 6 meses ou padrão volátil). Documentar a justificativa do nível de confiança em uma frase.

4. **Calcular sugestões de compra.**
   Para cada SKU com DIO < 60 dias ou classificação A/B: Compra Sugerida = Previsão(60 dias) − Estoque Atual + Estoque de Segurança. Estoque de Segurança = Velocidade de Venda Diária × 15 dias (para Classe A) ou × 10 dias (para Classe B) ou × 5 dias (para Classe C). Verificar DIO pós-compra = (Estoque Atual + Compra Sugerida) / Velocidade de Venda — se > 90 dias sem justificativa de pico sazonal, reduzir a compra. Atribuir prioridade: 🔴 Urgente (DIO < 15 dias, Classe A ou B), 🟠 Alta (DIO 15-30 dias, Classe A ou B), 🟡 Normal (DIO 30-60 dias ou Classe C urgente), 🟢 Baixa (DIO 60-90 dias). Calcular investimento estimado usando preço de custo médio declarado (ou 40% do preço de venda como estimativa se custo não fornecido).

5. **Identificar produtos com potencial de escala.**
   Critérios: crescimento MoM > 15% em 2+ meses consecutivos E classificação A ou B. Para cada produto elegível: calcular impacto de receita adicional mensal estimado se o crescimento continuar. Gerar recomendação de ação (aumentar pedido em X%, explorar variações de produto, alocar mais marketing).

6. **Identificar e quantificar riscos.**
   Tipos de risco e critérios: Ruptura (DIO < 15 dias, Classe A ou B), Excesso (DIO > 90 dias, tendência Queda), Sazonalidade Desfavorável (índice < 0.8 no próximo mês, Classe A ou B), Queda Estrutural (queda MoM em 3+ meses consecutivos). Para cada risco: calcular receita em risco = Velocidade de Venda × 30 dias × Preço Médio de Venda. Classificar probabilidade: Alta (gatilho ativo agora), Média (gatilho provável em 30 dias), Baixa (gatilho possível em 60-90 dias).

7. **Montar e validar o CSV de saída.**
   Gerar o CSV com as 4 seções em ordem. Verificar: nenhum campo obrigatório em branco, cabeçalhos corretos em cada seção, valores numéricos sem texto misturado nas colunas de quantidade/R$, prioridades ordenadas por urgência dentro de cada seção (🔴 primeiro). Salvar como `previsao-estoque.csv`.

## Output Format

```csv
# SEÇÃO 1 — PREVISÃO DE DEMANDA
SKU,Produto,Classe,Método,Venda Média/Mês,Índice Saz. {mês},Previsão 30d,Previsão 60d,Previsão 90d,Confiança,Justificativa

# SEÇÃO 2 — SUGESTÃO DE COMPRA
SKU,Produto,Classe,Estoque Atual,DIO Atual,Previsão 60d,Estoque Segurança,Compra Sugerida,DIO Pós-Compra,Prioridade,Justificativa,Investimento Est. (R$)

# SEÇÃO 3 — POTENCIAL DE ESCALA
SKU,Produto,Classe,Crescimento MoM,Meses Consecutivos,Ação Recomendada,Impacto Receita Est. (R$/mês)

# SEÇÃO 4 — RISCOS
SKU,Produto,Classe,Tipo de Risco,Probabilidade,Receita em Risco (R$/mês),Ação Recomendada
```

## Output Example

```csv
# SEÇÃO 1 — PREVISÃO DE DEMANDA
SKU,Produto,Classe,Método,Venda Média/Mês,Índice Saz. Mai,Previsão 30d,Previsão 60d,Previsão 90d,Confiança,Justificativa
BW-001,Óculos UV400 Clássico Preto,A,MMP,96 un,0.82,79 un,145 un,198 un,Alto,12 meses histórico consistente; sazonalidade conhecida
BW-002,Óculos UV400 Tartaruga,A,Tendência Linear,75 un,0.82,62 un,114 un,155 un,Alto,Crescimento 4 meses consecutivos (+15% MoM médio)
BW-007,Boné Structured Country,A,Tendência Linear,24 un,1.25,30 un,58 un,82 un,Médio,Crescimento 3 meses; pico sazonal mai/jun favorável
BW-010,Canivete Inox Cabo Madeira,B,MMP,12 un,0.95,11 un,22 un,33 un,Baixo,Queda consistente 3 meses; histórico de 8 meses apenas

# SEÇÃO 2 — SUGESTÃO DE COMPRA
SKU,Produto,Classe,Estoque Atual,DIO Atual,Previsão 60d,Est. Segurança,Compra Sugerida,DIO Pós-Compra,Prioridade,Justificativa,Investimento Est. (R$)
BW-002,Óculos UV400 Tartaruga,A,20 un,8 dias,114 un,38 un,132 un,61 dias,🔴 Urgente,DIO crítico — ruptura em menos de 2 semanas; Classe A,R$ 3.960
BW-007,Boné Structured Country,A,11 un,14 dias,58 un,24 un,71 un,89 dias,🟠 Alta,Entrada no pico sazonal com DIO insuficiente,R$ 2.840
BW-001,Óculos UV400 Clássico Preto,A,70 un,22 dias,145 un,48 un,123 un,60 dias,🟡 Normal,Reposição preventiva para o período de 60 dias,R$ 3.690

# SEÇÃO 3 — POTENCIAL DE ESCALA
SKU,Produto,Classe,Crescimento MoM,Meses Consecutivos,Ação Recomendada,Impacto Receita Est. (R$/mês)
BW-007,Boné Structured Country,A,+22%,3 meses,Aumentar pedido 40% acima da previsão linear; testar variações de cor para o pico jun/jul,+R$ 2.800
BW-002,Óculos UV400 Tartaruga,A,+15%,4 meses,Garantir estoque robusto antes do vale sazonal jun/jul para manter o crescimento,+R$ 2.100

# SEÇÃO 4 — RISCOS
SKU,Produto,Classe,Tipo de Risco,Probabilidade,Receita em Risco (R$/mês),Ação Recomendada
BW-002,Óculos UV400 Tartaruga,A,Ruptura de estoque,Alta,R$ 2.250,Compra emergencial imediata — 132 unidades
BW-007,Boné Structured Country,A,Ruptura antes do pico sazonal,Alta,R$ 900,Compra prioritária antes de 15/05
BW-010,Canivete Inox Cabo Madeira,B,Excesso + queda estrutural,Alta,R$ 480 imobilizados,Não recomprar; avaliar promoção para girar (DIO: 110 dias)
```

## Quality Criteria

- [ ] CSV tem exatamente 4 seções com cabeçalhos corretos
- [ ] Toda previsão tem método declarado, ajuste sazonal aplicado, confiança e justificativa
- [ ] Toda sugestão de compra tem DIO pós-compra calculado e nenhum ultrapassa 90 dias sem justificativa
- [ ] Sugestões de compra ordenadas por prioridade (🔴 primeiro)
- [ ] Todo risco tem receita em risco quantificada em R$
- [ ] Nenhum campo obrigatório em branco nas seções 1 e 2

## Veto Conditions

Rejeitar e refazer se QUALQUER condição for verdadeira:
1. Alguma sugestão de compra resulta em DIO pós-compra > 90 dias sem justificativa de pico sazonal nos próximos 30 dias
2. Algum SKU Classe A com DIO < 15 dias não aparece na seção de Sugestão de Compra com prioridade 🔴
