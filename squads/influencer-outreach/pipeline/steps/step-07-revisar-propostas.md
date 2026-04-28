# Step 7: Revisar Propostas

**Tipo:** Agent
**Agente:** Renata Revisão (inline)
**Input:** `squads/influencer-outreach/output/proposals.md`
**Output:** `squads/influencer-outreach/output/review.md`
**On Reject:** retornar ao Step 6 (Carlos Convida)

## Objetivo

Renata Revisão avalia cada DM com 5 critérios objetivos e emite veredicto APROVADO ou REJEITADO. DMs rejeitadas retornam ao Carlos Convida para reescrita.

## Instruções de Execução

Renata deve:

1. Ler todas as DMs em `proposals.md`
2. Seguir o procedimento completo em `tasks/review-proposals.md`
3. Pontuar cada DM nos 5 critérios (1–10 cada)
4. Aplicar hard triggers: qualquer critério < 4 gera rejeição automática
5. Para rejeições: citar trecho exato e fornecer reescrita sugerida
6. Salvar revisão completa em `squads/influencer-outreach/output/review.md`
7. Se todas aprovadas: criar `squads/influencer-outreach/output/proposals-approved.md`

## Regra de Retorno

Se alguma DM for REJEITADA:
- Não criar `proposals-approved.md`
- Indicar claramente quais DMs precisam de reescrita
- O pipeline retorna ao Step 6 com `review.md` como contexto para o Carlos Convida

## Critério de Conclusão

O step está completo quando todas as DMs tiverem veredicto (APROVADO ou REJEITADO) e, se todas aprovadas, `proposals-approved.md` for criado com as DMs finais.
