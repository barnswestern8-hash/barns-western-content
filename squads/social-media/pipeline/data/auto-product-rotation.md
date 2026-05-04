# Rotação Automática de Produtos — Barns Western

Usado pelo pipeline automático para variar o produto e tipo de post a cada dia da semana.
O agente deve verificar o dia da semana atual e usar a entrada correspondente.

---

## Rotação Semanal

| Dia         | Produto                          | Tipo de Post         | Mensagem Obrigatória                                        | Asset disponível              |
|-------------|----------------------------------|----------------------|-------------------------------------------------------------|-------------------------------|
| Segunda     | Óculos UV400 Roper               | Lifestyle / Identidade | Proteção UV400 real — bloqueia 100% UVA e UVB              | assets/products/oculos-roper-1.webp |
| Terça       | Óculos UV400 Roper               | Educativo            | Diferença entre óculos comum e UV400 de verdade            | assets/products/oculos-roper-2.webp |
| Quarta      | Cinto e Fivela                   | Lifestyle / Identidade | Identidade country — o cinto diz quem você é               | usar geração por IA           |
| Quinta      | Óculos UV400 Roper               | Prova Social         | Produto usado em rodeio / vaquejada — contexto autêntico    | assets/products/oculos-roper-3.webp |
| Sexta       | Braceletes / Correntes / Pulseiras | Promoção           | 2º item com 50% de desconto — oferta ativa                  | usar geração por IA           |
| Sábado      | Óculos UV400 Roper               | Lançamento           | "Conheça o Roper" — apresentação da linha                  | assets/products/oculos-roper-4.webp |
| Domingo     | Tema: identidade country         | Lifestyle / Identidade | Universo country sem produto direto — construção de marca  | usar geração por IA           |

---

## Regras de Fallback

- Se não houver asset disponível para o produto, o agente deve usar **geração por IA** com referência do site `https://barnswestern.com.br`.
- Se o produto do dia já foi postado recentemente (ver `_memory/runs.md`), o agente deve escolher o próximo produto disponível na rotação.
- O tipo de post pode variar se o agente identificar uma oportunidade editorial mais forte baseada nos benchmarks (`_investigations/consolidated-analysis.md`).

---

## Instruções para o Agente (Step Auto-01)

1. Verificar o dia da semana atual (data do run em `state.json` ou via sistema).
2. Selecionar o produto e tipo de post da tabela acima.
3. Verificar se o asset está disponível em `assets/products/`.
4. Montar o briefing automaticamente no formato padrão e salvar em `output/{run_id}/briefing.md`.