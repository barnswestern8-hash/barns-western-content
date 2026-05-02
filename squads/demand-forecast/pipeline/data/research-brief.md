# Research Brief — Previsão de Demanda e Planejamento de Estoque

## Domínio
Análise de dados de vendas para e-commerce de moda/acessórios (Barns Western)

---

## Frameworks e Metodologias

### 1. Classificação ABC
Classifica produtos por contribuição ao faturamento total:
- **Classe A:** Top ~20% dos produtos = ~80% do faturamento. Exigem previsão granular, alto nível de atenção, reposição prioritária.
- **Classe B:** Próximos ~30% dos produtos = ~15% do faturamento. Reposição regular, monitoramento periódico.
- **Classe C:** Restantes ~50% = ~5% do faturamento. Estoque mínimo, reposição conservadora.

*Aplicação Barns Western:* Óculos UV400 provavelmente são Classe A; canivetes e palmilhas, Classe C.

### 2. Média Móvel (Moving Average)
Suaviza variações para revelar tendência de fundo. Usar janela de 4-12 semanas dependendo da sazonalidade.
- MA simples: média aritmética do período
- MA ponderada: períodos recentes recebem peso maior (3x último mês, 2x mês anterior, 1x mais antigo)

### 3. Suavização Exponencial (Exponential Smoothing)
Pondera dados recentes mais que antigos usando fator alpha (0.1-0.3 para itens estáveis, 0.5+ para itens voláteis).
Fórmula: Previsão(t) = alpha × Venda(t-1) + (1 - alpha) × Previsão(t-1)

### 4. Índice de Sazonalidade
Identifica meses de pico e vale: Índice(mês) = Média(vendas naquele mês nos últimos anos) / Média(mensal global)
Índice > 1.2: mês forte; Índice < 0.8: mês fraco.

### 5. Dias de Estoque (DIO — Days of Inventory Outstanding)
DIO = Estoque Atual / Velocidade de Venda Diária
DIO < 15: risco de ruptura; DIO > 90: excesso de estoque.

### 6. Ponto de Reposição (Reorder Point)
Reorder Point = (Venda Média Diária × Lead Time) + Estoque de Segurança
Estoque de Segurança = Desvio Padrão das Vendas × √Lead Time × Fator Z (1.65 para 95% de nível de serviço)

---

## Estrutura do Output Ideal (Google Sheets / CSV)

O relatório final deve ter 4 abas/seções:
1. **Previsão de Demanda:** SKU, nome, classe ABC, venda média mensal, índice de sazonalidade, previsão 30/60/90 dias
2. **Sugestão de Compra:** SKU, estoque atual, DIO, quantidade sugerida, justificativa, nível de confiança
3. **Produtos com Potencial de Escala:** SKU, taxa de crescimento MoM, margem estimada, ação recomendada
4. **Riscos:** SKU, tipo de risco (queda, excesso, sazonalidade desfavorável), probabilidade, impacto

---

## Erros Mais Comuns (Anti-Patterns)

1. **Usar apenas histórico sem ajustar por sazonalidade** — leva a subcompra no verão/carnaval e excesso em períodos fracos.
2. **Tratar todos os SKUs igualmente** — desperdiça atenção em produtos Classe C enquanto Classe A fica em ruptura.
3. **Não separar devoluções das vendas brutas** — infla vendas, distorce a previsão.
4. **Não revisar previsões após promoções** — spike de promoção vira "tendência de crescimento" falsa.
5. **Previsão estática** — demanda muda; previsão feita há 3 meses sem revisão é danosa.
6. **Misturar canais de venda** — comportamento de marketplace ≠ loja própria.
7. **Apresentar números brutos sem implicação de negócio** — analista de dados que só lista planilhas não gera decisão.

---

## Vocabulário Profissional

### Usar sempre:
- SKU (Stock Keeping Unit) — unidade de manutenção de estoque
- DIO (Days of Inventory Outstanding) — dias de cobertura de estoque
- Curva/Classificação ABC — segmentação por importância
- Estoque de segurança — buffer contra variações de demanda
- Ponto de reposição — gatilho para nova compra
- Velocidade de venda — unidades vendidas por período
- Nível de serviço — probabilidade de não ter ruptura
- Sazonalidade — variação previsível em ciclos (mensal, anual)
- Lead time — tempo entre pedido e recebimento do fornecedor
- Ruptura de estoque (stockout) — produto sem estoque disponível

### Nunca usar:
- "Produto bom/ruim" — usar taxa de crescimento e margem
- "Estoque baixo" — usar DIO e comparação com reorder point
- "Vender bem" — usar velocidade de venda em unidades/dia

---

## Fontes
- prediko.io/blog/ecommerce-inventory-forecasting
- easyreplenish.com/blog/ecommerce-demand-forecasting-techniques-tools-kpis
- algonomy.com/blogs/inventory-forecasting-trends-techniques-and-best-practices
- nuvemshop.com.br/blog/previsao-de-demanda
- totvs.com/blog/gestao-logistica/previsao-de-demanda
- easyreplenish.com/blog/top-inventory-forecasting-mistakes-ecommerce
- fabrikator.io/blog/common-demand-forecasting-pitfalls-in-ecommerce
