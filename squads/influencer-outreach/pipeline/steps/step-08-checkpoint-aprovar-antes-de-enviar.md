# Step 8: Checkpoint — Aprovação Final Antes de Enviar

**Tipo:** Checkpoint
**Passo:** 8 de 9 — IRREVERSÍVEL após este ponto
**Input:** `squads/influencer-outreach/output/proposals-approved.md`
**Output:** autorização para envio via Instagram

## Objetivo

Checkpoint final obrigatório antes do envio das DMs. O usuário lê as mensagens finais aprovadas e confirma o envio — esta ação não pode ser desfeita.

## Apresentação ao Usuário

Exibir o conteúdo completo de `proposals-approved.md` — todas as DMs revisadas e aprovadas pela Renata, prontas para envio.

**Exibir aviso:** "Após esta confirmação, as DMs serão enviadas via Instagram. Esta ação não pode ser desfeita."

## Perguntas para o Usuário

**Q1 — Confirmação de envio:**
As DMs estão prontas para envio?

a) Sim — enviar todas as DMs aprovadas agora
b) Não — preciso ajustar antes de enviar

**Q2 — Se "preciso ajustar" (resposta b na Q1):**
O que quer alterar?

a) Editar uma DM específica — me informe qual @username e o novo texto
b) Remover um perfil da lista de envio
c) Cancelar esta execução e recomeçar

## Ação

Somente prosseguir ao Step 9 se o usuário confirmar com opção "a" da Q1. Qualquer outra resposta deve pausar o pipeline e aguardar instrução do usuário.
