---
id: "visual-protocol"
name: "Visual Protocol"
agent: "diego-diretor"
input: "squads/ad-creative-architect/output/creatives.md"
output: "squads/ad-creative-architect/output/visual-protocol.md"
---

# Task: Protocolo Visual

## Objetivo

Produzir especificação visual completa com os 12 campos obrigatórios para cada criativo aprovado no checkpoint Step 6, eliminando toda ambiguidade de produção. Ao final de cada protocolo, gerar o prompt de imagem IA pronto para execução.

## Input Esperado

- Output de `creatives.md` com criativos aprovados no checkpoint Step 6
- Para cada criativo aprovado, Carlos já entregou a camada visual completa:
  - **Headline** + **Variação A/B** (texto que aparece sobre a imagem)
  - **Subtítulo** (linha complementar)
  - **Direção Criativa** (Emoção, Atmosfera, Narrativa, Sensação final)
  - **Briefing da Arte** (descrição narrativa da imagem — input primário de Diego)
  - **Checklist de Elementos Visuais** (itens obrigatórios na imagem)
  - **Composição Visual** (percentuais das zonas)
  - **Hierarquia Visual** (ordem dos elementos)
  - **Tipografia**: Bebas Neue Bold (headline/CTA) + Montserrat Regular (subtítulo)
  - **Formato** (1:1 / 4:5 / 9:16)
- Identidade visual da Barns Western (paleta `#000000`, `#FFFFFF`, `#FFBF1A`, estilo fotográfico)

**Nota**: O Briefing da Arte de Carlos é o ponto de partida do protocolo visual de Diego. Diego não recria a descrição do zero — ele expande com profundidade técnica (12 campos) e converte em prompt para geração.

## Os 12 Campos Obrigatórios

Nenhum campo pode ficar em branco. Se não for crítico para o criativo específico, recebe valor neutro ou "a critério do executor com referência à paleta da marca".

### Campo 1 — Cenário
**O que especificar**: Local físico real onde a cena acontece. Não "ambiente campestre" — "beira de cerca de arame farpado em propriedade rural, com grama seca ao fundo e céu visível no horizonte".

### Campo 2 — Ambiente
**O que especificar**: Hora do dia, condição climática e qualidade da luz ambiente. "Fim de tarde, céu parcialmente nublado com raios de sol passando entre as nuvens, luz dourada difusa" — não apenas "hora dourada".

### Campo 3 — Perfil do Modelo
**O que especificar**: Idade aparente, tipo físico, expressão, vestuário completo (cada peça), acessórios. Cabelo, maquiagem se relevante. "Mulher, 25-30 anos, tipo físico atlético mas não glamouroso, expressão de satisfação natural (não sorriso comercial), vestindo [listar cada peça]".

### Campo 4 — Posição do Produto
**O que especificar**: Onde o produto está no frame, como está sendo usado/portado, ângulo de visibilidade. "Óculos no rosto da modelo, lente visível em 3/4, hastes aparecendo atrás da orelha, logo da marca visível no canto da haste direita".

### Campo 5 — Iluminação
**O que especificar**: Tipo de fonte (natural/artificial), qualidade (dura/suave/difusa), temperatura estimada em Kelvin ou descrição técnica. "Luz natural lateral direita, suave e difusa, temperatura aproximada 4500K — tom levemente dourado sem saturação excessiva".

### Campo 6 — Direção da Luz
**O que especificar**: Ângulo da fonte de luz em relação ao sujeito. "Luz vinda da direita a 45°, criando sombra suave no lado esquerdo do rosto — sem luz de preenchimento artificial, sombras naturais".

### Campo 7 — Textura
**O que especificar**: Materiais e texturas visíveis no frame que contribuem para o ambiente. "Couro envelhecido da cela, madeira áspera da cerca, tecido de jeans desgastado — texturas brutas e autênticas, sem materiais sintéticos visíveis".

### Campo 8 — Enquadramento
**O que especificar**: Plano (close, médio, americano, geral), ângulo de câmera (nível, alto, baixo), composição (regra dos terços, centralizado, diagonal). "Plano americano, câmera no nível dos olhos, modelo posicionada no terço esquerdo do frame com produto (óculos) como ponto focal central".

### Campo 9 — Profundidade de Campo
**O que especificar**: Nitidez do sujeito vs. desfoque do fundo (bokeh). Abertura equivalente se relevante. "Fundo desfocado com bokeh suave (equivalente f/2.0), modelo e produto em foco nítido, cerca ao fundo reconhecível mas sem definição".

### Campo 10 — Estilo Fotográfico
**O que especificar**: Referência de estilo de fotografia editorial, publicidade ou cultura visual específica. "Editorial de moda country americana — referência estética de campanhas da Wrangler e Boot Barn. Não fashion urbano, não lifestyle genérico".

### Campo 11 — Paleta de Cor
**O que especificar**: Tons dominantes, tons de apoio, temperatura geral da imagem. Pode incluir códigos HEX ou referências Pantone se relevante. "Dominância de terracota e caramelo (couro), apoio de verde oliva desbotado (vegetação), céu em azul dessaturado. Sem cores vibrantes ou saturadas — paleta terrosa e autêntica".

### Campo 12 — Emoção Transmitida
**O que especificar**: O sentimento exato que a persona deve sentir ao ver a imagem — uma ou duas palavras seguidas de descrição de como isso se manifesta visualmente. "Pertencimento autêntico — a sensação de 'isso é para mim, essa é minha tribo', comunicada pela naturalidade da cena, não por postura de modelo de catálogo".

## Processo de Execução

### 1. Leitura do Criativo

Para cada criativo aprovado, identificar e extrair da ficha de Carlos:
- O **Briefing da Arte** (descrição narrativa da imagem — ponto de partida dos 12 campos)
- O **Headline** selecionado (Variação A ou B conforme aprovado no Step 6) — texto que será renderizado sobre a imagem
- O **Subtítulo** — segunda linha de texto na imagem
- A **Composição Visual** (zones) — onde cada elemento vai no frame
- O **Formato** de destino (determina Campo 8 e aspect ratio do prompt)
- O ângulo e a dor que o criativo endereça
- O gatilho dominante da persona (Campo 12 deve servir este gatilho)

Diego lê o Briefing da Arte de Carlos e o expande com especificidade técnica nos 12 campos — não cria a visão visual do zero.

### 2. Preenchimento dos 12 Campos

Preencher na ordem dos campos — Campo 12 (emoção) deve ser verificado por último contra os demais: os campos técnicos 1-11 devem criar as condições para a emoção do campo 12.

### 3. Construção do Prompt de Imagem IA

Após o protocolo, construir prompt em inglês otimizado a partir dos 12 campos. O prompt deve incluir os overlays de texto que a imagem deve conter:

Estrutura do prompt:
```
[Subject description], [action/pose], [product placement], [setting], [lighting], [time of day], [camera angle], [focal length/depth of field], [photographic style], [color palette], [mood/emotion],
text overlay: "[HEADLINE EM CAIXA ALTA]" in Bebas Neue Bold at top/center, "[Subtítulo]" in Montserrat Regular below headline, "[CTA]" button in Bebas Neue Bold at bottom,
Barns Western logo subtle at bottom corner,
[aspect ratio], [quality tags]
```

Exemplos de qualidade tags: `--ar 1:1`, `hyperrealistic`, `editorial photography`, `photorealistic`, `high detail`, `professional lighting`.

**Tipografia nos overlays** (não negociável — identidade Barns Western):
- Headline: Bebas Neue, Bold, caixa alta — cor `#FFFFFF` sobre fundo escuro ou `#000000` sobre fundo claro
- Subtítulo: Montserrat, Regular — mesma lógica de contraste
- CTA: Bebas Neue, Bold — cor `#FFBF1A` (dourado Barns) no botão ou `#FFFFFF` em fundos escuros
- Logo: presença sutil, nunca protagonista, canto inferior direito preferencialmente

### 4. Verificação de Banco de Imagens Reais

Antes de acionar geração por IA, verificar se existe material real disponível:
- Imagens de influencer/lifestyle da Barns Western no banco de assets
- Fotos de produto em contexto de uso
- Se o material real atender o protocolo → referenciar o arquivo existente ao invés de gerar

### 5. Geração de Imagem com `image-ai-generator`

Se não houver material real adequado (ou se o ângulo criativo exigir algo específico que o banco não tem), executar a skill `image-ai-generator` com o prompt construído no passo 3.

**Como executar**:
1. Acionar skill `image-ai-generator` com o prompt completo
2. Especificar aspect ratio do formato de destino (1:1, 4:5 ou 9:16)
3. Salvar o resultado (caminho do arquivo gerado) no output

**Para Pilar DNA do Produto**: usar o briefing visual de Carlos como base dos campos 1, 3, 4 e 8. O elemento em foco (Campo 4), o fundo (Campo 1) e o texto na imagem (headline visual) devem refletir exatamente o briefing de Carlos.

**Para Pilar Creator/UGC**: a imagem deve parecer capturada em contexto real — baixa produção intencional. O prompt deve especificar "candid shot", "natural lighting", "authentic feeling" — não "editorial" ou "professional campaign".

## Formato de Output

```markdown
# Protocolo Visual — [Produto/Persona]

**Criativos base**: [referência aos criativos aprovados]
**Data**: [data]

---

## Protocolo Visual — Criativo [#]: [Nome do Ângulo] | [Pilar]

**Formato de destino**: [1:1 / 4:5 / 9:16]
**Ângulo base**: [referência ao criativo]
**Emoção-âncora**: [campo 12 — define a direção de todos os demais]

### Especificação Técnica

| Campo | Especificação |
|-------|--------------|
| 1. Cenário | [especificação técnica] |
| 2. Ambiente | [especificação técnica] |
| 3. Perfil do Modelo | [especificação técnica] |
| 4. Posição do Produto | [especificação técnica] |
| 5. Iluminação | [especificação técnica] |
| 6. Direção da Luz | [especificação técnica] |
| 7. Textura | [especificação técnica] |
| 8. Enquadramento | [especificação técnica] |
| 9. Profundidade de Campo | [especificação técnica] |
| 10. Estilo Fotográfico | [especificação técnica] |
| 11. Paleta de Cor | [especificação técnica] |
| 12. Emoção Transmitida | [especificação técnica] |

### Prompt de Imagem IA

```
[Prompt completo em inglês — construído a partir dos 12 campos]
```

### Imagem Gerada

**Fonte**: [Gerada por IA via image-ai-generator / Imagem real do banco — especificar arquivo]
**Resultado**: [caminho do arquivo gerado ou referência ao asset existente]
**Observações de ajuste**: [se a imagem precisou de iteração, documentar o que mudou no prompt]

---

[Repetir bloco para cada criativo aprovado]
```

## Critérios de Qualidade

- [ ] Protocolo completo com os 12 campos para cada criativo aprovado
- [ ] Nenhum campo genérico ou vago — especificidade técnica executável em todos
- [ ] Campo 12 (emoção) coerente com o gatilho dominante diagnosticado por Paula
- [ ] Campos técnicos 1-11 constroem as condições para a emoção do Campo 12
- [ ] Enquadramento (Campo 8) específico para o formato de destino
- [ ] Paleta (Campo 11) consistente com identidade visual da Barns Western
- [ ] Banco de imagens reais verificado antes de acionar geração por IA
- [ ] Prompt de IA construído e executado com `image-ai-generator`
- [ ] Resultado da imagem gerada (arquivo) referenciado no output
- [ ] Creator/UGC: prompt com "candid shot / authentic feeling" — sem estética editorial
- [ ] DNA do Produto: briefing visual de Carlos incorporado nos campos estruturais
