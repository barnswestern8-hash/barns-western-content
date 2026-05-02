---
type: checkpoint
outputFile: squads/demand-forecast/output/data-input.md
---

# Step 01: Configurar Fonte de Dados — Shopify

Bem-vindo ao Squad de Previsão de Demanda da Barns Western!

Este squad vai analisar seus dados do Shopify para gerar:
- Previsão de vendas por produto (30, 60 e 90 dias)
- Sugestão de compra de estoque por SKU com prioridade e investimento estimado
- Produtos com potencial de escala
- Riscos de ruptura e excesso de estoque

---

## Modo de coleta de dados

**Opção 1 — API Shopify (recomendado)** — o squad busca os dados automaticamente.
Confirme ou informe as credenciais em `pipeline/data/shopify-config.md`:
- `SHOPIFY_STORE_URL` — ex: `barns-western.myshopify.com`
- `SHOPIFY_ACCESS_TOKEN` — token gerado no App Privado (começa com `shpat_`)

Se as credenciais já estiverem configuradas no arquivo, apenas informe o período e prossiga.

**Opção 2 — CSV Manual** — forneça os arquivos exportados do Shopify Admin:
- Relatório de Vendas: Shopify Admin → Relatórios → Vendas por produto → Exportar CSV
- Relatório de Estoque: Shopify Admin → Produtos → Estoque → Exportar CSV

---

## Informações necessárias

**1. Modo de coleta**
> API Shopify (credenciais em shopify-config.md) ou CSV Manual (informe os caminhos/conteúdo)?

**2. Período de análise**
> Exemplo: "01/10/2025 a 31/03/2026" ou "últimos 6 meses" (mínimo recomendado: 6 meses)

**3. Observações sobre o período (opcional)**
> Houve promoções, Black Friday, ação de influencer ou outro evento que gerou pico/queda atípica? Informe para que a análise documente e trate esses outliers corretamente.

**4. Meta de vendas para os próximos 90 dias (opcional)**
> Se você tem uma meta de faturamento ou de volume por categoria, o squad compara a previsão contra a meta e identifica os gaps.

---

*Suas respostas serão salvas como input para Ana Analítica processar os dados.*
