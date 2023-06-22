import { fileURLToPath, URL } from 'node:url'
import { defineConfig, ViteDevServer } from 'vite'
import vue from '@vitejs/plugin-vue'

const rewriteConsole = () => {
  return {
    name: 'rewrite-console',
    apply: 'serve',
    enforce: 'post',
    configureServer(server: ViteDevServer) {
      server.middlewares.use('/', (req: any, _: any, next: any) => {
        if (req.url.includes('/src/main.ts')) {
          req.url = '/src/main.ts'
        }
        next()
      })
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // @ts-ignore
    rewriteConsole()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
