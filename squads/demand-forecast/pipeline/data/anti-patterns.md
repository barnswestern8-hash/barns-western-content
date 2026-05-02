# Anti-Patterns — Previsão de Demanda e Planejamento de Estoque

## Nunca Faça

1. **Usar vendas brutas sem remover devoluções**
   Devoluções inflam artificialmente o histórico de vendas. Uma previsão baseada em vendas brutas superestima a demanda real e leva a excesso de estoque. Sempre subtrair devoluções antes de qualquer cálculo.

2. **Tratar todos os SKUs com a mesma metodologia**
   Um produto sazonal (óculos no verão) tem padrão completamente diferente de um produto estável (cinto). Aplicar média móvel simples a um produto sazonal apaga o padrão e gera previsão errada. Segmentar por Curva ABC e perfil de demanda antes de escolher o método.

3. **Basear sugestão de compra sem o estoque atual**
   Ignorar o estoque atual ao calcular a compra é o erro mais caro. Se o estoque de segurança já está em caixa, comprar a previsão cheia gera excesso imediato. A fórmula é sempre: Compra = Previsão − Estoque Atual + Estoque de Segurança.

4. **Não ajustar previsão pelo índice de sazonalidade**
   Prever demanda de junho baseando-se na média geral ignora que óculos vendem 32% menos no inverno. O resultado é excesso de compra em meses fracos e ruptura em meses de pico. Sempre aplicar o índice sazonal do mês correspondente.

5. **Sinalizar crescimento com base em apenas 1 mês de alta**
   Um pico isolado pode ser promoção, influenciador, ou sazonalidade pontual. Classificar como "potencial de escala" exige crescimento consistente em 2+ meses consecutivos. Um único mês bom não é tendência.

6. **Recomendar compra para SKUs Classe C sem análise de margem**
   Produtos de baixo volume consomem capital de giro e espaço. Antes de recomendar reposição de qualquer item Classe C, verificar se a margem justifica manter o produto no portfólio. Em caso de dúvida, recomendar revisão do portfólio, não compra.

7. **Apresentar números brutos sem implicação de negócio**
   "Óculos Tartaruga vendeu 75 unidades" não ajuda ninguém a tomar decisão. A análise deve dizer: "Óculos Tartaruga tem DIO de 8 dias — ruptura em menos de 2 semanas, representando R$ 2.250 de receita mensal em risco."

8. **Gerar previsão sem declarar o nível de confiança**
   Uma previsão baseada em 3 meses de histórico tem confiança completamente diferente de uma baseada em 18 meses. O usuário precisa saber o grau de incerteza para decidir se compra a quantidade exata ou adiciona uma margem de segurança maior.

---

## Sempre Faça

1. **Declarar o período de análise no início do relatório**
   Toda previsão é relativa ao histórico usado. Data de início, data de fim e número de meses de dados devem aparecer no cabeçalho. Isso permite ao usuário avaliar se o histórico é representativo.

2. **Incluir implicação financeira em todo risco**
   Cada risco identificado deve ter "receita em risco (R$)" ou "capital imobilizado (R$)" calculado. Riscos sem impacto financeiro não informam prioridade de ação.

3. **Calcular o DIO pós-compra antes de confirmar a sugestão**
   Depois de calcular a quantidade sugerida, sempre verificar: Estoque Atual + Compra Sugerida / Velocidade de Venda = DIO pós-compra. Se DIO pós-compra > 90 dias, reduzir a quantidade e justificar.

4. **Priorizar por urgência de ruptura, não por volume**
   A ordem das sugestões de compra deve refletir urgência (DIO < 15 dias primeiro) e importância (Classe A antes de B antes de C) — não volume absoluto de vendas. Um produto Classe A com 8 dias de estoque é mais urgente do que um Classe A com 45 dias, mesmo que venda mais unidades.

5. **Documentar outliers e eventos especiais**
   Se há semanas com vendas anormalmente altas (promoção, influenciador, Black Friday), esses pontos devem ser anotados. O modelo pode excluí-los da média ou tratá-los separadamente. Outliers não documentados tornam a análise não reproduzível.
