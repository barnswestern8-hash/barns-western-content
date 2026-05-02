# Anti-Patterns — Email Marketing Squad da Barns Western

## Erros de Estratégia (Sofia Segmentos)

### Nunca Fazer

**1. Batch-and-blast sem segmentação**
*O que é:* Enviar o mesmo e-mail para toda a lista sem critério de segmentação
*Por que é ruim:* Gera 3-5x mais descadastros que e-mails segmentados; danifica reputação do domínio; taxa de conversão cai para < 1%
*Como evitar:* Sempre definir critério comportamental antes de escrever uma linha de copy

**2. KPI vago ou ausente**
*O que é:* Campanha com objetivo de "aumentar as vendas" sem número específico
*Por que é ruim:* Impossível medir sucesso, otimizar ou justificar decisão de estratégia
*Como evitar:* Sempre "recuperar 15% dos carrinhos" ou "gerar R$3.000 em receita adicional"

**3. Sem cadência de follow-up planejada**
*O que é:* Planejar apenas o primeiro e-mail de uma sequência
*Por que é ruim:* 80% das conversões ocorrem após o primeiro e-mail. Campanha sem sequência perde a maioria do potencial de receita
*Como evitar:* Definir todos os timings da sequência no strategy-brief antes de começar

**4. Desconto como primeiro recurso em abandono de carrinho**
*O que é:* Ofertar desconto já no primeiro e-mail de abandono
*Por que é ruim:* Treina o cliente a abandonar o carrinho esperando desconto; erode margem; cria expectativa de promoção permanente
*Como evitar:* E-mail 1 = urgência pura. Desconto apenas no E-mail 2 se E-mail 1 não converteu

---

## Erros de Copywriting (Carlos Conversão)

### Nunca Fazer

**5. Escrever o corpo antes do assunto ser selecionado**
*O que é:* Produzir o copy completo sem confirmar qual linha de assunto o usuário quer
*Por que é ruim:* O corpo inteiro deve ser ancorado no assunto escolhido. Assunto diferente = e-mail diferente
*Como evitar:* Sempre apresentar 3 opções de assunto e aguardar seleção no checkpoint antes de escrever o corpo

**6. Feature dumping em vez de benefício**
*O que é:* Listar atributos técnicos sem conectar ao benefício real
*Exemplo ruim:* "UV400, polarizado, armação em TR90, lentes oleofóbicas"
*Exemplo correto:* "Proteção UV400 completa, do sol do campo à arena do rodeio"
*Como evitar:* Para cada feature, perguntar "então o que isso significa para o cliente?"

**7. Múltiplos CTAs**
*O que é:* Colocar 2 ou mais botões/links de ação diferentes no mesmo e-mail
*Por que é ruim:* Dilui a conversão — cada CTA adicional reduz a probabilidade do principal ser clicado em ~30%
*Como evitar:* Um e-mail, uma ação. Todos os outros links ficam no rodapé (unsubscribe, social media)

**8. Bloco denso de texto**
*O que é:* Parágrafos de 4+ frases em e-mails mobile
*Por que é ruim:* No mobile (60-70% das aberturas), parágrafo de 4 linhas ocupa a tela inteira e o cliente fecha sem ler
*Como evitar:* Máx. 2-3 linhas por parágrafo. Uma ideia por bloco. Espaço entre blocos.

**9. Abertura genérica "Olá, [Nome]"**
*O que é:* Abertura sem personalização de contexto além do nome
*Por que é ruim:* Sinaliza e-mail em massa; o cliente sente que é mais um da lista
*Como evitar:* "Ei, [Nome]! Você quase levou o óculos UV400..." — abertura contextualizada

---

## Erros de Design Visual (Beatriz Banner)

### Nunca Fazer

**10. Texto no prompt de geração de IA**
*O que é:* Incluir instrução de texto ("escreva 'PROMOÇÃO' na imagem") no prompt do image-ai-generator
*Por que é ruim:* Modelos de IA renderizam texto distorcido e ilegível — cria imagem profissional mas com texto quebrado
*Como evitar:* Nenhum texto no prompt. Texto é adicionado no HTML ao redor da imagem.

**11. Múltiplas gerações de teste simultâneas**
*O que é:* Gerar 3-5 variações de teste ao mesmo tempo para "escolher a melhor"
*Por que é ruim:* Custo desnecessário (R$0,01-0,02 por imagem, mas em escala). A variação é avaliada no checkpoint
*Como evitar:* Gerar 1 imagem em modo test. Se reprovar no checkpoint, ajustar o prompt e gerar mais 1.

**12. Modo production sem aprovação**
*O que é:* Gerar imagem final (modo production, R$0,07-0,10) sem aprovação no checkpoint
*Por que é ruim:* Custo maior pode ser desperdiçado se a composição não for aprovada
*Como evitar:* Sempre test → checkpoint → production após aprovação

---

## Erros de Envio (Eduardo Envio)

### Nunca Fazer

**13. From não verificado no Resend**
*O que é:* Tentar enviar com domínio não verificado na plataforma Resend
*Por que é ruim:* API rejeita o envio; risco de blacklist que afeta TODOS os e-mails da Barns Western (transacional, atendimento, marketing)
*Como evitar:* Verificar status do from antes de qualquer envio. Parar e reportar se não verificado.

**14. Ignorar resposta da API**
*O que é:* Disparar o envio e não verificar se os IDs de confirmação foram retornados
*Por que é ruim:* Erro silencioso = zero e-mails entregues sem nenhum feedback
*Como evitar:* Verificar cada ID de retorno. Se qualquer envio falhar, parar e reportar.

**15. Alterar segmento sem aprovação**
*O que é:* Expandir ou modificar o segmento definido pela Sofia sem consultar o usuário
*Por que é ruim:* Pode enviar para clientes que não deveriam receber aquela campanha, gerando descadastros e reclamações
*Como evitar:* Segmento do strategy-brief é imutável sem aprovação explícita do usuário.

---

## Erros de Analytics (André Analytics)

### Nunca Fazer

**16. Dados sem comparativo**
*O que é:* Apresentar "Taxa de abertura: 38.4%" sem coluna de benchmark ou período anterior
*Por que é ruim:* Número isolado é ruído — não permite nenhuma decisão baseada em dados
*Como evitar:* Toda métrica com pelo menos uma coluna comparativa (benchmark setor + período anterior)

**17. Insight sem implicação de negócio**
*O que é:* "A taxa de clique foi de 4.2%" — fim da análise
*Por que é ruim:* Dado sem interpretação não agrega valor. O usuário poderia ler o dado sozinho no Resend
*Como evitar:* Sempre "A taxa de clique foi de 4.2% (72% acima do benchmark de 2.44%). Isso significa que o CTA com prazo explícito é o padrão mais efetivo para este segmento."

**18. Correlação como causalidade**
*O que é:* "Enviar às 14h causou maior taxa de abertura"
*Por que é ruim:* Sem controlled experiment, não há evidência de causalidade — pode ser coincidência
*Como evitar:* "Envio às 14h coincidiu com maior abertura. Teste A/B de horário necessário para confirmar."