---
type: auto
outputFile: output/{run_id}/briefing.md
---

# Step Auto-01: Briefing Automático

Este step é executado **sem intervenção do usuário**. O agente gera o briefing automaticamente com base na rotação semanal de produtos.

## Instruções para o Agente

1. Consultar o arquivo `pipeline/data/auto-product-rotation.md`
2. Identificar o dia da semana atual
3. Selecionar o produto, tipo de post e mensagem obrigatória correspondentes
4. Verificar se o asset de imagem existe em `assets/products/` — se não, marcar como "geração por IA"
5. Consultar `_memory/runs.md` para evitar repetição de produto/ângulo recente
6. Montar e salvar o briefing no formato abaixo

## Formato do Briefing Automático

```
# Briefing — Run Automático {data}

**1. Produto ou tema:** {produto do dia}
**2. Tipo de post:** {tipo do dia}
**3. Mensagem obrigatória:** {mensagem do dia}
**4. Asset de imagem:** {caminho do arquivo ou "geração por IA"}
**5. Modo:** AUTOMÁTICO — sem checkpoints, saída para rascunho
**6. Gerado em:** {timestamp}
```

## Observações

- Não aguardar input do usuário
- Prosseguir diretamente para o Step 2 (Iago Ideia)
- Em caso de dúvida entre dois produtos, priorizar o Óculos UV400 Roper (produto principal com asset disponível)