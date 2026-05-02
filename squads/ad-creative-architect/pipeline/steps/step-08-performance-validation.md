---
step: 8
name: "performance-validation"
type: "agent"
agent: "vera-veredito"
label: "Validação de Performance"
inputFile: "output/visual-protocol.md"
outputFile: "output/validation-report.md"
on_reject: 5
---

# Step 8 — Validação de Performance

## Agente responsável

**Vera Veredito** — Performance Validator

## Objetivo

Avaliar cada criativo completo (copy + protocolo visual) contra os 5 critérios de performance e emitir veredito binário com documentação de pontuação. Criativos aprovados avançam para o checkpoint final. Criativos rejeitados voltam ao Carlos no Step 5 com fixes obrigatórios específicos.

## O que Vera executa

Vera executa a task `validate-performance` para cada criativo:

**Os 5 critérios (nota 1-10 + justificativa de uma linha cada)**:
1. Aderência ao Diagnóstico Psicológico
2. Força do Gancho
3. Coerência do Nível de Consciência
4. Clareza do Mecanismo de Conversão
5. Adequação à Plataforma

**Regras de veredito**:
- Qualquer critério < 4 → REJEITAR ❌ (rejeição automática)
- Score médio ≥ 7 sem critério < 4 → APROVAR ✅
- Score médio entre 4 e 6,9 sem critério < 4 → REJEITAR ❌ com fixes

**Para criativos rejeitados**: Lista de fixes obrigatórios com instrução cirúrgica (verbo + objeto + contexto) por critério abaixo de 7.

## Inputs que Vera usa

- `output/visual-protocol.md` (criativos completos com protocolo visual)
- `output/creatives.md` (fichas criativas com copy original)
- `output/psychological-reading.md` (diagnóstico de Paula — referência para critérios 1 e 3)

## Output

Salvar em `output/validation-report.md`.

## on_reject

Criativos rejeitados voltam ao **Step 5** (Carlos Criativo).

Carlos recebe os fixes de Vera como briefing de correção obrigatório e reescreve apenas os elementos identificados. O ângulo, dor endereçada e estrutura de pilar permanecem.

## Quando avançar

- Se todos os criativos forem APROVADOS → avançar para o Step 9 (checkpoint final)
- Se algum criativo for REJEITADO → voltar ao Step 5 com os fixes de Vera

Quando voltar do Step 5 após correções, Vera avalia apenas os criativos corrigidos — os já aprovados não são reavaliados.
