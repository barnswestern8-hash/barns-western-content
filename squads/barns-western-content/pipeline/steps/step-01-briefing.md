---
type: checkpoint
outputFile: squads/barns-western-content/output/briefing.md
---

# Step 1: Briefing

Ponto de entrada do pipeline. O usuário preenche o briefing do run — produto ou tema, tipo de post desejado e qualquer mensagem específica. A resposta do usuário é salva em `briefing.md` e usada por Iago Ideia no Step 2.

## Instruções para o usuário

Por favor, responda as perguntas abaixo para iniciar o run:

---

**1. Produto ou tema**
Qual produto ou tema você quer criar conteúdo hoje?
Exemplos: "Óculos UV400 Vaqueiro", "Cinto artesanal linha Campo", "Tema: rodeio e identidade country"

**2. Tipo de post**
Qual é o objetivo principal deste post?
- Lançamento de produto
- Lifestyle / Identidade
- Educativo (explicar algo sobre o produto ou o nicho)
- Prova social (cliente real, depoimento)
- Promoção (desconto ou oferta)
- Outro (descreva)

**3. Mensagem específica (opcional)**
Há alguma mensagem, dado ou ângulo que você quer que seja obrigatoriamente incluído?
Exemplos: "quero destacar que o UV400 bloqueia 100% dos raios UVA e UVB", "temos uma promoção de 2º par com 50% off esse mês"

**4. Referência de imagem (opcional)**
O banco de imagens está organizado em `assets/products/` por categoria e gênero. Consulte `assets/catalog.md` para ver todos os produtos disponíveis.

Informe: categoria, gênero (se aplicável) e nome do produto.
Exemplos: "Óculos Masculino — Óculos Hunter", "Fivelas Feminino — Fivela Luna", "Bonés — Boné Classic"

Se o produto não estiver no catálogo, o agente de Feed usará IA com `--reference` apontando para produto similar.

---

Sua resposta será salva como `briefing.md` e usada pelo agente Iago Ideia para gerar os ângulos de conteúdo.