# Domain Framework: Influencer Outreach Country/Western

## Framework Operacional Completo

### Fase 1: Descoberta de Candidatos

**Objetivo:** Encontrar 10-20 perfis de criadores de conteúdo com fit country/western no Instagram.

**Fontes de busca (em ordem de prioridade):**
1. Hashtags country: #agro, #country, #western, #sertanejo, #fazenda, #nelore
2. Página Explorar do Instagram (posts com alto engajamento no nicho)
3. Seguidores e seguidos de perfis country já conhecidos
4. Comentaristas engajados em posts da Barns Western

**Critérios de triagem rápida:**
- Seguidores entre 5K e 500K
- Bio em português do Brasil
- Conta pessoal (não marca, loja ou empresa)
- Pelo menos um sinal country na bio ou posts recentes

**Score de triagem (0-4):**
- +1: Bio com termo agro/country/rural
- +1: Emoji 🤠 visível na bio ou post recente
- +1: Hashtag country nos posts visíveis
- +1: Localização em estado do cinturão country (GO, MT, MS, RO, MG interior)

---

### Fase 2: Análise de Fit

**Objetivo:** Score de fit detalhado (0-10) para cada candidato selecionado.

**Coleta de dados por perfil:**
- Extração via meta tag: seguidores, bio, posts totais
- 3 posts mais recentes (não fixados): curtidas, comentários, legenda, data
- Comentários visíveis: amostra de 5-10, com atenção a usernames e emojis
- Parcerias identificadas: marcas marcadas nos posts ou mencionadas

**Cálculo de taxa de engajamento:**
```
ER = (média de curtidas + média de comentários) / seguidores × 100
```
Se curtidas ocultas: usar comentários como proxy e indicar isso no relatório.

**Score de fit (0-10):**
| Critério | Pontos máx |
|----------|-----------|
| Bio explicitamente country/agro | 2 |
| Hashtags country em posts | 2 |
| ER > 2% (ou >1% se curtidas ocultas) | 2 |
| Parcerias com marcas (qualquer marca) | 2 |
| Audiência country nos comentários | 2 |

**Classificação:**
- 8-10: MUITO ALTO ✅✅ — prioridade máxima
- 6-7: ALTO ✅ — incluir no outreach
- 4-5: MÉDIO ⚠️ — incluir com proposta ajustada
- <4: BAIXO ❌ — descartar

---

### Fase 3: Redação da Proposta

**Objetivo:** DM personalizada de 100-120 palavras para cada perfil aprovado.

**Framework PAS adaptado para DM:**
- **P (Personalização):** Linha 1 com referência específica ao conteúdo
- **A (Apresentação):** 1-2 frases de identidade da marca
- **S (Solução/Proposta):** Produto + modelo de parceria

**Estrutura padrão:**
```
[Referência específica ao post/estilo do criador]

[Identidade da Barns Western em 1-2 frases]

[Produto concreto + o que pede em troca]

[CTA de baixo atrito]
```

**Ajuste de proposta por tamanho:**
- Micro (5K-30K): Gifting apenas (sem pagamento inicial)
- Mid (30K-150K): Gifting + pagamento por produção
- Macro (150K+): Gifting + pagamento + formato negociável

---

### Fase 4: Revisão de Qualidade

**Objetivo:** Garantir que cada DM passe nos 5 critérios antes do envio.

**5 critérios com pesos iguais:**
1. Personalização: a abertura referencia conteúdo específico do criador?
2. Concisão: menos de 120 palavras?
3. Proposta natural: o produto é mencionado de forma contextual?
4. Tom autêntico: soa como pessoa real, não departamento de marketing?
5. CTA eficaz: tem um único chamado à ação de baixo atrito?

**Regra de aprovação:** Média ≥ 7/10 E nenhum critério < 4/10

---

### Fase 5: Envio via Instagram

**Objetivo:** Entregar DMs aprovadas via Instagram sem acionar mecanismos anti-spam.

**Limites de segurança:**
- Máximo 20 DMs por execução do squad
- Intervalo mínimo de 30 segundos entre envios
- Variação aleatória de 30-60 segundos para parecer comportamento humano
- Verificar memories.md antes de cada envio: não contatar perfil já abordado

**Protocolo de envio:**
1. Verificar sessão ativa (@barns.western)
2. Navegar ao perfil pelo URL
3. Clicar em "Mensagem"
4. Digitar com `pressSequentially` (slowly: true)
5. Aguardar confirmação visual de envio
6. Registrar: username + status + timestamp

**Gestão de erros:**
- DMs restritas a seguidores: registrar como "pendente — seguir primeiro"
- Erro de carregamento: tentar novamente uma vez, depois registrar como falha
- Rate limit: parar a execução e reportar quantos foram enviados
