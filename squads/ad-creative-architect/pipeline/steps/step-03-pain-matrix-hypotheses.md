---
step: 3
name: "pain-matrix-hypotheses"
type: "agent"
agent: "artur-angulo"
label: "Matriz Dor × Solução + Hipóteses"
inputFile: "output/psychological-reading.md"
outputFile: "output/pain-matrix-hypotheses.md"
---

# Step 3 — Matriz Dor × Solução + Hipóteses de Ângulo

## Agente responsável

**Artur Ângulo** — Creative Hypotheses Architect

## Objetivo

Construir a Matriz Dor × Solução e gerar o menu completo de hipóteses de ângulo criativo — o input para o checkpoint de seleção no Step 4.

## O que Artur executa

Artur executa suas duas tasks em sequência no mesmo arquivo de output:

1. **`pain-matrix`**: Mapeamento de dores e soluções
   - Mínimo 3 dores distintas da persona
   - Cada dor nomeada na linguagem coloquial da persona
   - Cada dor classificada por tipo (imediata, identidade, perda, pertencimento)
   - Cada dor conectada à solução do produto com benefício emocional e mecanismo
   - Verificação de cobertura: pelo menos uma dor endereça a trava de compra de Paula

2. **`angle-hypotheses`**: Geração de hipóteses criativas
   - Mínimo 3 hipóteses de ângulo por dor mapeada
   - Cada hipótese com: nome, categoria, mecanismo de conversão, abordagem, justificativa
   - Verificação de diversidade: mecanism

os distintos entre hipóteses da mesma dor
   - Recomendação de prioridade para teste (2-3 hipóteses destacadas com justificativa)

## Input

Lê `output/psychological-reading.md` para usar o diagnóstico de Paula como base.

## Output

Salvar em `output/pain-matrix-hypotheses.md`.

O arquivo contém a Matriz Dor × Solução + todas as hipóteses de ângulo + recomendação de Artur.

## Quando avançar

Avançar para o checkpoint do Step 4 após Artur completar a Matriz e todas as hipóteses.
