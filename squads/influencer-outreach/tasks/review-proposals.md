# Task: Revisar Propostas

**Agente:** Renata Revisão
**Input:** `squads/influencer-outreach/output/proposals.md`
**Output:** `squads/influencer-outreach/output/review.md`

## Objetivo

Avaliar cada DM com 5 critérios objetivos. Emitir APROVADO ou REJEITADO com pontuação, justificativa e reescrita sugerida para cada rejeição.

## Procedimento

1. Ler o arquivo `proposals.md` com todas as DMs geradas
2. Para cada DM:

   **A. Verificar 5 critérios:**

   1. **Personalização (1–10):** A linha 1 referencia algo específico do perfil?
      - 9–10: Referência a post/legenda/data específica
      - 7–8: Referência a elemento da bio ou localização
      - 5–6: Referência genérica ao nicho country
      - < 5: Abertura sem referência ao criador
      - Hard trigger < 4: rejeição automática

   2. **Concisão (1–10):** Está dentro do limite de palavras?
      - 10: ≤ 100 palavras
      - 8–9: 101–110 palavras
      - 6–7: 111–120 palavras
      - < 6: acima de 120 palavras
      - Hard trigger < 4: acima de 150 palavras → rejeição automática

   3. **Proposta natural (1–10):** O produto é mencionado de forma contextualizada?
      - 9–10: Produto integrado à narrativa, parece presente natural
      - 7–8: Produto mencionado claramente mas sem ser catálogo
      - 5–6: Produto listado mas sem contexto de uso
      - < 5: Catálogo de produtos ou sem proposta concreta

   4. **Tom autêntico (1–10):** Soa como pessoa real ou como departamento?
      - 9–10: Completamente humano, caloroso, adaptado ao criador
      - 7–8: Humano com algum jargão pontual
      - 5–6: Mistura de tom humano e corporativo
      - < 5: Jargão corporativo ou spam evidente

   5. **CTA eficaz (1–10):** O call to action é de baixo atrito?
      - 9–10: "me responde aqui", "manda um oi" — zero fricção
      - 7–8: CTA presente mas levemente formal
      - 5–6: CTA presente com fricção (link, formulário)
      - < 5: Sem CTA ou CTA de alta fricção ("agende uma call")

   **B. Calcular média dos 5 critérios**

   **C. Aplicar regra de veredicto:**
   - APROVADO: média ≥ 7 E nenhum critério < 4
   - REJEITADO: média < 7 OU qualquer critério < 4 (hard trigger)

   **D. Para cada REJEITADO:**
   - Identificar o critério problemático com citação do trecho exato
   - Fornecer reescrita sugerida do trecho problemático

3. Salvar revisão completa em `squads/influencer-outreach/output/review.md`
4. Se todas as DMs forem aprovadas, criar também `squads/influencer-outreach/output/proposals-approved.md` com as DMs finais prontas para envio

## Formato de Output

```
==============================
REVISÃO DE PROPOSTAS — [DATA]
==============================

## @username

| Critério | Score | Justificativa |
|----------|-------|---------------|
| Personalização | X/10 | [porque...] |
| Concisão | X/10 | [N palavras] |
| Proposta natural | X/10 | [porque...] |
| Tom autêntico | X/10 | [porque...] |
| CTA eficaz | X/10 | [porque...] |

**Média: X.X/10 — [APROVADO ✅ / REJEITADO ❌]**

[Se REJEITADO:]
**Problema:** "[trecho exato]"
**Reescrita sugerida:** "[novo texto]"

---

## Resumo Final

Aprovadas: [N] | Rejeitadas: [N]
[Se rejeitadas: retornar ao Carlos Convida para reescrita das DMs marcadas como REJEITADO]
```

## Referências de Domínio

- `pipeline/data/quality-criteria.md` — critérios de aprovação detalhados
- `pipeline/data/anti-patterns.md` — padrões de falha recorrentes
