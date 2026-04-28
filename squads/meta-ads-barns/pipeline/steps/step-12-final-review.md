# Step 12 — Revisão Final (Rafael Revisão)

**Tipo**: Agent — inline
**Agente**: Rafael Revisão ✅
**Task**: review-final
**Input**: copy-complete.md + visual-briefings.md + ab-testing-plan.md + buyer-personas.md
**Output**: squads/meta-ads-barns/output/review-final.md
**on_reject**: Step 11 (Sílvia — rever plano A/B)

---

## Objetivo

Rafael faz a revisão final de todo o output do run — verificando consistência entre personas, ângulos, copy, visuais e plano de testes, e confirmando que os ativos da Barns estão presentes e os anti-padrões estão ausentes em todo o material.

---

## Instruções para Rafael Revisão

1. Ler todos os outputs do run:
   - `squads/meta-ads-barns/output/buyer-personas.md`
   - `squads/meta-ads-barns/output/angles.md`
   - `squads/meta-ads-barns/output/copy-complete.md`
   - `squads/meta-ads-barns/output/visual-briefings.md`
   - `squads/meta-ads-barns/output/ab-testing-plan.md`
2. Ler `squads/meta-ads-barns/pipeline/data/quality-criteria.md`

3. **Verificar HARD REJECTION TRIGGERS** (uma última vez, no plano de testes):
   - Urgência artificial em qualquer campanha → FAIL
   - KPIs baseados apenas em CTR → FAIL (ROAS e CPA obrigatórios)

4. **Avaliar consistência** (1-10):
   - Personas → Ângulos: mesmos drivers e argumentos centrais?
   - Ângulos → Copy: hooks dos ângulos transformados em headlines?
   - Copy → Visual: driver emocional do copy alinhado com a expressão do talento?
   - Copy/Visual → Testes: peças corretas alocadas para cada campanha?

5. **Avaliar cobertura** (1-10):
   - 6 campanhas A/B cobrindo todos os ângulos?
   - KPIs calibrados para o Brasil (não global)?
   - Públicos não sobrepostos?

6. **Avaliar presença dos ativos Barns** (1-10):
   - UV400 como argumento técnico + emocional?
   - Oferta 50% off como hook de conversão?
   - "This is Barns." como assinatura recorrente?
   - Prova social (84k, atletas, clientes)?

7. Emitir veredicto final e salvar em `squads/meta-ads-barns/output/review-final.md`
8. Registrar: "Revisão Final — Ciclo N de 3"

---

## Formato do Scorecard Final

```
============================
REVISÃO FINAL — Run Completo
Run: [identificador]
Revisão: [N] de 3
============================

HARD REJECTION TRIGGERS — PLANO A/B
[ ] Urgência artificial: PASS / FAIL
[ ] KPIs sem ROAS/CPA: PASS / FAIL

--------- CONSISTÊNCIA ---------
| Elo                   | Score | Resumo |
|-----------------------|-------|--------|
| Personas → Ângulos    |  /10  |        |
| Ângulos → Copy        |  /10  |        |
| Copy → Visual         |  /10  |        |
| Copy/Visual → Testes  |  /10  |        |
SCORE CONSISTÊNCIA: X/10

--------- COBERTURA A/B ---------
| Critério              | Score | Resumo |
|-----------------------|-------|--------|
| 6 campanhas cobertas  |  /10  |        |
| KPIs Brasil           |  /10  |        |
| Públicos não sobrep.  |  /10  |        |
SCORE COBERTURA: X/10

--------- ATIVOS BARNS ---------
| Ativo                 | Presente? | Onde |
|-----------------------|-----------|------|
| UV400 técnico+emocional | SIM/NÃO |      |
| Oferta 50% off        | SIM/NÃO   |      |
| This is Barns.        | SIM/NÃO   |      |
| Prova social          | SIM/NÃO   |      |
SCORE ATIVOS: X/10

============================
VEREDICTO FINAL: APROVAR / REJEITAR
[Mudanças obrigatórias se REJEITAR]
[Sugestões não-bloqueantes]
============================
```
