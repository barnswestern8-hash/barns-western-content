---
step: 4
name: "angle-selection"
type: "checkpoint"
label: "Seleção de Ângulos"
---

# Step 4 — Seleção de Ângulos

## Objetivo

Apresentar as hipóteses de Artur ao usuário e coletar a seleção dos ângulos que serão levados para produção criativa no Step 5.

## O que apresentar ao usuário

1. Resumo da Matriz Dor × Solução (dores identificadas e suas soluções)
2. Lista de todas as hipóteses de ângulo por dor
3. Recomendação de prioridade de Artur com justificativa

## Perguntas do checkpoint (apresentar com AskUserQuestion)

**Pergunta 1 — Validação da Matriz**

> "Artur identificou [N] dores principais. A Matriz está correta?"
> - Confirmar e avançar para seleção de ângulos
> - Ajustar alguma dor (digitar o ajuste)
> - Adicionar uma dor que ficou de fora
> - Refazer a análise (voltar ao Step 2)

**Pergunta 2 — Seleção de Ângulos**

> "Quais hipóteses de ângulo você quer levar para produção?"
> - Usar a recomendação de Artur (hipóteses [X, Y, Z])
> - Selecionar manualmente (digitar os números das hipóteses)
> - Todas as hipóteses
> - Apenas hipóteses de uma dor específica

## Instrução de confirmação

Após seleção, confirmar:
> "Levaremos as hipóteses [X, Y, Z] para Carlos gerar os criativos. Os pilares padrão são: Ângulo, Conceito e DSB. Se quiser o pilar Full Funnel (para audiência quente/muito quente), informe aqui."

## Output deste step

Não gera arquivo. A seleção de ângulos é registrada como contexto e passada ao Carlos no Step 5.
