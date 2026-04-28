# Step 09 — Revisão Fase 2: Copy + Visuais (Rafael Revisão)

**Tipo**: Agent — inline
**Agente**: Rafael Revisão ✅
**Task**: review-phase-2
**Input**: copy-complete.md + visual-briefings.md
**Output**: squads/meta-ads-barns/output/review-2.md
**on_reject**: Step 7 (Cléber — regenerar copy) ou Step 8 (Tiago — regenerar visuais)

---

## Objetivo

Rafael avalia o arsenal de copy e os briefings visuais antes de ir para aprovação do usuário. Detecta violações técnicas (headline >27 chars, hook interrogativo, emojis excessivos) e problemas de coerência entre copy e visual antes que cheguem ao Meta Ads.

---

## Instruções para Rafael Revisão

1. Ler `squads/meta-ads-barns/output/copy-complete.md`
2. Ler `squads/meta-ads-barns/output/visual-briefings.md`
3. Ler `squads/meta-ads-barns/pipeline/data/quality-criteria.md`
4. Ler `squads/meta-ads-barns/pipeline/data/anti-patterns.md`

5. **Verificar HARD REJECTION TRIGGERS primeiro**:
   - Hook interrogativo em qualquer peça → FAIL + REJEITAR
   - Urgência artificial em qualquer peça → FAIL + REJEITAR
   - Mais de 1 emoji em qualquer peça → FAIL + REJEITAR

6. **Avaliar headlines** (amostral — verificar todas):
   - Contar chars de cada headline — qualquer >27 = score 1 (hard fail)
   - Declarativas e sem interrogação

7. **Avaliar primary texts**:
   - Primeiros 125 chars funcionam standalone
   - Framework aplicado corretamente (PAS/AIDA/BAB)
   - Tom da marca (firme, direto, cowboy)

8. **Avaliar anúncios completos**:
   - 5 tipos distintos por persona
   - Oferta 50% off presente em mínimo 2 peças
   - "This is Barns." em mínimo metade

9. **Avaliar briefings visuais**:
   - 3 variações de placement por anúncio
   - Safe zones especificadas para Reel/Story
   - Paleta alinhada ao universo country
   - Expressão do talento coerente com o driver

10. Emitir veredicto e salvar em `squads/meta-ads-barns/output/review-2.md`
11. Registrar: "Revisão 2 de 3" (ou ciclo correspondente)

---

## Formato do Scorecard

```
============================
REVISÃO FASE 2 — Copy + Visuais
Run: [identificador]
Revisão: [N] de 3
============================

HARD REJECTION TRIGGERS
[ ] Hook interrogativo: PASS / FAIL — [peças com "?" se FAIL]
[ ] Urgência artificial: PASS / FAIL — [peças com urgência falsa se FAIL]
[ ] Excesso de emojis: PASS / FAIL — [peças com >1 emoji se FAIL]

--------- COPY ---------
| Critério              | Score | Resumo |
|-----------------------|-------|--------|
| Headlines (≤27 chars) |  /10  |        |
| Hooks 125-char        |  /10  |        |
| Frameworks            |  /10  |        |
| Tom da marca          |  /10  |        |
| Variedade de formatos |  /10  |        |
| Oferta 50% presente   |  /10  |        |
SCORE COPY: X/10 — APROVAR / REJEITAR

--------- VISUAIS ---------
| Critério              | Score | Resumo |
|-----------------------|-------|--------|
| 3 placements          |  /10  |        |
| Safe zones            |  /10  |        |
| Paleta country        |  /10  |        |
| Expressão/driver      |  /10  |        |
| Overlay ≤5 palavras   |  /10  |        |
SCORE VISUAIS: X/10 — APROVAR / REJEITAR

============================
VEREDICTO GERAL: APROVAR / REJEITAR / APROVAR CONDICIONAL
[Mudanças obrigatórias com passagem específica]
[Sugestões não-bloqueantes]
============================
```
