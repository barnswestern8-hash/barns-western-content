---
type: auto
outputFile: output/{run_id}/selected-angle.md
---

# Step Auto-03: Seleção Automática de Ângulo

Este step é executado **sem intervenção do usuário**. O agente seleciona automaticamente o melhor ângulo gerado por Iago Ideia.

## Instruções para o Agente

1. Ler os ângulos gerados em `output/{run_id}/angles.md`
2. Avaliar cada ângulo com base nos critérios abaixo
3. Selecionar o ângulo com maior pontuação
4. Salvar a seleção em `output/{run_id}/selected-angle.md`

## Critérios de Seleção (em ordem de prioridade)

1. **Alinhamento com identidade** — o ângulo reforça "O celeiro guarda a essência do Cowboy"?
2. **Diferenciação** — evita claims genéricos (Stage 4 de sofisticação de mercado)?
3. **Potencial de salvamento** — conteúdo que merece ser salvo (educativo, referência, aspiracional)?
4. **Coerência com o tipo de post do briefing** — mantém o objetivo definido (lançamento, lifestyle, etc.)?
5. **Novidade** — não repete ângulo usado recentemente (verificar `_memory/runs.md`)?

## Formato da Seleção

```
# Ângulo Selecionado — Run Automático {data}

**Ângulo escolhido:** {número} — {título do ângulo}
**Justificativa:** {1-2 linhas explicando a escolha com base nos critérios}
**Modo de seleção:** AUTOMÁTICO
```

## Observações

- Não aguardar input do usuário
- Prosseguir diretamente para o Step 4 (Fernanda Feed)
- Se dois ângulos empatarem, priorizar o com maior potencial de salvamento no Feed