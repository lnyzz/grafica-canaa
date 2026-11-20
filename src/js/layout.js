const links = [
  { href: '/', nome: 'Página inicial', paginas: ['/', '/index.html'] },
  { href: '/produtos.html', nome: 'Nossos Produtos', paginas: ['/produtos.html', '/produto.html'] },
  { href: '/sobre.html', nome: 'Sobre a Canaã', paginas: ['/sobre.html'] },
  { href: '/pedido.html', nome: 'Faça seu Pedido', paginas: ['/pedido.html'] },
];

const atual = location.pathname;

const header = `
  <header class="site-header">
    <div class="container">
      <a class="logo" href="/"><span class="logo-nome">Gráfica <b>Canaã</b></span></a>
      <button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false">☰</button>
      <nav aria-label="Principal">
        <ul class="menu">
          ${links
            .map(
              (l) =>
                `<li><a href="${l.href}" class="${l.paginas.includes(atual) ? 'ativo' : ''}">${l.nome}</a></li>`,
            )
            .join('')}
        </ul>
      </nav>
    </div>
  </header>`;

const footer = `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <img src="/img/logo.png" alt="Gráfica Canaã" />
          <p>Rapidez, qualidade e atendimento humanizado em Santos.</p>
        </div>
        <div>
          <h4>Navegue</h4>
          <ul>${links.map((l) => `<li><a href="${l.href}">${l.nome}</a></li>`).join('')}</ul>
        </div>
        <div>
          <h4>Contato</h4>
          <ul>
            <li><a href="https://wa.me/5513981385743" target="_blank" rel="noopener">WhatsApp: (13) 98138-5743</a></li>
            <li><a href="mailto:canaagrafica@uol.com.br">canaagrafica@uol.com.br</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100057297976633" target="_blank" rel="noopener">Facebook</a></li>
          </ul>
        </div>
        <div>
          <h4>Endereço</h4>
          <ul>
            <li>R. Martim Afonso, 102</li>
            <li>Centro, Santos - SP</li>
            <li>CEP 11010-060</li>
          </ul>
        </div>
      </div>
      <div class="rodape">
        <span>© ${new Date().getFullYear()} Gráfica Canaã. Todos os direitos reservados.</span>
        <span>Deus é fiel.</span>
      </div>
    </div>
  </footer>`;

document.getElementById('site-header')?.insertAdjacentHTML('afterbegin', header);
document.getElementById('site-footer')?.insertAdjacentHTML('afterbegin', footer);

const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
function fecharMenu() {
  menu.classList.remove('aberto');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰';
}
toggle?.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  toggle.setAttribute('aria-expanded', String(aberto));
  toggle.textContent = aberto ? '✕' : '☰';
});
document.addEventListener('click', (e) => {
  if (menu?.classList.contains('aberto') && !e.target.closest('.site-header')) fecharMenu();
});
document.addEventListener('keydown', (e) => e.key === 'Escape' && menu && fecharMenu());
// Fecha o menu assim que um link é tocado, sem esperar a próxima página carregar
menu?.addEventListener('click', (e) => {
  if (e.target.closest('a')) fecharMenu();
});
matchMedia('(min-width: 901px)').addEventListener('change', () => menu && fecharMenu());

// Animação de entrada ao rolar (roda após todos os módulos da página)
document.addEventListener('DOMContentLoaded', () => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  const alvos = document.querySelectorAll('main > section:not(.hero):not(.titulo-faixa), main > form');
  document.documentElement.classList.add('js-reveal');
  const io = new IntersectionObserver(
    (entradas) =>
      entradas.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visivel');
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.1 },
  );
  alvos.forEach((el) => {
    el.classList.add('reveal');
    io.observe(el);
  });
});
