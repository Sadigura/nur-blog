<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import SpotlightCard from '$lib/components/SpotlightCard.svelte';
	import ArticleGrid from '$lib/components/ArticleGrid.svelte';
	import { ARTICLES } from '$lib/data/articles';
	import { RESOURCES } from '$lib/data/resources';
	import { CATEGORIES } from '$lib/data/categories';

	const heroArticle = ARTICLES.find((a) => a.featured === 'hero');
	const spotlightArticle = ARTICLES.find((a) => a.featured === 'spotlight');
	const featuredSlugs = new Set([heroArticle?.slug, spotlightArticle?.slug]);

	// As 3 cores do "quadro com foto" (ver --tint-a/b/c em app.css), num
	// rodízio que nunca repete a mesma cor em dois grupos seguidos — a
	// pinta B (o azul-marinho) aparece na metade da frequência das outras
	// duas, mas nunca colada nela mesma.
	const TINT_CYCLE = [
		{ bg: 'var(--tint-a)', ink: 'var(--tint-a-ink)' },
		{ bg: 'var(--tint-b)', ink: 'var(--tint-b-ink)' },
		{ bg: 'var(--tint-a)', ink: 'var(--tint-a-ink)' },
		{ bg: 'var(--tint-c)', ink: 'var(--tint-c-ink)' }
	];

	// Um artigo novo só precisa entrar em src/lib/data/articles.ts com a
	// `category` certa (ver src/lib/data/categories.ts) pra aparecer aqui
	// automaticamente, já agrupado com os outros da mesma categoria — nada
	// nesta página muda. Categorias sem nenhum artigo simplesmente não
	// aparecem, e a cor de cada grupo é recalculada a cada carga a partir
	// dos grupos que de fato têm conteúdo (por isso nunca repete vizinha).
	const articlesByCategory = CATEGORIES.map((cat) => ({
		category: cat,
		items: ARTICLES.filter((a) => a.category === cat.id && !featuredSlugs.has(a.slug))
	})).filter((group) => group.items.length > 0);

	const resourcesByCategoryRaw = CATEGORIES.map((cat) => ({
		category: cat,
		items: RESOURCES.filter((r) => r.category === cat.id)
	})).filter((group) => group.items.length > 0);

	// O rodízio de cor continua a partir de onde os artigos pararam, pra
	// nunca repetir a cor do último grupo de artigos logo no primeiro
	// grupo de recursos.
	const articlesWithTint = articlesByCategory.map((group, i) => ({
		...group,
		tint: TINT_CYCLE[i % TINT_CYCLE.length]
	}));
	const resourcesByCategory = resourcesByCategoryRaw.map((group, i) => ({
		...group,
		tint: TINT_CYCLE[(articlesByCategory.length + i) % TINT_CYCLE.length]
	}));
</script>

<svelte:head>
	<title>NUR — Filosofia islâmica, judaica e oriental na UNIFESP</title>
</svelte:head>

{#if heroArticle}
	<Hero article={heroArticle} />
{/if}

{#if spotlightArticle}
	<section class="wrap section-block">
		<div class="section-nav"><span class="label">Destaque do mês</span></div>
		<SpotlightCard article={spotlightArticle} badge="Destaque" />
	</section>
{/if}

{#if articlesWithTint.length}
	<section class="wrap section-block">
		<div class="section-nav"><span class="label">Publicações do Núcleo, por área</span></div>
		{#each articlesWithTint as group (group.category.id)}
			<ArticleGrid items={group.items} tint={group.tint} />
		{/each}
	</section>
{/if}

{#if resourcesByCategory.length}
	<section class="wrap section-block">
		<div class="section-nav"><span class="label">Recursos bibliográficos, por área</span></div>
		{#each resourcesByCategory as group (group.category.id)}
			<ArticleGrid items={group.items} tint={group.tint} />
		{/each}
	</section>
{/if}

<style>
	.section-block {
		padding-top: 40px;
		padding-bottom: 10px;
	}
	.section-nav {
		font-family: var(--font-mono);
		font-size: 0.82rem;
		color: var(--ink-soft);
		padding-bottom: 14px;
		border-bottom: var(--rule);
		margin-bottom: 6px;
	}
	.section-nav .label {
		color: var(--ink);
	}
</style>
