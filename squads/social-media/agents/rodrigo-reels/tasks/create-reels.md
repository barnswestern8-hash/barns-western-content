---
task: "Create Reels"
order: 1
input: |
  - selected_angle: Arquivo selected-angle.md com driver emocional, hook e narrativa do ângulo
  - briefing: Arquivo briefing.md com produto/tema do run
output: |
  - reel_script: Arquivo reel-script.md com roteiro completo: hook, setup, delivery, CTA, legenda, hashtags, sugestão de áudio
---

# Create Reels

Cria roteiro completo de Reel de 15-30 segundos para o Instagram da Barns Western: hook visual nos primeiros 2s, script de narração, cortes visuais, subtítulos para edição, CTA específico e sugestão de áudio.

## Process

1. **Ler `selected-angle.md` e `briefing.md`**: Identificar driver emocional, hook do ângulo, narrativa e produto featured. Carregar `pipeline/data/tone-of-voice.md`.

2. **Definir duração alvo**: 15s (hook + entrega direta), 22s (hook + setup + delivery + CTA) ou 30s (hook + setup + delivery longo + CTA). Acima de 30s somente com justificativa — completion rate despenca.

3. **Escrever hook (0-2s)**: Text overlay de impacto, máx 10 palavras, visível sem som, cria curiosidade ou promete valor imediato. Sem logo, sem nome da marca, sem "Ei galera". Pode adaptar o hook do `selected-angle.md` para o formato de text overlay.

4. **Escrever setup (2-5s)**: 1-2 frases de contexto — por que o viewer deve continuar assistindo. Visual que ancora o problema ou promessa do hook.

5. **Escrever delivery (5-[N]s)**: O valor central do Reel — tutorial, insight, história de produto, comparação. Especificar:
   - Cortes visuais a cada 3-5 segundos
   - Text overlays para cada informação-chave (visível sem som)
   - Ritmo de narração: 130-150 palavras por minuto — conversa, não apresentação

6. **Escrever CTA ([N]-fim)**: Últimos 3-5 segundos. Ação específica e conectada ao conteúdo do Reel. Text overlay legível. Não "Me segue aqui" — mas "Compara antes de comprar. Link na bio."

7. **Documentar loop design**: Como o final conecta ao início para encorajar replay. Uma instrução visual que faça o loop parecer intencional.

8. **Escrever legenda**: Hook nos primeiros 125 chars (standalone). Corpo curto. Assinatura Barns. 3-5 hashtags.

9. **Especificar sugestão de áudio**: Trending sound com categoria/vibe, ou áudio original com direção clara.

## Output Format

```markdown
# Reel Script — [Produto/Tema] — [Nome do Ângulo]

## Duração Alvo
[N] segundos

## Script

### HOOK (0-2s)
[Visual]: [instrução visual]
[Audio]: [instrução de áudio ou silêncio]
[Text Overlay]: [TEXTO EM DESTAQUE — MÁXIMO 10 PALAVRAS]

### SETUP (2-5s)
[Visual]: [instrução visual]
[Script]: "[frase de narração]"
[Text Overlay (se aplicável)]: [texto na tela]

### DELIVERY ([5-Xs])
[Visual]: [instrução visual — especificar cortes]
[Script]: "[narração completa]"
[Text Overlays]: "[texto 1]" / "[texto 2]" / "[texto 3]"

### CTA ([X-fim])
[Visual]: [produto em destaque]
[Script]: "[CTA de narração]"
[Text Overlay]: [TEXTO CTA]

## Loop Design
[Instrução de como o final conecta ao início]

## Legenda

[Hook standalone — 125 chars]

[Corpo curto]

🎖️ This is Barns.

#barnswestern #[hashtag2] #[hashtag3]

## Audio Note
[Trending sound sugerido com vibe/categoria OU direção de áudio original]
```

## Output Example

> Use como referência de qualidade, não como template rígido.

```markdown
# Reel Script — Óculos UV400 — Educacional

## Duração Alvo
28 segundos

## Script

### HOOK (0-2s)
[Visual]: Close extremo na lente dos óculos Vaqueiro com sol batendo — reflexo dourado
[Audio]: Silêncio + som ambiente de vento no campo
[Text Overlay]: UV400 NÃO É O QUE VOCÊ PENSA.

### SETUP (2-5s)
[Visual]: Mão segurando dois óculos lado a lado — um barato, um Vaqueiro Barns
[Script]: "A maioria dos óculos no mercado tem essa etiqueta. Mas ela pode mentir."
[Text Overlay]: "a etiqueta pode mentir"

### DELIVERY (5-23s)
[Visual]: Split screen — diagrama simples de espectro UV à esquerda, produto à direita
[Corte 1 — 5s]: Diagrama UV aparece
[Script]: "UV400 significa bloqueio de 100% de raios UVA e UVB — até 400 nanômetros."
[Text Overlay]: "100% UVA + UVB / até 400nm"

[Corte 2 — 10s]: Close na lente do óculos barato vs. Vaqueiro
[Script]: "O problema? Qualquer fabricante pode colocar o selo sem garantir o material da lente."
[Text Overlay]: "qualquer um coloca o selo"

[Corte 3 — 16s]: Close nas mãos segurando o Vaqueiro com confiança
[Script]: "No Vaqueiro da Barns, a lente polarizada é testada. UV400 de verdade, não de etiqueta."
[Text Overlay]: "testado / UV400 de verdade"

### CTA (23-28s)
[Visual]: Produto Vaqueiro em close — óculos na luz dourada do campo
[Script]: "Compara antes de comprar. Link na bio."
[Text Overlay]: LINK NA BIO 👆

## Loop Design
O último frame (produto em luz dourada) corta de volta ao primeiro frame (close na lente com sol) — mesmo tom de cor, mesmo enquadramento. O viewer que assiste de novo sente continuidade natural.

## Legenda

UV400 não é número de catálogo. É sua visão protegida por anos.

A diferença entre o barato e o de verdade 👇

🎖️ This is Barns. Link na bio.

#barnswestern #UV400 #country #oculos #rodeio

## Audio Note
Opção 1 (trending): Buscar instrumental country acoustic no Reels Explorer — tom calmo, não animado.
Opção 2 (original): Som ambiente de campo (vento suave, pássaros distantes) + narração direta sem música.
```

## Quality Criteria

- [ ] Hook especificado nos primeiros 2s com text overlay legível sem som (máx 10 palavras)
- [ ] Duração alvo entre 15-30s definida e respeitada no script
- [ ] Text overlays especificados para informações-chave do delivery (visível sem som)
- [ ] Cortes visuais marcados a cada 3-5s no delivery
- [ ] Loop design documentado com instrução específica
- [ ] CTA específico e acionável (não genérico)
- [ ] Sugestão de áudio documentada

## Veto Conditions

Rejeitar e refazer se QUALQUER uma for verdadeira:
1. Hook começa com logo da marca, nome da marca ou saudação ("Ei galera", "Olá") — os primeiros 2s sem impacto imediato fazem o viewer sair
2. Script não especifica text overlays para as falas principais — 85% da audiência assiste sem som e não terá acesso ao conteúdo