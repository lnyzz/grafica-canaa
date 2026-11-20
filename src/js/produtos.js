import { categorias, produtos, cardProduto } from './data/produtos.js';

const boxFiltros = document.getElementById('filtros-categorias');
const grade = document.getElementById('grade');
const ordem = document.getElementById('ordem');

const inicial = new URLSearchParams(location.search).get('cat');

boxFiltros.innerHTML = categorias
  .map(
    (c) =>
      `<label><input type="checkbox" value="${c.id}" ${c.id === inicial ? 'checked' : ''} /> ${c.nome}</label>`,
  )
  .join('');

function render() {
  const marcadas = [...boxFiltros.querySelectorAll('input:checked')].map((i) => i.value);
  const lista = produtos
    .filter((p) => marcadas.length === 0 || marcadas.includes(p.categoria))
    .sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
  if (ordem.value === 'za') lista.reverse();

  grade.innerHTML = lista.length
    ? lista.map((p) => cardProduto(p)).join('')
    : '<p class="vazio">Nenhum produto encontrado para esse filtro.</p>';
}

boxFiltros.addEventListener('change', render);
ordem.addEventListener('change', render);
render();
