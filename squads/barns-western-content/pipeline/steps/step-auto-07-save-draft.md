---
type: auto
---

# Step Auto-07: Salvar Rascunho

Step final do pipeline automático. **Não publica no Instagram.** Organiza o conteúdo gerado como rascunho para revisão e publicação manual.

## Instruções para o Agente

### 1. Organizar arquivos do run

Garantir que todos os arquivos estão salvos em `output/{run_id}/`:

| Arquivo                     | Conteúdo                                              |
|-----------------------------|-------------------------------------------------------|
| `briefing.md`               | Briefing gerado automaticamente                       |
| `angles.md`                 | 5 ângulos gerados por Iago Ideia                     |
| `selected-angle.md`         | Ângulo escolhido automaticamente                      |
| `feed-post.md`              | Post de feed com caption, slides e direção visual     |
| `reel-script.md`            | Roteiro completo do Reel                              |
| `stories-sequence.md`       | Sequência de frames dos Stories                       |
| `review-report.md`          | Veredicto de Vera Veredito                            |
| `slides/`                   | Imagens geradas do feed e stories                     |

### 2. Criar resumo do rascunho

Criar o arquivo `output/{run_id}/RASCUNHO-PRONTO.md` com o seguinte conteúdo:

```markdown
# ✅ Rascunho Pronto para Revisão

**Data de geração:** {data e hora}
**Produto:** {produto do briefing}
**Tipo de post:** {tipo do briefing}
**Ângulo:** {ângulo selecionado}
**Veredicto Vera:** {APROVAR / APROVAR CONDICIONAL / REJEITAR}

---

## Como publicar

1. Revise os arquivos abaixo
2. Abra o Instagram e crie o post manualmente com o conteúdo gerado
3. Ou use o comando: `/opensquad run barns-western-content --step publish --run {run_id}`

---

## Arquivos para revisão

- **Feed:** `output/{run_id}/feed-post.md` + `output/{run_id}/slides/`
- **Reels:** `output/{run_id}/reel-script.md`
- **Stories:** `output/{run_id}/stories-sequence.md`
- **Revisão completa:** `output/{run_id}/review-report.md`

---

## Legenda pronta para copiar

{legenda extraída de feed-post.md}
```

### 3. Atualizar memória de runs

Registrar este run em `_memory/runs.md`:
- Data, produto, ângulo, veredicto da Vera
- Status: `RASCUNHO` (aguardando publicação manual)

### 4. NÃO chamar instagram-publisher

Este pipeline **não publica automaticamente**. A publicação é sempre manual pelo usuário.

## Mensagem final ao usuário

Ao concluir, exibir:

---

**Rascunho gerado com sucesso.**

Produto: {produto} | Veredicto: {veredicto}

Arquivos em: `squads/barns-western-content/output/{run_id}/`

Revise o conteúdo e publique manualmente quando estiver pronto.

---