---
execution: inline
agent: squads/email-marketing/agents/sofia-segmentos
inputFile: squads/email-marketing/output/campaign-briefing.md
outputFile: squads/email-marketing/output/strategy-brief.md
---

# Step 02: Estratégia e Segmentação

## Context Loading

Carregue estes arquivos antes de executar:

- `squads/email-marketing/output/campaign-briefing.md` — Briefing do usuário (tipo de campanha, segmento, produto, oferta, urgência)
- `_opensquad/_memory/company.md` — Perfil da Barns Western (tom, produtos, público, diferenciais)
- `squads/email-marketing/pipeline/data/domain-framework.md` — Framework operacional de e-mail marketing
- `squads/email-marketing/_memory/memories.md` — Memória do squad (padrões de campanhas anteriores)

## Instructions

### Process

1. **Ler o campaign-briefing.md na íntegra.** Entender: tipo de campanha solicitada, segmento descrito, produto em destaque, oferta e urgência definidas pelo usuário.
2. **Classificar o fluxo correto.** Mapear o tipo pedido para o fluxo técnico: boas-vindas, abandono de carrinho (com qual e-mail da sequência), recompra, campanha promocional ou reativação. Definir se é fluxo automático (trigger comportamental) ou campanha manual (trigger calendário).
3. **Refinar o segmento.** Transformar a descrição do usuário em critério comportamental preciso: "clientes que compraram óculos nos últimos 30 dias" → "clientes com pedido contendo SKU de óculos fechado nos últimos 30 dias e sem compra subsequente nos últimos 15 dias".
4. **Definir objetivo e KPI.** Estabelecer meta numérica baseada em benchmarks e contexto: taxa de conversão esperada, receita a recuperar ou clientes a reativar.
5. **Planejar cadência.** Para fluxos: definir todos os timings da sequência. Para campanhas: definir se há follow-up e quando.
6. **Definir oferta e CTA.** Confirmar a oferta do usuário ou sugerir ajuste baseado no tipo de campanha. Definir janela de urgência concreta.
7. **Escrever o strategy-brief.md** com todos os parâmetros.

## Output Format

```markdown
# Strategy Brief — [Tipo de Campanha]

**Fluxo:** [tipo exato + variante]
**Segmento:** [critério comportamental preciso]
**Tamanho estimado:** [N clientes/leads]
**Objetivo:** [ação esperada + métrica]
**KPI:** [métrica numérica alvo]

**Cadência:**
- E-mail 1: [timing] — [objetivo do e-mail]
- E-mail 2: [timing] — [objetivo do e-mail]
- (se houver)

**Oferta:** [desconto, benefício ou urgência pura]
**Janela de urgência:** [prazo concreto]

**From:** [endereço@barnswestern.com.br]
**Reply-to:** [atendimento@barnswestern.com.br]
**Horário de envio:** [timing otimizado ou automático]

**Conformidade LGPD:** [opt-in confirmado | unsubscribe obrigatório | endereço físico no rodapé]

**Notas estratégicas:** [observações sobre o segmento, contexto de mercado ou histórico relevante]
```

## Output Example

```markdown
# Strategy Brief — Abandono de Carrinho (E-mail 2 — 24h)

**Fluxo:** Abandono de carrinho — segundo e-mail da sequência (24h após abandono)
**Segmento:** Clientes com produto adicionado ao carrinho há 24h e sem finalização de compra. Receberam E-mail 1 (1h) e não converteram.
**Tamanho estimado:** ~200-400 clientes/semana (estimativa com base em taxa típica de abandono de e-commerce Brasil: 70-80%)
**Objetivo:** Recuperar 15% dos carrinhos abandonados nesta remessa
**KPI:** Receita por e-mail enviado (RPE) alvo: R$3,50+

**Cadência:**
- E-mail 1 (já enviado): 1h após abandono — urgência suave, sem desconto
- E-mail 2 (este): 24h após abandono — prova social + 10% OFF (válido 24h)
- E-mail 3 (próximo): 48h após abandono — "última chamada", CTA forte

**Oferta:** 10% OFF exclusivo válido por 24 horas (aplicado no checkout)
**Janela de urgência:** 24 horas a partir do envio deste e-mail

**From:** contato@barnswestern.com.br (verificado no Resend)
**Reply-to:** atendimento@barnswestern.com.br
**Horário de envio:** Automático (trigger 24h após abandono)

**Conformidade LGPD:** Somente clientes com opt-in ativo. Link de descadastro no rodapé. Endereço físico da Barns Western no rodapé.

**Notas estratégicas:** Segundo e-mail de abandono de carrinho tem taxa de conversão média 30% maior que o primeiro quando inclui desconto. Usar prova social com número de clientes ("mais de 1.200 clientes escolheram este modelo") antes do CTA para reforçar credibilidade.
```

## Veto Conditions

Rejeitar e reescrever se:

1. Segmento definido como "todos os clientes" ou sem critério comportamental específico
2. Objetivo sem KPI numérico mensurável

## Quality Criteria

- [ ] Fluxo classificado corretamente (welcome / abandono / recompra / promoção / reativação)
- [ ] Segmento com critério comportamental específico (não genérico)
- [ ] KPI numérico atribuído (% conversão, receita ou clientes)
- [ ] Cadência com timings definidos
- [ ] From/Reply-to com domínio verificado no Resend
- [ ] Conformidade LGPD mencionada