# Quality Criteria — Email Marketing Squad da Barns Western

## Critérios de Avaliação do E-mail (Roberto Revisão)

Escala 1-10 para cada critério. APROVADO: média ≥ 7.0, nenhum critério < 4.

---

### 1. Linha de Assunto (Peso: Alto)

| Score | Descrição |
|-------|-----------|
| 9-10 | ≤ 60 chars, driver emocional claro, específico para o produto/oferta, personalizado |
| 7-8 | ≤ 60 chars, driver emocional presente, bom nível de especificidade |
| 5-6 | Dentro do limite de chars mas driver fraco ou genérico |
| 3-4 | Acima de 60 chars OU completamente genérico ("Aproveite!") |
| 1-2 | Assunto ausente, enganoso ou spam-like |

**Gatilho de Rejeição (< 4):** Assunto genérico sem especificidade do produto ou da oferta.

---

### 2. Corpo do E-mail (Peso: Alto)

| Score | Descrição |
|-------|-----------|
| 9-10 | Framework correto (PAS/AIDA/4Ps), parágrafos de 1-2 linhas, prova social específica com número, ≤ 300 palavras |
| 7-8 | Framework presente, texto conciso, prova social inclusa |
| 5-6 | Texto razoável mas parágrafos longos OU sem prova social OU excede limite de palavras |
| 3-4 | Feature dumping (lista de atributos sem benefício) OU bloco denso de texto ilegível no mobile |
| 1-2 | Texto irrelevante para o segmento OU sem qualquer estrutura persuasiva |

**Gatilho de Rejeição (< 4):** Feature dumping sem benefício ou parágrafo acima de 5 linhas.

---

### 3. CTA (Peso: Crítico)

| Score | Descrição |
|-------|-----------|
| 9-10 | Único CTA, verbo imperativo, com benefício explícito, button HTML (min 44x44px) |
| 7-8 | Único CTA, verbo imperativo, sem benefício explícito mas claro |
| 5-6 | CTA presente mas voz passiva ("pode ser acessado") OU texto simples sem button |
| 3-4 | Múltiplos CTAs no mesmo e-mail OU CTA ausente |
| 1-2 | Nenhum CTA identificável |

**Gatilho de Rejeição Hard (< 4):** Múltiplos CTAs ou CTA ausente — rejeição automática.

---

### 4. Alinhamento de Marca (Peso: Alto)

| Score | Descrição |
|-------|-----------|
| 9-10 | Tom descontraído country/western, vocabulário da marca ("parceiro", "galera"), sem formalidade |
| 7-8 | Tom adequado, maioria do vocabulário alinhado |
| 5-6 | Tom neutro (nem formal nem country) — não quebra a marca mas não reforça |
| 3-4 | Tom formal/corporativo que contradiz a identidade da Barns Western |
| 1-2 | Tom completamente incompatível com a marca |

**Gatilho de Rejeição (< 4):** Linguagem formal corporativa que contradiz o posicionamento da marca.

---

### 5. Banner Visual (Peso: Médio)

| Score | Descrição |
|-------|-----------|
| 9-10 | Composição country/western clara, paleta alinhada (marrom/dourado/azul céu), sem texto renderizado, 600x400px |
| 7-8 | Composição e paleta adequadas, alinhamento visual aceitável |
| 5-6 | Imagem genérica mas sem contradições de identidade |
| 3-4 | Estética urbana/corporativa que contradiz posicionamento country |
| 1-2 | Texto renderizado na imagem OU imagem de baixa qualidade |

**Gatilho de Rejeição (< 4):** Texto renderizado na imagem ou estética que contradiz a identidade country.

---

### 6. Conformidade Legal (Peso: Crítico — Bloqueante)

| Score | Descrição |
|-------|-----------|
| 10 | Link de descadastro funcional + endereço físico da Barns Western no rodapé |
| 7-9 | Um dos dois presentes |
| 1-6 | Nenhum presente |

**Gatilho de Rejeição Hard (≤ 6):** Ausência de unsubscribe OU endereço físico = REPROVADO automático, independente dos outros scores.

---

## Critérios Adicionais de Alerta (não bloqueantes)

- **Tamanho do e-mail:** > 300 palavras para lista quente = alerta (não bloqueante se conteúdo justifica)
- **Alt text nas imagens:** ausente = alerta (afeta acessibilidade e renderização sem imagem)
- **PS presente:** ausente = sugestão de melhoria
- **Pré-cabeçalho:** ausente = sugestão (oportunidade perdida de aumentar abertura)

---

## Métricas de Qualidade do Envio (Eduardo Envio)

- **Taxa de entrega:** meta > 98%
- **From verificado:** obrigatório (bloqueante pré-envio)
- **HTML mobile-first:** 600px, single-column obrigatório
- **Segmento correto:** deve corresponder exatamente ao strategy-brief

---

## Benchmarks de Qualidade do Analytics (André Analytics)

| Métrica | Bom | Atenção | Crítico |
|---------|-----|---------|---------|
| Taxa de abertura | ≥ 35% | 20-35% | < 20% |
| Taxa de clique | ≥ 2% | 1-2% | < 1% |
| CTOR | ≥ 8% | 5-8% | < 5% |
| Bounce | < 2% | 2-5% | > 5% |
| Spam | < 0.05% | 0.05-0.1% | > 0.1% |
| Descadastro | < 0.2% | 0.2-0.5% | > 0.5% |