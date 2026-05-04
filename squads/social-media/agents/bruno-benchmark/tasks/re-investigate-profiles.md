---
task: "Re-Investigate Profiles"
order: 1
input: |
  - reference_profiles: Arquivo pipeline/data/reference-profiles.md com lista dos 5 perfis e protocolo de investigação
  - output_examples: Arquivo pipeline/data/output-examples.md com exemplos da investigação anterior
  - tone_of_voice: Arquivo pipeline/data/tone-of-voice.md com padrões de voz da investigação anterior
output: |
  - benchmark_report: Arquivo output/benchmark-report.md com relatório de mudanças por perfil e síntese de oportunidades para Barns
  - updated_output_examples: Atualização de pipeline/data/output-examples.md com novos exemplos de alto engajamento
  - updated_tone_of_voice: Atualização de pipeline/data/tone-of-voice.md se padrões de linguagem mudaram significativamente
---

# Re-Investigate Profiles

Re-investiga os 5 perfis de referência da Barns Western no Instagram, extrai posts recentes, identifica mudanças vs. investigação anterior e atualiza os arquivos de dados do squad com padrões frescos.

## Process

1. **Carregar `reference-profiles.md`**: Ler a lista dos 5 perfis, as URLs, o foco de cada um e o protocolo de investigação. Registrar a data da última investigação para comparação.

2. **Para cada perfil (todos os 5, na mesma sessão)**:
   - Navegar ao perfil via browser usando a skill `image-fetcher`
   - Registrar: seguidores atuais, bio atual (mudou desde a última investigação?)
   - Extrair os **3 posts mais recentes**: tipo de conteúdo, legenda completa, estrutura do carrossel/reel, hashtags, engajamento visível (likes, comentários)
   - Identificar especificamente: novos hooks, mudanças de tom, novos formatos testados, hashtags emergentes, posts com engajamento atípico

3. **Compilar relatório por perfil**: Para cada perfil, seção com:
   - O que mudou vs. investigação anterior (comparação explícita)
   - O que permaneceu estável (padrões confiáveis para continuar usando)
   - Oportunidade específica para Barns adaptar

4. **Compilar síntese geral**: Após os 5 perfis, seção de síntese com:
   - Top 3 mudanças mais relevantes para a estratégia de Barns
   - Novos padrões emergentes que valem testar
   - O que não mudou e pode ser mantido como referência estável

5. **Atualizar `output-examples.md`**: Adicionar seção com data de atualização e novos exemplos de posts de alto engajamento. Nunca substituir o conteúdo anterior — adicionar seção datada.

6. **Atualizar `tone-of-voice.md`** somente se houve mudança significativa de padrões de linguagem nos perfis. Registrar data no cabeçalho.

7. **Salvar `benchmark-report.md`** e registrar a investigação no histórico de `reference-profiles.md`.

## Output Format

```markdown
# Benchmark Report — Barns Western
Data da investigação: [YYYY-MM-DD]
Investigação anterior: [data da última]
Perfis investigados: 5/5

---

## @[handle]

**Seguidores**: [N] (era [N anterior])
**Bio**: [atual] [nota se mudou]

### Posts Recentes
1. [tipo] — "[início da legenda...]" — [estrutura] — [hashtags] — [engajamento]
2. [tipo] — [...]
3. [tipo] — [...]

### O que mudou vs. investigação anterior
[comparação explícita — o que era X agora é Y]

### O que permaneceu estável
[padrões confirmados — confiança para continuar usando]

### Oportunidade para Barns
[adaptação específica derivada dos novos padrões]

---

[repetir seção para cada um dos 5 perfis]

---

## Síntese Geral

### Top 3 mudanças mais relevantes para Barns
1. [mudança] — [por que importa para Barns]
2. [mudança] — [por que importa]
3. [mudança] — [por que importa]

### Padrões emergentes para testar
- [padrão] — [como adaptar para Barns]

### Padrões estáveis (manter como referência)
- [padrão confirmado] — [quais perfis confirmam]

---
Próxima investigação sugerida: [data — 30-45 dias]
```

## Output Example

> Use como referência de qualidade, não como template rígido.

```markdown
# Benchmark Report — Barns Western
Data da investigação: 2026-06-05
Investigação anterior: 2026-04-22
Perfis investigados: 5/5

---

## @tecovas

**Seguidores**: 789 mil (era 761 mil — crescimento de 28k em 45 dias)
**Bio**: "Forever West." (sem mudança)

### Posts Recentes
1. Carrossel 5 slides — "Meet The Ranger. Built for the long haul." — produto como personagem, paleta quente — #Tecovas — 4.2k likes, 89 comentários
2. Single image — "Some things never go out of style." — lifestyle editorial, sem produto em destaque — #Tecovas — 3.8k likes
3. Reel 22s — "Worn in. Never worn out." — cliente real usando bota há 3 anos, UGC em contexto autêntico — 18k views

### O que mudou vs. investigação anterior
Tecovas começou a usar mais UGC em contexto autêntico de uso prolongado ("Worn in." era padrão anterior — agora vira Reel com cliente real). Antes era editorial estático; agora há mais vídeo com pessoa real.

### O que permaneceu estável
"Forever West" como tagline, produto nomeado como personagem ("Meet The [Nome]"), copy minimalista de alta densidade, máx 1 hashtag por post.

### Oportunidade para Barns
Adaptar o formato UGC de "uso prolongado": buscar clientes que usam óculos Barns há mais de 1 ano e criar Reel com depoimento real. "Dois anos de campo. O Vaqueiro continua."

---

## Síntese Geral

### Top 3 mudanças mais relevantes para Barns
1. **@tecovas** migrou para UGC de uso prolongado em Reel — autenticidade de longo prazo que o editorial não consegue. Barns pode replicar com clientes de óculos UV400 que usam há 1+ ano.
2. **@ariatinternational** testou estrutura de "Build for X. Worn everywhere." em Reel — performance como argumento de versatilidade. Para Barns: "Feito para o campo. Usado em todo lugar."
3. **@pbr** aumentou frequência de cobertura em tempo real para +3 posts/dia durante eventos. Sinal de que o algoritmo favorece presença contínua durante eventos do nicho.

### Padrões emergentes para testar
- UGC de uso prolongado em Reel (tecovas, @ariatinternational) — cliente real > modelo de estúdio
- "Built for X. Worn everywhere." — estrutura de versatilidade que expande o público

### Padrões estáveis (manter como referência)
- Copy minimalista de alta densidade (@tecovas) — confirmado nos últimos 3 meses
- Dois benefícios paralelos (@ariatinternational) — "Performance + Style" segue como tagline principal
- Máx 3-5 hashtags em todos os perfis — sem mudança

---
Próxima investigação sugerida: 2026-07-20
```

## Quality Criteria

- [ ] Todos os 5 perfis investigados no mesmo run (não parcial)
- [ ] Mínimo 3 posts extraídos por perfil com legenda e estrutura documentadas
- [ ] Comparação explícita com investigação anterior por perfil (o que mudou vs. o que permaneceu)
- [ ] Síntese com top 3 oportunidades para Barns derivadas dos padrões encontrados
- [ ] Data de atualização registrada no cabeçalho dos arquivos atualizados

## Veto Conditions

Rejeitar e refazer se QUALQUER uma for verdadeira:
1. Menos de 5 perfis investigados — comparação justa requer todos os 5 na mesma janela de tempo
2. Relatório sem síntese de oportunidades para Barns — lista de posts sem conclusão não é benchmark, é arquivo