# Task: Analisar Perfis

**Agente:** Adriano Agro
**Input:** `squads/influencer-outreach/output/candidates-selected.md`
**Output:** `squads/influencer-outreach/output/profile-analyses.md`

## Objetivo

Realizar análise profunda de cada perfil selecionado: extrair métricas dos 3 posts mais recentes, calcular taxa de engajamento, identificar sinais de audiência country e emitir score de fit com recomendação de produto e canal de contato.

## Procedimento

1. Ler o arquivo `candidates-selected.md` para obter lista de perfis a analisar
2. Para cada perfil (máximo 10 por execução):

   **A. Dados do perfil:**
   - Navegar até a URL do perfil via Playwright
   - Extrair via meta tag: total de seguidores, bio completa
   - Verificar se tem email ou assessoria na bio
   - Verificar se posts estão visíveis (conta pública)

   **B. Posts mais recentes:**
   - Coletar URLs dos 3 posts mais recentes (não fixados, se possível)
   - Para cada post: curtidas (se visíveis), comentários, legenda completa, data
   - Extrair amostra de 5–10 comentários visíveis
   - Identificar marcas de parceiros mencionadas (@username de marcas)

   **C. Cálculo de ER:**
   - ER = (média curtidas + média comentários) / seguidores × 100
   - Se curtidas ocultas: ER estimado = (média comentários × 15) / seguidores × 100
   - Documentar claramente quando estimado via proxy

   **D. Score de fit (0–10):**
   - Bio country/agro (inclui termos ou emoji 🤠): +2 pts
   - Hashtags country em posts recentes (#agro, #country, #western, etc.): +2 pts
   - ER > 2%: +2 pts | ER entre 1% e 2%: +1 pt
   - Já realiza parcerias com marcas (marcas marcadas em posts): +2 pts
   - Audiência country nos comentários (termos ou usernames country): +2 pts

   **E. Classificação:**
   - 8–10 pts: MUITO ALTO ✅✅
   - 6–7 pts: ALTO ✅
   - 4–5 pts: MÉDIO ⚠️
   - < 4 pts: BAIXO ❌

   **F. Recomendação:**
   - Produto para gifting (baseado no estilo visual do criador)
   - Canal de contato (DM, email da bio, assessoria)

3. Salvar análise completa em `squads/influencer-outreach/output/profile-analyses.md`

## Formato de Output (por perfil)

```
# Análise: @username

Data: [DATA] | Seguidores: [N] | Posts: [N]
Bio: "[texto completo]"

---

## Posts Analisados

**Post 1** ([DATA]): [N] curtidas, [N] comentários
Legenda: "[texto]"
Parceiro marcado: [username ou "nenhum"]

**Post 2** ([DATA]): [N] curtidas, [N] comentários
Legenda: "[texto]"
Parceiro marcado: [username ou "nenhum"]

**Post 3** ([DATA]): [N] curtidas, [N] comentários
Legenda: "[texto]"
Comentário destaque: "[texto]" — @username

---

## Métricas

Média curtidas: [N] | Média comentários: [N]
Taxa de engajamento: **X%** [ou "estimada via comentários"]

---

## Score de Fit

| Critério | Pontos |
|----------|--------|
| Bio country/agro | X/2 |
| Hashtags country | X/2 |
| Taxa de engajamento | X/2 |
| Parcerias com marcas | X/2 |
| Audiência country | X/2 |
| **TOTAL** | **X/10** |

**Fit: [MUITO ALTO / ALTO / MÉDIO / BAIXO]**

---

## Recomendação

Produto: [produto específico adequado ao estilo]
Canal: [DM / email da bio / assessoria]
Proposta: [gifting / gifting + pagamento]

---
```

## Referências de Domínio

- `pipeline/data/research-brief.md` — benchmarks de ER e sinais de fit country
- `pipeline/data/quality-criteria.md` — critérios de aprovação por faixa de seguidores
