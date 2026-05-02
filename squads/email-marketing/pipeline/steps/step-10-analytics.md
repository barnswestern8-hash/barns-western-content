---
execution: subagent
agent: squads/email-marketing/agents/andre-analytics
inputFile: squads/email-marketing/output/send-confirmation.md
outputFile: squads/email-marketing/output/analytics-report.md
model_tier: powerful
---

# Step 10: Análise de Resultados

## Context Loading

Carregue estes arquivos antes de executar:

- `squads/email-marketing/output/send-confirmation.md` — IDs de envio, segmento, campanha, timestamp
- `squads/email-marketing/_memory/runs.md` — Histórico de campanhas anteriores da Barns Western (para comparação)
- `squads/email-marketing/pipeline/data/quality-criteria.md` — Benchmarks e KPIs do squad
- `squads/email-marketing/pipeline/data/domain-framework.md` — Benchmarks setoriais e-commerce 2026

## Instructions

### Process

1. **Ler send-confirmation.md** para extrair: IDs de envio, campanha, segmento, destinatários, timestamp.
2. **Verificar disponibilidade de dados.** Se o envio ocorreu há menos de 4h, alguns dados (abertura, clique) podem não estar disponíveis. Documentar a limitação e analisar com os dados disponíveis (entrega, bounce).
3. **Consultar Resend API** via skill para obter status: delivered, opened, clicked, bounced, complained, unsubscribed.
4. **Calcular métricas.** Taxa de entrega, abertura, clique, CTOR, bounce, descadastro, spam.
5. **Comparar com benchmarks** do setor (Klaviyo 2026 e-commerce) e campanhas anteriores em runs.md.
6. **Identificar padrões.** Top 3 e bottom 3 variáveis. Anomalias (> 25% variação vs. benchmark ou anterior).
7. **Sintetizar insights** com implicação de negócio ("Isso significa...") para cada finding relevante.
8. **Gerar 3-5 recomendações** priorizadas por impacto × confiança com esforço estimado.
9. **Salvar analytics-report.md** e atualizar runs.md com o registro desta campanha.

**Nota sobre timing:** Este step roda após o envio, mas dados completos de abertura e clique ficam disponíveis 24-48h após o disparo. Execute este step novamente após 24h para análise completa. O Resend API retorna dados em tempo real conforme os e-mails são abertos.

## Output Format

```markdown
# Analytics Report — [Nome da Campanha]

**Período:** [timestamp envio] a [timestamp análise]
**Campanha:** [nome]
**Destinatários:** [N] clientes

## Resumo Executivo

- **[Métrica principal] [valor]** (benchmark: [X]%) — [implicação em 1 frase]
- **[Métrica 2] [valor]** (benchmark: [Y]%) — [implicação em 1 frase]
- **[Ação recomendada prioritária]**

## Métricas

| Métrica            | Campanha | Benchmark | Variação | Status      |
|--------------------|----------|-----------|----------|-------------|
| Taxa de entrega    | X%       | 98%       | Xpp      | [status]    |
| Taxa de abertura   | X%       | 43%       | Xpp      | [status]    |
| Taxa de clique     | X%       | 2.44%     | X%       | [status]    |
| CTOR               | X%       | 8%        | X%       | [status]    |
| Taxa de bounce     | X%       | 2%        | Xpp      | [status]    |
| Descadastros       | X%       | 0.2%      | Xpp      | [status]    |

## Insights

1. **[Título do insight]** — [O que aconteceu com dados]. Isso significa [implicação de negócio]. [Confiança: Alta/Média/Baixa]

2. **[Título do insight]** — [O que aconteceu]. Isso significa [implicação]. [Confiança]

## Recomendações

1. **[Ação específica]** — Prioridade: [Alta/Média/Baixa] | Confiança: [Alta/Média/Baixa] | Esforço: [Baixo/Médio/Alto]
   [Descrição da ação, impacto esperado com número]

## Metodologia

- **Período:** [range]
- **Fonte primária:** Resend API
- **Benchmarks:** Klaviyo 2026 Email Benchmarks — e-commerce
- **Limitações:** [se dados incompletos por timing, documentar]
```

## Output Example

```markdown
# Analytics Report — Abandono de Carrinho (E-mail 2 — 24h)

**Período:** 2026-04-30T14:32 a 2026-05-01T14:32 (24h)
**Campanha:** Abandono de carrinho — Óculos UV400
**Destinatários:** 847 clientes

## Resumo Executivo

- **Taxa de abertura 38.4%** (benchmark: 43%) — 4.6pp abaixo do esperado para abandono de carrinho; assunto precisa de teste A/B.
- **Taxa de clique 4.2%** (benchmark: 2.44%) — 72% acima do benchmark; CTA com prazo de 24h e desconto explícito funcionou.
- **Manter estrutura de CTA atual** e testar assunto com emoji de urgência na próxima campanha.

## Métricas

| Métrica            | Campanha | Benchmark | Variação | Status       |
|--------------------|----------|-----------|----------|--------------|
| Taxa de entrega    | 98.1%    | 98%       | +0.1pp   | Bom ✓        |
| Taxa de abertura   | 38.4%    | 43%       | -4.6pp   | Atenção      |
| Taxa de clique     | 4.2%     | 2.44%     | +72%     | Excelente ✓  |
| CTOR               | 10.9%    | 8%        | +36%     | Excelente ✓  |
| Taxa de bounce     | 1.2%     | 2%        | -40%     | Bom ✓        |
| Descadastros       | 0.08%    | 0.2%      | -60%     | Excelente ✓  |

## Insights

1. **CTA com urgência real superou benchmark em 72%.** Taxa de clique de 4.2% vs. benchmark de 2.44%. Isso significa que "deadline real + desconto explícito" é a estrutura de CTA mais efetiva para segmento quente. Confiança: Média (único período — precisa de 2+ ciclos para Alta).

2. **Taxa de abertura 4.6pp abaixo do benchmark.** Abandono de carrinho tipicamente abre entre 43-50%. Isso significa que o assunto não criou urgência suficiente na preview — testar emoji de relógio ou "últimas horas" pode subir 3-5pp. Confiança: Média.

## Recomendações

1. **Testar assunto com emoji de urgência** — Prioridade: Alta | Confiança: Média | Esforço: Baixo
   Próxima campanha: "⏰ Só 24h pra garantir com 10% OFF" vs. atual. Impacto esperado: +3-5pp abertura.

2. **Manter estrutura CTA "prazo + desconto explícito"** — Prioridade: Alta | Confiança: Alta | Esforço: Nenhum
   Padrão demonstrou CTOR 36% acima do benchmark. Replicar em todas as próximas campanhas de abandono.

3. **Configurar UTMs nos links de CTA** — Prioridade: Média | Confiança: Alta | Esforço: Baixo
   Rastrear conversão real no site (atualmente estimada). Impacto: dados de ROI com alta confiança.

## Metodologia

- **Período:** 2026-04-30T14:32 a 2026-05-01T14:32
- **Fonte primária:** Resend API
- **Benchmarks:** Klaviyo 2026 Email Benchmarks — e-commerce, abandono de carrinho
- **Conversão:** Estimada (sem UTM configurado — recomendação #3)
```

## Veto Conditions

Rejeitar e reprocessar se:

1. Métricas apresentadas sem coluna comparativa (benchmark ou anterior)
2. Insights sem implicação de negócio ("Isso significa...")

## Quality Criteria

- [ ] Toda métrica com comparativo (benchmark e/ou anterior)
- [ ] Cada insight com "Isso significa..." — implicação de negócio
- [ ] Confiança (Alta/Média/Baixa) em cada recomendação
- [ ] Recomendações ordenadas por prioridade
- [ ] Anomalias (> 25% variação) flagadas explicitamente
- [ ] Metodologia documentada (período, fontes, limitações)
- [ ] runs.md atualizado com registro desta campanha