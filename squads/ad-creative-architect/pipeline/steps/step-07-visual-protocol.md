---
step: 7
name: "visual-protocol"
type: "agent"
agent: "diego-diretor"
label: "Protocolo Visual"
inputFile: "output/creatives.md"
outputFile: "output/visual-protocol.md"
---

# Step 7 — Protocolo Visual

## Agente responsável

**Diego Diretor** — Visual Director

## Objetivo

Expandir o Briefing da Arte de Carlos com especificidade técnica (12 campos) e gerar as imagens diretamente usando a skill `image-ai-generator`. Carlos já entregou a descrição narrativa da imagem — Diego converte essa visão em protocolo técnico executável e gera a imagem com os overlays de texto (Headline em Bebas Neue Bold, Subtítulo em Montserrat Regular, CTA em Bebas Neue Bold, logo Barns). Diego entrega protocolo + imagem gerada, não apenas protocolo + prompt.

## O que Diego executa

Diego executa a task `visual-protocol` para cada criativo aprovado:

**Os 12 campos obrigatórios**:
1. Cenário
2. Ambiente (hora do dia, clima, qualidade de luz)
3. Perfil do Modelo (idade, tipo físico, expressão, vestuário, acessórios)
4. Posição do Produto (onde no frame, ângulo, visibilidade)
5. Iluminação (tipo, qualidade, temperatura)
6. Direção da Luz (ângulo, sombras)
7. Textura (materiais e texturas visíveis no frame)
8. Enquadramento (plano, ângulo de câmera, composição)
9. Profundidade de Campo (foco/desfoque, abertura equivalente)
10. Estilo Fotográfico (referência editorial)
11. Paleta de Cor (tons dominantes, apoio, temperatura)
12. Emoção Transmitida (sentimento que a persona deve sentir ao ver)

**Adicionalmente**: Prompt de imagem IA em inglês, otimizado para geração. Diego verifica o banco de imagens reais da Barns Western antes de gerar — se existir material adequado, referencia o arquivo. Caso contrário, aciona `image-ai-generator` com o prompt e entrega a imagem gerada como output.

## Inputs que Diego usa

- Criativos aprovados no Step 6 (`output/creatives.md`) — com camada visual completa de Carlos:
  - **Briefing da Arte** (narrativa da imagem — ponto de partida dos 12 campos)
  - **Headline** aprovado (texto que aparece sobre a imagem, Bebas Neue Bold)
  - **Subtítulo** (Montserrat Regular)
  - **CTA** com texto exato (Bebas Neue Bold, cor `#FFBF1A`)
  - **Composição Visual** (zonas do frame)
  - **Formato** de destino (aspect ratio)
- `output/psychological-reading.md` (emoção-âncora do campo 12 deve servir o gatilho dominante de Paula)
- `pipeline/data/brand-identity.md` (paleta `#000000`, `#FFFFFF`, `#FFBF1A`, estilo fotográfico, tipografia Bebas Neue + Montserrat)
- Identidade visual da Barns Western (do `_investigations/consolidated-analysis.md`)
- Banco de imagens da Barns Western (imagens de produto e influencer — verificar antes de gerar por IA)

## Output

Salvar em `output/visual-protocol.md`.

## Quando avançar

Avançar automaticamente para o Step 8 após Diego completar todos os protocolos.

Não é necessário checkpoint entre Step 7 e Step 8 — o protocolo visual completo vai direto para Vera validar.
