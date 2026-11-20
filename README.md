# Gráfica Canaã — protótipo do site

Site institucional e catálogo da Gráfica Canaã (Santos-SP), feito com HTML, CSS e JavaScript puro e empacotado com [Vite](https://vite.dev).

## Páginas

- `index.html` — página inicial, com carrossel de produtos em destaque
- `produtos.html` — catálogo com filtros por categoria
- `produto.html?id=...` — detalhes de um produto
- `sobre.html` — missão, visão, valores, dono e localização
- `pedido.html` — formulário de pedido (protótipo: ainda não envia dados)

## Como rodar

```bash
npm install
npm run dev       # servidor de desenvolvimento
npm run build     # gera a pasta dist/
npm run preview   # serve o build localmente
```

## Estrutura

```
src/css/main.css        estilos
src/js/data/produtos.js produtos e categorias (edite aqui para mudar o catálogo)
src/js/layout.js        cabeçalho e rodapé compartilhados
src/js/carousel.js      carrossel (com rolagem automática na home)
public/img/             imagens
```

## Imagens

Algumas fotos são provisórias, do Wikimedia Commons. Veja os créditos e as licenças em [CREDITOS-IMAGENS.md](CREDITOS-IMAGENS.md) e troque pelas fotos reais antes de publicar.

## Publicação

Os links e as imagens usam caminhos absolutos (`/img/...`), então o site deve ficar na raiz do domínio. Para publicar em uma subpasta (por exemplo, GitHub Pages de projeto), defina `base` no `vite.config.js` e ajuste os caminhos.
