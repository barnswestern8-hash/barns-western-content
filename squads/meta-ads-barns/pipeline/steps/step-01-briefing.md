# Step 01 — Briefing do Run

**Tipo**: Checkpoint
**Agente**: Usuário
**Output**: squads/meta-ads-barns/output/briefing.md

---

## Objetivo

Coletar as informações específicas deste run antes de Marco Mapa carregar o contexto da marca. Sem o briefing preenchido, Marco não sabe qual produto, objetivo e restrições aplicar ao brand brief.

---

## Perguntas do Checkpoint

Usar AskUserQuestion para coletar (pode combinar em até 4 perguntas):

### Pergunta 1 — Produto/Foco
"Qual é o produto ou linha de foco deste run?"
Opções sugeridas:
- Óculos solares UV400 (linha principal)
- Acessórios (cintos, fivelas, braceletes)
- Bonés e chapéus
- Campanha de marca geral (sem produto específico)

### Pergunta 2 — Objetivo da Campanha
"Qual é o objetivo principal desta campanha no Meta Ads?"
Opções sugeridas:
- Conversão direta (compra no site)
- Geração de tráfego qualificado
- Awareness e reconhecimento de marca
- Remarketing (público que já visitou ou engajou)

### Pergunta 3 — Informações Adicionais (texto livre)
"Há algum dado específico para este run que devo considerar?"
Exemplos (para AskUserQuestion extrair como opções):
- Orçamento diário estimado em R$
- Prazo ou evento específico (ex: Festa do Peão de Barretos)
- Persona prioritária se já souber

---

## Output Esperado

Marco Mapa vai ler briefing.md. O arquivo deve conter:

```markdown
# Briefing do Run — [data]

## Produto/Foco
[produto escolhido pelo usuário]

## Objetivo
[objetivo escolhido]

## Informações Adicionais
[qualquer dado extra fornecido — orçamento, prazo, persona preferida]

## Personas Prioritárias (se informado)
[se o usuário já souber qual persona priorizar]
```

---

## Notas para o Pipeline Runner

- Este é o único momento em que o usuário fornece dados específicos do run
- Se o usuário não tiver orçamento definido, usar R$50-80/dia como estimativa de trabalho
- O briefing é salvo em output/briefing.md antes de avançar para o Step 2
