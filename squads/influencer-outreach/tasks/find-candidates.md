# Task: Buscar Candidatos

**Agente:** Beatriz Buscadora
**Input:** `squads/influencer-outreach/output/research-focus.md`
**Output:** `squads/influencer-outreach/output/candidates.md`

## Objetivo

Buscar perfis country/western no Instagram via hashtags e identificar 10–20 criadores de conteúdo com potencial de parceria para a Barns Western. Entregar lista ranqueada por score de fit.

## Procedimento

1. Ler o arquivo `research-focus.md` para identificar o foco da busca (hashtags prioritárias, nicho, localização)
2. Ler `_memory/memories.md` para carregar lista de perfis já abordados — estes devem ser excluídos
3. Abrir o Instagram via Playwright (usar sessão salva em `_opensquad/_browser_profile/`)
4. Buscar pelas hashtags definidas no research-focus.md e pelas hashtags padrão: #agro, #country, #western, #sertanejo, #boiadeiro, #nelore, #cowboy
5. Para cada hashtag, coletar até 30 perfis únicos dos posts mais recentes
6. Para cada perfil encontrado:
   - Verificar seguidores (meta tag `og:description` ou texto do perfil)
   - Ler a bio completa
   - Verificar presença de 🤠 na bio ou posts recentes
   - Verificar localização indicada na bio
7. Aplicar filtros de descarte:
   - Seguidores < 5.000 ou > 500.000
   - Bio sem relação com country/agro/western/sertanejo
   - Conta de empresa, loja ou marca (não criador pessoal)
   - Bio em inglês de outro país
   - Perfil já na lista de memories.md
8. Para cada candidato válido, calcular score (0–4):
   - +1 bio contém termo country/agro/western/sertanejo/campo/peão/boiadeiro
   - +1 emoji 🤠 na bio ou nos 3 posts mais recentes visíveis
   - +1 hashtags country presentes nos posts recentes
   - +1 localização rural indicada (GO, MT, MS, RO, MG interior, ou cidade do interior)
9. Selecionar os 10–20 candidatos com maior score
10. Em caso de empate, priorizar quem tem mais hashtags country visíveis
11. Salvar output estruturado em `squads/influencer-outreach/output/candidates.md`

## Formato de Output

```
# Candidatos Encontrados — [DATA]

Busca realizada em: [hashtags buscadas]
Perfis analisados: [N] | Candidatos selecionados: [N]

---

| Rank | @Username | Seguidores | Score | Bio (resumo) | URL |
|------|-----------|-----------|-------|--------------|-----|
| 1 | @username | 38K | 4/4 | "texto da bio" | instagram.com/username |
| 2 | ... | ... | ... | ... | ... |

---

Próximo passo: revisar lista e selecionar perfis para análise profunda.
```

## Referências de Domínio

- `pipeline/data/research-brief.md` — sinais de fit country e benchmarks
- `_memory/memories.md` — perfis já abordados (não incluir)
