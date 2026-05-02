---
execution: subagent
agent: squads/email-marketing/agents/beatriz-banner
inputFile: squads/email-marketing/output/email-copy.md
outputFile: squads/email-marketing/output/email-banner.jpg
model_tier: fast
---

# Step 05: Gerar Banner Visual

## Context Loading

Carregue estes arquivos antes de executar:

- `squads/email-marketing/output/email-copy.md` — Copy aprovado (tipo de campanha, produto, tom emocional)
- `_opensquad/_memory/company.md` — Identidade visual da Barns Western (paleta, estilo, produtos)
- `squads/email-marketing/pipeline/data/tone-of-voice.md` — Diretrizes visuais do squad

## Instructions

### Process

1. **Ler email-copy.md** para entender a mensagem central: produto destacado, tom emocional (urgência, pertencimento, aspiração), oferta.
2. **Ler company.md** para confirmar paleta e identidade visual da Barns Western.
3. **Definir e documentar o sistema de design** do banner: paleta (hex), mood, composição, formato (600x400px landscape 3:2).
4. **Construir o prompt de geração** com especificidade: sujeito, composição, iluminação, estilo, mood, qualidade. Sem texto no prompt.
5. **Executar o script em modo test:**
   ```bash
   python3 skills/image-ai-generator/scripts/generate.py \
     --prompt "[prompt completo]" \
     --output "squads/email-marketing/output/{run_id}/email-banner.jpg" \
     --mode test
   ```
6. **Avaliar internamente a imagem gerada**: paleta alinhada? Composição country? Sem texto renderizado?
7. **Registrar o sistema de design e o prompt usado** para rastreamento e consistência futura.

**IMPORTANTE:** Gerar APENAS em modo test. A geração em modo production ocorre SOMENTE após aprovação no checkpoint step 6.

## Output Format

```
SISTEMA DE DESIGN
==================
Plataforma: E-mail (banner principal)
Viewport: 600x400px (landscape 3:2)
Paleta: [cor1 (#hex)], [cor2 (#hex)], [cor3 (#hex)], [cor4 (#hex)]
Mood: [descrição em 1-2 palavras]
Composição: [descrição da cena planejada]

PROMPT UTILIZADO:
"[prompt completo em inglês, sem texto, com modificadores de qualidade]"

COMANDO EXECUTADO:
python3 skills/image-ai-generator/scripts/generate.py \
  --prompt "[prompt]" \
  --output "squads/email-marketing/output/{run_id}/email-banner.jpg" \
  --mode test

STATUS: [Imagem gerada com sucesso em mode test | Erro: descrição]
PATH: squads/email-marketing/output/{run_id}/email-banner.jpg

RATIONALE DE DESIGN:
[2-3 frases explicando as escolhas visuais e como se alinham à identidade da Barns Western]
```

## Output Example

```
SISTEMA DE DESIGN
==================
Plataforma: E-mail (banner principal)
Viewport: 600x400px (landscape 3:2)
Paleta: Marrom couro (#7B4A2D), Dourado country (#C49A3C), Bege claro (#F5E6C8), Azul céu (#87CEEB)
Mood: Country autêntico / aspiracional
Composição: Plano americano, cowboy com óculos de sol em campo aberto, luz dourada da tarde

PROMPT UTILIZADO:
"Cowboy wearing stylish brown sunglasses in an open Brazilian countryside field at golden hour,
warm sunlight reflecting on the lenses, tall grass in the background, wide blue sky,
authentic country/western Brazilian style, hyper realistic, 4K quality, clean composition,
landscape 3:2 format, warm earthy tones, cowhide leather hat, cinematic lighting"

COMANDO EXECUTADO:
python3 skills/image-ai-generator/scripts/generate.py \
  --prompt "Cowboy wearing stylish brown sunglasses in an open Brazilian countryside field at golden hour, warm sunlight reflecting on the lenses, tall grass in the background, wide blue sky, authentic country/western Brazilian style, hyper realistic, 4K quality, clean composition, landscape 3:2 format, warm earthy tones, cowhide leather hat, cinematic lighting" \
  --output "squads/email-marketing/output/2026-04-30-143200/email-banner.jpg" \
  --mode test

STATUS: Imagem gerada com sucesso em mode test
PATH: squads/email-marketing/output/2026-04-30-143200/email-banner.jpg

RATIONALE DE DESIGN:
Paleta de tons quentes (marrom couro + dourado + azul céu) reforça a identidade rural e aspiracional da Barns Western.
A iluminação de golden hour cria a atmosfera country sem artificialidade.
A composição landscape 3:2 encaixa perfeitamente no template de banner de e-mail 600px.
```

## Veto Conditions

Rejeitar e regerar se:

1. Imagem contém texto renderizado (legível ou distorcido)
2. Composição usa estética urbana ou corporativa que contradiz a identidade country/western

## Quality Criteria

- [ ] Sistema de design documentado antes da geração (paleta, mood, composição)
- [ ] Prompt sem texto — nenhuma instrução de texto no prompt de imagem
- [ ] Gerado em modo test (nunca production neste step)
- [ ] Composição alinhada à identidade visual country/western da Barns Western
- [ ] Path da imagem salvo e confirmado
- [ ] Rationale de design documentado