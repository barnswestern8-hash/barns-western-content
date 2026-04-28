# Task: Enviar DMs

**Agente:** Mário Mensagem
**Input:** `squads/influencer-outreach/output/proposals-approved.md`
**Output:** `squads/influencer-outreach/output/outreach-report.md`

## Objetivo

Enviar as DMs aprovadas para cada criador via Instagram usando o navegador Playwright. Registrar status de cada envio com timestamp e reportar erros com sugestão de próximo passo.

## Procedimento

1. Ler o arquivo `proposals-approved.md` para obter lista de DMs com usernames e textos finais
2. Ler `_memory/memories.md` — verificar se algum perfil já foi contatado anteriormente (não reenviar)
3. Confirmar que a sessão do Instagram está ativa em `_opensquad/_browser_profile/` (conta @barns.western)
4. Verificar quantidade total de DMs: se > 20, processar apenas os 20 primeiros e reportar os demais como pendentes
5. Para cada DM aprovada:

   **A. Navegar ao perfil:**
   - Acessar `https://www.instagram.com/[username]/` via Playwright
   - Verificar se o perfil existe e é público

   **B. Abrir DM:**
   - Localizar e clicar no botão "Mensagem" no perfil
   - Aguardar o campo de texto da DM abrir
   - Se botão não encontrado ou DMs restritas: registrar como 🔒 RESTRITO e pular

   **C. Digitar e enviar:**
   - Usar `pressSequentially` com `slowly: true` para digitar o texto (comportamento humano)
   - Aguardar 1–2 segundos após digitar antes de enviar
   - Clicar em "Enviar" ou pressionar Enter
   - Aguardar confirmação visual (mensagem aparece na conversa)

   **D. Registrar status:**
   - ✅ Enviado: mensagem aparece na conversa — registrar timestamp
   - ❌ Erro: problema técnico — registrar motivo e timestamp
   - 🔒 Restrito: DMs restritas a seguidores — registrar e sugerir "seguir o perfil e tentar em 24h"

   **E. Intervalo entre envios:**
   - Aguardar entre 30 e 60 segundos com variação aleatória antes do próximo envio

6. Ao final, salvar todos os perfis contatados com sucesso em `_memory/memories.md`
7. Salvar relatório completo em `squads/influencer-outreach/output/outreach-report.md`

## Formato de Output

```
==============================
RELATÓRIO DE OUTREACH
Data: [DATA] | Conta: @barns.western
==============================

@username — ✅ Enviado — [HH:MM:SS]
@username — ✅ Enviado — [HH:MM:SS]
@username — 🔒 Restrito — [HH:MM:SS] — sugestão: seguir o perfil e tentar em 24h
@username — ❌ Erro: [motivo] — [HH:MM:SS]

---

Total: [N enviados]/[N tentados] com sucesso
Pendentes: [N] — [usernames] — [motivo]

---

Perfis adicionados a memories.md: [lista dos que tiveram envio ✅]
```

## Segurança da Conta

- Máximo 20 DMs por execução — limite de segurança contra spam detection
- Intervalo mínimo 30s entre envios (aleatório até 60s)
- Digitação via `pressSequentially` com `slowly: true` — comportamento humano
- Em caso de CAPTCHA ou verificação de conta: parar imediatamente e reportar ao usuário
