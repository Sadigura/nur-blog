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
			}),

			// Enquanto nur-unifesp.com.br não está no ar, o GitHub Pages serve
			// o site em sadigura.github.io/nur-blog/ — sob um subcaminho. Todo
			// link e imagem no código usa caminho absoluto (`/images/...`) que
			// pressupõe raiz do domínio, então precisam do prefixo {base} (ver
			// $app/paths) pra funcionar nesse subcaminho temporário.
			// BASE_PATH é setado no workflow do GitHub Actions; assim que o
			// domínio próprio estiver ativo, é só apagar essa variável lá (ou
			// setar vazia) e o build volta a apontar pra raiz — sem tocar em
			// nenhum arquivo além do workflow.
			paths: {
				base: (process.env.BASE_PATH as `/${string}` | undefined) ?? ''
			}
		})
	]
});
