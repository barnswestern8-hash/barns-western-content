# Domain Framework — E-mail Marketing para E-commerce

## Framework Operacional Completo

### Fase 1: Estratégia (Sofia Segmentos)

**1.1 Classificação do Fluxo**

```
IF trigger = comportamental (compra, abandono, cadastro, inatividade)
  → FLUXO AUTOMÁTICO (maior RPE, configurar uma vez, rodar continuamente)
ELSE trigger = calendário (data especial, lançamento, promoção pontual)
  → CAMPANHA MANUAL (disparada em momento específico)
```

**1.2 Matriz de Segmentação por Tipo**

| Tipo de Campanha | Critério de Segmentação | Tamanho Típico |
|------------------|------------------------|----------------|
| Boas-vindas | Cadastrou nos últimos 7 dias, primeira compra não realizada | Variável |
| Abandono 1h | Adicionou ao carrinho nas últimas 2h, não comprou | 50-200/dia |
| Abandono 24h | Recebeu e-mail 1 há 24h, não converteu | 40-160/dia |
| Abandono 48h | Recebeu e-mail 2 há 24h, não converteu | 30-120/dia |
| Recompra 7d | Compra entregue há 7 dias, sem nova compra | Variável |
| Reativação | Sem compra há 90+ dias, opt-in ativo | Grande |
| Promoção | Segmento definido pela campanha | Variável |

**1.3 Timing Ideal de Envio**
- Melhores dias: terça, quarta, quinta
- Melhores horários: 8h-10h ou 13h-15h (fuso do destinatário)
- Piores: segunda de manhã, sexta à tarde, fins de semana (exceto e-commerce B2C)

---

### Fase 2: Copywriting (Carlos Conversão)

**2.1 Framework de Diagnóstico Pré-Escrita**

```
1. NÍVEL DE CONSCIÊNCIA:
   - Não conhece → Boas-vindas: AIDA
   - Conhece o produto → Abandono: PAS
   - Já comprou → Recompra: BAB
   - Já foi cliente → Reativação: PAS + Prova Social

2. DRIVER PSICOLÓGICO DOMINANTE:
   - Abandono de carrinho → Medo de perda (scarcity + deadline)
   - Boas-vindas → Pertencimento (identidade country)
   - Recompra → Status + praticidade (já conhece a marca)
   - Promoção → Urgência + exclusividade

3. SOFISTICAÇÃO DO MERCADO:
   - E-commerce country: Stage 3-4 (público já viu várias ofertas)
   - Usar mecanismo único + prova social específica
   - Evitar claims genéricos ("melhor qualidade", "preço baixo")
```

**2.2 Arquitetura do E-mail de Alta Conversão**

```
LINHA DE ASSUNTO (≤ 60 chars)
  └─ Driver emocional + especificidade do produto/oferta

PRÉ-CABEÇALHO (opcional, ≤ 90 chars)
  └─ Complementa o assunto sem repetir

ABERTURA (1-2 frases)
  └─ Personalização de contexto + hook da mensagem

CORPO (framework PAS/AIDA/BAB)
  └─ Parágrafos de 1-2 linhas, espaço entre blocos
  └─ Prova social específica (números reais)
  └─ Neutralização de objeção antes do CTA

CTA ÚNICO
  └─ Verbo imperativo + benefício explícito
  └─ Button HTML, min 44x44px, contraste adequado

ASSINATURA + PS
  └─ Tom humano, próximo
  └─ PS: urgência real ou prova social adicional

RODAPÉ (obrigatório)
  └─ Link de descadastro
  └─ Endereço físico (LGPD/CAN-SPAM)
```

**2.3 Fórmulas de CTA por Tipo**

| Tipo | CTA Fraco | CTA Forte |
|------|-----------|-----------|
| Abandono | "Clique aqui" | "FINALIZAR COM 10% OFF →" |
| Boas-vindas | "Ver produtos" | "DESCOBRIR OS ACESSÓRIOS →" |
| Recompra | "Comprar" | "COMPLETAR MEU ESTILO →" |
| Promoção | "Aproveitar" | "GARANTIR MINHA OFERTA →" |

---

### Fase 3: Design Visual (Beatriz Banner)

**3.1 Especificações Técnicas**

```
FORMAT: 600px × 400px (landscape 3:2)
MODE: test primeiro, production após aprovação
TEXT: Nunca incluir texto no prompt de IA
PALETTE: Marrom couro (#7B4A2D), Dourado (#C49A3C), Bege (#F5E6C8), Azul céu (#87CEEB)
MOOD: Country brasileiro, autenticidade rural, liberdade, aspiracional
```

**3.2 Prompts por Tipo de Campanha**

- **Abandono de carrinho**: produto em cena com iluminação quente, composição próxima
- **Boas-vindas**: paisagem aberta, pôr do sol, acessórios no campo
- **Recompra**: estilo de vida country, pessoa usando o produto
- **Promoção**: composição dramática, cores mais saturadas, mood de celebração

---

### Fase 4: Revisão (Roberto Revisão)

**4.1 Thresholds de Aprovação**

```
APROVADO: média ≥ 7.0 E nenhum critério < 4
REPROVADO: média < 7.0 OU qualquer critério < 4
APROVADO COM RESSALVAS: média ≥ 7.0 E não-críticos entre 4-6
```

**4.2 Gatilhos Hard de Rejeição**

- Conformidade legal ausente (sem unsubscribe ou sem endereço)
- CTA com múltiplos botões no mesmo e-mail
- Corpo com mais de 300 palavras (lista quente) ou 150 (fria)
- Tom corporativo/formal que contradiz identidade da Barns Western

---

### Fase 5: Envio (Eduardo Envio)

**5.1 Checklist de Pré-Envio**

```
[ ] From verificado no Resend
[ ] HTML mobile-first montado (600px, single-column)
[ ] CTA button ≥ 44x44px
[ ] Unsubscribe link no rodapé
[ ] Endereço físico no rodapé
[ ] Segmento conforme strategy-brief
[ ] Horário dentro da janela (8-10h ou 13-15h, ter-qui)
[ ] scheduled_at configurado se fora da janela
```

**5.2 Resend API — Operações Principais**

- `send_email`: envio individual
- `batch_send_emails`: lotes (recomendado para > 10 destinatários)
- `schedule_email`: envio agendado (usar `scheduled_at` no payload)
- `get_email`: verificar status por ID
- `list_emails`: listar envios recentes (para analytics)

---

### Fase 6: Analytics (André Analytics)

**6.1 Hierarquia de Métricas para E-commerce**

```
TIER 1 (Mais importantes — base para decisão):
  - Taxa de conversão por e-mail
  - Receita por e-mail enviado (RPE)
  - CTOR (Click-to-Open Rate)

TIER 2 (Importantes — diagnóstico):
  - Taxa de clique (CTR)
  - Taxa de abertura
  - Taxa de bounce

TIER 3 (Monitoramento — saúde da lista):
  - Taxa de descadastro (< 0.2%)
  - Taxa de spam (< 0.1%)
  - Taxa de entrega (> 95%)
```

**6.2 Thresholds de Anomalia**

| Métrica | Normal | Atenção | Crítico (Escalar) |
|---------|--------|---------|-------------------|
| Abertura | ≥ 35% | 20-35% | < 20% |
| Clique | ≥ 2% | 1-2% | < 1% |
| Bounce | < 2% | 2-5% | > 5% |
| Spam | < 0.05% | 0.05-0.1% | > 0.1% |
| Descadastro | < 0.2% | 0.2-0.5% | > 0.5% |

**6.3 Ciclo de Melhoria Contínua**

```
Campanha → Analytics → Insights → Ajuste na Sofia (segmento) ou
Carlos (copy) ou Beatriz (banner) → Próxima campanha → Analytics...
```