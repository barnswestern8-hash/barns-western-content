# Squad Memory: Barns Western Content

## Estilo de Escrita

- Ângulo ORIGEM/HOMENAGEM funciona bem para produtos com nome ligado a esporte ou cultura: conecta o produto a uma história antes de apresentá-lo. Usar quando o nome do produto tiver referência cultural específica.
- "Conheça o [nome do produto]" como slide de apresentação de produto (padrão Tecovas) foi validado pela Vera — manter como padrão.
- Slide cover "O ROPER NASCEU NO LAÇO." (5 palavras, caixa alta) — modelo de cover para ângulos de lançamento com storytelling de origem.

## Design Visual

- Imagens dos produtos: usar URL direta do CDN da Barns nos HTMLs (ex: `https://barnswestern.com.br/cdn/shop/files/...`). Playwright carrega a URL remota no momento do screenshot — não é necessário baixar arquivos localmente.
- Para obter as URLs das imagens de um produto, fazer WebFetch na página do produto (ex: barnswestern.com.br/products/oculos-roper) e extrair os links .webp/.jpg do CDN.
- Pasta assets/products/ não deve mais ser usada. Não criar nem referenciar arquivos locais de imagem.

## Estrutura de Conteúdo

- Slide de produto (Slide 5 no formato Editorial Origem) tende a ter menos palavras que os demais — verificar contagem e expandir para atingir mínimo de 40 palavras em runs futuros.
- Stories com 2 elementos interativos (Poll + Emoji Slider) teve score 10/10 em elemento interativo — manter padrão de 2 elementos quando viável.

## Proibições Explícitas

- Não usar em-dashes — usar dois-pontos ou ponto conforme tone-of-voice.md.

## Run #002 — Aprendizados

- Foto editorial com modelo real usando o produto foi aprovada com score alto (9.2). Manter como formato padrão para posts de STATUS e pilar Autoridade.
- Paleta correta confirmada em produção: preto base + branco tipo + gold #FFBF1A acento. Zero vermelho.
- Fonte Montserrat no corpo funciona bem — tipografia correta confirmada.
- Stories frame 3 com watermark de produto 8% cria leve ruído visual sob cards — usar 5% em próximos runs.
- Foto editorial (1 slide) como formato de quinta-feira (Autoridade) funcionou bem — sem necessidade de carrossel para post de STATUS.

## Atualização de Branding (2026-04-23)

- Tipografia de corpo corrigida: usar **Montserrat** (não Roboto). O Branding Master Board atualizado especifica Bebas Neue (títulos) + Montserrat (parágrafos). Os slides do Run #001 usaram Roboto — corrigir em runs futuros.
- Dois documentos oficiais adicionados à memória do squad: Branding Master Board + Manual Mestre de Conteúdo. Ver branding.md e content-strategy.md.
- Arquétipo primário confirmado como **Herói** (não Fora-da-lei). Secundário: Explorador. Terciário: Rebelde controlado.

## Técnico (específico do squad)

- Run #001: Produto Roper, ângulo Origem/Homenagem. Veredicto: APROVAR ciclo 1. Não publicado.
- Imagens do produto Roper: https://barnswestern.com.br/cdn/shop/files/56_900c1521-e1ea-4244-8652-e3beb40d997c.webp (principal)
- Preço Roper em 2026-04-22: R$ 159,90 (promo) / R$ 269,90 (original). Material: TR 90. Cores: marrom, preto, azul.