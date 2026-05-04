---
execution: inline
agent: iago-ideia
inputFile: squads/social-media/output/briefing.md
outputFile: squads/social-media/output/angles.md
---

# Step 2: Generate Angles

Iago Ideia lê o briefing e gera 5 ângulos criativos com drivers emocionais distintos para o usuário selecionar antes de qualquer conteúdo ser criado.

## Context Loading

Load these files before executing:
- `squads/social-media/output/briefing.md` — briefing do run com produto, tipo de post e mensagem específica
- `squads/social-media/pipeline/data/research-brief.md` — padrões identificados nos 5 perfis investigados
- `squads/social-media/pipeline/data/domain-framework.md` — framework de domínio com posicionamento e vocabulário

## Instructions

### Process
1. Ler `briefing.md` e identificar: produto/tema, tipo de post desejado, mensagem específica se houver.
2. Executar diagnóstico de copywriting: nível de consciência (solução-aware para Barns), sofisticação de mercado (Stage 4 — evitar claims genéricos).
3. Gerar 5 ângulos com drivers distintos (status, pertencimento, medo, educacional, contrário), cada um com hook declarativo (máx 8 palavras), narrativa em 1 frase e tipo de post indicado.
4. Salvar em `angles.md` e apresentar ao usuário para seleção.
5. Aguardar resposta do usuário e registrar ângulo escolhido em `selected-angle.md`.

## Output Format

```
# Ângulos Gerados — [Produto/Tema]

## 1. STATUS — Driver: [descrição do driver]
**Hook**: "[HOOK EM CAIXA ALTA]"
**Narrativa**: [1 frase]
**Tipo de post**: [tipo]

## 2. PERTENCIMENTO — Driver: [...]
[mesma estrutura]

## 3. MEDO — Driver: [...]
[mesma estrutura]

## 4. EDUCACIONAL — Driver: [...]
[mesma estrutura]

## 5. CONTRÁRIO — Driver: [...]
[mesma estrutura]

---
Qual ângulo você quer desenvolver? (responda com o número)
```

## Output Example

```
# Ângulos Gerados — Óculos UV400 Vaqueiro

## 1. STATUS — Driver: desejo de reconhecimento e identidade visual
**Hook**: "O OLHAR QUE DEFINE QUEM VOCÊ É."
**Narrativa**: O acessório certo não é detalhe — é declaração. Quem usa Barns não precisa explicar de onde é.
**Tipo de post**: Lançamento / Lifestyle

## 2. PERTENCIMENTO — Driver: necessidade de pertencer ao grupo country autêntico
**Hook**: "FEITO PRA QUEM VIVE O CAMPO DE VERDADE."
**Narrativa**: Não é pra qualquer um. É pra quem acorda cedo, conhece a lida e quer proteção de verdade.
**Tipo de post**: Lifestyle / Identidade

## 3. MEDO — Driver: perda de visão / consequências de não se proteger
**Hook**: "SOL FORTE NÃO PERDOA QUEM NÃO SE PROTEGE."
**Narrativa**: UV400 não é detalhe técnico. É a diferença entre ver bem daqui a 20 anos ou não.
**Tipo de post**: Educativo / Produto

## 4. EDUCACIONAL — Driver: desejo de entender o que realmente significa UV400
**Hook**: "UV400: O QUE NINGUÉM TE EXPLICA."
**Narrativa**: Não é número de fabricante. É o padrão que bloqueia 100% dos raios UVA e UVB.
**Tipo de post**: Educativo / Carrossel

## 5. CONTRÁRIO — Driver: curiosidade por dissonância cognitiva
**Hook**: "ÓCULOS BARATO CUSTA MAIS CARO."
**Narrativa**: Proteção falsa é pior que nenhuma — o olho relaxa achando que está protegido.
**Tipo de post**: Educativo / Debate

---
Qual ângulo você quer desenvolver? (responda com o número)
```

## Veto Conditions

Rejeitar e redo se QUALQUER uma for verdadeira:
1. Dois ou mais ângulos têm o mesmo driver emocional dominante
2. Qualquer hook usa pergunta ("Você sabia que...?", "Já pensou em...?")

## Quality Criteria

- [ ] 5 ângulos com drivers emocionais distintos
- [ ] Todos os hooks são declarativos (sem "?")
- [ ] Cada ângulo tem tipo de post indicado
- [ ] `angles.md` salvo antes de apresentar ao usuário
- [ ] `selected-angle.md` salvo após escolha do usuário