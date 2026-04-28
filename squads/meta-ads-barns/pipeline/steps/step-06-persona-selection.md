# Step 06 — Seleção de Personas (Checkpoint)

**Tipo**: Checkpoint
**Agente**: Usuário
**Input**: buyer-personas.md + angles.md + review-1.md
**Output**: squads/meta-ads-barns/output/selected-personas.md

---

## Objetivo

O usuário revisa as 6 personas e os 10 ângulos por persona aprovados por Rafael, e seleciona 2-3 personas prioritárias para as quais Cléber vai produzir copy completo (10 headlines, 10 primary texts, 10 CTAs, 5 anúncios por persona).

---

## Apresentação ao Usuário

Antes da pergunta, apresentar um resumo das 6 personas com:
- Nome da persona
- Motivação central (1 frase)
- Gatilho dominante
- Oferta ideal
- 2-3 hooks mais fortes dos 10 ângulos gerados

Usar AskUserQuestion para a seleção:

### Pergunta 1 — Personas Prioritárias (multiSelect: true)
"Quais personas você quer priorizar para copy completo neste run? (selecione 2-3)"
- O Vaqueiro Autêntico — Autoridade técnica + Identidade
- O Festeiro Country — Pertencimento + Status social
- A Mulher Country — Empoderamento + Representatividade
- O Consumidor de Estilo Sertanejo — Aspiração + Acessibilidade

### Pergunta 2 — Ângulos Prioritários (texto livre)
"Tem algum ângulo específico que te chamou atenção para priorizar?"
(Extrair exemplos dos ângulos gerados como opções)

---

## Output Esperado

Salvar em `squads/meta-ads-barns/output/selected-personas.md`:

```markdown
# Personas Selecionadas — Run [data]

## Personas para Copy Completo
1. [Persona N] — [motivo da seleção]
2. [Persona N] — [motivo da seleção]
3. [Persona N] — [motivo da seleção, se houver]

## Ângulos Prioritários (se indicados pelo usuário)
[Lista de ângulos específicos a priorizar]

## Personas para Referência (não desenvolver copy completo)
[Personas não selecionadas — Cléber pode referenciar mas não precisa desenvolver 5 anúncios completos]
```
