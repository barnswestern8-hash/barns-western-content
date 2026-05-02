---
id: "angle-hypotheses"
name: "Creative Angle Hypotheses"
agent: "artur-angulo"
input: "squads/ad-creative-architect/output/pain-matrix-hypotheses.md"
output: "squads/ad-creative-architect/output/pain-matrix-hypotheses.md"
---

# Task: Hipóteses de Ângulo Criativo

## Objetivo

Gerar hipóteses de ângulo criativo para cada dor mapeada na matriz — mínimo 3 hipóteses por dor, cada uma com mecanismo de conversão definido. O output é o menu de opções que o usuário seleciona no checkpoint de aprovação de ângulos.

## Input Esperado

- Matriz Dor × Solução completa (task `pain-matrix.md`)
- Diagnóstico e Tradução Estratégica de Paula
- Nível de consciência e gatilho dominante confirmados

## Processo de Execução

### 1. Geração de Hipóteses por Dor

Para cada dor na matriz, gerar mínimo 3 hipóteses de ângulo distintas. Cada hipótese deve:
- Usar um mecanismo de conversão diferente das outras da mesma dor
- Ser falsificável — deve poder falhar com personas diferentes
- Ter uma justificativa específica de por que funciona para ESTA persona

**Categorias de Ângulo (use como menu de possibilidades):**

| Ângulo | Mecanismo | Melhor para |
|--------|-----------|-------------|
| **Identificação** | A persona se reconhece na situação descrita e se sente compreendida | Nível frio/morno, dor de identidade |
| **Transformação** | Antes × Depois — a persona visualiza sua mudança com o produto | Gatilho aspiracional, dor de identidade |
| **Pertencimento** | "As pessoas como você já fazem isso" — pressão social positiva | Gatilho tribal, dor de pertencimento |
| **Confronto de crença** | Derruba a crença que impede a compra antes de apresentar o produto | Trava de preço/adequação/confiança |
| **Prova específica** | Dado, certificação ou resultado concreto derruba objeção racional | Nível quente, trava de confiança |
| **Urgência narrativa** | A dor se torna insuportável — agir agora é inevitável | Nível muito quente, trava de urgência |
| **Autoridade da tribo** | Quem já usa endossa — voz interna da comunidade | Gatilho tribal/validação social |
| **Curiosidade** | O gancho cria tensão que só é resolvida com o produto | Nível frio, produto desconhecido |

### 2. Verificação de Diversidade

Antes de entregar, verificar:
- [ ] As hipóteses para a mesma dor usam mecanismos de conversão diferentes
- [ ] Nenhuma hipótese é variação cosmética de outra (mesmo mecanismo, palavras diferentes)
- [ ] Existe pelo menos uma hipótese de nível frio (para audiência que não conhece o produto)
- [ ] Existe pelo menos uma hipótese de nível quente (para audiência que já conhece/comparou)

### 3. Seleção Recomendada

Ao final, indique quais 2-3 hipóteses Artur recomenda para teste prioritário e por quê. Esta recomendação é input para o checkpoint de seleção de ângulos — o usuário pode confirmar ou trocar.

## Formato de Output

Adicionado ao arquivo `pain-matrix-hypotheses.md` após a matriz:

```markdown
---

## Hipóteses de Ângulo Criativo

### Dor 1: "[frase da persona]"

#### Hipótese 1.1 — [Nome do Ângulo]
- **Ângulo**: [categoria — ex: Identificação]
- **Mecanismo de conversão**: [processo psicológico que move da dor para a ação]
- **Abordagem**: [como o criativo deve ser estruturado — tom, ponto de entrada, estrutura narrativa]
- **Por que funciona para esta persona**: [1-2 linhas específicas — não genéricas]

#### Hipótese 1.2 — [Nome do Ângulo]
- **Ângulo**: [categoria]
- **Mecanismo de conversão**: [...]
- **Abordagem**: [...]
- **Por que funciona para esta persona**: [...]

#### Hipótese 1.3 — [Nome do Ângulo]
- **Ângulo**: [categoria]
- **Mecanismo de conversão**: [...]
- **Abordagem**: [...]
- **Por que funciona para esta persona**: [...]

---

### Dor 2: "[frase da persona]"

[Repetir estrutura — mínimo 3 hipóteses]

---

### Dor N: "[frase da persona]"

[Repetir estrutura — mínimo 3 hipóteses]

---

## Recomendação de Artur para Teste Prioritário

| Prioridade | Hipótese | Justificativa |
|------------|----------|---------------|
| 1ª | [Hipótese X.Y] | [Por que esta tem maior potencial para esta persona agora] |
| 2ª | [Hipótese X.Y] | [Por que esta complementa a primeira em diversidade] |
| 3ª | [Hipótese X.Y] | [Por que esta testa uma crença diferente] |

> **Nota para o checkpoint**: O usuário pode confirmar estas hipóteses, selecionar outras ou combinar. Todas as hipóteses listadas são válidas para teste — a recomendação é ponto de partida, não restrição.
```

## Critérios de Qualidade

- [ ] Mínimo 3 hipóteses de ângulo por dor mapeada na matriz
- [ ] Cada hipótese tem: nome, ângulo/categoria, mecanismo de conversão, abordagem, justificativa
- [ ] Hipóteses para a mesma dor usam mecanismos distintos (sem duplicatas cosméticas)
- [ ] Existe pelo menos uma hipótese de nível frio e uma de nível quente no conjunto total
- [ ] Recomendação de prioridade fornecida com justificativa por hipótese
- [ ] Output completo adicionado ao arquivo `pain-matrix-hypotheses.md`
