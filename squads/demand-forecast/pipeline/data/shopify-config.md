# Shopify Integration Config — demand-forecast squad

## Credenciais da API

```
SHOPIFY_STORE_URL=sua-loja.myshopify.com
SHOPIFY_ACCESS_TOKEN=shpat_COLE_SEU_TOKEN_AQUI
SHOPIFY_API_VERSION=2025-01
```

## Endpoints utilizados pelo squad

- Vendas: GET /admin/api/{version}/orders.json
  - Parâmetros: status=any, financial_status=paid, created_at_min, created_at_max
- Estoque: GET /admin/api/{version}/inventory_levels.json
- Produtos: GET /admin/api/{version}/products.json

## Localização de estoque

Se você usa múltiplas localizações no Shopify, informe o ID da localização principal:
```
SHOPIFY_LOCATION_ID=
```
(Deixe em branco se usa apenas uma localização — o squad usa a padrão.)

## Notas
- O token tem permissão apenas de leitura (read_orders, read_inventory, read_products, read_reports)
- Nunca compartilhe este arquivo — adicione ao .gitignore se usar controle de versão
