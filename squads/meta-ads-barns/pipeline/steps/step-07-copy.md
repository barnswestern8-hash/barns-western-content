# Step 07 — Copy Completo (Cléber Conversão)

**Tipo**: Agent — inline
**Agente**: Cléber Conversão ✍️
**Input**: selected-personas.md + angles.md + brand-brief.md
**Output**: squads/meta-ads-barns/output/copy-complete.md

---

## Objetivo

Cléber produz o arsenal completo de copy Meta Ads para as personas selecionadas — 10 headlines, 10 primary texts, 10 CTAs e 5 anúncios completos por persona.

---

## Instruções para Cléber Conversão

1. Ler `squads/meta-ads-barns/output/selected-personas.md` — quais personas desenvolver
2. Ler `squads/meta-ads-barns/output/angles.md` — ângulos disponíveis por persona
3. Ler `squads/meta-ads-barns/output/brand-brief.md` — ativos, oferta, tom
4. Ler `squads/meta-ads-barns/pipeline/data/copy-framework.md` — frameworks e limites técnicos

5. Executar diagnóstico antes de escrever (declarar explicitamente no output):
   ```
   DIAGNÓSTICO PRÉ-COPY:
   Awareness Level: 3 (Solução-Aware)
   Sofisticação: Stage 4 (identidade específica, não features)
   Big Idea do Run: [definir com base no produto e objetivo do briefing]
   ```

6. Para cada persona selecionada, produzir:

   **10 HEADLINES** (máx 27 chars — contar e registrar):
   - 2x Identidade Tribal
   - 2x Duplo Benefício
   - 2x Produto como Personagem
   - 2x Dicotomia de Escolha
   - 2x Oferta/Prova Social

   **10 PRIMARY TEXTS** (hook nos primeiros 125 chars — marcar o limite):
   - 2x PAS (Problema-Agitação-Solução)
   - 2x AIDA (Atenção-Interesse-Desejo-Ação)
   - 2x BAB (Before-After-Bridge)
   - 2x Prova Social + CTA
   - 2x Duplo Benefício direto

   **10 CTAs**:
   - 3x Oferta direta ("Leve 2, pague menos. Link na bio.")
   - 3x Comunidade/UGC ("Mostre o seu. #BarnsWestern")
   - 2x Urgência real (com dado de estoque ou prazo — marcar [URGÊNCIA REAL: verificar estoque])
   - 2x Premium (sem desconto)

   **5 ANÚNCIOS COMPLETOS**:
   - Anúncio Curto (50-80 palavras): hook + duplo benefício + CTA
   - Anúncio Longo (150-250 palavras): hook + narrativa + prova social + oferta + CTA
   - Anúncio Agressivo: oferta em destaque + urgência real (se disponível)
   - Anúncio Premium: sem desconto, posicionamento de valor e identidade
   - Anúncio UGC: simulação de depoimento de cliente real do nicho country

7. Salvar em `squads/meta-ads-barns/output/copy-complete.md`

---

## Regras Inegociáveis

- Headline: máx 27 chars — registrar contagem "(N chars)" ao lado de cada uma
- Primary text: marcar explicitamente "← HOOK STANDALONE (125 chars)" após o 125º caractere
- Zero urgência artificial em todo o output
- Zero hook interrogativo em todo o output
- Máx 1 emoji por peça (🎖️ como assinatura — nunca no início)
- Oferta 50% off em mínimo 2 das 5 peças completas
