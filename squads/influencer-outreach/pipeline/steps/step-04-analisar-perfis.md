# Step 4: Analisar Perfis

**Tipo:** Agent
**Agente:** Adriano Agro (subagent)
**Input:** `squads/influencer-outreach/output/candidates-selected.md`
**Output:** `squads/influencer-outreach/output/profile-analyses.md`

## Objetivo

Adriano Agro realiza análise profunda de cada perfil selecionado: 3 posts recentes, taxa de engajamento, sinais de audiência country e score de fit (0–10) com recomendação de produto e canal de contato.

## Instruções de Execução

Adriano deve:

1. Ler a lista de perfis selecionados em `candidates-selected.md`
2. Seguir o procedimento completo em `tasks/analyze-profile.md`
3. Usar os benchmarks de `pipeline/data/research-brief.md` para calibrar os scores
4. Analisar no máximo 10 perfis por execução
5. Entregar análise completa em `squads/influencer-outreach/output/profile-analyses.md`

## Contexto de Domínio

- Benchmarks de ER: nano (<10K) > 5%, micro (10K–100K) 3–5%, mid (100K–500K) 1.5–3%
- Parcerias confirmadas como referência: @nfrbrand, @bullbrandoficial, @agrogallostore, @hat_station_
- Score de fit máximo: 10 pts (5 critérios de 2 pts cada)
- Classificação: MUITO ALTO (8–10), ALTO (6–7), MÉDIO (4–5), BAIXO (<4)

## Critério de Conclusão

O step está completo quando `profile-analyses.md` contiver análise de todos os perfis selecionados, cada um com: 3 posts analisados, ER calculado/estimado, score de fit completo e recomendação de produto + canal.
