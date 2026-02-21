import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	test: {
		coverage: {
			exclude: ['src/__mocks__/*', 'src/routeTree.gen.ts', 'src/**/index.ts', 'src/types/*', 'src/router.tsx'],
			include: ['src/**/*.{ts,tsx}'],
			provider: 'v8',
		},
		environment: 'jsdom',
		globals: true,
		setupFiles: './vitest.setup.ts',
	},
})
