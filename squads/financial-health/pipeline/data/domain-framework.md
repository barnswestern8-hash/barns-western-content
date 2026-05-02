# Domain Framework: Análise de Saúde Financeira

## Framework Operacional — 6 Camadas de Análise

### Camada 1: Receita Real
Separar receita bruta de receita líquida real. Descontar: devoluções, cancelamentos, taxas de marketplace, taxas de gateway de pagamento, cupons e descontos promocionais.

**Fórmula:**
Receita Líquida = Receita Bruta - Devoluções - Taxas Plataforma - Taxas Pagamento - Descontos

### Camada 2: Custos e Margens
Calcular margem bruta (após CMV) e margem líquida (após todas as despesas):
- CMV = Custo de aquisição do produto + Embalagem + Frete de entrada
- Despesas variáveis = Frete de saída + Taxas de marketplace + Comissões
- Despesas fixas = Equipe + Ferramentas + Aluguel + Marketing fixo

**Margens:**
- Margem Bruta = (Receita Líquida - CMV) / Receita Líquida × 100
- Margem Líquida = (Receita Líquida - Todos os custos) / Receita Líquida × 100

### Camada 3: Unit Economics
Avaliar a rentabilidade por cliente adquirido:
- CAC: quanto custa trazer 1 novo cliente
- LTV: quanto 1 cliente gera durante sua vida útil
- Razão LTV:CAC: validador de sustentabilidade do crescimento
- Payback period: tempo para recuperar o investimento em aquisição

### Camada 4: Ponto de Equilíbrio
Calcular o volume mínimo de vendas que cobre todos os custos fixos:
- PE em unidades = Custos Fixos / (Preço médio - Custo variável unitário)
- PE em receita = Custos Fixos / Margem de Contribuição (%)
- Comparar PE com volume atual: distância de segurança

### Camada 5: Fluxo de Caixa e Projeção
Avaliar saúde do caixa e prever os próximos 30-90 dias:
- Entradas projetadas (baseadas em tendência de crescimento)
- Saídas fixas + variáveis projetadas
- Saldo projetado ao final de cada mês
- Runway: quantos meses o negócio sobrevive sem nova receita

### Camada 6: Diagnóstico e Vazamentos
Identificar onde o dinheiro está sendo perdido:
- Custo de logística como % da receita (alerta > 15%)
- Marketing como % da receita (alerta > 30% sem LTV correspondente)
- Taxas totais como % da receita (alerta > 12%)
- Produtos de margem negativa (vampiros de caixa)
- Áreas operacionais com custo desproporcional ao volume

## Tabela de Classificação de Saúde Financeira

| Indicador | Saudável | Atenção | Crítico |
|-----------|----------|---------|---------|
| Margem bruta | > 50% | 35-50% | < 35% |
| Margem líquida | > 15% | 5-15% | < 5% |
| LTV:CAC | > 3:1 | 1:1-3:1 | < 1:1 |
| Custo logístico/receita | < 10% | 10-15% | > 15% |
| Marketing/receita | < 20% | 20-35% | > 35% |
| Payback period | < 6 meses | 6-12 meses | > 12 meses |
| Distância do PE | > 40% | 20-40% | < 20% |