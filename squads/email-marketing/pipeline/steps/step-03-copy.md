---
execution: inline
agent: squads/email-marketing/agents/carlos-conversao
format: email-sales
inputFile: squads/email-marketing/output/strategy-brief.md
outputFile: squads/email-marketing/output/email-copy.md
---

# Step 03: Copy do E-mail

## Context Loading

Carregue estes arquivos antes de executar:

- `squads/email-marketing/output/strategy-brief.md` — Estratégia e segmentação (tipo, oferta, KPI, janela de urgência)
- `_opensquad/_memory/company.md` — Tom de voz, produtos e identidade da Barns Western
- `squads/email-marketing/pipeline/data/tone-of-voice.md` — Guia de tom específico para e-mail marketing da Barns Western
- `squads/email-marketing/pipeline/data/output-examples.md` — Exemplos de e-mails de alta conversão para referência

## Instructions

### Process

1. **Diagnóstico pré-escrita.** Identificar: (a) nível de consciência do público (produto ciente, abandono = mais quente; boas-vindas = mais frio); (b) driver psicológico dominante para este segmento e tipo de campanha.
2. **Criar 3 opções de linha de assunto.** Cada opção com driver emocional diferente (urgência, curiosidade, prova social ou pertencimento) E estrutura diferente (pergunta, afirmação, dado). Máx. 60 caracteres por opção. Incluir rationale de 1 linha por opção.
3. **Apresentar os 3 assuntos para o usuário.** Aguardar seleção no checkpoint step 4.
4. **Selecionar o framework correto.** PAS para abandono de carrinho e recompra. AIDA para boas-vindas e frio. 4Ps para campanhas promocionais pesadas.
5. **Escrever o corpo do e-mail** seguindo o framework. Máx. 300 palavras (lista quente) ou 150 palavras (fria). Parágrafos de 1-2 frases. Prova social específica antes do CTA.
6. **Escrever o CTA.** Um único CTA com verbo imperativo e benefício explícito quando possível.
7. **Escrever o PS.** Uma ou duas frases com urgência real ou prova social.
8. **Documentar o email-copy.md** com todos os campos em formato estruturado.

**IMPORTANTE:** Apresente as 3 opções de assunto ao usuário ANTES de escrever o corpo. O usuário confirma no checkpoint step 4.

## Output Format

```
=== ASSUNTO A ===
[Linha de assunto A — máx. 60 chars]
Driver: [urgência / curiosidade / prova social / pertencimento]
Rationale: [uma linha explicando por que vai funcionar para este segmento]

=== ASSUNTO B ===
[Linha de assunto B — máx. 60 chars]
Driver: [driver diferente do A]
Rationale: [uma linha]

=== ASSUNTO C ===
[Linha de assunto C — máx. 60 chars]
Driver: [driver diferente de A e B]
Rationale: [uma linha]

---
[Aguardando seleção do usuário no checkpoint step 4]
---

=== ASSUNTO SELECIONADO ===
[Assunto confirmado pelo usuário]

=== FRAMEWORK ===
[PAS / AIDA / 4Ps / BAB]

=== CORPO ===
[Abertura personalizada]

[Problema/Agitação/Solução ou Atenção/Interesse/Desejo/Ação — em parágrafos curtos]

[Prova social específica]

[CTA em destaque]
[TEXTO DO BOTÃO →]

[Assinatura]

P.S.: [Urgência ou prova social — 1-2 frases]

=== EMAIL NOTES ===
Target: [segmento]
Stage: [frio / quente]
Framework: [nome]
Word count: [N palavras]
Follow-up: [quando e qual e-mail]
```

## Output Example

```
=== ASSUNTO A ===
Ei, você esqueceu algo aqui 👀
Driver: Curiosidade / pattern interrupt
Rationale: Open loop simples sem revelar produto — força abertura por curiosidade

=== ASSUNTO B ===
Seu óculos UV400 está te esperando (só por 24h)
Driver: Urgência + especificidade
Rationale: Nomeia o produto e cria prazo real — mais efetivo para segmento que já conhece o produto

=== ASSUNTO C ===
10% OFF antes que alguém leve o seu
Driver: Medo de perda (loss aversion)
Rationale: Competição implícita + desconto criam urgência de ação imediata

---
[Usuário selecionou Assunto B no checkpoint]
---

=== ASSUNTO SELECIONADO ===
Seu óculos UV400 está te esperando (só por 24h)

=== FRAMEWORK ===
PAS (Problem-Agitate-Solution)

=== CORPO ===
Ei, [Nome]!

Você quase levou o Óculos de Sol UV400 da Barns Western.
Só faltou um clique pra fechar.

Aqui vai um motivo pra voltar agora:

Aplicamos 10% OFF exclusivo pra você.
Proteção UV400 completa, do sol do campo à arena do rodeio.
Mais de 1.200 clientes já escolheram o modelo. A maioria ficou com dois.
(2º item com 50% OFF — oferta padrão Barns Western.)

[FINALIZAR COM 10% OFF →]

Oferta válida por 24 horas.

Qualquer dúvida, é só responder esse e-mail.

Abraço country,
Time Barns Western

P.S.: Depois que o prazo acabar, o preço volta ao normal. Não demora pra fechar.

=== EMAIL NOTES ===
Target: Clientes com carrinho abandonado há 24h
Stage: Quente (já conhecem o produto)
Framework: PAS
Word count: 112 palavras
Follow-up: E-mail 3 em 48h se não converter
```

## Veto Conditions

Rejeitar e reescrever se:

1. Corpo escrito antes das 3 opções de assunto serem apresentadas e selecionadas
2. Mais de um CTA no mesmo e-mail

## Quality Criteria

- [ ] 3 opções de assunto com drivers emocionais distintos (máx. 60 chars cada)
- [ ] Corpo com framework correto para o tipo de campanha
- [ ] Máx. 300 palavras (quente) ou 150 palavras (frio)
- [ ] Um único CTA com verbo imperativo
- [ ] PS presente com urgência ou prova social
- [ ] Linguagem country/western alinhada ao tom da Barns Western