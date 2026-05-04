---
task: "Generate Angles"
order: 1
input: |
  - briefing: Arquivo briefing.md com produto/tema, tipo de post desejado e mensagem específica se houver
output: |
  - angles: Arquivo angles.md com 5 ângulos numerados, cada um com driver emocional, hook e tipo de post indicado
  - selected_angle: Arquivo selected-angle.md com o ângulo escolhido pelo usuário
---

# Generate Angles

Transforma o briefing do usuário em 5 ângulos criativos distintos, cada um ancorado em um driver emocional diferente. Apresenta os ângulos para o usuário selecionar antes de qualquer conteúdo ser criado.

## Process

1. **Ler briefing.md**: Identificar produto ou tema central, tipo de post solicitado (lançamento, lifestyle, educativo, promoção, prova social), e qualquer mensagem específica do usuário.

2. **Executar diagnóstico de copywriting**:
   - Nível de consciência: para Barns Western, o consumidor é solução-aware (sabe que precisa de proteção UV ou acessório country de qualidade, mas não conhece a Barns como a melhor opção)
   - Sofisticação de mercado: Stage 4 — mercado country saturado de claims genéricos ("qualidade premium", "exclusivo") — diferenciar por identidade e especificidade
   - Identificar os 5 drivers a cobrir: status, pertencimento, medo, educacional, contrário

3. **Gerar 5 ângulos distintos**, um por driver, cada um com:
   - Nome do ângulo (Status / Pertencimento / Medo / Educacional / Contrário)
   - Driver emocional explícito em 1 frase
   - Hook de abertura: declarativo, máx 8 palavras, sem pergunta, em caixa alta se for lançamento
   - Resumo de 1 frase da narrativa que esse ângulo conta
   - Tipo de post mais indicado (Lifestyle, Lançamento, Educativo, Prova Social, Promoção, Carrossel, Single Image)

4. **Salvar em `angles.md`** e apresentar ao usuário numerado para seleção. Aguardar a escolha — nunca prosseguir para criação de conteúdo antes da seleção.

5. **Registrar ângulo escolhido em `selected-angle.md`** com: nome do ângulo, driver emocional, hook escolhido, narrativa e tipo de post. Confirmar para o usuário que o ângulo foi registrado.

## Output Format

```markdown
# Ângulos Gerados — [Produto/Tema do Briefing]

## 1. STATUS — Driver: [desejo de reconhecimento/status social]
**Hook**: "[HOOK EM CAIXA ALTA — MÁXIMO 8 PALAVRAS]"
**Narrativa**: [1 frase descrevendo a narrativa do ângulo]
**Tipo de post**: [Lifestyle / Lançamento / etc.]

## 2. PERTENCIMENTO — Driver: [necessidade de grupo/comunidade]
**Hook**: "[HOOK]"
**Narrativa**: [narrativa]
**Tipo de post**: [tipo]

## 3. MEDO — Driver: [perda / consequência / risco]
**Hook**: "[HOOK]"
**Narrativa**: [narrativa]
**Tipo de post**: [tipo]

## 4. EDUCACIONAL — Driver: [desejo de conhecimento/informação]
**Hook**: "[HOOK]"
**Narrativa**: [narrativa]
**Tipo de post**: [tipo]

## 5. CONTRÁRIO — Driver: [curiosidade / dissonância cognitiva]
**Hook**: "[HOOK]"
**Narrativa**: [narrativa]
**Tipo de post**: [tipo]

---
Qual ângulo você quer desenvolver? (responda com o número)
```

## Output Example

> Use como referência de qualidade, não como template rígido.

```markdown
# Ângulos Gerados — Óculos UV400 Vaqueiro

## 1. STATUS — Driver: desejo de reconhecimento e identidade visual
**Hook**: "O OLHAR QUE DEFINE QUEM VOCÊ É."
**Narrativa**: O acessório certo não é detalhe — é declaração. Quem usa Barns não precisa explicar de onde é.
**Tipo de post**: Lançamento / Lifestyle

## 2. PERTENCIMENTO — Driver: necessidade de pertencer ao grupo country autêntico
**Hook**: "FEITO PRA QUEM VIVE O CAMPO DE VERDADE."
**Narrativa**: Não é pra qualquer um. É pra quem acorda cedo, conhece a lida e quer proteção de verdade — não aparência.
**Tipo de post**: Lifestyle / Identidade

## 3. MEDO — Driver: perda de visão / consequências de não se proteger
**Hook**: "SOL FORTE NÃO PERDOA QUEM NÃO SE PROTEGE."
**Narrativa**: UV400 não é detalhe técnico. É a diferença entre ver bem daqui a 20 anos ou não.
**Tipo de post**: Educativo / Produto

## 4. EDUCACIONAL — Driver: desejo de entender o que realmente significa UV400
**Hook**: "UV400: O QUE NINGUÉM TE EXPLICA."
**Narrativa**: Não é número de fabricante. É o padrão que bloqueia 100% dos raios UVA e UVB. Saiba o que você está comprando antes de ser enganado.
**Tipo de post**: Educativo / Carrossel

## 5. CONTRÁRIO — Driver: curiosidade por dissonância cognitiva
**Hook**: "ÓCULOS BARATO CUSTA MAIS CARO."
**Narrativa**: Proteção falsa é pior que nenhuma proteção — o olho relaxa achando que está protegido quando não está. Veja por que o barato sai caro quando o assunto é visão.
**Tipo de post**: Educativo / Debate

---
Qual ângulo você quer desenvolver? (responda com o número)
```

## Quality Criteria

- [ ] 5 ângulos gerados com drivers emocionais distintos — nenhum repete o mesmo driver de outro
- [ ] Todos os hooks são declarações afirmativas sem "?" — nenhum começa com pergunta
- [ ] Cada ângulo tem tipo de post indicado e coerente com o driver emocional
- [ ] Ângulo escolhido registrado em `selected-angle.md` antes de prosseguir

## Veto Conditions

Rejeitar e refazer se QUALQUER uma for verdadeira:
1. Dois ou mais ângulos têm o mesmo driver emocional dominante — a escolha do usuário é ilusória se os ângulos são variações do mesmo driver
2. Qualquer hook usa pergunta ("Você sabia que...?", "Já pensou em...?") — anti-padrão confirmado nos 5 perfis investigados