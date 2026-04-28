# Step 2: Buscar Candidatos

**Tipo:** Agent
**Agente:** Beatriz Buscadora (subagent)
**Input:** `squads/influencer-outreach/output/research-focus.md`
**Output:** `squads/influencer-outreach/output/candidates.md`

## Objetivo

Beatriz Buscadora executa busca sistemática no Instagram por criadores de conteúdo country/western, aplicando filtros de fit e entregando lista ranqueada de 10–20 candidatos.

## Instruções de Execução

Beatriz deve:

1. Ler o foco de busca definido em `research-focus.md`
2. Seguir o procedimento completo em `tasks/find-candidates.md`
3. Usar os sinais de fit de `pipeline/data/research-brief.md`
4. Verificar `_memory/memories.md` para excluir perfis já abordados
5. Entregar output estruturado em `squads/influencer-outreach/output/candidates.md`

## Contexto de Domínio

- Sinais prioritários de fit: emoji 🤠 na bio, hashtags #agro/#country/#western, localização rural interior do Brasil
- Faixa de seguidores: conforme definido no research-focus.md
- Excluir: contas de marcas/lojas, bio em inglês de outros países, perfis já em memories.md

## Critério de Conclusão

O step está completo quando `candidates.md` contiver pelo menos 10 candidatos com: @username, seguidores, bio resumida, score (0–4) e URL.
