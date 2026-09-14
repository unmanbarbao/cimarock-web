import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/** Sirve index.html de labs estáticos en /lab/* (no caer al SPA). */
function labStaticIndexes() {
  return {
    name: 'lab-static-indexes',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = req.url?.split('?')[0] ?? ''
        if (url === '/lab/tipografias' || url === '/lab/tipografias/') {
          req.url = '/lab/tipografias/index.html'
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), labStaticIndexes()],
})
