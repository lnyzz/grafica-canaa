import { categorias, produtos, getProduto, cardProduto } from './data/produtos.js';
import { htmlCarrossel, iniciarCarrossel } from './carousel.js';

const WHATSAPP = 'https://wa.me/5513981385743';
const ICONE_WHATS =
  '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.3.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.2 1.4 2.5 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.1.1.6-.1 1.2z"/></svg>';

const id = new URLSearchParams(location.search).get('id');
const p = getProduto(id);
const main = document.getElementById('conteudo');

if (!p) {
  main.innerHTML = `
    <section class="secao">
      <div class="container">
        <h1 class="grande">Produto não encontrado</h1>
        <p style="margin-top:1rem"><a class="btn" href="/produtos.html">Voltar para Nossos Produtos</a></p>
      </div>
    </section>`;
} else {
  document.title = `${p.nome} — Gráfica Canaã`;
  const categoria = categorias.find((c) => c.id === p.categoria)?.nome ?? '';
  const outros = produtos.filter((x) => x.id !== p.id);

  main.innerHTML = `
    <section class="container produto-grid">
      <div class="produto-imagem"><img src="${p.imagem}" alt="${p.nome}" /></div>
      <div class="produto-info">
        <nav class="migalhas"><a href="/">Início</a> / <a href="/produtos.html">Produtos</a> / ${p.nome}</nav>
        <span class="etiqueta">${categoria}</span>
        <h1>${p.nome}</h1>
        <p class="resumo">${p.resumo}</p>
        <p class="descricao">${p.descricao}</p>
        <ul class="beneficios">
          <li>Personalizado com a sua arte</li>
          <li>Entrega rápida</li>
          <li>Atendimento humanizado</li>
        </ul>
        <div class="acoes">
          <a class="btn" href="/pedido.html?produto=${p.id}">Solicitar orçamento</a>
          <a class="btn btn-whats" href="${WHATSAPP}" target="_blank" rel="noopener">${ICONE_WHATS} Falar pelo WhatsApp</a>
        </div>
      </div>
    </section>

    <section class="container relacionados">
      <h2>Você também pode gostar</h2>
      ${htmlCarrossel(outros.map((x) => cardProduto(x)).join(''))}
    </section>`;

  iniciarCarrossel(main.querySelector('.carrossel'));
}
