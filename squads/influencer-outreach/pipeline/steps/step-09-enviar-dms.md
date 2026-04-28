# Step 9: Enviar DMs

**Tipo:** Agent
**Agente:** Mário Mensagem (subagent)
**Input:** `squads/influencer-outreach/output/proposals-approved.md`
**Output:** `squads/influencer-outreach/output/outreach-report.md`

## Objetivo

Mário Mensagem envia as DMs aprovadas via Instagram usando o navegador Playwright. Registra status de cada envio, mantém intervalos de segurança e atualiza memories.md ao final.

## Instruções de Execução

Mário deve:

1. Ler as DMs aprovadas de `proposals-approved.md`
2. Verificar `_memory/memories.md` — não reenviar para perfis já abordados
3. Verificar sessão do Instagram em `_opensquad/_browser_profile/` (conta @barns.western)
4. Seguir o procedimento completo em `tasks/send-dms.md`
5. Respeitar limite de 20 DMs por sessão e intervalo de 30–60s entre envios
6. Salvar relatório em `squads/influencer-outreach/output/outreach-report.md`
7. Atualizar `_memory/memories.md` com perfis contatados com sucesso

## Contexto de Segurança

- Máximo 20 DMs por execução — limite de segurança
- Intervalo aleatório 30–60s entre envios
- Digitação com `pressSequentially` + `slowly: true`
- Em caso de CAPTCHA: parar imediatamente e reportar ao usuário
- DMs com restrição: registrar como pendente, nunca como falha permanente

## Critério de Conclusão

O step está completo quando:
1. Todas as DMs (ou até 20) tiverem status registrado (enviado/erro/restrito)
2. `outreach-report.md` estiver salvo com timestamps
3. `_memory/memories.md` estiver atualizado com os perfis contatados com sucesso
