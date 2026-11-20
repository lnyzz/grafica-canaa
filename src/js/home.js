import { categorias, produtos, cardProduto } from './data/produtos.js';
import { htmlCarrossel, iniciarCarrossel } from './carousel.js';

const svg = (corpo) =>
  `<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'>${corpo}</svg>`;

const icones = {
  canecas: svg(
    `<path d='M17 8h1a4 4 0 1 1 0 8h-1'/><path d='M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z'/><path d='M6 2v2M10 2v2M14 2v2'/>`,
  ),
  estampas: svg(
    `<path d='M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z'/>`,
  ),
  carimbos: svg(
    `<path d='M5 22h14'/><path d='M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z'/><path d='M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13'/>`,
  ),
  adesivos: svg(
    `<path d='M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z'/><circle cx='7.5' cy='7.5' r='.5' fill='currentColor'/>`,
  ),
  cartoes: svg(
    `<rect width='20' height='14' x='2' y='5' rx='2'/><path d='M6 10h5M6 14h8'/>`,
  ),
  banners: svg(
    `<path d='M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z'/><path d='M4 22v-7'/>`,
  ),
};

document.getElementById('servicos').innerHTML = categorias
  .map(
    (c) => `
    <a class="servico" href="/produtos.html?cat=${c.id}">
      <span class="icone">${icones[c.id] ?? '★'}</span>
      ${c.nome}
    </a>`,
  )
  .join('');

const destaques = produtos.filter((p, i, arr) => arr.findIndex((x) => x.nome === p.nome) === i);

const alvo = document.getElementById('destaques');
alvo.innerHTML = htmlCarrossel(destaques.map((p) => cardProduto(p)).join(''));
iniciarCarrossel(alvo.querySelector('.carrossel'), { auto: true });
