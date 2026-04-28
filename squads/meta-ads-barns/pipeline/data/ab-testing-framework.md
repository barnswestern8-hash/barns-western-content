# A/B Testing Framework — Meta Ads Barns Western

Última atualização: 2026-04-24
Fonte: Meta Ads testing methodology 2026 + benchmarks mercado Brasil

---

## Princípios do Método Científico

1. **1 variável por teste**: Copy, criativo ou público — nunca 2 ao mesmo tempo
2. **Hipótese falsificável**: Condição + resultado esperado + razão
3. **7 dias mínimos**: Learning phase do algoritmo Meta — abaixo disso é ruído
4. **Público não sobreposto**: Campanhas simultâneas com o mesmo público invalidam os resultados
5. **Critérios pré-definidos**: Escalonamento e parada definidos ANTES de lançar

---

## Benchmarks Brasil — Nicho Fashion/Acessórios 2026

| Métrica | Benchmark Brasil | Alvo Barns |
|---------|-----------------|-----------|
| CPM | R$20-30 / ~$4-6 USD (Tier 3) | R$25 estimado |
| CTR | 1.5-2.5% | >2.0% |
| CPC | R$2-5 | <R$3 |
| CPA | R$40-100 | <R$70 |
| ROAS | 2.5x mínimo viável | >3.5x alvo |
| Duração de teste | 7-14 dias | 7 dias mínimo |

**Nota**: Brasil é Tier 3 — CPM ~4x menor que EUA/EU. Calibrar expectativas nesse benchmark, não no global.

---

## Estrutura das 6 Campanhas

### Campanha 1: DOR
- **Hipótese**: Problema + consequência converte melhor que identidade para personas com experiência negativa anterior
- **Hook tipo**: "O sol destruiu mais de um par de óculos?" / "UV400 NÃO É O QUE VOCÊ PENSA."
- **Persona principal**: Vaqueiro Autêntico, Atleta Country
- **Objetivo Meta**: Conversão (compra) ou Tráfego qualificado
- **Público**: Interesses: agronegócio, rodeio, vaquejada + homens 25-45 + interior Brasil

### Campanha 2: DESEJO
- **Hipótese**: Identidade tribal e aspiração converte melhor para personas de estilo
- **Hook tipo**: "QUEM É COUNTRY SABE." / "O ESTILO QUE VOCÊ SEMPRE QUIS USAR."
- **Persona principal**: Festeiro Country, Consumidor de Estilo Sertanejo
- **Objetivo Meta**: Alcance + Tráfego (TOFU)
- **Público**: Interesses: música sertaneja, festivais, moda country + 18-35 anos

### Campanha 3: PROVA SOCIAL
- **Hipótese**: Número de seguidores + UGC converte melhor para persona ainda indecisa
- **Hook tipo**: "84 mil pessoas já descobriram." / Depoimento de cliente real
- **Persona principal**: Consumidor de Estilo, Presenteador
- **Objetivo Meta**: Engajamento + Conversão
- **Público**: Lookalike de perfil @barns.western (1-3%)

### Campanha 4: OFERTA
- **Hipótese**: Oferta de volume (2x50%) como hook principal converte melhor que identidade para personas sensíveis a preço
- **Hook tipo**: "LEVE 2 ÓCULOS. O SEGUNDO SAI COM 50% OFF."
- **Persona principal**: Presenteador, Consumidor de Estilo Sertanejo
- **Objetivo Meta**: Conversão direta (compra)
- **Público**: Remarketing (visitantes do site + engajadores do perfil) + LAL compradores

### Campanha 5: URGÊNCIA REAL
- **Hipótese**: Escassez real (estoque limitado de modelo específico) gera decisão de compra mais rápida
- **Hook tipo**: "Edição limitada — [X] unidades do [Vaqueiro]."
- **Persona principal**: Vaqueiro Autêntico, Atleta Country
- **Objetivo Meta**: Conversão (compra urgente)
- **Público**: Clientes que já compraram (upsell) + Visitantes recentes do site (retargeting)
- **IMPORTANTE**: Usar APENAS com dado real de estoque — nunca urgência artificial

### Campanha 6: PREMIUM
- **Hipótese**: Posicionamento sem desconto e com identidade forte converte melhor para persona de alta renda
- **Hook tipo**: "O ÓCULOS QUE NÃO PRECISA DE DESCONTO." / "QUALIDADE QUE FALA POR SI."
- **Persona principal**: Vaqueiro Autêntico (premium), Atleta Country profissional
- **Objetivo Meta**: Conversão + Brand awareness premium
- **Público**: Renda A/B + interesses em marcas premium + 30-50 anos

---

## Ficha Técnica de Campanha (template para Sílvia)

```
CAMPANHA [N]: [NOME]
Objetivo Meta Ads: [Conversão / Tráfego / Alcance / Engajamento]

Hipótese: "Se [variável testada] for [condição], então [resultado esperado]
           porque [razão baseada em dados ou padrão identificado]."

Variável testada: [O QUE está sendo testado — 1 variável]
Variação A: [copy/visual/público — Variação A]
Variação B: [copy/visual/público — Variação B]

Público: [segmentação específica + tamanho estimado]
Orçamento sugerido: R$[X]/dia por variação (R$[2X] total)
KPIs-alvo: CTR >[X]%, CPC <R$[X], CPA <R$[X], ROAS >[X]x
Duração: [X] dias (mínimo 7 para learning phase)

Critério de escalonamento: [condição de sucesso → ação de escala]
Critério de parada: [condição de fracasso → ação de pausa]
```

---

## Sequência de Teste Recomendada

1. **Fase 1 (semanas 1-2)**: Testar ângulo/hook primeiro — qual mensagem funciona?
2. **Fase 2 (semanas 3-4)**: Testar criativos com o hook vencedor — qual visual performa?
3. **Fase 3 (semanas 5-6)**: Testar públicos com criativo + copy vencedores — quem converte?
4. **Fase 4 (semanas 7+)**: Escalar o conjunto vencedor de campanha 1, repetir processo para campanha 2

## Erros Comuns a Evitar

1. Testar copy E criativo juntos: não é possível saber o que causou a diferença
2. Pausar antes de 7 dias: os dados não são estatisticamente válidos
3. Usar o mesmo público em 2 campanhas simultâneas: causa sobreposição de leilão
4. Escalar 100% de orçamento em 1 dia: quebra o learning phase
5. KPIs baseados apenas em CTR: CTR alto sem conversão não paga o custo
