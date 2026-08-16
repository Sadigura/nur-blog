<script lang="ts">
	import { base } from '$app/paths';
	import ArticleGrid from '$lib/components/ArticleGrid.svelte';
	import { ARTICLES } from '$lib/data/articles';
	import { CATEGORIES } from '$lib/data/categories';

	const TINT_CYCLE = [
		{ bg: 'var(--tint-a)', ink: 'var(--tint-a-ink)' },
		{ bg: 'var(--tint-b)', ink: 'var(--tint-b-ink)' },
		{ bg: 'var(--tint-a)', ink: 'var(--tint-a-ink)' },
		{ bg: 'var(--tint-c)', ink: 'var(--tint-c-ink)' }
	];

	// Mesmo agrupamento por categoria da página inicial (ver +page.svelte),
	// só que aqui numa página só, com todas as publicações — sem recorte
	// de destaque/spotlight.
	const groups = CATEGORIES.map((cat) => ({
		category: cat,
		items: ARTICLES.filter((a) => a.category === cat.id)
	})).filter((g) => g.items.length > 0);

	const groupsWithTint = groups.map((g, i) => ({ ...g, tint: TINT_CYCLE[i % TINT_CYCLE.length] }));
</script>

<svelte:head>
	<title>Publicações — NUR</title>
</svelte:head>

<div class="wrap page-head">
	<a class="back-link" href="{base}/">← Voltar para a página inicial</a>
	<h1>Publicações</h1>
	<p class="subtitle">
		O acervo completo de textos do Núcleo — {ARTICLES.length} publicações, organizadas por área.
	</p>
</div>

{#each groupsWithTint as group (group.category.id)}
	<section class="wrap category-section">
		<h2 class="category-title" style="color: var(--cat-{group.category.id});">
			{group.category.label}
			<span class="category-count">{group.items.length}</span>
		</h2>
		<ArticleGrid items={group.items} tint={group.tint} />
	</section>
{/each}

<style>
	.page-head {
		padding: 56px 0 20px;
	}
	.back-link {
		display: inline-block;
		font-family: var(--font-mono);
		font-size: 0.78rem;
		color: var(--ink-soft);
		margin-bottom: 22px;
	}
	.back-link:hover {
		color: var(--accent);
	}
	.page-head h1 {
		font-size: clamp(2.2rem, 6vw, 3.6rem);
		line-height: 1;
	}
	.subtitle {
		font-family: var(--font-body);
		font-size: 1.05rem;
		color: var(--ink-soft);
		margin: 16px 0 0;
	}
	.category-section {
		padding-top: 30px;
	}
	.category-title {
		display: flex;
		align-items: baseline;
		gap: 10px;
		font-size: 1.3rem;
		padding-bottom: 12px;
		border-bottom: 2px solid currentColor;
	}
	.category-count {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: var(--ink-faint);
	}
</style>
