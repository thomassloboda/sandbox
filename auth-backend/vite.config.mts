import {defineConfig} from 'vite'
import path from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    server: {
        port: parseInt(process.env.PORT || '3000'),
        host: process.env.HOST || 'localhost',
        open: true
    },
    build: {
        outDir: 'dist',
        minify: 'esbuild'
    }
})

