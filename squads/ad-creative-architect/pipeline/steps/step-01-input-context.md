---
step: 1
name: "input-context"
type: "checkpoint"
label: "Fonte, Dores & Pilares"
---

# Step 1 — Fonte, Dores & Pilares

## Objetivo

Configurar o contexto completo do run em 3 etapas sequenciais, seguindo o fluxo Axoly: **Fonte → Dores & Soluções → Pilares**. O fluxo suporta dois modos de entrada — **Modo Produto** (parte do produto, persona é opcional) e **Modo Persona** (parte da persona, produto é opcional). A ordem das perguntas muda conforme o modo escolhido. Ao final do step, o pipeline tem produto, persona, dores validadas e pilares selecionados.

---

## Etapa A — Fonte

**Pergunta 0 — Modo de Entrada**

> "Você quer gerar criativos a partir de qual ponto de partida?"

- **Produto Específico** — escolha o produto primeiro; persona é opcional
- **Buyer Persona** — escolha a persona primeiro; produto é opcional

Registrar o modo escolhido. A partir daqui, o fluxo bifurca:

---

### Modo Produto (entrada pelo produto)

**Pergunta 1A — Categoria do Produto**

> "Qual categoria de produto você quer trabalhar nesta rodada?"

Antes de apresentar esta pergunta, leia a estrutura de pastas em `squads/barns-western-content/assets/products/` via Bash para obter as categorias disponíveis. Apresentar como opções (máx. 4):
- Óculos
- Bonés
- Braceletes de Cobre
- Fivelas

**Pergunta 1B — Segmento** (somente se a categoria tiver subpastas de gênero — atualmente Óculos e Fivelas)

> "Qual segmento?"

Ler os subdiretórios da categoria escolhida via Bash. Opções típicas:
- Masculino
- Feminino
- Unissex

Se a categoria não tiver subpastas de gênero (ex: Bonés, Braceletes de Cobre), pular este passo.

**Pergunta 1C — Modelo**

> "Qual modelo?"

Via Bash, listar os arquivos da pasta da categoria/segmento escolhida, extrair os nomes dos modelos (remover o padrão ` (N).ext` do final de cada arquivo para deduplicar), e apresentar em ordem alfabética. Como a lista pode ter muitos itens e AskUserQuestion aceita no máximo 4 opções, paginar usando "Ver mais modelos →" como última opção quando necessário.

Após a seleção do modelo, registrar:
- **Caminho dos assets**: `squads/barns-western-content/assets/products/{categoria}/{segmento}/{modelo}*.{ext}`
- **URL do produto**: `https://barnswestern.com.br/products/{slug do modelo em lowercase com hífens}` — apresentar ao usuário para confirmar ou corrigir, pois o slug pode variar
- **Número de variantes disponíveis**: contar os arquivos do modelo no diretório

**Nota**: A URL do produto e o caminho dos assets são registrados no contexto do run. A URL aparece no campo "Produto de Referência" das fichas criativas de Carlos. Os assets são usados por Diego para geração visual.

**Pergunta 2 — Persona**

> "Qual persona você quer trabalhar nesta rodada?"

As 6 personas são apresentadas em duas páginas de AskUserQuestion (máx. 4 opções por página):

**Página 1** (se nenhuma das 4 atender, o usuário clica "Ver mais"):
- O Cliente Inseguro — busca validação, medo de compra errada
- O Comprador Prático — direto ao ponto, quer praticidade e custo-benefício
- O Buscador de Resultado — compra a transformação e identidade
- Ver mais personas →

**Página 2** (apresentada se o usuário selecionou "Ver mais"):
- O Comparador de Preço — pesquisador, quer o melhor custo-benefício
- O Cliente Premium — exigente, busca exclusividade e qualidade
- O Explorador de Novidades — early adopter, movido por novidade

Após a seleção da persona, apresentar um breve resumo (motivações centrais + gatilhos de compra extraídos de `pipeline/data/buyer-personas.md`) e confirmar antes de avançar.

**Pergunta 3 — Plataformas de Destino** (apresentar junto à confirmação da persona)

> "Quais plataformas e formatos para esta rodada?"
- Meta Ads (Feed 1:1 e 4:5)
- TikTok Ads / Reels (9:16)
- Ambas (padrão)
- Especificar combinação

---

### Modo Persona (entrada pela persona)

**Pergunta 1 — Persona**

> "Qual persona você quer trabalhar nesta rodada?"

Apresentar as 6 personas em duas páginas (máx. 4 opções por AskUserQuestion):

**Página 1:**
- O Cliente Inseguro — busca validação, medo de compra errada
- O Comprador Prático — direto ao ponto, quer praticidade e custo-benefício
- O Buscador de Resultado — compra a transformação e identidade
- Ver mais personas →

**Página 2** (se "Ver mais" for selecionado):
- O Comparador de Preço — pesquisador, quer o melhor custo-benefício
- O Cliente Premium — exigente, busca exclusividade e qualidade
- O Explorador de Novidades — early adopter, movido por novidade

Após a seleção, apresentar um breve resumo da persona escolhida (motivações + gatilhos de compra, a partir de `pipeline/data/buyer-personas.md`).

**Pergunta 2 — Produto** (opcional neste modo)

> "Deseja vincular um produto específico para direcionar as dores?"
- Sim — selecionar produto (ir para fluxo de categoria → segmento → modelo igual ao Modo Produto)
- Não — gerar dores genéricas da persona, sem produto específico

**Pergunta 3 — Plataformas de Destino**

> "Quais plataformas e formatos para esta rodada?"
- Meta Ads (Feed 1:1 e 4:5)
- TikTok Ads / Reels (9:16)
- Ambas (padrão)
- Especificar combinação

---

## Etapa B — Dores & Soluções

Com produto e persona definidos, o squad mapeia as dores mais relevantes para apresentação ao usuário — seguindo o modelo Axoly de Dores & Soluções.

**O que executar**:

1. Consultar `pipeline/data/buyer-personas.md` para carregar o perfil completo da persona selecionada (dores, objeções, psicologia da compra, gatilhos)
2. Consultar `pipeline/data/brand-strategy.md` para mapear as soluções correspondentes da Barns Western
3. Gerar **2-3 pares Dor → Solução** — conforme o modo de entrada:

   **Modo Produto** (produto escolhido + persona opcional):
   - Dores específicas ao posicionamento do produto × perfil da persona
   - Se nenhuma persona foi selecionada: gerar dores a partir do produto + persona mais compatível (consultar tabela Persona × Pilar em `buyer-personas.md`)
   - Ex: Óculos Roper × Comprador Prático → dores de versatilidade e proteção real

   **Modo Persona** (persona escolhida + produto opcional):
   - Dores derivadas da psicologia da persona × categoria/produto vinculado
   - Se nenhum produto foi selecionado: gerar dores genéricas da persona para a marca
   - Ex: Comprador Prático sem produto específico → dores de praticidade e custo-benefício na experiência de compra

   **Regras de formato (aplicam-se em ambos os modos)**:
   - Escrever em **voz de 1ª pessoa, linguagem coloquial** da persona — como ela falaria para um amigo
   - Exemplos corretos: *"Achei óculos bonitos, mas será que protegem mesmo?"* / *"Queria um óculos que combinasse com a estrada e a cidade."*
   - Exemplos errados: *"Preocupação com proteção UV"* / *"Busca de versatilidade"* (abstratos, não são voz da persona)

**Apresentar ao usuário** — pares Dor → Solução:

Formato de apresentação:

```
Dores & Soluções — [Persona] × [Produto]:

① "[Dor em 1ª pessoa, voz coloquial da persona]"
   → "[Solução em linguagem direta de benefício]"

② "[Dor em 1ª pessoa, voz coloquial da persona]"
   → "[Solução em linguagem direta de benefício]"

③ "[Dor em 1ª pessoa, voz coloquial da persona]"  (opcional, se houver terceira dor relevante)
   → "[Solução em linguagem direta de benefício]"
```

**Pergunta 4 — Validação de Dores**

> "Como ficou o mapeamento de dores?"
- Aprovado — usar estas dores como base
- Quero adicionar uma dor específica (free-text)
- Quero remover alguma dor (especificar)
- Regenerar com outro foco

Se o usuário quiser adicionar dores, registrar as novas dores como contexto antes de avançar. Se quiser remover, marcar as dores descartadas como "não usar nesta rodada".

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
