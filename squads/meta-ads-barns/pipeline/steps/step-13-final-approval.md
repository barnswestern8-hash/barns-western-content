# Step 13 — Aprovação Final (Checkpoint)

**Tipo**: Checkpoint
**Agente**: Usuário
**Input**: copy-complete.md + visual-briefings.md + ab-testing-plan.md + review-final.md
**Output**: Aprovação do usuário + registro em runs.md

---

## Objetivo

O usuário aprova o output completo do run para uso no Meta Ads Manager. Este é o último checkpoint antes de o material ser considerado pronto para produção e testes.

---

## Apresentação ao Usuário

Apresentar resumo consolidado do run:

```
OUTPUT DO RUN [identificador]:

✓ Personas desenvolvidas: [N] (de 6)
✓ Ângulos por persona: 10
✓ Headlines por persona: 10 (máx 27 chars cada)
✓ Primary texts por persona: 10 (hook nos 125 chars)
✓ CTAs por persona: 10
✓ Anúncios completos por persona: 5 (curto / longo / agressivo / premium / UGC)
✓ Briefings visuais: [N] anúncios × 3 placements = [total]
✓ Campanhas A/B: 6 (Dor / Desejo / Prova Social / Oferta / Urgência / Premium)

Veredicto Rafael (Revisão Final): [APROVAR / APROVAR CONDICIONAL]
```

Usar AskUserQuestion:

### Pergunta 1 — Aprovação Final
"O run está aprovado para uso no Meta Ads Manager?"
Opções:
- Aprovar — output completo pronto para produção
- Solicitar ajuste pontual — descrever o que mudar antes de finalizar
- Exportar e finalizar — gerar resumo executivo consolidado

---

## Ações Pós-Aprovação

1. **Registrar o run em `_memory/runs.md`**:
   ```markdown
   | [data] | Run-[N] | [produto/foco] | [personas desenvolvidas] | APROVADO |
   ```

2. **Atualizar `_memory/memories.md`** com aprendizados do run:
   - Qual persona performou melhor na revisão?
   - Algum ângulo ou hook que se destacou?
   - Anti-padrões encontrados neste run?

3. **Confirmar localização dos outputs**:
   - `squads/meta-ads-barns/output/copy-complete.md` — pronto para usar no Ads Manager
   - `squads/meta-ads-barns/output/visual-briefings.md` — enviar para produção de criativo
   - `squads/meta-ads-barns/output/ab-testing-plan.md` — guia para configuração das campanhas

---

## Nota Final para o Usuário

Após aprovação, o próximo passo é configurar as campanhas no Meta Ads Manager seguindo o plano da Sílvia Split. Recomendado:
1. Lançar Campanha 4 (OFERTA) e Campanha 1 (DOR) primeiro — maior potencial de conversão imediata
2. Aguardar 7 dias de learning phase antes de avaliar performance
3. Usar os briefings visuais para briefar o produtor criativo ou fotógrafo
