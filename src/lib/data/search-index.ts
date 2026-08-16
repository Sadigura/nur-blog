// Índice de busca pelo corpo dos textos. Lê o código-fonte de cada
// página de artigo/recurso em tempo de build (via import.meta.glob) e
// extrai o texto puro, pra além de título/autor/categoria a busca
// também encontre palavras que aparecem dentro do conteúdo.

function extractPlainText(source: string): string {
	let text = source
		.replace(/<script[\s\S]*?<\/script>/gi, ' ')
		.replace(/<style[\s\S]*?<\/style>/gi, ' ')
		.replace(/<svelte:head[\s\S]*?<\/svelte:head>/gi, ' ')
		.replace(/\{#[^}]*\}/g, ' ')
		.replace(/\{\/[^}]*\}/g, ' ')
		.replace(/\{:[^}]*\}/g, ' ')
		.replace(/\{[^}]*\}/g, ' ')
		.replace(/<!--[\s\S]*?-->/g, ' ')
		.replace(/<[^>]+>/g, ' ');

	text = text
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/&nbsp;/g, ' ');

	return text.replace(/\s+/g, ' ').trim();
}

function buildIndex(globResult: Record<string, string>, routeSegment: string): Record<string, string> {
	const index: Record<string, string> = {};
	const pattern = new RegExp(`/${routeSegment}/([^/]+)/\\+page\\.svelte$`);
	for (const [path, source] of Object.entries(globResult)) {
		const match = path.match(pattern);
		if (match) index[match[1]] = extractPlainText(source);
	}
	return index;
}

const articlePages = import.meta.glob('/src/routes/artigos/*/+page.svelte', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;

const resourcePages = import.meta.glob('/src/routes/recursos/*/+page.svelte', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;

export const ARTICLE_BODY_TEXT: Record<string, string> = buildIndex(articlePages, 'artigos');
export const RESOURCE_BODY_TEXT: Record<string, string> = buildIndex(resourcePages, 'recursos');

/** Acha um trecho curto ao redor da primeira ocorrência de `query` em `text`. */
export function excerptAround(text: string, query: string, radius = 60): string | null {
	const idx = text.toLowerCase().indexOf(query.toLowerCase());
	if (idx === -1) return null;
	const start = Math.max(0, idx - radius);
	const end = Math.min(text.length, idx + query.length + radius);
	const prefix = start > 0 ? '…' : '';
	const suffix = end < text.length ? '…' : '';
	return prefix + text.slice(start, end).trim() + suffix;
}
