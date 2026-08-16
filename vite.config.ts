import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// Site é publicado no GitHub Pages sob domínio próprio (CNAME), sem
			// servidor: precisa gerar HTML estático de verdade (bom pra SEO) e
			// ainda assim responder 404 de verdade pra URLs que não existem.
			// `fallback: '404.html'` gera esse arquivo à parte (casca da SPA que
			// hidrata e mostra src/routes/+error.svelte) — o GitHub Pages serve
			// esse arquivo automaticamente, com status 404, pra qualquer rota
			// que não bateu com nenhuma página pré-renderada de verdade.
			adapter: adapter({
				pages: 'build',
				assets: 'build',
				fallback: '404.html',
				precompress: false,
				strict: true
			})
		})
	]
});
