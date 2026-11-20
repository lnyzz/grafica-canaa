import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const root = import.meta.dirname;

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(root, 'index.html'),
        produtos: resolve(root, 'produtos.html'),
        produto: resolve(root, 'produto.html'),
        sobre: resolve(root, 'sobre.html'),
        pedido: resolve(root, 'pedido.html'),
      },
    },
  },
});
