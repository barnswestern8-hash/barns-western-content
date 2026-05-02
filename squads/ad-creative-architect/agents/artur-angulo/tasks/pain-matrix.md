---
id: "pain-matrix"
name: "Pain × Solution Matrix"
agent: "artur-angulo"
input: "squads/ad-creative-architect/output/psychological-reading.md"
output: "squads/ad-creative-architect/output/pain-matrix-hypotheses.md"
---

# Task: Matriz Dor × Solução

## Objetivo

Construir o mapa completo de dores da persona e conectar cada dor à solução correspondente do produto. A matriz é a fundação de todas as hipóteses de ângulo — sem ela, ângulos são palpites sem base estrutural.

## Input Esperado

- Output completo de `psychological-reading.md` (diagnóstico + tradução estratégica de Paula)
- Produto e seus atributos funcionais/emocionais

## Processo de Execução

### 1. Extração das Dores

Identifique mínimo 3 dores distintas da persona. Fontes:

- **Dor 1 (Diagnóstico)**: A dor principal implícita no estado emocional e trava de compra diagnosticados por Paula
- **Dor 2 (Funcional)**: Um problema prático e concreto que o produto resolve
- **Dor 3 (Identidade)**: Uma tensão entre quem a persona é e quem ela quer ser

Regras para nomear as dores:
- Sempre na linguagem coloquial da persona — como ela falaria com uma amiga
- Específica o suficiente para ser reconhecível — não toda persona do mundo tem essa dor, mas esta tem
- Verificar que cada dor é distinta — dores com o mesmo núcleo emocional são a mesma dor

**Classificação de dores:**

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| Dor Imediata | Incômodo cotidiano e concreto | "Meus olhos ardem no sol" |
| Dor de Identidade | Distância entre quem é e quem quer ser | "Não me sinto de fato do meio country" |
| Dor de Perda | Medo de perder algo importante | "Tenho medo de comprar e ficar mal" |
| Dor de Pertencimento | Exclusão de um grupo ou tribo | "As meninas do rodeio todas têm, eu ainda não" |

### 2. Mapeamento das Soluções

Para cada dor identificada, mapeie:
- A solução direta que o produto oferece
- O benefício emocional dessa solução (o que a persona sente depois)
- O mecanismo pelo qual o produto entrega essa solução

### 3. Verificação de Cobertura

Antes de finalizar a matriz, verificar:
- [ ] Pelo menos uma dor endereça a trava de compra identificada por Paula
- [ ] Pelo menos uma dor está ligada ao gatilho dominante identificado por Paula
- [ ] Nenhuma dor é duplicata de outra com palavras diferentes

## Formato de Output

Início do arquivo `pain-matrix-hypotheses.md`:

```markdown
# Matriz Dor × Solução + Hipóteses de Ângulo

**Produto**: [nome]
**Persona**: [nome/descrição]
**Baseado em**: psychological-reading.md — [data]

---

## Matriz Dor × Solução

| # | Dor (voz da persona) | Tipo | Solução do Produto | Benefício Emocional | Mecanismo |
|---|---------------------|------|-------------------|--------------------|-----------| 
| 1 | "[frase exata como a persona falaria]" | [tipo] | [o que o produto faz] | [como a persona se sente depois] | [como o produto entrega] |
| 2 | "[frase exata como a persona falaria]" | [tipo] | [o que o produto faz] | [como a persona se sente depois] | [como o produto entrega] |
| 3 | "[frase exata como a persona falaria]" | [tipo] | [o que o produto faz] | [como a persona se sente depois] | [como o produto entrega] |

**Dor que endereça a trava de compra**: Dor [#]
**Dor ligada ao gatilho dominante**: Dor [#]
```

## Critérios de Qualidade

- [ ] Mínimo 3 dores mapeadas (sem limite máximo se forem distintas)
- [ ] Cada dor nomeada na voz coloquial da persona
- [ ] Cada dor classificada por tipo
- [ ] Cada dor conectada à solução correspondente com benefício emocional e mecanismo
- [ ] Pelo menos uma dor endereça a trava de compra de Paula
- [ ] Pelo menos uma dor está ligada ao gatilho dominante de Paula
- [ ] Nenhuma dor duplicada (mesmo núcleo emocional com palavras diferentes)
