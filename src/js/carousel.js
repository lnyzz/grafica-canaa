// Carrossel baseado em scroll-snap. Estrutura esperada:
// <div class="carrossel"><button class="seta" data-dir="-1">‹</button><div class="carrossel-trilho">...</div><button class="seta" data-dir="1">›</button></div>
export function iniciarCarrossel(el, { auto = false, velocidade = 40 } = {}) {
  const trilho = el.querySelector('.carrossel-trilho');

  function mover(dir) {
    const item = trilho.firstElementChild;
    const passo = item ? item.getBoundingClientRect().width + 16 : trilho.clientWidth;
    const fim = trilho.scrollLeft + trilho.clientWidth >= trilho.scrollWidth - 4;
    if (dir > 0 && fim) trilho.scrollTo({ left: 0, behavior: 'smooth' });
    else if (dir < 0 && trilho.scrollLeft <= 4) trilho.scrollTo({ left: trilho.scrollWidth, behavior: 'smooth' });
    else trilho.scrollBy({ left: dir * passo, behavior: 'smooth' });
  }

  el.querySelectorAll('.seta').forEach((btn) => {
    btn.addEventListener('click', () => mover(Number(btn.dataset.dir)));
  });

  if (!auto || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Rolagem contínua e lenta (velocidade em px/s), em loop infinito: duplica os cards para emendar o fim com o início
  const originais = [...trilho.children];
  originais.forEach((c) => {
    const copia = c.cloneNode(true);
    copia.setAttribute('aria-hidden', 'true');
    copia.querySelectorAll('a, button').forEach((x) => x.setAttribute('tabindex', '-1'));
    trilho.appendChild(copia);
  });
  const ciclo = () => trilho.children[originais.length].offsetLeft - trilho.children[0].offsetLeft;

  let raf = 0;
  let ultimo = 0;
  let pos = 0;
  let pausas = 0;
  let visivel = false;

  const passo = (agora) => {
    const dt = Math.min(agora - ultimo, 64) / 1000;
    ultimo = agora;
    pos += velocidade * dt;
    const c = ciclo();
    if (c > 0 && pos >= c) pos -= c;
    trilho.scrollLeft = pos;
    raf = requestAnimationFrame(passo);
  };
  const atualizar = () => {
    const rodar = pausas === 0 && visivel && !document.hidden;
    if (rodar && !raf) {
      pos = trilho.scrollLeft;
      trilho.style.scrollSnapType = 'none'; // o snap brigaria com a rolagem contínua
      ultimo = performance.now();
      raf = requestAnimationFrame(passo);
    } else if (!rodar && raf) {
      cancelAnimationFrame(raf);
      raf = 0;
      trilho.style.scrollSnapType = '';
    }
  };
  const pausar = () => { pausas++; atualizar(); };
  const retomar = () => { pausas = Math.max(0, pausas - 1); atualizar(); };

  el.addEventListener('mouseenter', pausar);
  el.addEventListener('mouseleave', retomar);
  el.addEventListener('focusin', pausar);
  el.addEventListener('focusout', retomar);
  el.addEventListener('touchstart', pausar, { passive: true });
  el.addEventListener('touchend', () => setTimeout(retomar, 3000), { passive: true });
  el.addEventListener('touchcancel', () => setTimeout(retomar, 3000), { passive: true });
  document.addEventListener('visibilitychange', atualizar);
  new IntersectionObserver((entradas) => {
    visivel = entradas[0].isIntersecting;
    atualizar();
  }).observe(el);
}

export const htmlCarrossel = (conteudo) => `
  <div class="carrossel">
    <button class="seta" data-dir="-1" aria-label="Anterior">‹</button>
    <div class="carrossel-trilho">${conteudo}</div>
    <button class="seta" data-dir="1" aria-label="Próximo">›</button>
  </div>`;
