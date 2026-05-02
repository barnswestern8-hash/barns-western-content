---
task: "Calculate Financials"
order: 1
input: |
  - contexto_periodo: Arquivo contexto-periodo.md com período analisado, caminho do CSV e notas do usuário
  - csv_dados: Planilha ou CSV com colunas de Receita, Custos (por categoria) e Margem
output: |
  - metricas_financeiras: Arquivo metricas-financeiras.md com todos os indicadores calculados, categorizados e classificados por status
---

# Calculate Financials

Lê o CSV ou planilha fornecido pelo usuário e calcula todos os indicadores financeiros do período: receita líquida, margens, unit economics, ponto de equilíbrio e projeção de caixa. Apresenta os resultados com fórmulas explícitas, benchmarks do setor e classificação de status por métrica.

## Process

1. **Ler o contexto do período** em `contexto-periodo.md` para identificar: período analisado, localização do CSV e notas adicionais do usuário (ex: campanhas especiais, eventos que afetaram os números).

2. **Ler o CSV ou planilha** e mapear as colunas disponíveis. Identificar: receita bruta, categorias de custo (CMV, frete, marketing, operacional, taxas), número de pedidos, número de novos clientes (se disponível), e dados de período anterior (se disponível).

3. **Calcular Receita Líquida:** Descontar taxas de plataforma, taxas de gateway de pagamento e devoluções da receita bruta. Se não estiverem separados no CSV, solicitar as taxas ao usuário ou usar benchmarks declarados (taxas de marketplace: 12%, gateway: 2,5%, devoluções: padrão do período anterior).

4. **Calcular Margens e Estrutura de Custos:**
   - Lucro Bruto = Receita Líquida - CMV
   - Margem Bruta = Lucro Bruto / Receita Líquida × 100
   - Lucro Líquido = Receita Líquida - Todos os custos
   - Margem Líquida = Lucro Líquido / Receita Líquida × 100
   - Tabela de distribuição de custos: valor absoluto + % da receita líquida

5. **Calcular Unit Economics** (com dados disponíveis):
   - CAC = Investimento em marketing / Novos clientes
   - Ticket Médio = Receita Líquida / Total de pedidos
   - LTV = Ticket Médio × Frequência anual estimada × Vida útil estimada (premissa declarada)
   - LTV:CAC ratio
   - Payback period = CAC / (Ticket Médio × Margem Bruta %)
   - Se dados de novos clientes não estiverem disponíveis: sinalizar e apresentar estimativa com premissa

6. **Calcular Ponto de Equilíbrio:**
   - Identificar custos fixos (equipe, ferramentas, aluguel) vs variáveis (frete, taxas, marketing por pedido)
   - Margem de Contribuição = (Preço médio - Custo variável unitário) / Preço médio
   - PE em R$ = Custos Fixos / Margem de Contribuição (%)
   - Distância de segurança = (Receita Atual - PE) / Receita Atual × 100

7. **Projetar Fluxo de Caixa 30-60-90 dias:**
   - Identificar tendência MoM (crescimento, estabilidade ou queda)
   - Projetar receita e custos para os 3 meses seguintes com base na tendência
   - Se há sazonalidade conhecida (do histórico ou do contexto), aplicar ajuste sazonal com premissa declarada
   - Apresentar como tabela: mês / receita projetada / custos projetados / saldo projetado

8. **Compilar Alertas:** Listar todas as métricas que ultrapassam thresholds críticos (frete > 15%, margem líquida < 5%, LTV:CAC < 1:1, distância do PE < 20%). Classificar como ⚠️ (atenção) ou 🔴 (crítico).

9. **Salvar em `metricas-financeiras.md`** seguindo o Output Format definido abaixo.

## Output Format

```markdown
# Métricas Financeiras — [Nome da Empresa]
**Período:** [mês/período] | **Fonte:** [nome do arquivo CSV]

---

## Receita

| Item | Valor |
|------|-------|
| Receita Bruta | R$ [valor] |
| (-) Devoluções ([%]) | R$ -[valor] |
| (-) Taxas plataforma ([%]) | R$ -[valor] |
| (-) Taxas gateway ([%]) | R$ -[valor] |
| **Receita Líquida** | **R$ [valor]** |

---

## Custos

| Categoria | Valor | % da Receita Líquida | Status |
|-----------|-------|----------------------|--------|
| CMV | R$ [valor] | [%] | [✅/⚠️/🔴] |
| Frete de saída | R$ [valor] | [%] | [status] |
| Marketing | R$ [valor] | [%] | [status] |
| Operacional | R$ [valor] | [%] | [status] |
| **Total** | **R$ [valor]** | **[%]** | — |

---

## Margens

| Métrica | Fórmula | Valor | Benchmark | Status |
|---------|---------|-------|-----------|--------|
| Lucro Bruto | Rec. Líq. - CMV | R$ [valor] | — | — |
| Margem Bruta | Lucro Bruto / Rec. Líq. | [%] | 45-65% | [status] |
| Lucro Líquido | Rec. Líq. - Todos custos | R$ [valor] | — | — |
| Margem Líquida | Lucro Líq. / Rec. Líq. | [%] | > 15% | [status] |

---

## Unit Economics

| Métrica | Fórmula | Valor | Benchmark | Status |
|---------|---------|-------|-----------|--------|
| Novos clientes | [dado direto] | [N] | — | — |
| CAC | Marketing / Novos clientes | R$ [valor] | R$ 20-80 | [status] |
| Ticket Médio | Rec. Líq. / Pedidos | R$ [valor] | — | — |
| LTV (premissa: [X]x/ano, [Y] anos) | TM × Freq × Vida | R$ [valor] | — | — |
| **LTV:CAC** | LTV / CAC | **[N]:1** | **> 3:1** | **[status]** |
| Payback period | CAC / (TM × MB%) | [N] meses | < 12 meses | [status] |

---

## Ponto de Equilíbrio

| Métrica | Valor |
|---------|-------|
| Custos fixos mensais | R$ [valor] |
| Margem de contribuição | [%] |
| **PE em receita** | **R$ [valor]** |
| Receita atual | R$ [valor] |
| Distância de segurança | [+N% acima do PE] |

---

## Projeção de Caixa — 90 dias

| Mês | Receita Projetada | Custos Projetados | Saldo Projetado |
|-----|-------------------|-------------------|-----------------|
| [Mês+1] | R$ [valor] | R$ [valor] | R$ [+/-valor] |
| [Mês+2] | R$ [valor] | R$ [valor] | R$ [+/-valor] |
| [Mês+3] | R$ [valor] | R$ [valor] | R$ [+/-valor] |

*Premissa de projeção: [descrever tendência e ajuste sazonal se aplicável]*

---

## Alertas

[Lista de métricas em zona de atenção ou crítica]
[Métricas saudáveis com ✅]
```

## Output Example

> Use como referência de qualidade, não como template rígido.

```markdown
# Métricas Financeiras — Barns Western
**Período:** Março 2026 | **Fonte:** financeiro-marco-2026.csv

---

## Receita

| Item | Valor |
|------|-------|
| Receita Bruta | R$ 87.400 |
| (-) Devoluções (3,1%) | R$ -2.710 |
| (-) Taxas plataforma (8,0%) | R$ -6.992 |
| (-) Taxas gateway (2,5%) | R$ -2.185 |
| **Receita Líquida** | **R$ 75.513** |

---

## Custos

| Categoria | Valor | % da Receita Líquida | Status |
|-----------|-------|----------------------|--------|
| CMV (custo dos produtos + embalagem) | R$ 31.715 | 42,0% | ✅ |
| Frete de saída | R$ 10.572 | 14,0% | ⚠️ |
| Marketing / Tráfego pago | R$ 18.879 | 25,0% | ⚠️ |
| Equipe (operação) | R$ 4.531 | 6,0% | ✅ |
| Ferramentas e SaaS | R$ 1.510 | 2,0% | ✅ |
| **Total de Custos** | **R$ 67.207** | **89,0%** | — |

---

## Margens

| Métrica | Fórmula | Valor | Benchmark | Status |
|---------|---------|-------|-----------|--------|
| Lucro Bruto | R$ 75.513 - R$ 31.715 | R$ 43.798 | — | — |
| Margem Bruta | R$ 43.798 / R$ 75.513 | **58,0%** | 45-65% | ✅ |
| Lucro Líquido | R$ 75.513 - R$ 67.207 | R$ 8.306 | — | — |
| Margem Líquida | R$ 8.306 / R$ 75.513 | **11,0%** | > 15% | ⚠️ |

---

## Unit Economics

| Métrica | Fórmula | Valor | Benchmark | Status |
|---------|---------|-------|-----------|--------|
| Novos clientes | dado direto | 284 | — | — |
| CAC | R$ 18.879 / 284 | R$ 66,47 | R$ 20-80 | ⚠️ |
| Ticket Médio | R$ 75.513 / 245 pedidos | R$ 308,22 | — | — |
| LTV (premissa: 2,1x/ano, 2 anos) | R$ 308 × 2,1 × 2 | R$ 1.294 | — | — |
| **LTV:CAC** | R$ 1.294 / R$ 66,47 | **19,5:1** | **> 3:1** | **✅** |
| Payback period | R$ 66,47 / (R$ 308 × 58%) | **2,5 meses** | < 12 meses | ✅ |

---

## Ponto de Equilíbrio

| Métrica | Valor |
|---------|-------|
| Custos fixos mensais | R$ 6.041 |
| Margem de contribuição | 44,0% |
| **PE em receita** | **R$ 13.730** |
| Receita atual (líquida) | R$ 75.513 |
| Distância de segurança | ✅ +450% acima do PE |

---

## Projeção de Caixa — 90 dias

| Mês | Receita Projetada | Custos Projetados | Saldo Projetado |
|-----|-------------------|-------------------|-----------------|
| Abril 2026 | R$ 83.530 | R$ 74.350 | R$ +9.180 |
| Maio 2026 | R$ 79.850 | R$ 71.120 | R$ +8.730 |
| Junho 2026 | R$ 76.400 | R$ 68.050 | R$ +8.350 |

*Premissa: tendência de -4,5% MoM (sazonalidade pós-Páscoa confirmada em histórico)*

---

## Alertas

⚠️ Frete em 14,0% da receita — 40% acima do benchmark de 10%
⚠️ Margem líquida em 11,0% — abaixo do ideal de 15%+ para e-commerce escalado
⚠️ CAC em R$ 66,47 — próximo ao limite superior do benchmark (R$ 20-80)
✅ LTV:CAC de 19,5:1 — muito acima do benchmark mínimo de 3:1
✅ Ponto de equilíbrio superado em +450%
✅ Margem bruta de 58,0% dentro da faixa ideal (45-65%)
```

## Quality Criteria

- [ ] Receita líquida calculada com todas as deduções explicitadas (taxas + devoluções)
- [ ] Fórmulas visíveis para margem bruta, margem líquida, CAC, LTV e ponto de equilíbrio
- [ ] Todos os custos com % sobre receita líquida e status de benchmark
- [ ] Projeção de caixa para 3 meses com premissa de projeção declarada
- [ ] Seção de Alertas presente com classificação ⚠️ / 🔴 / ✅

## Veto Conditions

Rejeitar e recalcular se QUALQUER uma for verdadeira:
1. Margem bruta calculada usando receita bruta no denominador (em vez de receita líquida) — produz margem inflada em ~10-15pp, tornando toda análise subsequente incorreta
2. Projeção de caixa ausente ou sem premissa declarada — o usuário não consegue avaliar o risco de caixa dos próximos meses sem ela