---
task: "Strategic Diagnosis"
order: 1
input: |
  - metricas_financeiras: Arquivo metricas-financeiras.md com todos os indicadores calculados pelo Felipe Financeiro
  - company_context: _opensquad/_memory/company.md com contexto da empresa
output: |
  - diagnostico_estrategico: Arquivo diagnostico-estrategico.md com executive summary, análise por área, vazamentos de margem, capacidade de escala, plano de ação e alocação de capital
---

# Strategic Diagnosis

Transforma as métricas financeiras calculadas pelo Felipe em um diagnóstico estratégico completo: identifica problemas, quantifica impactos, avalia capacidade de escala e entrega um plano de ação priorizado com projeção comparativa (com e sem ações).

## Process

1. **Ler metricas-financeiras.md** completamente. Absorver todos os valores calculados, alertas e classificações de status antes de escrever qualquer linha do diagnóstico.

2. **Ler company.md** para contextualizar o diagnóstico ao modelo de negócio específico (e-commerce de moda country, acessórios, base de clientes apaixonada pelo estilo country).

3. **Escrever o Executive Summary** — exatamente 3 bullets, cada um com: uma métrica específica, sua implicação de negócio e a ação mais urgente derivada dela. O ES deve funcionar de forma independente — quem ler apenas o ES deve entender a saúde geral da operação e o que fazer primeiro.

4. **Analisar cada área de negócio** com dados do Felipe:
   - **Receita e crescimento**: tendência, sazonalidade, fontes de receita
   - **Margens**: onde estão saudáveis, onde estão comprimidas, por quê
   - **Logística**: custo de frete como % da receita, benchmark, impacto em R$/mês
   - **Marketing e aquisição**: CAC por canal (se disponível), ROI, sustentabilidade do investimento
   - **Operação**: custos fixos, escalabilidade, eficiência

5. **Identificar e quantificar vazamentos de margem**: Para cada área com custo acima do benchmark, calcular o excesso em R$/mês. Apresentar em tabela. Total de vazamento estimado.

6. **Avaliar capacidade de escala**: Cruzar LTV:CAC com runway de caixa com payback period. Emitir veredicto: "POSSÍVEL" / "CONDICIONADA A [condição específica]" / "NÃO RECOMENDADA". Justificar com dados.

7. **Escrever Plano de Ação** com no máximo 5 recomendações ordenadas por prioridade. Para cada uma:
   - Ação: verbo + especificidade (ex: "Renegociar contrato de frete com 3 transportadoras até [data]")
   - Impacto esperado: em R$/mês ou pp de margem
   - Confiança: Alta / Média / Baixa
   - Esforço: Baixo (< 4h) / Médio (4-16h) / Alto (> 16h)
   - Prazo: em dias

8. **Recomendar alocação de capital** para o próximo mês: dividir o lucro líquido entre reinvestimento em estoque, marketing, reserva de caixa e pró-labore — com percentuais e valores absolutos.

9. **Construir projeção comparativa**: Cenário sem ações (extrapolação da tendência atual) vs cenário com ações (aplicando os impactos estimados do plano de ação). Apresentar para 30, 60 e 90 dias.

10. **Salvar em `diagnostico-estrategico.md`** seguindo o Output Format abaixo.

## Output Format

```markdown
# Diagnóstico Estratégico — [Nome da Empresa]
**Referência:** Métricas de [período]

---

## Executive Summary

- **[Ponto 1 com métrica + implicação + ação urgente]**
- **[Ponto 2 com métrica + implicação + ação urgente]**
- **[Ponto 3 com métrica + implicação + ação urgente]**

---

## Situação Atual

**Receita:** [Comentário sobre receita líquida e tendência]

**Margem Bruta ([%]) — [✅/⚠️/🔴]:**
[Análise da margem bruta — o que está causando o resultado, comparação com benchmark]

**Margem Líquida ([%]) — [status]:**
[Análise da margem líquida — onde está sendo comprimida, implicações]

**Logística — [status]:**
[Análise do custo de frete, benchmark, impacto em R$/mês]

**Marketing e Aquisição — [status]:**
[Análise do CAC, investimento em marketing, ROI estimado]

---

## Problemas Identificados

1. **[Problema 1]** — Impacto: [R$ ou %] | Prioridade: [ALTA/MÉDIA/BAIXA]
2. **[Problema 2]** — Impacto: [R$ ou %] | Prioridade: [prioridade]
[...]

---

## Vazamentos de Margem

| Área | Custo Atual | Benchmark | Excesso Estimado |
|------|-------------|-----------|-----------------|
| [Área] | [%] | [%] | R$ -[valor]/mês |
| **Total de vazamento estimado** | | | **R$ -[valor]/mês** |

---

## Capacidade de Escala

**Veredicto: [POSSÍVEL / CONDICIONADA A X / NÃO RECOMENDADA]**

[Justificativa com dados de LTV:CAC, payback e caixa]

**Limite recomendado de investimento em marketing:** [valor ou % da receita]

---

## Plano de Ação — Priorizado

| # | Ação | Impacto Esperado | Confiança | Esforço | Prazo |
|---|------|-----------------|-----------|---------|-------|
| 1 | [ação específica] | [R$ ou %] | [Alta/Média/Baixa] | [Baixo/Médio/Alto] | [N dias] |
[...]

---

## Alocação de Capital Recomendada ([próximo mês])

- **[Categoria]:** R$ [valor] ([%])
- **[Categoria]:** R$ [valor] ([%])
[...]

---

## Projeção com e sem Ações Recomendadas

| Cenário | Margem Líq. [mês+3] | Lucro Líq. [mês+3] |
|---------|--------------------|--------------------|
| Sem ações (tendência atual) | [%] | R$ [valor] |
| Com ações recomendadas | [%] | R$ [valor] |
| **Diferença** | **[+Npp]** | **R$ +[valor]/mês** |
```

## Output Example

> Use como referência de qualidade, não como template rígido.

```markdown
# Diagnóstico Estratégico — Barns Western
**Referência:** Métricas de Março 2026

---

## Executive Summary

- **A margem líquida de 11% está sendo comprimida pelo custo logístico de 14%**, que é o principal vazamento financeiro — R$ 3.020/mês acima do benchmark. Ação urgente: renegociar contrato de frete com no mínimo 3 transportadoras até 7 de Maio.
- **O unit economics é excepcional (LTV:CAC 19,5:1, payback 2,5 meses)**, confirmando que a máquina de aquisição funciona com eficiência acima do mercado. É possível escalar o marketing com segurança — mas apenas após o problema logístico ser resolvido.
- **A sazonalidade reduzirá a receita em ~15% entre Abril e Junho**; sem reserva de caixa provisionada, o capital de giro para reposição de estoque de Julho ficará comprometido. Ação urgente: separar R$ 2.000 de reserva ainda em Abril.

---

## Situação Atual

**Receita:** A Barns Western faturou R$ 87.400 brutos em Março, resultando em R$ 75.513 de receita líquida após devoluções (3,1%) e taxas (10,5%). A taxa de devolução está dentro do aceitável para acessórios (benchmark < 5%).

**Margem Bruta (58,0%) — ✅:**
A margem bruta de 58% está dentro da faixa ideal para moda/acessórios (45-65%). O CMV está controlado em 42% da receita líquida. O problema não está no custo do produto — está nas despesas variáveis posteriores ao produto.

**Margem Líquida (11,0%) — ⚠️:**
A margem líquida de 11% é positiva mas está abaixo do ideal de 15%+ para e-commerce em fase de escala. A compressão é causada pela combinação de frete (14%) + marketing (25%) consumindo 39% da receita antes de qualquer custo operacional. Sem intervenção, a sazonalidade de Abril-Junho deve comprimir a margem para ~7-8%.

**Logística — ⚠️ Problema prioritário:**
Frete em 14% da receita líquida está 40% acima do benchmark de 10% para e-commerce de moda. Em termos absolutos: R$ 10.572 pagos em frete em Março. Cada ponto percentual acima de 10% = R$ 755 de margem perdida por mês. Potencial de recuperação imediata: R$ 1.500-3.000/mês com renegociação de transportadora.

**Marketing e Aquisição — ⚠️ Alto, mas eficiente:**
O investimento em marketing de R$ 18.879 (25% da receita) é alto para o benchmark (< 20%), mas o CAC resultante de R$ 66,47 e o LTV de R$ 1.294 produzem uma razão LTV:CAC de 19,5:1 — muito acima do mínimo de 3:1. O marketing está funcionando; o problema é não saber quais canais têm ROI positivo e quais estão queimando dinheiro sem rastreabilidade.

---

## Problemas Identificados

1. **Custo logístico em 14% da receita (benchmark: 10%)** — Impacto: -R$ 3.020/mês de margem perdida | Prioridade: ALTA
2. **Marketing sem segmentação por canal** — Impacto: risco de R$ 3.776+ em canais com ROI negativo não identificado | Prioridade: ALTA
3. **Ausência de reserva de caixa para sazonalidade de Junho** — Impacto: possível comprometimento do capital de giro para reposição de estoque | Prioridade: MÉDIA

---

## Vazamentos de Margem

| Área | Custo Atual | Benchmark | Excesso Estimado |
|------|-------------|-----------|-----------------|
| Frete de saída | 14,0% | 10,0% | R$ -3.020/mês |
| Marketing (parcela sem rastreabilidade) | ~25,0% | 20% rastreado | R$ -3.776 em risco |
| **Total de vazamento estimado** | | | **R$ -3.020 a R$ -6.796/mês** |

---

## Capacidade de Escala

**Veredicto: CONDICIONADA À RESOLUÇÃO DO PROBLEMA LOGÍSTICO**

O LTV:CAC de 19,5:1 e o payback de 2,5 meses indicam que a máquina de aquisição suporta escala — mas escalar com frete em 14% ampliará o vazamento proporcionalmente ao crescimento. Cada R$ 10.000 de crescimento de receita = R$ 400 adicionais de margem perdida para frete (vs benchmark).

**Sequência recomendada:** (1) resolver logística → (2) segmentar canais de marketing → (3) escalar marketing nos canais com ROI confirmado.

**Limite recomendado de marketing após logística resolvida:** até 22% da receita (R$ +R$ 3.000/mês adicionais).

---

## Plano de Ação — Priorizado

| # | Ação | Impacto Esperado | Confiança | Esforço | Prazo |
|---|------|-----------------|-----------|---------|-------|
| 1 | Cotar frete com Jadlog, Azul Cargo e Total Express — renegociar contrato | +R$ 1.500-3.000/mês de margem | Alta | Baixo | 7 dias |
| 2 | Auditar top-10 SKUs por volume: calcular margem por produto incluindo frete real | Identificar produtos vampiros para descontinuar ou reajustar preço | Alta | Baixo | 3 dias |
| 3 | Segmentar relatório de marketing por canal (Meta Ads vs orgânico vs email) | Identificar canais com ROAS < 3:1 para corte | Alta | Médio | 14 dias |
| 4 | Separar R$ 2.000 de reserva de caixa para sazonalidade Jun-Jul | Garantir capital de giro para reposição de estoque no vale sazonal | Alta | Baixo | Imediato |
| 5 | Após logística resolvida: testar R$ +3.000/mês em marketing de desempenho | Escalar aquisição com margem saudável — monitorar CAC semanalmente | Média | Baixo | 30-45 dias |

---

## Alocação de Capital Recomendada (Abril 2026)

- **Reposição de estoque (SKUs de alta margem):** R$ 3.500 (42%)
- **Reserva de caixa / sazonalidade Jun-Jul:** R$ 2.000 (24%)
- **Marketing (manutenção — sem aumento antes da logística resolvida):** R$ 2.000 (24%)
- **Ferramentas operacionais:** R$ 806 (10%)
- **Pró-labore: NÃO retirar em Abril** — preservar caixa para o ciclo de baixa sazonal

---

## Projeção com e sem Ações Recomendadas

| Cenário | Margem Líq. Junho/26 | Lucro Líq. Junho/26 |
|---------|---------------------|---------------------|
| Sem ações (tendência atual) | ~7,5% | ~R$ 5.730 |
| Com ações (frete + segmentação) | ~13,5% | ~R$ 10.314 |
| **Diferença** | **+6pp** | **+R$ 4.584/mês** |
```

## Quality Criteria

- [ ] Executive Summary tem exatamente 3 bullets com métrica + implicação + ação
- [ ] Cada problema identificado tem impacto em R$ ou pp e nível de prioridade
- [ ] Tabela de vazamentos de margem presente com excesso estimado em R$/mês
- [ ] Veredicto de capacidade de escala com justificativa em dados
- [ ] Plano de ação com máximo 5 itens, todos com os 5 campos obrigatórios
- [ ] Projeção comparativa (com vs sem ações) para pelo menos 1 horizonte temporal

## Veto Conditions

Rejeitar e refazer se QUALQUER uma for verdadeira:
1. Qualquer recomendação do plano de ação não possui dado de suporte rastreável nas métricas do Felipe — recomendação sem âncora de dado é opinião, não diagnóstico
2. O Executive Summary contradiz algum ponto do corpo do diagnóstico — ES e corpo do relatório devem ser internamente consistentes