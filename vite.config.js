import { resolve } from 'node:path'

// vite.config.js
export default {
    server: {
        port: 5173
    },
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                mas_informacion1: resolve('pages/mas_informacion-1.html'),
                mas_informacion2: resolve('pages/mas_informacion-2.html'),
                index: resolve('index.html')
            }
        }
    }
}