---
type: checkpoint
---

# Step 8: Final Approval

Checkpoint final antes da publicação. Vera Veredito emitiu seu veredicto no Step 7. O usuário decide se aprova o conteúdo para publicação ou solicita mais ajustes.

## Para o usuário

Vera Veredito concluiu a revisão formal. O relatório está em `output/review-report.md`.

---

**Se o veredicto foi APROVAR ou APROVAR CONDICIONAL:**

O conteúdo está pronto para publicação. Você pode:

- **Publicar agora** — use a skill `instagram-publisher` para publicar o Feed diretamente via Graph API
- **Salvar para publicar depois** — os arquivos ficam em `output/` para publicação manual
- **Aplicar sugestões não-bloqueantes** — se Vera listou sugestões opcionais, você pode aplicá-las antes de publicar

**Se o veredicto foi REJEITAR:**

O pipeline retornou ao Step 4. Fernanda Feed está reescrevendo o conteúdo com as mudanças obrigatórias indicadas por Vera. O próximo ciclo de revisão (Step 7) acontecerá automaticamente após a reescrita.

---

**Para publicar o Feed via Graph API:**

Informe: "publicar o Feed" — a skill `instagram-publisher` carregará `feed-post.md`, fará upload da imagem via imgBB e publicará via API do Instagram.

**Arquivos finais do run:**
- Feed: `output/feed-post.md`
- Reels: `output/reel-script.md`
- Stories: `output/stories-sequence.md`
- Revisão: `output/review-report.md`