# Quality Criteria: Análise de Saúde Financeira

## Critérios de Qualidade — Felipe Financeiro (Cálculos)

- [ ] Todos os cálculos apresentados com fórmula explícita e resultado numérico exato
- [ ] Receita líquida calculada (não apenas receita bruta)
- [ ] Margem bruta E margem líquida ambas calculadas e apresentadas
- [ ] CAC e LTV calculados com os dados disponíveis (ou sinalizados como indisponíveis)
- [ ] Ponto de equilíbrio calculado em receita e em unidades
- [ ] Projeção de caixa 30-60-90 dias presente
- [ ] Anomalias (variações > 25% vs período anterior) explicitamente sinalizadas
- [ ] Nenhum número apresentado sem implicação financeira
- [ ] Todos os custos categorizados (logística, marketing, taxas, operacional)
- [ ] Tabela de distribuição de custos presente com percentuais sobre receita

## Critérios de Qualidade — Gustavo Gestor (Diagnóstico)

- [ ] Executive Summary com exatamente 3 pontos — legível de forma independente
- [ ] Cada insight segue estrutura: O que aconteceu → Por que importa → O que sugere
- [ ] Máximo de 5 recomendações, ordenadas por prioridade
- [ ] Cada recomendação inclui: Ação + Impacto esperado + Confiança + Esforço + Prazo
- [ ] Vazamentos financeiros identificados com valor estimado (em R$ ou %)
- [ ] Avaliação de capacidade de escala: "segura" ou "arriscada" com justificativa
- [ ] Recomendação de alocação de capital presente
- [ ] Projeção de cenário de 30-90 dias com e sem ações recomendadas
- [ ] Nenhum qualificador vago ("muito", "bastante", "significativo") sem número
- [ ] Linguagem financeira precisa (não "está indo bem", mas "margem líquida de 12%")

## Critérios de Qualidade — Renata Revisão (Revisão)

- [ ] Todos os cálculos do Felipe verificados matematicamente
- [ ] Todas as recomendações do Gustavo rastreadas a dados concretos do Felipe
- [ ] Nenhuma recomendação sem dados de suporte identificada
- [ ] Inconsistências entre cálculos e recomendações sinalizadas explicitamente
- [ ] Veredicto claro: APROVADO / REJEITADO / APROVADO COM RESSALVAS
- [ ] Feedback específico por seção quando rejeitado
- [ ] Pontos fortes do relatório reconhecidos explicitamente

## Thresholds de Qualidade (REJEIÇÃO AUTOMÁTICA)

- Qualquer cálculo matematicamente incorreto → REJEITAR
- Recomendação sem dados de suporte no relatório do Felipe → REJEITAR
- Executive Summary ausente ou com mais de 3 bullets → REJEITAR
- Projeção de caixa ausente → REJEITAR
- Qualificadores vagos sem número em recomendações críticas → REJEITAR