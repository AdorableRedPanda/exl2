import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
	base: '',
	build: {
		outDir: 'dist'
	},
	plugins: [svelte(), tailwindcss()],
	resolve: {
		alias: {
			$lib: path.resolve('./src/lib'),
			'@': path.resolve('./src')
		}
	},
	server: {
		port: 3000,
		open: true
	}
});
