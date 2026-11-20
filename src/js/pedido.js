import { produtos } from './data/produtos.js';

const select = document.getElementById('produto');
const nomes = [...new Set(produtos.map((p) => p.nome))];
select.innerHTML =
  '<option value="">Selecione uma opção...</option>' +
  nomes.map((n) => `<option>${n}</option>`).join('') +
  '<option>Outro (pedido customizado)</option>';

// Pré-seleciona o produto vindo de /pedido.html?produto=<id>
const pre = produtos.find((p) => p.id === new URLSearchParams(location.search).get('produto'));
if (pre) select.value = pre.nome;

// Troca o rótulo conforme retirada na gráfica ou entrega
const retirada = document.getElementById('retirada');
const labelEntrega = document.getElementById('label-entrega');
const entrega = document.getElementById('entrega');
retirada.addEventListener('change', () => {
  const retira = retirada.value === 'sim';
  labelEntrega.textContent = retira ? 'Nome de quem irá retirar o pedido' : 'Insira o endereço de entrega';
  entrega.placeholder = retira ? 'Digite o nome...' : 'Digite o endereço...';
});

// Placeholder do contato muda conforme a forma escolhida
const forma = document.getElementById('contato-forma');
const contato = document.getElementById('contato');
forma.addEventListener('change', () => {
  contato.placeholder = forma.value === 'email' ? 'seuemail@exemplo.com' : '+55 XX XXXX-XXXXX';
});

// Sem backend: apenas mostra aviso
document.getElementById('form-pedido').addEventListener('submit', (e) => {
  e.preventDefault();
  const aviso = document.getElementById('aviso');
  aviso.hidden = false;
  aviso.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
