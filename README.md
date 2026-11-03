# Site acadêmico — Kauê Santana da Costa

Página em inglês para GitHub Pages, inspirada na organização do perfil acadêmico de Bruno Grisci: identidade e navegação lateral, apresentação, pesquisa, currículo e publicações. O código e a identidade visual foram desenvolvidos para este perfil.

## Atualizar o site e usar o endereço principal

O repositório atual é Kaue678/github.io, por isso o endereço contém /github.io/. Para publicar em https://kaue678.github.io/, renomeie o repositório para kaue678.github.io.

1. No GitHub, abra o repositório Kaue678/github.io e entre em Settings → General.
2. No campo Repository name, substitua github.io por kaue678.github.io e clique em Rename.
3. Extraia este ZIP. Envie o conteúdo extraído à raiz do repositório, substituindo index.html e assets/styles.css, acrescentando a pasta assets/publications e atualizando FONTES.md. A pasta assets precisa conter tanto os arquivos anteriores quanto a nova subpasta publications.
4. Salve com Commit changes.
5. Em Settings → Pages, confira Source: Deploy from a branch; Branch: main; pasta: /(root). Clique em Save se houver alguma alteração.
6. Quando o GitHub concluir a publicação, use https://kaue678.github.io/. A página Settings → Pages mostrará o link publicado.

O pacote contém sete figuras distintas, com os arquivos originais preservados, e o parágrafo de apresentação solicitado. Cada figura pode ser aberta em tamanho integral clicando na imagem.

Referências: [tipos de site GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages), [renomear repositório](https://docs.github.com/en/repositories/creating-and-managing-repositories/renaming-a-repository) e [configurar publicação](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Abrir e editar

Você pode abrir `index.html` no navegador para visualizar a página. O site usa HTML, CSS e JavaScript, com recursos locais; não exige instalação, banco de dados ou compilação.

| Arquivo | Conteúdo |
| --- | --- |
| `index.html` | Textos, publicações, referências de fomento e links acadêmicos. |
| `assets/styles.css` | Cores, fontes, espaçamentos e adaptação para telas menores. |
| `assets/site.js` | Navegação móvel, indicação da seção atual e filtros das publicações. |
| `assets/profile.jpg` | Imagem atual do perfil GitHub, incorporada ao pacote. |
| `assets/molecular-landscape.svg` | Ilustração vetorial original para o cabeçalho. |
| `assets/favicon.svg` | Ícone do site. |
| `FONTES.md` | Procedência dos dados e endereços utilizados. |
| `.nojekyll` | Publicação direta dos arquivos estáticos. |
| `assets/publications/` | Sete figuras fornecidas para os artigos, sem alteração dos arquivos. |

## Atualizações frequentes

### Publicações

As publicações estão em `index.html`, na seção com `id="publications"`. Cada artigo usa um bloco `<article class="publication" data-category="peptides">` ou `data-category="bioprospecting"`.

Ao acrescentar um artigo, repita a estrutura de um bloco existente e atualize ano, título, autores, periódico, DOI e resumo. A contagem visível é recalculada pelo JavaScript. Os textos de todas as publicações ficam no HTML e continuam acessíveis com JavaScript desativado.

### Redes acadêmicas

Os endereços foram copiados do README atual do GitHub **Kaue678/Kaue678**, conforme solicitado. Eles aparecem na barra lateral, na seção de contato e, quando pertinente, nos links de publicações e nos metadados.

Preserve o endereço completo do Google Scholar, incluindo o identificador `user=MDePV6wAAAAJ`. A página ResearchGate usada é `https://www.researchgate.net/profile/Kaue_Santana`.

### Imagem do perfil

Para substituir a imagem, coloque a nova foto em `assets/profile.jpg`. O recorte circular é aplicado pelo CSS. A imagem entregue é a que estava associada à conta GitHub na consulta desta tarefa.

### Cores

As cores principais estão no início de `assets/styles.css`, em `:root`: `--accent`, `--sidebar`, `--paper` e `--wash`.

## Recursos

- Navegação lateral fixa no computador e menu recolhível em telas menores.
- Publicações com pesquisa por texto e filtros por tema.
- Currículo em blocos expansíveis.
- Resultados publicados com links para os artigos correspondentes.
- Links diretos para PepSpace, e-mail e redes acadêmicas.
- Navegação por teclado, link para saltar ao conteúdo e respeito à preferência por movimento reduzido.

O formulário de pesquisa filtra os artigos já apresentados nesta página. O contato é feito pelo aplicativo de e-mail do visitante, através de um link `mailto:`.
