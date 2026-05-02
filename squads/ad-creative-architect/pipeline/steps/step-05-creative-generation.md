---
step: 5
name: "creative-generation"
type: "agent"
agent: "carlos-criativo"
label: "Geração de Criativos"
inputFile: "output/pain-matrix-hypotheses.md"
outputFile: "output/creatives.md"
---

# Step 5 — Geração de Criativos por Pilar

## Agente responsável

**Carlos Criativo** — Creative Writer

## Objetivo

Transformar os ângulos aprovados no checkpoint em criativos completos — uma ficha por ângulo × pilar, com copy calibrado por nível de consciência e adaptado por plataforma.

## O que Carlos executa

Carlos executa a task `create-creatives`:

**Regra fundamental**: Carlos gera conteúdo 100% original para cada rodada, baseado no produto × persona definidos no Step 1. O arquivo `axoly-creative-reference.md` é usado como padrão de formato e qualidade — nunca como fonte de copy ou visual a copiar. O conteúdo muda completamente a cada rodada.

**Para cada ângulo aprovado no Step 4**, Carlos gera apenas os pilares selecionados pelo usuário no Step 1 (Etapa C):

- **Pilar Ângulo**: Um único ângulo, uma dor, uma promessa — estrutura direta e falsificável
- **Pilar Conceito**: Ideia criativa com camada simbólica ou narrativa
- **Pilar DSB** (Dor → Solução → Benefício): Copy direto sem metáfora
- **Pilar Creator/UGC**: Testemunho real em primeira pessoa, linguagem cotidiana, sem tom publicitário
- **Pilar DNA do Produto**: Desconstrução técnica do produto com briefing visual para Diego

*Pilar Full Funnel*: Apenas se nível de consciência for Quente ou Muito Quente

**Cada ficha contém duas camadas**:

**Camada Visual** (usada por Diego para gerar a imagem):
- Produto de Referência (com URL)
- Headline (mínimo 2 variações A/B com abordagens distintas — texto que aparece sobre a imagem)
- Subtítulo (complementa o headline, não repete)
- Conceito Estratégico (o mecanismo de conversão explicado — não aparece no anúncio)
- Direção Criativa (Emoção → Atmosfera → Narrativa → Sensação final)
- Briefing da Arte (descrição narrativa completa da imagem — executável sem perguntas adicionais)
- Checklist de Elementos Visuais (5 itens obrigatórios para a imagem)
- Composição Visual (percentuais das zonas: superior / central / inferior)
- Hierarquia Visual (5 elementos ordenados por peso visual)
- Tipografia Sugerida (Headline: Bebas Neue Bold — imutável; Subtítulo: Montserrat Regular — imutável; CTA e corpo: pode variar por pilar — ex: Lato para DSB, Poppins para Creator/UGC, Oswald para DNA do Produto)
- CTA com fonte especificada
- Formato (Estático — 1:1 / 4:5 / 9:16 / 16:9)

**Camada de Copy** (usada nas plataformas como texto do anúncio):
- Copy de Corpo Meta Ads (legenda persuasiva, máximo 150 palavras)
- Adaptação TikTok Ads / Reels (script de fala com marcação de tempo)

## Inputs que Carlos usa

- Ângulos selecionados no Step 4
- Pilares selecionados no Step 1 (Etapa C)
- `output/pain-matrix-hypotheses.md` (dores, soluções, justificativas de ângulo)
- `output/psychological-reading.md` (nível de consciência, restrições criativas de Paula)
- `pipeline/data/buyer-personas.md` (perfil completo da persona — motivações, tom ideal, objetos de objeção)
- `pipeline/data/brand-identity.md` (vocabulário, paleta, arquétipos — identidade da Barns Western)
- `pipeline/data/brand-strategy.md` (diferenciais, termos proibidos, objeções e como quebrá-las)
- `pipeline/data/tone-of-voice.md` (tom de voz disponível)
- `pipeline/data/anti-patterns.md` (o que nunca fazer)

## Output

Salvar em `output/creatives.md`.

## Quando avançar

Avançar para o checkpoint do Step 6 após Carlos completar todas as fichas dos ângulos × pilares selecionados.

## Regras visuais obrigatórias (Axoly)

**Produto em uso**: Em todo criativo com modelo humano, o produto deve estar sendo USADO — óculos no rosto, bracelete no pulso, boné na cabeça — nunca solto, segurado ou apenas posicionado na cena. O Briefing da Arte deve declarar isso explicitamente. Logo da Barns na peça deve ser sutilmente visível (ex: haste do óculos).

**Distribuição de variantes de cor**: Quando o produto tem múltiplas cores, distribuir uma variante distinta por grupo de criativos (Protocolo A → variante 1, Protocolo B → variante 2, Protocolo C → variante 3). Registrar a variante escolhida no Briefing da Arte de cada ficha. Nunca usar a mesma cor/variante para todos os 18 criativos.

## Nota sobre rejeição de Vera

Se criativos voltam do Step 8 com fixes de Vera, Carlos reescreve apenas os elementos identificados nos fixes — o ângulo, a dor endereçada e a estrutura de pilar permanecem. Os fixes de Vera são o briefing de correção.
