---
step: 1
name: "input-context"
type: "checkpoint"
label: "Fonte, Dores & Pilares"
---

# Step 1 — Fonte, Dores & Pilares

## Objetivo

Configurar o contexto completo do run em 3 etapas sequenciais, seguindo o fluxo Axoly: **Fonte → Dores & Soluções → Pilares**. Cada etapa é um checkpoint com AskUserQuestion. Ao final do step, o pipeline tem produto, persona, dores validadas e pilares selecionados — Paula já pode executar o diagnóstico psicológico com foco.

---

## Etapa A — Fonte

Apresentar a seleção de produto e persona usando AskUserQuestion.

**Pergunta 1 — Produto**

> "Qual produto você quer trabalhar nesta rodada?"

Opções sugeridas (baseadas no catálogo Barns Western):
- Óculos Tenesse — `https://barnswestern.com.br/products/oculos-tenesse`
- Óculos Canyon — `https://barnswestern.com.br/products/oculos-canyon`
- Especificar outro produto (free-text)
- Linha completa (sem produto específico)

Se o usuário escolher "especificar outro", coletar via free-text: nome do produto, URL da página do produto (obrigatória — usada nos criativos como Produto de Referência), categoria, faixa de preço e principal diferencial.

**Nota**: A URL do produto é registrada no contexto do run e aparece no campo "Produto de Referência" de cada ficha criativa de Carlos.

**Pergunta 2 — Persona**

> "Qual persona você quer trabalhar nesta rodada?"

Opções — as 6 personas oficiais da Barns Western:
- O Cliente Inseguro — ansioso por pertencer, busca validação
- O Comprador Prático — orientado a custo-benefício, cético
- O Buscador de Resultado — compra a transformação que o produto representa
- O Comparador de Preço — pesquisador, quer o melhor custo-benefício
- O Cliente Premium — exigente, qualidade percebida e exclusividade acessível
- O Explorador de Novidades — early adopter, movido por novidade e cultura

Após a seleção de persona, apresentar um breve resumo da persona escolhida (motivações centrais + gatilhos de compra) e confirmar antes de avançar.

**Pergunta 3 — Plataformas de Destino** (apresentar junto à confirmação)

> "Quais plataformas e formatos para esta rodada?"
- Meta Ads (Feed 1:1 e 4:5)
- TikTok Ads / Reels (9:16)
- Ambas (padrão)
- Especificar combinação

---

## Etapa B — Dores & Soluções

Com produto e persona definidos, o squad mapeia as dores mais relevantes para apresentação ao usuário — seguindo o modelo Axoly de Dores & Soluções.

**O que executar**:

1. Consultar `pipeline/data/buyer-personas.md` para listar as dores documentadas da persona selecionada
2. Consultar `pipeline/data/brand-strategy.md` para mapear as soluções correspondentes da Barns Western
3. Gerar lista de pares Dor → Solução em linguagem coloquial da persona

**Apresentar ao usuário** — pares Dor → Solução:

Formato de apresentação:

```
Dores & Soluções mapeadas para [Persona] × [Produto]:

① [Dor em voz da persona]
   → Solução: [como o produto/marca resolve]

② [Dor em voz da persona]
   → Solução: [como o produto/marca resolve]

③ [Dor em voz da persona]
   → Solução: [como o produto/marca resolve]

[...até 5-6 pares]
```

**Pergunta 4 — Validação de Dores**

> "Como ficou o mapeamento de dores?"
- Aprovado — usar estas dores como base
- Quero adicionar uma dor específica (free-text)
- Quero remover alguma dor (especificar)
- Refazer com foco diferente

Se o usuário quiser adicionar dores, registrar as dores novas como contexto antes de avançar. Se quiser remover, marcar as dores descartadas como "não usar nesta rodada".

---

## Etapa C — Pilares

Com produto, persona e dores validadas, o usuário seleciona quais pilares criativos ativar para esta rodada.

**Apresentar os 6 pilares disponíveis com descrição resumida**:

```
Pilares disponíveis para esta rodada:

① Ângulo — Uma dor, uma promessa, copy direto
② Conceito — Ideia com camada simbólica ou narrativa
③ DSB (Dor→Solução→Benefício) — Persuasão direta sem metáfora
④ Full Funnel — Awareness → Consideração → Conversão (requer consciência quente)
⑤ Creator / UGC — Testemunho real, primeira pessoa, tom cotidiano
⑥ DNA do Produto — Detalhes técnicos, materiais, construção — produto em foco
```

**Pergunta 5 — Seleção de Pilares**

> "Quais pilares você quer ativar para esta rodada?"
- Pilares 1, 2, 3 (padrão recomendado)
- Todos os 6 pilares
- Selecionar manualmente (free-text com números: "1, 3, 5")
- Apenas Creator/UGC (para campanha de prova social)

**Nota automática**: Pilar 4 (Full Funnel) e Pilar 6 (DNA do Produto) funcionam melhor para audiência quente/muito quente. Paula diagnosticará o nível de consciência no Step 2 — se a persona selecionada for tipicamente fria/morna, alertar o usuário sobre essa escolha e sugerir incluir também pilares de awareness.

---

## Confirmação Final do Step 1

Antes de avançar para Paula, apresentar resumo completo da configuração do run:

```
Configuração do Run — [data]

Produto: [nome]
Persona: [nome da persona]
Plataformas: [Meta / TikTok / Ambas]
Dores validadas: [N] pares
Pilares selecionados: [lista]

Próximo passo: Paula Psicóloga — Diagnóstico Psicológico
```

**Pergunta 6 — Confirmação**

> "Confirma a configuração acima para iniciar o diagnóstico?"
- Confirmar e iniciar
- Quero ajustar algo (voltar à etapa específica)

---

## Output deste step

Não gera arquivo de output — toda configuração é mantida como contexto de conversa e referenciada pelos agentes subsequentes.

**Contexto registrado para o pipeline**:
- Produto selecionado + atributos relevantes
- Persona selecionada + dores validadas pelo usuário
- Plataformas de destino
- Pilares ativados para esta rodada

Este contexto guia: Paula (nível de consciência por persona), Artur (dores priorizadas), Carlos (pilares a gerar), Diego (formatos de destino), Vera (critérios de validação por plataforma).
