---
type: checkpoint
outputFile: squads/financial-health/output/contexto-periodo.md
---

# Step 1: Upload de Dados — Contexto do Período

Este step coleta as informações necessárias para o Felipe Financeiro iniciar a análise.

## Instruções para o Usuário

Preciso de 3 informações antes de iniciar o diagnóstico financeiro:

---

**1. Caminho ou conteúdo dos seus dados financeiros**

Cole aqui o caminho do arquivo CSV/planilha no seu computador, ou cole os dados diretamente no formato abaixo:

```
Período: [Mês e Ano — ex: Março 2026]

RECEITA:
- Receita bruta total: R$ [valor]
- Devoluções/cancelamentos: R$ [valor] (ou [%])
- Taxas de plataforma (marketplace, e-commerce): R$ [valor] (ou [%])
- Taxas de gateway de pagamento: R$ [valor] (ou [%])

CUSTOS:
- Custo dos produtos vendidos (CMV): R$ [valor]
- Frete de saída (pago ao cliente): R$ [valor]
- Investimento em marketing/tráfego pago: R$ [valor]
- Custos operacionais (equipe, freelancers): R$ [valor]
- Ferramentas e SaaS: R$ [valor]
- Outros custos: R$ [valor] (descrever)

VOLUME:
- Total de pedidos no período: [N]
- Novos clientes no período: [N] (se disponível)

PERÍODO ANTERIOR (opcional — para comparação):
- Receita líquida do período anterior: R$ [valor]
- Margem líquida do período anterior: [%]
```

---

**2. Período de análise**

Qual mês/trimestre esses dados cobrem?

---

**3. Contexto adicional** (opcional)

Houve algo especial nesse período que pode ter influenciado os números? Ex: promoção de Black Friday, lançamento de produto, problema logístico, mudança de fornecedor, campanha de tráfego nova.

---

## Output obrigatório

Salve as respostas do usuário em `output/contexto-periodo.md` com o seguinte formato:

```markdown
# Contexto do Período — [Data do run]

## Período Analisado
[período informado pelo usuário]

## Dados Financeiros
[dados colados ou caminho do arquivo]

## Contexto Adicional
[notas do usuário ou "Nenhum contexto adicional informado"]
```

Após salvar, prossiga automaticamente para o Step 2 (Felipe Financeiro).