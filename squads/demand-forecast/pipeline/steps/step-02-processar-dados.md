---
execution: subagent
agent: squads/demand-forecast/agents/ana-analitica
inputFile: squads/demand-forecast/output/data-input.md
outputFile: squads/demand-forecast/output/analise-dados.md
model_tier: powerful
---

# Step 02: Processar Dados de Vendas (Ana Analítica)

## Context Loading

Carregar estes arquivos antes de executar:
- `squads/demand-forecast/output/data-input.md` — respostas do checkpoint: caminhos dos arquivos Shopify, período de análise, observações sobre outliers e meta de vendas opcional
- `squads/demand-forecast/pipeline/data/research-brief.md` — metodologias de classificação ABC, DIO, sazonalidade e velocidade de venda
- `squads/demand-forecast/pipeline/data/domain-framework.md` — framework operacional em 6 etapas para processamento de dados
- `squads/demand-forecast/pipeline/data/anti-patterns.md` — erros comuns a evitar no processamento (devoluções, outliers, uniformidade de SKUs)
- Os arquivos CSV do Shopify nos caminhos informados pelo usuário no checkpoint

## Instructions

### Process

1. **Ler o `data-input.md` e localizar os arquivos.**
   Extrair os caminhos do Relatório de Vendas e do Relatório de Estoque. Abrir ambos os CSVs. Se algum caminho for inválido ou o arquivo ilegível, reportar o erro ao usuário com instrução clara: "O arquivo em [caminho] não pôde ser aberto. Por favor, verifique o caminho e certifique-se de que o arquivo é um CSV exportado do Shopify."

2. **Limpar e validar os dados de vendas.**
   Verificar colunas obrigatórias (data, SKU/produto, quantidade, receita). Filtrar apenas o período declarado. Remover todas as linhas de devoluções, cancelamentos e reembolsos (quantidade negativa ou tipo "refund"). Registrar o número de linhas removidas. Padronizar nomes de SKU. Documentar qualquer campo inconsistente encontrado.

3. **Processar os dados seguindo o framework operacional.**
   Executar todas as etapas do `domain-framework.md`:
   - Etapa 2: Classificação ABC por receita
   - Etapa 3: Tendências MoM e índice de sazonalidade
   - Etapa 4: não aplicável neste step (Paulo faz a previsão)
   - Etapa 5: DIO por SKU usando o estoque atual do relatório de inventário
   - Etapa 6: identificar outliers com as notas fornecidas pelo usuário

4. **Gerar o relatório `analise-dados.md`.**
   Seguir exatamente o formato especificado no arquivo de task `agents/ana-analitica/tasks/process-sales-data.md`. Incluir todas as seções: Resumo Executivo, Classificação ABC, Tendências por Categoria, Índice de Sazonalidade, Outliers Documentados, Metodologia.

5. **Verificar completude antes de finalizar.**
   Todos os SKUs Classe A e B com DIO calculado? Devoluções removidas e documentadas? Outliers identificados e tratados? Se qualquer verificação falhar, corrigir antes de salvar o output.

## Output Format

```markdown
# Análise de Vendas — Barns Western
Período: {data_inicio} a {data_fim} ({N} meses)
Gerado em: {YYYY-MM-DD}
Fonte: Shopify — Relatório de Vendas + Relatório de Estoque

## Resumo Executivo
- Total de SKUs analisados: {N}
- Receita total no período: R$ {valor}
- Registros removidos (devoluções/cancelamentos): {N} linhas
- Produtos Classe A: {N} SKUs ({%} portfólio = {%} faturamento)
- Produtos Classe B: {N} SKUs
- Produtos Classe C: {N} SKUs
- SKUs em risco de ruptura (DIO < 15d, Classe A/B): {N} — R$ {valor}/semana em risco
- SKUs com excesso (DIO > 90d): {N} — R$ {valor} imobilizados

## Classificação ABC
| SKU | Produto | Receita {período} | % Total | % Acum | Classe | Un/Dia | Estoque | DIO |
|-----|---------|------------------|---------|--------|-------|--------|---------|-----|
...

## Tendências por Categoria
| Categoria | MoM {mês-2/mês-1} | MoM {mês-1/mês} | Tendência |
...

## Índice de Sazonalidade
| Mês | {Categoria} | ... | Observação |
...

## Outliers Documentados
| SKU | Período | Observado | Esperado | Causa | Tratamento |
...

## Metodologia
- Período, fontes, devoluções removidas, outliers tratados
```

## Output Example

```markdown
# Análise de Vendas — Barns Western
Período: 01/10/2025 a 31/03/2026 (6 meses)
Gerado em: 2026-04-30
Fonte: Shopify — Relatório de Vendas + Relatório de Estoque

## Resumo Executivo
- Total de SKUs analisados: 38 produtos ativos
- Receita total no período: R$ 142.800
- Registros removidos (devoluções/cancelamentos): 47 linhas (3,1% das transações)
- Produtos Classe A: 8 SKUs (21% portfólio = 75,7% faturamento)
- Produtos Classe B: 11 SKUs (29% = 19,3%)
- Produtos Classe C: 19 SKUs (50% = 5%)
- SKUs em risco de ruptura: 3 — R$ 4.200/semana em risco
- SKUs com excesso (DIO > 90d): 5 — R$ 8.600 imobilizados

## Classificação ABC
| SKU | Produto | Receita 6m | % Total | % Acum | Classe | Un/Dia | Estoque | DIO |
|-----|---------|-----------|---------|--------|-------|--------|---------|-----|
| BW-001 | Óculos UV400 Clássico Preto | R$ 28.400 | 19,9% | 19,9% | A | 3,2 | 70 un | 22d |
| BW-002 | Óculos UV400 Tartaruga | R$ 22.100 | 15,5% | 35,3% | A | 2,5 | 20 un | 8d ⚠️ |
| BW-010 | Canivete Inox Cabo Madeira | R$ 3.200 | 2,2% | 81,0% | B | 0,2 | 22 un | 110d 🔴 |

## Tendências por Categoria
| Categoria | MoM Jan/Fev | MoM Fev/Mar | MoM Mar/Abr | Tendência |
|-----------|------------|------------|------------|---------|
| Óculos UV400 | +8% | +15% | +12% | 📈 Crescimento |
| Bonés | +18% | +22% | +19% | 📈 Crescimento |
| Braceletes/Pulseiras | -12% | -9% | -11% | 📉 Queda |

## Índice de Sazonalidade
| Mês | Óculos UV400 | Bonés | Cintos |
|-----|-------------|-------|-------|
| Mai | 0.82 | 1.25 | 1.10 |
| Jun | 0.71 | 1.30 | 1.18 |

## Outliers Documentados
| SKU | Semana | Observado | Esperado | Causa | Tratamento |
|-----|--------|-----------|----------|-------|-----------|
| BW-001 | 20-26 Nov 2025 | 89 un | 22 un | Black Friday | Excluído da média |
| BW-007 | 10-16 Fev 2026 | 45 un | 18 un | Influencer | Excluído da média |

## Metodologia
- Período: 01/10/2025 a 31/03/2026
- Fonte vendas: Shopify export 2026-04-30 | Fonte estoque: Shopify Inventory 2026-04-30
- Devoluções removidas: 47 registros | Outliers excluídos: 2 eventos
- Índices sazonais: calculados com 12 meses de histórico disponíveis
```

## Veto Conditions

Rejeitar e refazer se QUALQUER condição for verdadeira:
1. Algum SKU Classe A ou B está sem DIO calculado (campo em branco ou ausente)
2. O campo "Registros removidos (devoluções/cancelamentos)" mostra 0 e o arquivo de vendas original contém linhas com quantidade negativa ou tipo "refund"

## Quality Criteria

- [ ] 100% dos SKUs classificados como A, B ou C
- [ ] DIO calculado para todos os SKUs Classe A e B usando estoque do Shopify
- [ ] Número de devoluções removidas declarado na seção Metodologia
- [ ] Outliers documentados (ou declarado "nenhum identificado" com justificativa)
- [ ] Tendências baseadas em MoM de pelo menos 2 meses consecutivos
- [ ] Período de análise e fontes de dados declarados
