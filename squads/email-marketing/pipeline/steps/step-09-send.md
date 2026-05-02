---
execution: inline
agent: squads/email-marketing/agents/eduardo-envio
inputFile: squads/email-marketing/output/email-copy.md
outputFile: squads/email-marketing/output/send-confirmation.md
---

# Step 09: Envio da Campanha

## Context Loading

Carregue estes arquivos antes de executar:

- `squads/email-marketing/output/email-copy.md` — Copy aprovado (assunto, corpo, CTA, PS)
- `squads/email-marketing/output/strategy-brief.md` — Segmento, from, reply-to, horário de envio
- `squads/email-marketing/output/review-verdict.md` — Confirmação de APROVADO
- `squads/email-marketing/output/email-banner.jpg` — Banner em modo production aprovado

## Instructions

### Process

1. **Confirmar APROVADO no review-verdict.md.** Não prosseguir se o veredicto for REPROVADO.
2. **Montar o HTML do e-mail mobile-first.** Template 600px, single-column: (a) banner no topo (img tag com path do banner); (b) corpo em texto formatado, parágrafos curtos; (c) CTA button em HTML (background colorido, texto em branco, mínimo 44x44px, padding 16px 32px); (d) PS em texto simples; (e) rodapé com unsubscribe link e endereço físico da Barns Western.
3. **Configurar o payload Resend.** Campos: `from` (conforme strategy-brief), `to` ou lista, `subject` (assunto aprovado), `html` (template montado), `reply_to`, `scheduled_at` (se fora da janela ideal).
4. **Verificar o from.** Confirmar que o domínio está verificado no Resend antes do envio.
5. **Executar o envio via Resend MCP.** Usar `batch_send_emails` para lotes ou `send_email` para individual.
6. **Verificar a resposta da API.** Confirmar que cada envio retornou um `id` sem erro. Em caso de erro, parar e reportar ao usuário.
7. **Registrar send-confirmation.md** com: campanha, segmento, quantidade, from, subject, timestamp, IDs do Resend, follow-up agendado.

## Output Format

```
SEND CONFIRMATION
=================
Campanha: [nome da campanha]
Squad Run: email-marketing/{run_id}
Segmento: [critério do segmento]
Destinatários: [N] e-mails

From: [endereço@barnswestern.com.br] ([verificado no Resend ✓ / ERRO: não verificado])
Reply-to: [endereço]
Subject: [linha de assunto enviada]

Método: [batch_send_emails / send_email]
Enviado em: [ISO 8601 timestamp com timezone]
Status API: [N/N e-mails enfileirados com sucesso ✓ | ERRO: descrição]

IDs Resend (amostra):
- [re_id1]
- [re_id2]
- [re_id3]
([N IDs registrados em send-confirmation-full.json se > 3]

Follow-up agendado: [timestamp ou "não aplicável"]

OBSERVAÇÕES:
- Banner: [path]
- HTML: [mobile-first, 600px, CTA ≥ 44x44px ✓]
- Rodapé: [unsubscribe ✓ | endereço físico ✓]
```

## Output Example

```
SEND CONFIRMATION
=================
Campanha: Abandono de carrinho — Óculos UV400 (E-mail 2 — 24h)
Squad Run: email-marketing/2026-04-30-143200
Segmento: Clientes com carrinho abandonado há 24h (opt-in ativo)
Destinatários: 847 e-mails

From: contato@barnswestern.com.br (verificado no Resend ✓)
Reply-to: atendimento@barnswestern.com.br
Subject: Seu óculos UV400 está te esperando (só por 24h)

Método: batch_send_emails (Resend MCP)
Enviado em: 2026-04-30T14:32:00-03:00
Status API: 847/847 e-mails enfileirados com sucesso ✓

IDs Resend (amostra):
- re_abc123def456
- re_xyz789uvw012
- re_mno345pqr678
(847 IDs registrados em send-confirmation-full.json)

Follow-up agendado: 2026-05-01T14:32:00 (E-mail 3 — 48h após abandono)

OBSERVAÇÕES:
- Banner: squads/email-marketing/output/2026-04-30-143200/email-banner.jpg
- HTML: mobile-first, 600px, CTA 48x48px ✓
- Rodapé: unsubscribe ✓ | endereço físico ✓
```

## Veto Conditions

Rejeitar e não enviar se:

1. From não está verificado no Resend (risco de blacklist do domínio)
2. API Resend retornou erro sem ID de confirmação

## Quality Criteria

- [ ] APROVADO confirmado no review-verdict.md
- [ ] HTML mobile-first gerado (600px, single-column)
- [ ] From verificado no Resend
- [ ] Resposta da API verificada com IDs de envio
- [ ] send-confirmation.md salvo com todos os detalhes
- [ ] Rodapé com unsubscribe e endereço físico