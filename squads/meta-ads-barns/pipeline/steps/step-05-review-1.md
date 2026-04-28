# Step 05 — Revisão Fase 1: Personas + Ângulos (Rafael Revisão)

**Tipo**: Agent — inline
**Agente**: Rafael Revisão ✅
**Task**: review-phase-1
**Input**: buyer-personas.md + angles.md
**Output**: squads/meta-ads-barns/output/review-1.md
**on_reject**: Step 3 (Paula — regenerar personas) ou Step 4 (André — regenerar ângulos)

---

## Objetivo

Rafael avalia as personas de Paula e os ângulos de André antes de qualquer copy ser escrito. É o momento de detectar personas superficiais, ângulos com drivers repetidos ou hooks interrogativos — problemas estruturais que se propagariam para todo o copy se não forem corrigidos aqui.

---

## Instruções para Rafael Revisão

1. Ler `squads/meta-ads-barns/output/buyer-personas.md`
2. Ler `squads/meta-ads-barns/output/angles.md`
3. Ler `squads/meta-ads-barns/pipeline/data/quality-criteria.md`
4. Ler `squads/meta-ads-barns/pipeline/data/anti-patterns.md`

5. Verificar HARD REJECTION TRIGGERS primeiro:
   - Qualquer hook com "?" → FAIL automático
   - Qualquer urgência artificial nos ângulos → FAIL automático

6. Avaliar personas com scorecard (1-10 por critério):
   - Profundidade psicológica
   - Objeções reais (mínimo 2-3 específicas)
   - Gatilho dominante único
   - Linguagem nativa da persona
   - Desejos ocultos (não óbvios)

7. Avaliar ângulos com scorecard (1-10 por critério):
   - Diversidade de 10 drivers por persona
   - Hooks declarativos e em caixa alta
   - Crença quebrada explícita
   - Narrativa em 3 frases (situação → tensão → resolução)
   - Ativos da marca presentes em mínimo 2 ângulos/persona

8. Emitir veredicto por seção:
   - APROVAR: avançar para Step 6 (Checkpoint)
   - REJEITAR personas: retornar ao Step 3 com path to approval
   - REJEITAR ângulos: retornar ao Step 4 com path to approval
   - APROVAR CONDICIONAL: notas de melhoria não-bloqueantes, avançar

9. Salvar em `squads/meta-ads-barns/output/review-1.md`
10. Registrar: "Revisão 1 de 3"

---

## Formato do Scorecard

```
============================
REVISÃO FASE 1 — Personas + Ângulos
Run: [identificador]
Revisão: 1 de 3
============================

HARD REJECTION TRIGGERS
[ ] Hooks com "?": PASS / FAIL — [lista de ocorrências se FAIL]
[ ] Urgência artificial: PASS / FAIL

--------- PERSONAS ---------
[Para cada persona:]
| Critério              | Score | Resumo |
|-----------------------|-------|--------|
| Profundidade psic.    |  /10  |        |
| Objeções reais        |  /10  |        |
| Gatilho único         |  /10  |        |
| Linguagem nativa      |  /10  |        |
| Desejos ocultos       |  /10  |        |
SCORE PERSONA N: X/10 — APROVAR / REJEITAR

--------- ÂNGULOS ---------
[Por persona:]
| Critério              | Score | Resumo |
|-----------------------|-------|--------|
| Diversidade drivers   |  /10  |        |
| Hooks declarativos    |  /10  |        |
| Crença quebrada       |  /10  |        |
| Narrativa emocional   |  /10  |        |
| Ativos da marca       |  /10  |        |
SCORE ÂNGULOS PERSONA N: X/10 — APROVAR / REJEITAR

============================
VEREDICTO GERAL: APROVAR / REJEITAR / APROVAR CONDICIONAL
[Mudanças obrigatórias se REJEITAR]
[Sugestões não-bloqueantes se APROVAR CONDICIONAL]
============================
```
