---
type: checkpoint
---

# Step 5: Aprovação Final do Diagnóstico

Este checkpoint apresenta o diagnóstico financeiro completo para aprovação do usuário.

## Contexto para o Usuário

O diagnóstico financeiro foi concluído e revisado. Os seguintes arquivos foram gerados neste run:

- **`output/metricas-financeiras.md`** — Métricas calculadas pelo Felipe Financeiro (receita líquida, margens, unit economics, ponto de equilíbrio, projeção de caixa)
- **`output/diagnostico-estrategico.md`** — Diagnóstico estratégico do Gustavo Gestor (situação atual, problemas, vazamentos de margem, plano de ação, alocação de capital)
- **`output/revisao.md`** — Revisão da Renata Revisão (veredicto, verificação de cálculos, feedback)

## Instruções

Revise os arquivos acima e escolha uma das opções:

**1. Aprovado** — O diagnóstico está correto e pronto para uso. O run será encerrado e o histórico atualizado.

**2. Solicitar ajuste** — Se quiser que algum agente refaça ou ajuste alguma parte específica, descreva o que precisa ser alterado.

**3. Dúvida sobre algum dado** — Se quiser entender melhor algum número ou recomendação, descreva sua dúvida.

---

## Após Aprovação

Ao aprovar, o runner deve:

1. Registrar o run em `_memory/runs.md` com:
   - Data do run
   - Período analisado
   - Receita líquida do período
   - Lucro líquido e margem líquida
   - Principal insight do diagnóstico
   - Veredicto da Renata

2. Confirmar ao usuário: "Diagnóstico registrado. Para rodar o próximo período, use `/opensquad run financial-health`."