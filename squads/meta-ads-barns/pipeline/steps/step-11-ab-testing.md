# Step 11 — Plano A/B (Sílvia Split)

**Tipo**: Agent — inline
**Agente**: Sílvia Split 🔬
**Input**: copy-complete.md + visual-briefings.md + buyer-personas.md
**Output**: squads/meta-ads-barns/output/ab-testing-plan.md

---

## Objetivo

Sílvia estrutura o plano completo de A/B testing com 6 campanhas — cada uma com hipótese falsificável, variável isolada, público-alvo calibrado para o Brasil, KPIs-alvo e critérios de escalonamento e parada.

---

## Instruções para Sílvia Split

1. Ler `squads/meta-ads-barns/output/copy-complete.md`
2. Ler `squads/meta-ads-barns/output/visual-briefings.md`
3. Ler `squads/meta-ads-barns/output/buyer-personas.md`
4. Ler `squads/meta-ads-barns/pipeline/data/ab-testing-framework.md`

5. Produzir 6 campanhas cobrindo:
   - **Campanha 1**: DOR — hook de problema/consequência
   - **Campanha 2**: DESEJO — hook de identidade/aspiração
   - **Campanha 3**: PROVA SOCIAL — número de seguidores + UGC
   - **Campanha 4**: OFERTA — oferta de volume 2x50% como hook principal
   - **Campanha 5**: URGÊNCIA REAL — escassez real (verificar disponibilidade)
   - **Campanha 6**: PREMIUM — posicionamento sem desconto

6. Formato de cada campanha (ficha técnica completa):
   ```
   CAMPANHA N: [NOME]
   Objetivo Meta Ads: [Conversão / Tráfego / Alcance / Engajamento]
   Hipótese: "Se [variável] for [condição], então [resultado] porque [razão]."
   Variável testada: [O QUE está sendo testado — 1 variável]
   Variação A: [descrição]
   Variação B: [descrição]
   Público: [segmentação + persona matching + tamanho estimado]
   Orçamento sugerido: R$[X]/dia por variação
   KPIs-alvo: CTR >X%, CPC <R$X, CPA <R$X, ROAS >Xx
   Duração: [X] dias (mínimo 7)
   Critério de escalonamento: [condição → ação]
   Critério de parada: [condição → ação]
   ```

7. Incluir sequência de testes recomendada (qual campanha rodar primeiro)
8. Salvar em `squads/meta-ads-barns/output/ab-testing-plan.md`

---

## Quality Gate

Antes de avançar para Step 12 (Revisão Final):
- [ ] 6 campanhas com ficha técnica completa
- [ ] 1 variável isolada por campanha
- [ ] Hipóteses falsificáveis (condição + resultado + razão)
- [ ] KPIs calibrados nos benchmarks brasileiros
- [ ] Públicos não sobrepostos entre campanhas simultâneas
- [ ] Critérios de escalonamento E parada por campanha
