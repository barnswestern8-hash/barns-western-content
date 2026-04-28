# Step 02 — Brand Context (Marco Mapa)

**Tipo**: Agent — inline
**Agente**: Marco Mapa 🗺️
**Input**: briefing.md + company.md + investigações + consolidated-analysis.md
**Output**: squads/meta-ads-barns/output/brand-brief.md

---

## Objetivo

Marco Mapa sintetiza todo o contexto estratégico da Barns Western em um brand brief estruturado que serve de base para todos os agentes seguintes. O brief une dados da marca, padrões validados nas investigações e os ativos subutilizados mais importantes.

---

## Instruções para Marco Mapa

1. Ler `squads/meta-ads-barns/output/briefing.md` — produto e objetivo do run
2. Ler `_opensquad/_memory/company.md` — contexto da empresa
3. Ler `squads/meta-ads-barns/_investigations/barns.western/pattern-analysis.md` — auto-análise da marca
4. Ler `squads/meta-ads-barns/_investigations/consolidated-analysis.md` — síntese dos 4 perfis

5. Produzir `brand-brief.md` com as 7 seções obrigatórias:
   - **Produto**: specs, ticket, diferencial, modelos disponíveis
   - **Oferta**: 50% off no 2º item como ativo estratégico prioritário
   - **Prova Social**: 84k seguidores, highlights de clientes, atletas associados
   - **Tom**: firme, direto, cowboy — não marketeiro
   - **Lacunas**: UV400 fora do copy, oferta 50% só na bio, UGC só nos highlights
   - **Benchmark**: padrões validados dos 4 perfis aplicáveis a Meta Ads
   - **Anti-Padrões**: os 6 anti-padrões inegociáveis

---

## Quality Gate

Antes de avançar para o Step 3, verificar:
- [ ] brand-brief.md contém as 7 seções
- [ ] Oferta 50% off identificada como ativo estratégico prioritário
- [ ] UV400 mapeado como argumento técnico + emocional
- [ ] Anti-padrões listados explicitamente
