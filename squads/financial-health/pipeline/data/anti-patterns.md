# Anti-Patterns: Análise Financeira para E-commerce

## Nunca Fazer

### 1. Analisar receita bruta sem descontar taxas e devoluções
**Por que é prejudicial:** Taxas de marketplace (8-15%), gateway (2-3%) e devoluções (2-5%) podem consumir até 20% da receita bruta. Uma operação com R$ 100k brutos pode ter apenas R$ 80k de receita real. Decisões baseadas em receita bruta são sistematicamente otimistas e levam a reinvestimentos acima da capacidade real.

### 2. Reportar crescimento de receita sem mencionar margem
**Por que é prejudicial:** Faturamento crescendo com margem caindo é o padrão mais comum de negócios que parecem saudáveis e quebram. "Crescemos 30%" sem "e a margem foi de 18% para 11%" é uma meia-verdade perigosa.

### 3. Usar qualificadores vagos em vez de números
**Por que é prejudicial:** "O custo de frete está alto" não informa nada. "O custo de frete é 14% da receita líquida, 40% acima do benchmark de 10%, representando R$ 3.020/mês de margem perdida" informa tudo. Análise vaga não gera ação; análise precisa gera.

### 4. Calcular CAC sem isolar apenas novos clientes
**Por que é prejudicial:** Incluir clientes recorrentes no denominador do CAC subestima o custo real de aquisição. O marketing de retenção (e-mail, remarketing) tem um custo e objetivo diferente do marketing de aquisição. Misturar os dois produz um CAC que não representa nenhuma das duas realidades.

### 5. Fazer recomendações sem dados de suporte na análise
**Por que é prejudicial:** "Aumente o investimento em marketing" sem dados sobre o LTV:CAC atual, a margem disponível e o runway de caixa é conselho sem responsabilidade. Toda recomendação deve ser rastreável a um número específico do relatório.

### 6. Ignorar sazonalidade na projeção de caixa
**Por que é prejudicial:** E-commerce de moda no Brasil tem sazonalidade clara: picos em Black Friday, Natal e Dia das Mães; vales em Jan-Feb e Jun-Jul. Uma projeção linear superestima o caixa nos meses de vale e leva a comprometimentos que a receita real não suporta.

### 7. Avaliar capacidade de escala apenas pelo LTV:CAC
**Por que é prejudicial:** LTV:CAC excelente não significa que o caixa suporta escala imediata. Se o payback period é 6 meses e o caixa disponível é R$ 5.000, investir R$ 20.000 em marketing cria um gap de caixa de 4 meses antes do retorno chegar. Escala requer validação simultânea de LTV:CAC E de runway de caixa.

## Sempre Fazer

### 1. Apresentar número com comparação e implicação
Formato obrigatório: [Métrica] está em [Valor], [comparação com benchmark/período anterior], o que significa [implicação de negócio]. Nunca um número sozinho.

### 2. Classificar todas as recomendações por impacto + confiança
Toda recomendação deve ter: ação específica, impacto esperado em R$ ou %, nível de confiança (Alta/Média/Baixa), esforço estimado (Baixo/Médio/Alto) e prazo. Recomendação sem esses campos não é recomendação — é sugestão.

### 3. Sinalizar anomalias explicitamente com emoji ou label
Movimentos > 25% em relação ao período anterior devem ser destacados. Métricas acima do benchmark saudável recebem ✅. Métricas em zona de atenção recebem ⚠️. Métricas em zona crítica recebem 🔴. A leitura visual do relatório deve comunicar urgência sem ler cada linha.

### 4. Incluir projeção de cenário com e sem ações
Mostrar o impacto financeiro das recomendações em forma de projeção comparativa. "Com as ações, a margem em Junho seria de 13,5% vs 7,5% sem ações — diferença de R$ 4.600/mês." Isso transforma recomendações abstratas em decisões com consequências financeiras concretas.

### 5. Manter metodologia transparente
Toda análise deve declarar: período analisado, fonte dos dados, limitações (dados ausentes, estimativas usadas), e premissas de projeção. A confiabilidade da análise é proporcional à transparência da metodologia.