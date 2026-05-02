---
id: "psychological-reading"
name: "Psychological Reading"
agent: "paula-psicologa"
output: "squads/ad-creative-architect/output/psychological-reading.md"
---

# Task: Leitura Psicológica da Persona

## Objetivo

Produzir o diagnóstico psicológico completo da persona com base no input de produto/persona fornecido no checkpoint inicial. O diagnóstico tem 4 campos obrigatórios que formam a fundação de todo o criativo gerado pelo squad.

## Input Esperado

- Descrição do produto ou serviço
- Descrição da persona (demográfica, comportamental, psicográfica)
- Nível de consciência estimado pelo usuário (se fornecido)
- Modo de operação: Modo Produto ou Modo Persona

## Processo de Execução

### 1. Análise do Input

Leia todo o input do checkpoint. Identifique:
- Dados explícitos sobre a persona (idade, comportamentos declarados, hábitos)
- Dados implícitos inferíveis pelo produto e contexto
- Gaps: informações ausentes que precisarão de hipótese assumida

### 2. Diagnóstico dos 4 Campos Obrigatórios

**Campo 1 — Nível de Consciência**

Classifique a persona em um dos 5 níveis de Eugene Schwartz:

| Nível | Definição | Ponto de Entrada do Copy |
|-------|-----------|--------------------------|
| Frio | Não sabe que tem o problema | Problema/curiosidade sem mencionar produto |
| Morno | Sabe do problema, busca soluções | Soluções comparadas, sem empurrar marca |
| Quente | Conhece o tipo de solução, avalia produtos | Diferencial do produto vs. concorrentes |
| Muito Quente | Conhece o produto, precisa de empurrão | Prova social, garantia, urgência |
| Pronto | Apenas precisa do gatilho final | Oferta direta, CTA imediato |

Regra: quando há dúvida, assuma o nível mais frio. É mais fácil simplificar do que complexificar.

**Campo 2 — Estado Emocional Atual**

Descreva como a persona se sente ANTES de ver o anúncio. Não como deveria se sentir — como de fato se sente. Use linguagem coloquial da persona, não termos clínicos.

Exemplos de estado emocional específico:
- ❌ "Insatisfeita com sua aparência" (genérico)
- ✅ "Fica com vergonha de aparecer em fotos de churrasco sem estar com o visual arrumado" (específico)

**Campo 3 — Trava de Compra**

Identifique o obstáculo principal entre a persona e a conversão. Nomeie na voz da persona — use a frase exata que ela diria para justificar não comprar.

Categorias comuns (use como checklist, não como escolha automática):
- Preço: "Fica caro pra algo que talvez eu não use muito"
- Adequação: "Não sei se vai combinar com o meu estilo"
- Urgência: "Não preciso agora, posso deixar para depois"
- Confiança: "Não conheço a marca, prefiro algo que já comprei antes"
- Risco: "E se não servir / não gostar / não funcionar?"

**Campo 4 — Gatilho Dominante**

Escolha UM único gatilho motivacional que vai ancorar toda a comunicação criativa. Apenas um — os demais ficam subordinados.

Gatilhos comuns no universo country/lifestyle:
- **Pertencimento tribal**: "Fazer parte desse mundo"
- **Identidade aspiracional**: "Ser a versão de mim que quero ser"
- **Validação social**: "Ser reconhecida por quem sou"
- **Praticidade com estética**: "Funcional e bonito ao mesmo tempo"
- **Autenticidade**: "Nada de imitação — o real"

Justifique a escolha do gatilho com base em dados do input ou hipótese explicitamente nomeada.

### 3. Hipóteses Assumidas

Liste todas as afirmações feitas por falta de dado explícito no input. Formato:
> **Hipótese assumida**: [afirmação] — **Razão**: [dado ausente no input]

## Formato de Output

```markdown
# Leitura Psicológica — [Nome da Persona ou Produto]

**Produto**: [nome]
**Modo de operação**: [Modo Produto / Modo Persona]
**Data**: [data]

---

## Diagnóstico Psicológico

### 1. Nível de Consciência
**Classificação**: [Frio / Morno / Quente / Muito Quente / Pronto]

**Justificativa**: [De onde vem esta classificação — comportamento observado, dado declarado ou hipótese]

**Implicação para o copy**: [O que isso determina sobre o ponto de entrada do gancho]

---

### 2. Estado Emocional Atual
**Estado**: [Descrição na voz da persona — coloquial, específica, sem jargão]

**Justificativa**: [Base no input ou hipótese nomeada]

---

### 3. Trava de Compra
**Trava principal**: "[Frase exata na voz da persona]"

**Categoria**: [Preço / Adequação / Urgência / Confiança / Risco / Outra]

**Justificativa**: [Base no input ou hipótese nomeada]

---

### 4. Gatilho Dominante
**Gatilho**: [Nome do gatilho]

**Definição para esta persona**: [O que este gatilho significa especificamente para esta persona, neste contexto]

**Justificativa**: [Por que este é o gatilho dominante e não outro]

---

## Hipóteses Assumidas

[Lista de hipóteses com formato: "**Hipótese**: [afirmação] — **Razão**: [dado ausente]"]

Se nenhuma hipótese foi necessária: "Nenhuma hipótese assumida — todos os campos foram preenchidos com base em dados explícitos do input."
```

## Critérios de Qualidade

- [ ] Todos os 4 campos preenchidos (nível de consciência, estado emocional, trava de compra, gatilho dominante)
- [ ] Cada campo tem justificativa de uma linha mínimo
- [ ] Estado emocional usa linguagem coloquial da persona (não abstrata)
- [ ] Trava de compra está nomeada na voz da persona (não jargão de marketing)
- [ ] Gatilho dominante é apenas UM — nenhum secundário aparece em pé de igualdade
- [ ] Hipóteses assumidas listadas explicitamente quando presentes
