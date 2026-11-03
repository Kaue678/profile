# Site acadêmico — Kauê Santana da Costa

Página em inglês para GitHub Pages, inspirada na organização do perfil acadêmico de Bruno Grisci: identidade e navegação lateral, apresentação, pesquisa, currículo e publicações. O código e a identidade visual foram desenvolvidos para este perfil.

## Publicar no GitHub Pages

1. Na conta **Kaue678**, crie um repositório público chamado **kaue678.github.io**.
2. Extraia o ZIP e envie **o conteúdo da pasta extraída** à raiz do repositório, incluindo `index.html`, a pasta `assets` e o arquivo `.nojekyll`. O `index.html` precisa ficar diretamente na raiz, ao lado de `README.md`.
3. Salve os arquivos com **Commit changes**.
4. Abra **Settings → Pages**. Em **Build and deployment**, selecione **Deploy from a branch**, escolha a branch que contém os arquivos (geralmente **main**) e a pasta **/(root)**; clique em **Save**.
5. Quando o GitHub concluir a publicação, a página estará no endereço `https://kaue678.github.io/`. A seção **Settings → Pages** mostrará o link para visitar o site.

Este repositório é o site acadêmico. O repositório `Kaue678/Kaue678` continua servindo ao README exibido no perfil da conta.

Referências: [criar um site GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) e [configurar a fonte de publicação](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

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
