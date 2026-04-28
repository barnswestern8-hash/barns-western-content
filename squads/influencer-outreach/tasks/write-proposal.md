# Task: Escrever Propostas

**Agente:** Carlos Convida
**Input:** `squads/influencer-outreach/output/profile-analyses.md`
**Output:** `squads/influencer-outreach/output/proposals.md`

## Objetivo

Escrever uma DM personalizada para cada perfil aprovado, com abertura específica ao conteúdo real do criador, proposta concreta da Barns Western e CTA de baixo atrito. Máximo 120 palavras por mensagem.

## Procedimento

1. Ler o arquivo `profile-analyses.md` para obter análises completas dos perfis
2. Para cada perfil com fit ALTO ou MUITO ALTO:

   **A. Diagnóstico pré-escrita:**
   - Qual post/legenda/detalhe da bio usar como gancho de personalização?
   - O criador já faz parcerias? (se sim, pode assumir familiaridade com o modelo)
   - Qual é o driver dominante do criador: estilo/status? vida rural/pertencimento? conquista/rodeio?
   - Qual produto recomendar? (da análise do Adriano)

   **B. Estrutura da DM:**
   - Linha 1: referência específica ao conteúdo do criador (post, legenda, localização, bio)
   - Linhas 2–3: identidade da Barns Western em 1–2 frases (sem listar produtos)
   - Linhas 4–5: proposta concreta (produto específico + modelo de parceria)
   - Linha 6: CTA de baixo atrito

   **C. Ajuste de tom:**
   - Criador minimalista (legendas curtas/só emoji): DM mais curta e direta
   - Criador narrativo (captions longas): tom mais caloroso e conversacional
   - Criador com assessoria: tom mais profissional, mas ainda humano

   **D. Verificação antes de entregar:**
   - Contar palavras: está abaixo de 120?
   - Teste de genericidade: essa mensagem poderia ser enviada para outro criador sem alteração? Se sim, reescrever linha 1
   - Tem CTA? Está em baixo atrito?

3. Salvar todas as DMs em `squads/influencer-outreach/output/proposals.md`

## Formato de Output

```
# Propostas de DM — [DATA]

Total de propostas: [N]

---

## @username

**Gancho usado:** [post/detalhe específico usado na abertura]
**Produto:** [produto recomendado]
**Modelo:** [gifting / gifting + pagamento]

**DM:**
---
[texto completo da DM]
---

Palavras: [N] ✅ ou ❌

---
```

## Referências de Domínio

- `pipeline/data/research-brief.md` — tom de voz da Barns Western e DM best practices
- `pipeline/data/anti-patterns.md` — o que não fazer nas DMs
- `pipeline/data/output-examples.md` — exemplos de DMs aprovadas para calibração de tom
