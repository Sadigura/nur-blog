<script lang="ts">
	import { ARTICLES } from '$lib/data/articles';
	import { RESOURCES } from '$lib/data/resources';
	import { categoryLabel } from '$lib/data/categories';
	import { ARTICLE_BODY_TEXT, RESOURCE_BODY_TEXT, excerptAround } from '$lib/data/search-index';

	let query = $state('');
	let open = $state(false);

	const all = [
		...ARTICLES.map((a) => ({ ...a, kind: 'Artigo' as const })),
		...RESOURCES.map((r) => ({ ...r, kind: 'Recurso' as const }))
	];

	// Busca no título, autor, categoria — e também no corpo do texto de
	// cada artigo/recurso (ver src/lib/data/search-index.ts). Quando o
	// que bateu foi só o corpo, mostra um trechinho ao redor do achado.
	let results = $derived.by(() => {
		const q = query.trim().toLowerCase();
		if (q.length < 2) return [];
		return all
			.map((item) => {
				const inTitle = item.title.toLowerCase().includes(q);
				const inAuthor = item.author.toLowerCase().includes(q);
				const inCategory = categoryLabel(item.category).toLowerCase().includes(q);
				const bodyText = (item.kind === 'Artigo' ? ARTICLE_BODY_TEXT : RESOURCE_BODY_TEXT)[
					item.slug
				];
				const inBody = bodyText ? bodyText.toLowerCase().includes(q) : false;
				if (!inTitle && !inAuthor && !inCategory && !inBody) return null;
				const excerpt =
					!inTitle && !inAuthor && !inCategory && inBody && bodyText
						? excerptAround(bodyText, q)
						: null;
				return { ...item, excerpt };
			})
			.filter((item) => item !== null)
			.slice(0, 8);
	});

	function onBlur() {
		// dá tempo do click no resultado registrar antes de fechar
		setTimeout(() => (open = false), 150);
	}
</script>

<div class="search">
	<svg class="search-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
		<circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" stroke-width="1.6" />
		<path d="M20 20L15.2 15.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
	</svg>
	<input
		type="search"
		placeholder="Buscar artigos, autores, categorias…"
		bind:value={query}
		onfocus={() => (open = true)}
		onblur={onBlur}
		aria-label="Buscar no site do NUR"
	/>
	{#if query}
		<button type="button" class="clear-btn" onclick={() => (query = '')} aria-label="Limpar busca">
			<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
				<path
					d="M6 6L18 18M18 6L6 18"
					stroke="currentColor"
					stroke-width="1.6"
					stroke-linecap="round"
				/>
			</svg>
		</button>
	{/if}

	{#if open && query.trim().length >= 2}
		<div class="search-results" role="listbox">
			{#if results.length}
				{#each results as r (r.slug)}
					<a href={r.href} class="search-result">
						<span class="r-title">{r.title}</span>
						<span class="r-meta">{r.kind} · {categoryLabel(r.category)} · {r.author}</span>
						{#if r.excerpt}
							<span class="r-excerpt">{r.excerpt}</span>
						{/if}
					</a>
				{/each}
			{:else}
				<p class="search-empty">Nada encontrado para "{query}".</p>
			{/if}
		</div>
	{/if}
</div>

<style>
	.search {
		position: relative;
		display: flex;
		align-items: center;
		gap: 8px;
		border: 1px solid var(--ink);
		padding: 8px 12px;
		min-width: 200px;
	}
	.search-icon {
		width: 16px;
		height: 16px;
		flex: none;
		color: var(--ink-faint);
	}
	.search input {
		border: none;
		outline: none;
		background: transparent;
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: var(--ink);
		width: 100%;
	}
	.search input::placeholder {
		color: var(--ink-faint);
	}
	/* substitui o "x" nativo do input[type=search] (que sai colorido/azulado
	   dependendo do navegador) por um botão nosso, sempre preto no tema claro
	   e branco no escuro (var(--ink)) */
	.search input::-webkit-search-cancel-button {
		-webkit-appearance: none;
		appearance: none;
	}
	.clear-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: none;
		width: 16px;
		height: 16px;
		padding: 0;
		background: none;
		border: none;
		color: var(--ink);
		cursor: pointer;
	}
	.clear-btn svg {
		width: 14px;
		height: 14px;
	}
	.search-results {
		position: absolute;
		top: calc(100% + 4px);
		right: 0;
		width: min(360px, 90vw);
		background: var(--paper-raised);
		border: var(--rule);
		box-shadow: 0 10px 24px rgb(0 0 0 / 0.14);
		z-index: 30;
		display: flex;
		flex-direction: column;
		max-height: 70vh;
		overflow-y: auto;
	}
	.search-result {
		display: flex;
		flex-direction: column;
		gap: 3px;
		padding: 12px 14px;
		border-bottom: 1px solid var(--line);
	}
	.search-result:last-child {
		border-bottom: none;
	}
	.search-result:hover {
		background: var(--accent-tint);
	}
	.r-title {
		font-family: var(--font-headline);
		font-weight: 700;
		font-size: 0.95rem;
	}
	.r-meta {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		color: var(--ink-soft);
	}
	.r-excerpt {
		font-family: var(--font-body);
		font-size: 0.78rem;
		line-height: 1.4;
		color: var(--ink-soft);
		margin-top: 2px;
	}
	.search-empty {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		color: var(--ink-soft);
		padding: 14px;
		margin: 0;
	}

	@media (max-width: 900px) {
		.search {
			min-width: 0;
		}
	}
</style>
