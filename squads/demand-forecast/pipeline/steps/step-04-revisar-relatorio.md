---
execution: inline
agent: squads/demand-forecast/agents/rita-revisao
inputFile: squads/demand-forecast/output/previsao-estoque.csv
outputFile: squads/demand-forecast/output/revisao-final.md
on_reject: 3
---

# Step 04: Revisar e Validar Relatório (Rita Revisão)

## Context Loading

Carregar estes arquivos antes de executar:
- `squads/demand-forecast/output/previsao-estoque.csv` — CSV gerado por Paulo Previsão com as 4 seções
- `squads/demand-forecast/pipeline/data/quality-criteria.md` — critérios de aprovação, limiares de score e hard triggers
- `squads/demand-forecast/output/analise-dados.md` — relatório original de Ana Analítica para validação cruzada de DIO, estoque atual e tendências

## Instructions

### Process

1. **Carregar quality-criteria.md antes de abrir o CSV.**
   Internalizar: hard triggers, limiares de aprovação por dimensão (Completude ≥7, Acurácia ≥7, Acionabilidade ≥7, CSV ≥7, Riscos ≥7), e o critério de rejeição automática (qualquer dimensão < 4 ou hard trigger ativo).

2. **Verificação estrutural do CSV.**
   Confirmar presença das 4 seções com cabeçalhos exatos: `PREVISÃO DE DEMANDA`, `SUGESTÃO DE COMPRA`, `POTENCIAL DE ESCALA`, `RISCOS`. Verificar que não há campos obrigatórios em branco nas seções 1 e 2. Verificar encoding e ausência de células mescladas.

3. **Validação cruzada com analise-dados.md.**
   Para cada SKU na Seção 2, confirmar que o DIO Atual corresponde ao DIO calculado por Ana Analítica. Para cada SKU com DIO < 15 dias na análise, confirmar que aparece na Seção 2 com prioridade 🔴. Para cada SKU com DIO > 90 dias e tendência Queda, confirmar que aparece na Seção 4 com recomendação "não recomprar".

4. **Verificar hard triggers.**
   Hard trigger 1: Algum SKU Classe A com DIO < 15 dias ausente da Seção 2 com prioridade 🔴?
   Hard trigger 2: Alguma sugestão de compra resultando em DIO Pós-Compra > 90 dias sem justificativa de pico sazonal?
   Hard trigger 3: Seção 1, 2, 3 ou 4 ausente do CSV?
   Se qualquer hard trigger for verdadeiro: emitir REJEITAR imediatamente com o trigger identificado.

5. **Pontuar cada dimensão.**
   Completude (25%): % de campos obrigatórios preenchidos nas seções 1 e 2.
   Acurácia Metodológica (25%): métodos corretos, DIO pós-compra calculado, ajuste sazonal aplicado.
   Acionabilidade (25%): % de recomendações com ação específica (não genérica) + prazo quando aplicável.
   Apresentação CSV (15%): estrutura limpa, importável sem ajustes, cabeçalhos corretos.
   Identificação de Riscos (10%): todos os riscos com receita em risco (R$) e ação recomendada.

6. **Emitir veredicto e redigir revisão.**
   APROVAR: média ponderada ≥ 7.0 e nenhum hard trigger. APROVAÇÃO CONDICIONAL: média ≥ 7.0 mas não-críticos entre 4-6. REJEITAR: média < 7.0 ou qualquer hard trigger ativo. Para REJEITAR: listar problemas com localização exata (seção + SKU + coluna), correção necessária por problema, e "PRÓXIMO PASSO: reenviar para Paulo Previsão com as correções acima."

## Output Format

```markdown
==============================
 VEREDICTO: {APROVAR ✅ | APROVAÇÃO CONDICIONAL ⚠️ | REJEITAR ❌}
==============================

Relatório: previsao-estoque.csv
Agente revisor: Rita Revisão
Data: {YYYY-MM-DD}
Revisão nº: {N} de 3

------------------------------
 HARD TRIGGERS VERIFICADOS
------------------------------
{✅ Nenhum ativado | ❌ HARD TRIGGER: descrição}

------------------------------
 PONTUAÇÃO POR DIMENSÃO
------------------------------
| Dimensão                | Score  | Resumo |
|-------------------------|--------|--------|
| Completude dos dados    | {X}/10 | ... |
| Acurácia metodológica   | {X}/10 | ... |
| Acionabilidade          | {X}/10 | ... |
| Apresentação CSV        | {X}/10 | ... |
| Identificação de riscos | {X}/10 | ... |
------------------------------
 MÉDIA PONDERADA: {X.X}/10
------------------------------

{Pontos corretos identificados (Strength:)}

{Problemas identificados (se houver):}
Problema identificado: [seção] [SKU] [coluna] — [descrição]
Correção necessária: [ação específica]

PRÓXIMO PASSO: {ação clara}
```

## Output Example

```markdown
==============================
 VEREDICTO: APROVAR ✅
==============================

Relatório: previsao-estoque.csv
Agente revisor: Rita Revisão
Data: 2026-04-30
Revisão nº: 1 de 3

------------------------------
 HARD TRIGGERS VERIFICADOS
------------------------------
✅ Nenhum hard trigger ativado

------------------------------
 PONTUAÇÃO POR DIMENSÃO
------------------------------
| Dimensão                | Score  | Resumo                                              |
|-------------------------|--------|-----------------------------------------------------|
| Completude dos dados    | 9/10   | 100% dos SKUs com campos preenchidos nas seções 1 e 2|
| Acurácia metodológica   | 9/10   | DIO pós-compra correto; ajuste sazonal aplicado     |
| Acionabilidade          | 8/10   | 95% das recomendações com ação específica           |
| Apresentação CSV        | 10/10  | 4 seções corretas, importável diretamente           |
| Identificação de riscos | 9/10   | Todos os riscos com R$ em risco e ação recomendada  |
------------------------------
 MÉDIA PONDERADA: 9.0/10
------------------------------

Pontos corretos identificados:
- Strength: BW-002 (Óculos Tartaruga) corretamente marcado 🔴 com compra emergencial — DIO de 8 dias identificado e priorizado
- Strength: DIO Pós-Compra calculado e dentro do limite de 90 dias para todas as linhas de Seção 2
- Strength: Potencial de escala com impacto de receita quantificado (R$/mês) para todos os itens

Sugestão não-bloqueante:
- BW-015 (Palmilha Ortopédica) na Seção 4 — ação recomendada "avaliar portfólio" poderia ser mais específica: "avaliar descontinuação e promoção de liquidação para zerar estoque de 95 dias"

PRÓXIMO PASSO: Relatório aprovado. Proceder para Step 05 (aprovação final do usuário).
```

## Veto Conditions

Rejeitar e refazer se QUALQUER condição for verdadeira:
1. A revisão emite APROVAR sem ter verificado explicitamente os 3 hard triggers — a verificação deve aparecer na seção "HARD TRIGGERS VERIFICADOS"
2. Algum problema identificado não tem "Correção necessária:" correspondente com instrução específica

## Quality Criteria

- [ ] Hard triggers verificados antes da pontuação (seção presente no relatório)
- [ ] Cada score abaixo de 8 tem problema identificado com localização (seção + SKU + coluna)
- [ ] Pelo menos um Strength: presente mesmo em relatórios REJEITADOS
- [ ] Veredicto é consistente com scores (APROVAR somente se média ≥ 7.0 e sem hard triggers)
- [ ] PRÓXIMO PASSO: presente e específico ao final
