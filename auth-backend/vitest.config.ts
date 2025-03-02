import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.mjs'

export default mergeConfig(
viteConfig,
defineConfig({
    test: {
    globals: true,
    coverage: {
        provider: 'v8',
        reportsDirectory: 'coverage',
        reporter: ['text', 'json', 'html'],
        exclude: ['node_modules/', 'dist/']
    },
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache']
    }
})
)

