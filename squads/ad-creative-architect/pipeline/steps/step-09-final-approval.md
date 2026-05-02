---
step: 9
name: "final-approval"
type: "checkpoint"
label: "Aprovação Final & Exportação"
---

# Step 9 — Aprovação Final & Exportação

## Objetivo

Apresentar o pacote completo de criativos aprovados por Vera, coletar aprovação final do usuário e registrar o run no histórico do squad.

## O que apresentar ao usuário

**Resumo do run completo**:
1. Produto/Persona trabalhada
2. Modo de operação (Produto / Persona)
3. Dores mapeadas na Matriz
4. Hipóteses testadas e ângulos aprovados
5. Criativos finais aprovados — lista com pilar e score de Vera
6. Protocolos visuais gerados
7. Prompts de imagem IA disponíveis

## Apresentação dos criativos finais

Para cada criativo aprovado, apresentar:
- Gancho (variação recomendada)
- Copy de corpo
- Protocolo visual resumido (campo 12 — emoção + campo 8 — enquadramento + campo 11 — paleta)
- Prompt de imagem IA
- Score de Vera (X.X / 10)

## Perguntas do checkpoint (apresentar com AskUserQuestion)

**Pergunta 1 — Aprovação final**

> "Os criativos estão prontos para uso?"
> - Aprovados — registrar run e encerrar
> - Quero ajustar um detalhe (especificar)
> - Quero gerar mais criativos com novos ângulos (reiniciar a partir do Step 4)
> - Quero trabalhar outra persona para o mesmo produto

## Registro do Run

Após aprovação final, atualizar `_memory/runs.md` com:

```markdown
| [data] | Run #[N] | [produto/persona] | [N criativos aprovados] | [score médio Vera] |
```

Atualizar `_memory/memories.md` com insights relevantes desta rodada:
- Ângulos que performaram melhor no veredito de Vera
- Restrições criativas que emergiram desta persona
- Observações de Diego sobre identidade visual que devem persistir em rodadas futuras

## Output deste step

Os arquivos de output da rodada ficam em `output/` para referência:
- `output/psychological-reading.md`
- `output/pain-matrix-hypotheses.md`
- `output/creatives.md`
- `output/visual-protocol.md`
- `output/validation-report.md`

Para organizar por data/run: renomear o diretório `output/` para `output/[YYYY-MM-DD-run-N]/` se múltiplos runs do mesmo squad existirem.
