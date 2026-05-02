---
task: "Processar Dados de Vendas Shopify"
order: 1
input: |
  - data_input.md: Respostas do checkpoint — modo (API ou CSV), período, observações
  - shopify-config.md: Credenciais da API (SHOPIFY_STORE_URL, SHOPIFY_ACCESS_TOKEN) — usado apenas no modo API
  - sales_report_path: Caminho para CSV de Vendas (apenas no modo CSV manual)
  - inventory_report_path: Caminho para CSV de Estoque (apenas no modo CSV manual)
  - analysis_period: Período de análise declarado pelo usuário
  - notes: Observações sobre outliers, promoções e eventos especiais no período
output: |
  - analise-dados.md: Relatório analítico com classificação ABC, DIO, tendências, sazonalidade e outliers documentados
---

# Processar Dados de Vendas Shopify

Coleta dados do Shopify via API ou CSV manual, limpa os dados, aplica classificação ABC, calcula DIO por SKU, detecta tendências e sazonalidade, e documenta outliers. O output é o relatório `analise-dados.md` que alimenta Paulo Previsão na etapa seguinte.

## Process

1. **Coletar dados do Shopify — API ou CSV.**

   **Modo API (se SHOPIFY_STORE_URL e SHOPIFY_ACCESS_TOKEN configurados em shopify-config.md):**
   - Usar `web_fetch` para chamar a API Admin do Shopify com o token no header `X-Shopify-Access-Token`
   - Buscar pedidos pagos no período: endpoint `/admin/api/2025-01/orders.json` com parâmetros `status=any`, `financial_status=paid`, `created_at_min`, `created_at_max`, `limit=250` (paginar se necessário)
   - Buscar níveis de estoque: endpoint `/admin/api/2025-01/inventory_levels.json`
   - Buscar produtos e variantes: endpoint `/admin/api/2025-01/products.json`
   - Transformar os dados JSON retornados na mesma estrutura de tabela que o CSV manual usa
   - Se a API retornar erro 401: informar que o token é inválido e pedir que o usuário verifique shopify-config.md
   - Se a API retornar erro 403: informar que faltam permissões e listar quais escopos ativar no app

   **Modo CSV manual (se o usuário forneceu arquivos):**
   - Abrir o CSV de vendas e o CSV de estoque nos caminhos informados
   - Verificar que o arquivo de vendas contém as colunas: data, SKU/produto, quantidade vendida, receita
   - Verificar que o arquivo de estoque contém: SKU/produto, quantidade em estoque
   - Documentar campos ausentes ou inconsistentes. Se arquivos ilegíveis, reportar o erro com instrução de como reexportar do Shopify

2. **Limpar os dados de vendas.**
   Filtrar apenas o período declarado pelo usuário. Remover linhas de devoluções, cancelamentos e pedidos com status "reembolsado" (identificados no Shopify por quantidade negativa ou tipo de transação "refund"). Padronizar nomes de SKU: remover espaços extras, unificar variações de grafia, agrupar variantes do mesmo produto quando aplicável. Documentar quantas linhas foram removidas e o motivo.

3. **Aplicar Classificação ABC.**
   Calcular receita total por SKU no período limpo. Ordenar por receita decrescente. Calcular percentual acumulado de receita. Classificar: A = até 80% acumulado; B = 80% a 95%; C = 95% a 100%. Registrar na tabela: SKU, produto, receita total, % do total, % acumulado, classe.

4. **Calcular velocidade de venda e DIO.**
   Para cada SKU: Velocidade de Venda (un/dia) = Total de Unidades Vendidas no Período / Número de Dias do Período. Cruzar com o estoque atual do relatório de inventário. DIO = Estoque Atual / Velocidade de Venda. Sinalizar com ⚠️ qualquer DIO < 15 dias (Classe A ou B) e 🔴 qualquer DIO > 90 dias com tendência de queda.

5. **Detectar tendências mês a mês.**
   Agrupar vendas por mês e por SKU. Calcular variação percentual mês a mês (MoM). Classificar tendência: Crescimento (alta em 2+ meses consecutivos), Queda (baixa em 2+ meses consecutivos), Estável (variação < 10% nos últimos 2 meses). Para categorias com múltiplos SKUs, calcular tendência consolidada da categoria.

6. **Calcular índice de sazonalidade.**
   Para cada mês disponível no histórico: Índice(mês) = Média de vendas naquele mês (todos os anos disponíveis) / Média mensal global do período. Calcular apenas para meses com 2+ ocorrências históricas. Para meses com apenas 1 ocorrência, marcar como "dados insuficientes".

7. **Identificar e documentar outliers.**
   Usando as notas do usuário (promoções, datas especiais, influencers) e análise estatística (semanas com variação > 2.5x a média): identificar pontos de dado atípicos. Para cada outlier: registrar SKU, data, valor observado, valor esperado (média do período), causa provável, e se foi incluído ou excluído da média. Outliers de promoção conhecida podem ser excluídos da média com documentação — outliers sem causa identificada ficam incluídos com flag.

8. **Montar o relatório `analise-dados.md`.**
   Seguir exatamente o formato de output abaixo. Verificar completude antes de salvar: 100% dos SKUs classificados, DIO calculado para todos os A e B, tendências classificadas, outliers documentados.

## Output Format

```markdown
# Análise de Vendas — Barns Western
Período: {data_inicio} a {data_fim} ({N} meses)
Gerado em: {YYYY-MM-DD}
Fonte: Shopify — Relatório de Vendas + Relatório de Estoque

## Resumo Executivo
- **Total de SKUs analisados:** {N} produtos ativos
- **Receita total no período:** R$ {valor}
- **Registros removidos (devoluções/cancelamentos):** {N} linhas
- **Produtos Classe A:** {N} SKUs ({%} do portfólio = {%} do faturamento)
- **Produtos Classe B:** {N} SKUs
- **Produtos Classe C:** {N} SKUs
- **SKUs em risco de ruptura (DIO < 15 dias, Classe A ou B):** {N} — receita semanal em risco: R$ {valor}
- **SKUs com excesso (DIO > 90 dias):** {N} — capital imobilizado estimado: R$ {valor}

## Classificação ABC

| SKU | Produto | Receita {período} | % Total | % Acumulado | Classe | Un Vendidas | Venda/Dia | Estoque Atual | DIO |
|-----|---------|------------------|---------|------------|-------|-------------|-----------|--------------|-----|
| ... | ... | R$ ... | ...% | ...% | A/B/C | ... | ... un | ... un | ... dias |

## Tendências por Categoria

| Categoria | MoM {mês-2}/{mês-1} | MoM {mês-1}/{mês} | Tendência |
|-----------|---------------------|------------------|---------|
| ... | ...% | ...% | 📈/📉/➡️ |

## Índice de Sazonalidade

| Mês | {Categoria 1} | {Categoria 2} | ... | Observação |
|-----|--------------|--------------|-----|-----------|
| Jan | {índice} | {índice} | ... | Dados insuficientes / OK |

## Outliers Documentados

| SKU | Data/Semana | Vendas Observadas | Vendas Esperadas | Causa Provável | Tratamento |
|-----|------------|------------------|-----------------|---------------|-----------|
| ... | ... | ... un | ... un | Promoção / Influencer / Desconhecido | Incluído / Excluído da média |

## Metodologia
- Período: {data_inicio} a {data_fim}
- Fonte de vendas: Shopify — Relatório de Vendas exportado em {data_export}
- Fonte de estoque: Shopify — Relatório de Inventário exportado em {data_export}
- Devoluções removidas: {N} registros
- Outliers tratados: {N} — ver seção acima
- Meses com índice sazonal insuficiente (<2 ocorrências): {lista de meses}
```

## Output Example

```markdown
# Análise de Vendas — Barns Western
Período: 01/10/2025 a 31/03/2026 (6 meses)
Gerado em: 2026-04-30
Fonte: Shopify — Relatório de Vendas + Relatório de Estoque

## Resumo Executivo
- **Total de SKUs analisados:** 38 produtos ativos
- **Receita total no período:** R$ 142.800
- **Registros removidos (devoluções/cancelamentos):** 47 linhas (3,1% das transações)
- **Produtos Classe A:** 8 SKUs (21% do portfólio = 75,7% do faturamento)
- **Produtos Classe B:** 11 SKUs (29% do portfólio = 19,3% do faturamento)
- **Produtos Classe C:** 19 SKUs (50% do portfólio = 5% do faturamento)
- **SKUs em risco de ruptura (DIO < 15 dias, Classe A ou B):** 3 — receita semanal em risco: R$ 4.200
- **SKUs com excesso (DIO > 90 dias):** 5 — capital imobilizado estimado: R$ 8.600

## Classificação ABC

| SKU | Produto | Receita 6m | % Total | % Acum | Classe | Un Vendidas | Venda/Dia | Estoque | DIO |
|-----|---------|-----------|---------|--------|-------|-------------|-----------|---------|-----|
| BW-001 | Óculos UV400 Clássico Preto | R$ 28.400 | 19,9% | 19,9% | A | 568 | 3,2 | 70 un | 22 dias |
| BW-002 | Óculos UV400 Tartaruga | R$ 22.100 | 15,5% | 35,3% | A | 442 | 2,5 | 20 un | 8 dias ⚠️ |
| BW-010 | Canivete Inox Cabo Madeira | R$ 3.200 | 2,2% | 81,0% | B | 36 | 0,2 | 22 un | 110 dias 🔴 |

## Tendências por Categoria

| Categoria | MoM Jan/Fev | MoM Fev/Mar | MoM Mar/Abr | Tendência |
|-----------|------------|------------|------------|---------|
| Óculos UV400 | +8% | +15% | +12% | 📈 Crescimento |
| Bonés | +18% | +22% | +19% | 📈 Crescimento |
| Braceletes/Pulseiras | -12% | -9% | -11% | 📉 Queda |
| Canivetes | -6% | -8% | -7% | 📉 Queda |

## Outliers Documentados

| SKU | Semana | Obs | Esperado | Causa | Tratamento |
|-----|--------|-----|----------|-------|-----------|
| BW-001 | 20-26 Nov 2025 | 89 un | 22 un | Black Friday + promoção 2x1 | Excluído da média base |
| BW-007 | 10-16 Fev 2026 | 45 un | 18 un | Influencer @sertanejeiro.official | Excluído da média base |

## Metodologia
- Período: 01/10/2025 a 31/03/2026
- Fonte de vendas: Shopify export 2026-04-30
- Fonte de estoque: Shopify Inventory export 2026-04-30
- Devoluções removidas: 47 registros
- Outliers excluídos da média: 2 eventos (Black Friday e influencer)
- Meses com índice sazonal insuficiente: nenhum (12 meses de histórico disponíveis)
```

## Quality Criteria

- [ ] 100% dos SKUs ativos classificados como A, B ou C — nenhum sem classificação
- [ ] Devoluções removidas e número de registros removidos documentado
- [ ] DIO calculado para todos os SKUs Classe A e B com estoque atual do Shopify
- [ ] Tendências classificadas (Crescimento/Estável/Queda) para cada SKU com base em MoM de 2+ meses
- [ ] Outliers documentados com data, causa provável e tratamento
- [ ] Índice de sazonalidade calculado apenas para meses com 2+ ocorrências históricas
- [ ] Período e fontes de dados declarados na seção Metodologia

## Veto Conditions

Rejeitar e refazer se QUALQUER condição for verdadeira:
1. Algum SKU Classe A ou B está sem DIO calculado (campo em branco ou "N/A" sem justificativa)
2. Devoluções não foram removidas — detectável se o número de registros removidos for 0 e houver transações do tipo "refund" no arquivo original
