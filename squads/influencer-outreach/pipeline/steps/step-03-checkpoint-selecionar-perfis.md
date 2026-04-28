# Step 3: Checkpoint — Selecionar Perfis para Análise

**Tipo:** Checkpoint
**Passo:** 3 de 9
**Input:** `squads/influencer-outreach/output/candidates.md`
**Output:** `squads/influencer-outreach/output/candidates-selected.md`

## Objetivo

O usuário revisa a lista de candidatos encontrados pela Beatriz e seleciona quais serão analisados em profundidade pelo Adriano Agro.

## Apresentação ao Usuário

Exibir o conteúdo de `candidates.md` — a lista ranqueada com score, seguidores e bio resumida de cada candidato.

## Perguntas para o Usuário

**Q1 — Seleção de perfis:**
Quais perfis quer analisar em profundidade?

a) Todos os candidatos da lista (máximo 10 por execução do Adriano)
b) Apenas os com score 4/4
c) Os top 5 da lista
d) Vou selecionar manualmente — me informe quais @usernames

**Q2 — Se seleção manual (resposta d na Q1):**
Quais @usernames quer analisar?

[campo livre — listar os @usernames desejados]

## Ação

Após receber as respostas, criar o arquivo `candidates-selected.md`:

```markdown
# Perfis Selecionados para Análise — [DATA]

| @Username | Seguidores | Score | URL |
|-----------|-----------|-------|-----|
| @username | [N] | [X/4] | [URL] |
```
