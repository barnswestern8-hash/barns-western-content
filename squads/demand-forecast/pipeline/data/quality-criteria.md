# Quality Criteria — Previsão de Demanda e Planejamento de Estoque

## Critérios de Aprovação do Relatório Final

### Análise de Dados (Ana Analítica)
- [ ] Todos os SKUs estão classificados como A, B ou C — sem itens sem classificação
- [ ] Devoluções foram removidas das vendas brutas antes do cálculo de velocidade de venda
- [ ] O período de análise está explicitamente declarado (data início e data fim)
- [ ] Outliers (semanas de promoção, datas especiais) foram identificados e documentados
- [ ] A velocidade de venda está calculada em unidades/dia para cada SKU
- [ ] O índice de sazonalidade está calculado para cada mês com dados suficientes (mínimo 2 ocorrências)
- [ ] Tendências estão classificadas: Crescimento / Estável / Queda para cada SKU

### Previsão de Demanda (Paulo Previsão)
- [ ] Previsão gerada para 3 horizontes: 30, 60 e 90 dias
- [ ] Cada previsão está ajustada pelo índice de sazonalidade do período correspondente
- [ ] Cada SKU tem nível de confiança declarado: Alto / Médio / Baixo
- [ ] A justificativa do nível de confiança está presente (número de meses de histórico, consistência da tendência)
- [ ] Sugestão de compra inclui: quantidade recomendada, unidade de medida, justificativa e prioridade
- [ ] DIO pós-compra está calculado para validar que a compra não gera excesso
- [ ] Produtos com potencial de escala têm taxa de crescimento e impacto de receita estimado
- [ ] Riscos são listados com tipo, probabilidade (Alta/Média/Baixa) e receita em risco (R$)

### Revisão de Qualidade (Rita Revisão)
- [ ] Nenhuma recomendação de compra para SKUs com DIO > 90 dias sem justificativa de sazonalidade
- [ ] Nenhuma previsão baseada em menos de 3 meses de histórico sem flag de "Baixa Confiança"
- [ ] O CSV tem exatamente 4 seções: Previsão, Sugestão de Compra, Potencial de Escala, Riscos
- [ ] Cada seção tem cabeçalhos de coluna consistentes e sem células mescladas
- [ ] Não há valores em branco em campos obrigatórios (SKU, nome, classe, quantidade)
- [ ] Os totais de quantidade sugerida são financeiramente viáveis (não ultrapassam 3x o estoque atual sem justificativa)
- [ ] Todas as recomendações de alta prioridade têm ação específica e prazo sugerido

---

## Limiares de Aprovação

| Critério | APROVAÇÃO | REVISÃO NECESSÁRIA | REJEIÇÃO |
|----------|-----------|-------------------|---------|
| Cobertura de SKUs | 100% classificados | — | Qualquer SKU sem classificação |
| Horizontes de previsão | 30, 60, 90 dias | Faltando 90 dias | Faltando 30 ou 60 dias |
| Confiança declarada | Todos os SKUs | Faltando < 10% | Faltando > 10% |
| Seções do CSV | 4 seções completas | — | Qualquer seção ausente |
| Riscos identificados | Todos com R$ em risco | Faltando impacto financeiro | Seção ausente |

---

## Scoring de Qualidade (0–10)

| Dimensão | Peso | O que mede |
|----------|------|-----------|
| Completude dos dados | 25% | % de SKUs com todos os campos preenchidos |
| Acurácia da metodologia | 25% | Métodos corretos aplicados ao tipo de produto |
| Acionabilidade | 25% | % de recomendações com ação clara + prazo |
| Apresentação (CSV) | 15% | Estrutura limpa, importável sem ajustes |
| Identificação de riscos | 10% | Riscos cobertos com impacto quantificado |

**Aprovação:** Score >= 7.0 em todas as dimensões
**Rejeição automática:** Score < 4.0 em qualquer dimensão única
