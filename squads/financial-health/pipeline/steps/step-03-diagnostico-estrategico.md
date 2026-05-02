---
execution: inline
agent: gustavo-gestor
inputFile: squads/financial-health/output/metricas-financeiras.md
outputFile: squads/financial-health/output/diagnostico-estrategico.md
---

# Step 3: Diagnóstico Estratégico — Gustavo Gestor

## Context Loading

Carregue estes arquivos antes de executar:
- `squads/financial-health/output/metricas-financeiras.md` — métricas calculadas pelo Felipe Financeiro no Step 2
- `squads/financial-health/pipeline/data/domain-framework.md` — framework de análise com thresholds de classificação
- `squads/financial-health/pipeline/data/output-examples.md` — exemplos de diagnóstico estratégico de qualidade
- `squads/financial-health/pipeline/data/anti-patterns.md` — erros comuns a evitar no diagnóstico
- `_opensquad/_memory/company.md` — contexto da Barns Western (modelo de negócio, produtos, canais, tom de voz)

## Instructions

### Process

1. **Ler metricas-financeiras.md completamente** antes de escrever qualquer linha do diagnóstico. Absorver todos os valores, alertas e classificações de status do Felipe.

2. **Ler company.md** para contextualizar o diagnóstico ao modelo de negócio: e-commerce de acessórios country, ticket médio de ~R$300, canais Instagram e TikTok como principais, logística nacional.

3. **Escrever o Executive Summary** com exatamente 3 bullets. Cada bullet deve ter: [métrica específica com valor] + [implicação de negócio] + [ação urgente]. O ES deve funcionar de forma independente — quem ler apenas o ES deve entender a saúde financeira e a ação mais urgente.

4. **Analisar cada área de negócio** com dados do Felipe: receita e crescimento, margem bruta, margem líquida, logística, marketing e aquisição, operação. Para cada área: comentário com dado específico + benchmark + implicação.

5. **Identificar e priorizar problemas**: Listar os 3-5 principais problemas com impacto estimado em R$ ou % e nível de prioridade (ALTA/MÉDIA/BAIXA).

6. **Quantificar vazamentos de margem**: Para cada área com custo acima do benchmark, calcular o excesso em R$/mês. Apresentar em tabela com total estimado.

7. **Emitir veredicto de capacidade de escala**: Cruzar LTV:CAC + payback + runway de caixa. Emitir veredicto ("POSSÍVEL" / "CONDICIONADA A X" / "NÃO RECOMENDADA") com justificativa específica em dados.

8. **Escrever Plano de Ação** com máximo 5 recomendações ordenadas por prioridade. Para cada uma: ação específica + impacto esperado em R$/mês ou pp + confiança (Alta/Média/Baixa) + esforço (Baixo/Médio/Alto) + prazo em dias.

9. **Recomendar alocação de capital** para o próximo mês com categorias, valores absolutos e percentuais. Incluir recomendação sobre pró-labore.

10. **Construir projeção comparativa**: Cenário sem ações (tendência atual) vs com ações (aplicando impactos estimados) para 30-90 dias. Apresentar margem líquida e lucro líquido projetados.

11. **Salvar em `diagnostico-estrategico.md`** seguindo o Output Format abaixo.

## Output Format

```
# Diagnóstico Estratégico — [Nome da Empresa]
**Referência:** Métricas de [período]

---

## Executive Summary

- **[bullet 1: métrica + implicação + ação]**
- **[bullet 2]**
- **[bullet 3]**

---

## Situação Atual

**Receita:** [comentário]

**Margem Bruta ([%]) — [status]:**
[análise]

**Margem Líquida ([%]) — [status]:**
[análise]

**Logística — [status]:**
[análise]

**Marketing e Aquisição — [status]:**
[análise]

---

## Problemas Identificados

1. **[Problema]** — Impacto: [valor] | Prioridade: [nível]
[...]

---

## Vazamentos de Margem

| Área | Custo Atual | Benchmark | Excesso Estimado |
|------|-------------|-----------|-----------------|
[linhas]
| **Total** | | | **R$ -X/mês** |

---

## Capacidade de Escala

**Veredicto: [POSSÍVEL / CONDICIONADA / NÃO RECOMENDADA]**
[justificativa com dados]

---

## Plano de Ação — Priorizado

| # | Ação | Impacto Esperado | Confiança | Esforço | Prazo |
|---|------|-----------------|-----------|---------|-------|
[linhas]

---

## Alocação de Capital Recomendada ([mês])

- **[Categoria]:** R$ X (X%)
[...]

---

## Projeção com e sem Ações

| Cenário | Margem Líq. [mês+3] | Lucro Líq. [mês+3] |
|---------|--------------------|--------------------|
| Sem ações | X% | R$ X |
| Com ações | X% | R$ X |
| **Diferença** | **+Xpp** | **R$ +X/mês** |
```

## Output Example

Consulte `pipeline/data/output-examples.md` — "Exemplo 2: Diagnóstico Estratégico (Gustavo Gestor)" para um exemplo completo e realista.

## Veto Conditions

Rejeitar e refazer se QUALQUER uma for verdadeira:
1. Qualquer recomendação do Plano de Ação não possui dado de suporte rastreável nas métricas do Felipe — recomendação sem âncora de dado é opinião, não diagnóstico
2. Executive Summary contradiz algum ponto do corpo do relatório — inconsistência interna invalida o diagnóstico

## Quality Criteria

- [ ] Executive Summary com exatamente 3 bullets (cada um: métrica + implicação + ação)
- [ ] Todos os problemas com impacto estimado em R$ ou pp de margem
- [ ] Tabela de vazamentos de margem com excesso em R$/mês
- [ ] Veredicto de capacidade de escala com justificativa em dados
- [ ] Plano de ação com máximo 5 itens, todos com os 5 campos obrigatórios
- [ ] Projeção comparativa (com vs sem ações) para pelo menos 1 horizonte temporal
- [ ] Nenhum qualificador vago sem número correspondente