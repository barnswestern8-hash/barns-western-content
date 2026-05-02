---
id: "strategic-translation"
name: "Strategic Translation"
agent: "paula-psicologa"
output: "squads/ad-creative-architect/output/psychological-reading.md"
---

# Task: Tradução Estratégica

## Objetivo

Transformar o diagnóstico psicológico dos 4 campos em direção estratégica criativa — uma instrução clara sobre como o squad deve abordar a persona. A tradução estratégica é o que conecta o diagnóstico de Paula ao trabalho de Artur (hipóteses de ângulo) e Carlos (copy).

## Input Esperado

- Output completo da task `psychological-reading.md` (4 campos diagnósticos)
- Produto/oferta que será comunicado
- Formatos de anúncio disponíveis (Meta feed, Stories, Reels, TikTok)

## Processo de Execução

### 1. Definição do Ângulo de Ataque

Com base no nível de consciência e gatilho dominante, defina:

**Para cada nível de consciência — ponto de entrada obrigatório:**

| Nível | Ponto de Entrada |
|-------|-----------------|
| Frio | Dor ou situação identificável — sem mencionar produto/marca no gancho |
| Morno | Comparação de soluções ou promessa de resultado — produto como facilitador |
| Quente | Diferencial específico do produto — por que este e não o concorrente |
| Muito Quente | Prova + urgência — o que impede de comprar agora? |
| Pronto | CTA direto com oferta — mínimo atrito possível |

### 2. Definição da Promessa Central

A promessa central é o resultado emocional ou funcional que a persona vai obter. Ela não é o produto — é o que o produto entrega.

Estrutura: "[A persona] vai [resultado] sem [objeção / trava] graças a [mecanismo do produto]"

Exemplos:
- ❌ "Óculos UV400 de qualidade" (produto, não promessa)
- ✅ "Seus olhos param de arder no final do dia sem abrir mão do visual country" (promessa)

### 3. Tipo de Abordagem Recomendada

Defina qual abordagem narrativa melhor serve o diagnóstico:

| Abordagem | Quando usar |
|-----------|-------------|
| **Identificação com a dor** | Nível frio/morno — persona não conhece a solução ainda |
| **Demonstração da solução** | Nível morno/quente — persona conhece o problema, busca saída |
| **Prova social / Testemunho** | Nível quente/muito quente — persona precisa de validação |
| **Storytelling de transformação** | Gatilho de identidade aspiracional dominante |
| **Confronto de crença limitante** | Trava de compra é ceticismo ou resistência a tentar |
| **Urgência de pertencimento** | Gatilho tribal dominante — "a tribo está aqui" |

### 4. Restrições Criativas da Persona

Liste o que o copy e o visual NÃO podem fazer para esta persona — baseado no diagnóstico:

Exemplos de restrições:
- "Não usar linguagem de luxo — esta persona sente que 'caro' não é sobre ela"
- "Não mencionar concorrentes — ela não está no estágio de comparação ainda"
- "Não usar modelos em estúdio — desvirtua a autenticidade que é o gatilho dominante"

## Formato de Output

Adicionar ao output de `psychological-reading.md` a seguinte seção:

```markdown
---

## Tradução Estratégica

### Ângulo de Ataque
**Ponto de entrada**: [Como o criativo deve entrar na mente da persona]

**Justificativa**: [Ligação direta com o nível de consciência diagnosticado]

---

### Promessa Central
**Promessa**: [Resultado emocional/funcional — frase da perspectiva da persona]

**Mecanismo**: [O que no produto entrega essa promessa]

---

### Tipo de Abordagem Recomendada
**Abordagem**: [Nome da abordagem — ex: Identificação com a dor]

**Por que funciona para esta persona**: [Ligação com diagnóstico emocional e gatilho dominante]

---

### Restrições Criativas
O copy e visual desta persona NÃO devem:
- [Restrição 1 — com justificativa no diagnóstico]
- [Restrição 2 — com justificativa no diagnóstico]
- [Restrição N...]

---

### Instrução para Artur Ângulo
> [Síntese de 3-5 linhas em forma de briefing direto para o próximo agente: qual dor mapear primeiro, qual gatilho deve ancorar os ângulos, o que é sagrado não violar nesta persona]
```

## Critérios de Qualidade

- [ ] Ângulo de ataque definido com ligação explícita ao nível de consciência
- [ ] Promessa central na perspectiva da persona (não do produto)
- [ ] Tipo de abordagem escolhido com justificativa
- [ ] Mínimo 2 restrições criativas listadas e justificadas
- [ ] Instrução para Artur é acionável — não vaga, não genérica
- [ ] Toda a seção de Tradução Estratégica é adicionada ao output de leitura psicológica (mesmo arquivo)
