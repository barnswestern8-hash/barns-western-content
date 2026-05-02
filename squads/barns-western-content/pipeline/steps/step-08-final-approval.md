---
type: automatic
---

# Step 8: Auto-Publicação

Este step é executado automaticamente. Não há interação do usuário.

## Instruções para Vera Veredito

Você acabou de emitir o veredicto no Step 7. Agora execute a publicação automaticamente:

### Se o veredicto foi APROVAR ou APROVAR CONDICIONAL:

1. Use a skill `instagram-publisher` para publicar o Feed no Instagram
2. Carregue o conteúdo de `output/feed-post.md`
3. Publique via Graph API do Instagram
4. Registre o resultado em `_memory/runs.md` com:
   - Data e hora da publicação
   - Produto postado
   - Tipo de post
   - Ângulo usado
   - Status: PUBLICADO

### Se o veredicto foi REJEITAR:

O pipeline já retornou ao Step 4 automaticamente. Após a reescrita, a revisão (Step 7) acontecerá novamente. Se após 2 ciclos de rejeição o conteúdo ainda não for aprovado, registre em `_memory/runs.md` com status: FALHOU e encerre o run.

### Output obrigatório

Após a publicação (ou falha), salve um resumo em `output/run-summary.md`:

```
# Resumo do Run — [DATA]

**Status:** [PUBLICADO / FALHOU]
**Produto:** [produto]
**Tipo de post:** [tipo]
**Ângulo:** [ângulo usado]
**Publicado em:** [data/hora]
**URL do post:** [se disponível]
```
