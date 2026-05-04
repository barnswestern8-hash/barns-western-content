---
execution: subagent
agent: bruno-benchmark
outputFile: squads/social-media/output/benchmark-report.md
model_tier: powerful
---

# Benchmark Step 1: Re-Investigate Profiles

Bruno Benchmark re-investiga os 5 perfis de referência da Barns Western no Instagram, extrai posts recentes, identifica mudanças vs. investigação anterior e atualiza os arquivos de dados do squad.

**Pipeline separada** — executar independentemente do pipeline principal a cada 30-45 dias.

## Context Loading

Load these files before executing:
- `squads/social-media/pipeline/data/reference-profiles.md` — lista dos 5 perfis, URLs, foco e protocolo de investigação
- `squads/social-media/pipeline/data/output-examples.md` — exemplos da investigação anterior (base para comparação)
- `squads/social-media/pipeline/data/tone-of-voice.md` — padrões de voz da investigação anterior (base para comparação)

## Instructions

### Process
1. Carregar `reference-profiles.md`. Identificar data da última investigação e os 5 perfis com suas URLs.
2. Para cada perfil (todos os 5): navegar via browser com `image-fetcher`, registrar seguidores/bio atuais, extrair 3 posts mais recentes (tipo, legenda completa, hashtags, engajamento visível). Comparar com padrões registrados na última investigação.
3. Para cada perfil: documentar o que mudou (novos hooks, tom, formatos, hashtags), o que permaneceu estável e a oportunidade específica para Barns adaptar.
4. Compilar síntese geral: top 3 mudanças mais relevantes para Barns, padrões emergentes para testar, padrões estáveis para manter.
5. Atualizar `output-examples.md` com novos exemplos de alto engajamento (adicionar seção datada — não substituir conteúdo anterior).
6. Atualizar `tone-of-voice.md` somente se houve mudança significativa de padrões de linguagem. Registrar data no cabeçalho.
7. Atualizar histórico em `reference-profiles.md` com data desta investigação.

## Output Format

```
# Benchmark Report — Barns Western
Data: [YYYY-MM-DD]
Investigação anterior: [data]
Perfis: 5/5

---

## @[handle]
**Seguidores**: [N] (era [N anterior])
**Bio**: [atual] [nota se mudou]

### Posts Recentes
1. [tipo] — "[início da legenda]" — [estrutura] — [hashtags] — [engajamento]
2. [...]
3. [...]

### O que mudou vs. investigação anterior
[comparação explícita]

### O que permaneceu estável
[padrões confirmados]

### Oportunidade para Barns
[adaptação específica]

---

[repetir para cada um dos 5 perfis]

---

## Síntese Geral

### Top 3 mudanças para Barns
1. [mudança] — [por que importa]
2. [...]
3. [...]

### Padrões emergentes para testar
- [padrão] — [adaptação]

### Padrões estáveis (manter)
- [padrão] — [perfis que confirmam]

---
Próxima investigação sugerida: [data — 30-45 dias]
```

## Output Example

```
# Benchmark Report — Barns Western
Data: 2026-06-05
Investigação anterior: 2026-04-22
Perfis: 5/5

---

## @tecovas
**Seguidores**: 789 mil (era 761 mil — +28k em 45 dias)
**Bio**: "Forever West." (sem mudança)

### Posts Recentes
1. Carrossel 5 slides — "Meet The Ranger. Built for the long haul." — produto como personagem — #Tecovas — 4.2k likes
2. Single image — "Some things never go out of style." — lifestyle editorial — #Tecovas — 3.8k likes
3. Reel 22s — "Worn in. Never worn out." — cliente real usando há 3 anos — 18k views

### O que mudou vs. investigação anterior
Migrou para UGC de uso prolongado em Reel — antes era editorial estático. "Worn in." virou formato de vídeo com cliente real.

### O que permaneceu estável
"Forever West" como tagline, produto nomeado ("Meet The [Nome]"), copy minimalista, máx 1 hashtag.

### Oportunidade para Barns
UGC de uso prolongado: cliente que usa óculos Barns há 1+ ano. "Dois anos de campo. O Vaqueiro continua."

---

## Síntese Geral

### Top 3 mudanças para Barns
1. @tecovas migrou para UGC de uso prolongado em Reel — autenticidade de longo prazo que editorial não alcança
2. @ariatinternational testou "Built for X. Worn everywhere." em Reel — versatilidade como argumento
3. @pbr aumentou frequência durante eventos — algoritmo favorece presença contínua no nicho

### Padrões emergentes para testar
- UGC de uso prolongado em Reel (tecovas, ariat) — cliente real > modelo de estúdio

### Padrões estáveis (manter)
- Copy minimalista de alta densidade (@tecovas) — 3 meses confirmados
- Dois benefícios paralelos (@ariat) — "Performance + Style" segue como tagline
- Máx 3-5 hashtags em todos os perfis — sem mudança

---
Próxima investigação sugerida: 2026-07-20
```

## Veto Conditions

Rejeitar e redo se QUALQUER uma for verdadeira:
1. Menos de 5 perfis investigados — comparação justa requer todos os 5 na mesma janela de tempo
2. Relatório sem síntese de oportunidades para Barns — lista de posts sem conclusão não é benchmark

## Quality Criteria

- [ ] 5/5 perfis investigados no mesmo run
- [ ] Mínimo 3 posts extraídos por perfil com legenda e estrutura
- [ ] Comparação explícita com investigação anterior por perfil
- [ ] Síntese com top 3 oportunidades para Barns
- [ ] Data de atualização registrada nos arquivos modificados