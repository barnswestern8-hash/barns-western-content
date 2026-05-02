---
id: "validate-performance"
name: "Performance Validation"
agent: "vera-veredito"
input: "squads/ad-creative-architect/output/visual-protocol.md"
output: "squads/ad-creative-architect/output/validation-report.md"
on_reject: 5
---

# Task: Validação de Performance

## Objetivo

Avaliar cada criativo completo (copy + protocolo visual) contra os 5 critérios de performance, emitir veredito binário (APROVAR ✅ / REJEITAR ❌) com pontuação documentada e, em caso de rejeição, listar fixes obrigatórios específicos para o Carlos Criativo.

## Input Esperado

- Output de `visual-protocol.md` (criativos completos com protocolo visual)
- Output de `creatives.md` (fichas criativas com copy)
- Output de `psychological-reading.md` (diagnóstico de Paula — referência para Critérios 1 e 3)

## Os 5 Critérios de Avaliação

Cada critério é pontuado de 1 a 10. Regra de rejeição automática: qualquer critério com nota < 4 = REJEITAR, independentemente do score total. Score médio ≥ 7 sem nenhum critério < 4 = APROVAR.

---

### Critério 1 — Aderência ao Diagnóstico Psicológico
**O que avaliar**: O criativo está alinhado com o estado emocional, trava de compra e gatilho dominante identificados por Paula?

**Como pontuar**:
- 9-10: O criativo fala diretamente ao estado emocional e usa o gatilho dominante com precisão
- 7-8: Alinhamento claro, com pequenas imprecisões de tom ou gatilho
- 5-6: Parcialmente alinhado — endereça a persona mas ignora elementos do diagnóstico
- 3-4: Desalinhamento significativo — o criativo serve outra persona ou outro momento
- 1-2: O criativo contradiz o diagnóstico (ex: mensagem de luxo para persona de autenticidade)

**Fonte de referência**: `psychological-reading.md` — campos 2, 3 e 4

---

### Critério 2 — Força do Gancho
**O que avaliar**: O gancho para o scroll? Cria tensão suficiente para forçar a leitura do copy?

**Como pontuar**:
- 9-10: Para qualquer scroll, cria tensão imediata, não depende de contexto para funcionar
- 7-8: Forte para a persona certa, pode não reter perfis adjacentes
- 5-6: Para o scroll apenas para quem já tem algum interesse no tema
- 3-4: Fraco — não cria tensão, não gera curiosidade, não provoca identificação
- 1-2: Invisível — pode ser ignorado sem nenhuma perda informacional

**Regra extra**: Um gancho de conversão para audiência fria pontua no máximo 4 neste critério, independente da qualidade textual.

---

### Critério 3 — Coerência do Nível de Consciência
**O que avaliar**: O ponto de entrada do criativo está calibrado para o nível de consciência diagnosticado?

**Como pontuar**:
- 9-10: O gancho e o desenvolvimento do copy estão perfeitamente calibrados para o nível
- 7-8: Calibrado, com leve desvio em um elemento (ex: headline levemente mais direto que o nível)
- 5-6: Mistura de níveis — gancho frio com copy de conversão ou vice-versa
- 3-4: Nível errado — criativo de consideração para audiência fria, ou awareness para audiência quente
- 1-2: Completa incompatibilidade entre o nível diagnosticado e a abordagem do criativo

**Fonte de referência**: `psychological-reading.md` — campo 1 + Tradução Estratégica

---

### Critério 4 — Clareza do Mecanismo de Conversão
**O que avaliar**: A transição entre copy e CTA é clara? A persona sabe o que fazer e por quê sem esforço cognitivo?

**Como pontuar**:
- 9-10: A ação é óbvia — o CTA é consequência natural da narrativa, sem salto lógico
- 7-8: Claro, com pequena lacuna entre copy e CTA que exige mínimo esforço
- 5-6: O CTA existe mas o mecanismo de conversão não está construído — a persona é "empurrada"
- 3-4: Ruptura entre copy e CTA — a persona precisaria de motivação adicional para agir
- 1-2: O criativo não converte — CTA genérico ou ausente, sem mecanismo de transição

---

### Critério 5 — Adequação à Plataforma
**O que avaliar**: O criativo está otimizado para o formato e comportamento da plataforma de destino?

**Como pontuar**:
- 9-10: O criativo foi escrito/construído para a plataforma — não é adaptação, é nativo
- 7-8: Bem adaptado, com um ou dois elementos que poderiam ser mais nativos
- 5-6: Funciona na plataforma mas não aproveita as convenções dela
- 3-4: Parece transplantado de outra plataforma — tom, formato ou ritmo errado
- 1-2: Incompatível com a plataforma (ex: copy de leitura longa para TikTok Ads de 6 segundos)

**Referências por plataforma**:
- Meta feed: copy de leitura, headline em destaque, prova social, CTA no botão
- Meta Stories/Reels: gancho visual + verbal nos primeiros 3s, script de fala, CTA falado
- TikTok Ads: primeira pessoa, quebra de quarta parede, ritmo de conversa, autenticidade > produção

---

## Processo de Execução

### 1. Leitura de Referência

Antes de avaliar qualquer criativo, reler:
- Os 4 campos do diagnóstico de Paula
- O nível de consciência e a Tradução Estratégica
- O ângulo base e a dor endereçada pelo criativo

### 2. Avaliação por Critério

Para cada criativo, preencher os 5 critérios com:
- Nota 1-10
- Justificativa de uma linha (o QUE na evidência do criativo sustenta essa nota)

### 3. Cálculo e Veredito

- Calcular score médio dos 5 critérios
- Verificar se algum critério foi pontuado < 4 (rejeição automática)
- Emitir veredito

**Regras de veredito**:
- Qualquer critério < 4 → REJEITAR ❌ (rejeição automática, independente do score)
- Score médio ≥ 7 sem critério < 4 → APROVAR ✅
- Score médio entre 4 e 6,9 sem critério < 4 → REJEITAR ❌ com fixes obrigatórios

### 4. Fixes Obrigatórios (apenas para rejeições)

Para cada critério que pontuou abaixo de 7:
- Nomear o problema específico com evidência do criativo
- Instruir a ação de correção com verbo + objeto + contexto

**Formato de fix**:
> "Critério [N] — [Problema]: [o que especificamente está errado]. Fix: [verbo] + [o quê] + [como/contexto]."

Exemplo:
> "Critério 3 — Nível errado: O gancho menciona o produto pelo nome na primeira frase, incompatível com audiência fria. Fix: Substituir a primeira frase por pergunta de identificação com a dor '[dor mapeada na matriz]' — sem mencionar marca até o segundo parágrafo."

## Formato de Output

```markdown
# Relatório de Validação de Performance

**Produto/Persona**: [referência]
**Data**: [data]
**Criativos avaliados**: [número]

---

## Avaliação — Criativo [#]: [Nome do Ângulo] | [Pilar]

### Ficha de Avaliação

| Critério | Nota (1-10) | Justificativa |
|----------|-------------|---------------|
| 1. Aderência ao Diagnóstico Psicológico | [nota] | [1 linha de evidência] |
| 2. Força do Gancho | [nota] | [1 linha de evidência] |
| 3. Coerência do Nível de Consciência | [nota] | [1 linha de evidência] |
| 4. Clareza do Mecanismo de Conversão | [nota] | [1 linha de evidência] |
| 5. Adequação à Plataforma | [nota] | [1 linha de evidência] |

**Score médio**: [X.X / 10]
**Critério abaixo de 4**: [Sim — Critério N / Não]

### Veredito: [APROVAR ✅ / REJEITAR ❌]

---

### Fixes Obrigatórios (apenas se REJEITAR)

1. **Critério [N] — [Nome do problema]**: [o que está errado]. Fix: [instrução de correção com verbo + objeto + contexto].
2. [Repetir para cada critério abaixo de 7]

> **Instrução para Step 5 (Carlos Criativo)**: Reescrever o criativo [#] com os fixes acima como briefing de correção obrigatório. Os demais elementos do criativo (ângulo, dor endereçada, estrutura de pilar) permanecem inalterados — apenas os elementos identificados nos fixes devem ser corrigidos.

---

[Repetir bloco para cada criativo avaliado]

---

## Resumo da Rodada

| Criativo | Score | Veredito |
|----------|-------|---------|
| [#] — [Nome] | [X.X] | [APROVAR ✅ / REJEITAR ❌] |

**Criativos aprovados**: [N] de [Total]
**Criativos rejeitados**: [N] de [Total] — retornam ao Step 5 com fixes
```

## Critérios de Qualidade

- [ ] Todos os criativos avaliados com os 5 critérios pontuados
- [ ] Cada critério tem nota E justificativa de uma linha com evidência do criativo
- [ ] Regra do critério < 4 aplicada corretamente (rejeição automática)
- [ ] Veredito em maiúsculas com símbolo (APROVAR ✅ / REJEITAR ❌)
- [ ] Para rejeições: fix por critério abaixo de 7, com formato verbo + objeto + contexto
- [ ] Instrução para Step 5 presente em cada rejeição
- [ ] Resumo da rodada com tabela de todos os criativos
