---
type: automatic
outputFile: squads/social-media/output/briefing.md
---

# Step 1: Auto-Briefing

Este step é executado automaticamente. Não há interação do usuário.

## Instruções para Iago Ideia

Você deve gerar o briefing automaticamente seguindo esta lógica:

1. **Consulte o histórico de runs** em `_memory/runs.md` para saber quais produtos já foram postados recentemente — evite repetir o mesmo produto dos últimos 3 runs.

2. **Consulte o catálogo de produtos** em `assets/catalog.md` e escolha um produto que:
   - Não tenha sido postado recentemente
   - Tenha imagem disponível em `assets/products/`

3. **Escolha o tipo de post** de forma rotativa nesta ordem:
   - Lifestyle / Identidade
   - Lançamento de produto
   - Educativo
   - Prova social
   - Promoção
   (Consulte o histórico para saber qual foi o último tipo usado e avance para o próximo.)

4. **Gere uma mensagem específica** relevante para o produto escolhido, baseada no tom de voz da marca em `pipeline/data/tone-of-voice.md`.

## Output obrigatório

Salve o briefing em `output/briefing.md` com este formato:

```
# Briefing — Run Automático [DATA]

**Produto:** [nome do produto]
**Categoria:** [categoria]
**Tipo de post:** [tipo]
**Mensagem específica:** [mensagem gerada automaticamente]
**Imagem de referência:** [caminho da imagem em assets/products/]
```

Após salvar, prossiga automaticamente para o Step 2.
