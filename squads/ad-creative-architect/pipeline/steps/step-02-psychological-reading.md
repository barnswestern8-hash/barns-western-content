---
step: 2
name: "psychological-reading"
type: "agent"
agent: "paula-psicologa"
label: "Leitura Psicológica"
inputFile: null
outputFile: "output/psychological-reading.md"
---

# Step 2 — Leitura Psicológica

## Agente responsável

**Paula Psicóloga** — Persona Psychologist

## Objetivo

Produzir o diagnóstico psicológico completo da persona com base no input coletado no Step 1. O output é a fundação de todo o trabalho criativo do squad.

## O que Paula executa

Paula executa suas duas tasks em sequência:

1. **`psychological-reading`**: Diagnóstico dos 4 campos obrigatórios
   - Nível de consciência (frio/morno/quente/muito quente/pronto) com justificativa
   - Estado emocional atual na linguagem coloquial da persona
   - Trava de compra nomeada na voz da persona
   - Gatilho dominante (apenas um) com justificativa

2. **`strategic-translation`**: Tradução do diagnóstico em direção estratégica
   - Ângulo de ataque (como entrar na mente desta persona)
   - Promessa central (resultado emocional/funcional na perspectiva da persona)
   - Tipo de abordagem recomendada
   - Restrições criativas (o que NÃO fazer com esta persona)
   - Instrução direta para Artur Ângulo

## Output

Salvar em `output/psychological-reading.md`.

O arquivo deve conter tanto o diagnóstico quanto a tradução estratégica — ambas as tasks completadas no mesmo documento.

## Quando avançar para o Step 3

Avançar automaticamente após Paula completar os 4 campos do diagnóstico + tradução estratégica.

Não é necessário checkpoint do usuário entre Step 2 e Step 3 — o diagnóstico de Paula alimenta diretamente Artur.
