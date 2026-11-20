// Dados dos produtos. Troque `imagem` pelos arquivos reais em /public/img/produtos/.
const PLACEHOLDER = '/img/placeholder.svg';

export const categorias = [
  { id: 'canecas', nome: 'Canecas' },
  { id: 'estampas', nome: 'Estampas' },
  { id: 'carimbos', nome: 'Carimbos' },
  { id: 'adesivos', nome: 'Adesivos, Etiquetas' },
  { id: 'cartoes', nome: 'Cartões de Visita' },
  { id: 'banners', nome: 'Banners' },
];

export const produtos = [
  {
    id: 'cartao-visita',
    nome: 'Cartão de Visita',
    categoria: 'cartoes',
    resumo: 'Cartões de visita com acabamento profissional.',
    descricao:
      'Cartões de visita impressos com qualidade, em diversos papéis e acabamentos. Apresente sua marca com a sua cara.',
    imagem: '/img/produtos/cartao-visita.jpg',
  },
  {
    id: 'carimbo-automatico-preto',
    nome: 'Carimbo Automático',
    categoria: 'carimbos',
    resumo: 'Carimbo automático personalizado para uso do dia-a-dia.',
    descricao:
      'Carimbo automático da marca Traxx, modelo Printer 9024, com mecanismo de impressão integrado, praticidade e boa precisão na aplicação. Ideal para uso diário em escritórios, comércios e ambientes profissionais.',
    imagem: '/img/produtos/carimbo-automatico-preto.jpg',
  },
  {
    id: 'carimbo-de-madeira',
    nome: 'Carimbo de Madeira',
    categoria: 'carimbos',
    resumo: 'Carimbo tradicional com cabo de madeira.',
    descricao:
      'Carimbo de madeira tradicional, durável e prático, personalizado com o seu texto ou logotipo.',
    imagem: '/img/produtos/carimbo-de-madeira.jpg',
  },
  {
    id: 'carimbo-de-bolso',
    nome: 'Carimbo de Bolso',
    categoria: 'carimbos',
    resumo: 'Compacto e prático para levar com você.',
    descricao:
      'Carimbo de bolso compacto, ideal para profissionais que precisam carimbar em qualquer lugar.',
    imagem: '/img/produtos/carimbo-de-bolso.webp',
  },
  {
    id: 'banner-personalizado',
    nome: 'Banner Personalizado',
    categoria: 'banners',
    resumo: 'Banners e wind banners com a sua marca.',
    descricao:
      'Banners personalizados para divulgar a sua marca em eventos, lojas e calçadas.',
    imagem: '/img/produtos/banner-personalizado.jpg',
  },
  {
    id: 'adesivo-dupla-face',
    nome: 'Adesivo Dupla Face',
    categoria: 'adesivos',
    resumo: 'Adesivos e etiquetas sob medida.',
    descricao:
      'Adesivo dupla face personalizado, com ótima aderência e acabamento profissional.',
    imagem: '/img/produtos/adesivo-dupla-face.jpg',
  },
  {
    id: 'carimbo-de-madeira-2',
    nome: 'Carimbo de Madeira',
    categoria: 'carimbos',
    resumo: 'Carimbo tradicional com cabo de madeira.',
    descricao:
      'Carimbo de madeira com cabo torneado, personalizado com o seu texto ou logotipo.',
    imagem: '/img/produtos/carimbo-de-madeira-2.jpg',
  },
];

export const getProduto = (id) => produtos.find((p) => p.id === id);

export function cardProduto(p, { compacto = false } = {}) {
  return `
    <a class="card" href="/produto.html?id=${p.id}">
      <div class="card-img"><img src="${p.imagem}" alt="${p.nome}" loading="lazy" /></div>
      <div class="card-corpo">
        <h3>${p.nome}</h3>
        ${compacto ? '' : `<p>${p.resumo}</p>`}
        <span class="ver">Ver detalhes</span>
      </div>
    </a>`;
}
