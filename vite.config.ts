import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Configuração do servidor de desenvolvimento.
  server: {
    proxy: {
      // Todo pedido que começar com /api-produtos será repassado ao servidor da Econverse.
      // Isso evita o bloqueio de CORS, que só existe entre navegador e servidor.
      '/api-produtos': {
        target: 'https://app.econverse.com.br',
        // Faz o pedido parecer originado do próprio servidor de destino.
        changeOrigin: true,
        // Remove o prefixo /api-produtos antes de enviar o pedido.
        rewrite: (path) => path.replace(/^\/api-produtos/, ''),
      },
    },
  },
})