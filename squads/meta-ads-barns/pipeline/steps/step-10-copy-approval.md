# Step 10 — Aprovação de Copy + Visuais (Checkpoint)

**Tipo**: Checkpoint
**Agente**: Usuário
**Input**: copy-complete.md + visual-briefings.md + review-2.md
**Output**: Decisão do usuário (aprovar / solicitar ajuste)

---

## Objetivo

O usuário revisa o copy completo e os briefings visuais aprovados por Rafael e decide se avança para o plano de A/B testing ou solicita ajustes em peças específicas.

---

## Apresentação ao Usuário

Antes da pergunta, apresentar um resumo do que foi produzido:
- Quantidade de personas desenvolvidas
- Total de headlines, primary texts e anúncios completos
- Briefings visuais gerados

Usar AskUserQuestion para a decisão:

### Pergunta 1 — Decisão Principal
"O copy e os briefings visuais estão prontos para avançar?"
Opções:
- Aprovar e avançar para o plano A/B (Recomendado) — copy e visuais aprovados por Rafael
- Solicitar ajuste em peças específicas — descrever quais peças e o que mudar
- Solicitar nova geração de uma persona — refazer copy de persona específica

### Pergunta 2 — Peças para Ajuste (se solicitado)
"Quais peças precisam de ajuste?" (texto livre)
Exemplos como opções: headline específica, anúncio UGC, briefing visual de Reel

---

## Ações Pós-Checkpoint

- **Se APROVADO**: avançar para Step 11 (Sílvia Split — plano A/B)
- **Se AJUSTE SOLICITADO**: retornar ao Step 7 (Cléber) com instruções específicas do usuário
- **Se NOVA PERSONA**: retornar ao Step 6 (seleção) com a nova escolha
