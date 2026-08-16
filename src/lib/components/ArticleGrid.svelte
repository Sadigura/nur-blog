<script lang="ts">
	import ArticleCard from './ArticleCard.svelte';
	import SpotlightCard from './SpotlightCard.svelte';
	import type { Article } from '$lib/data/articles';
	import type { Resource } from '$lib/data/resources';

	let {
		items,
		tint
	}: { items: (Article | Resource)[]; tint: { bg: string; ink: string } } = $props();

	// O último item da categoria ganha destaque: foto grande, à esquerda.
	// Os demais aparecem como cards só de texto, à direita.
	let featured = $derived(items.at(-1));
	let rest = $derived(items.slice(0, -1));
</script>

{#if items.length}
	<section class="cat-block">
		<div class="article-layout" class:solo={rest.length === 0}>
			{#if featured}
				<div class="featured-slot">
					<SpotlightCard article={featured} {tint} wide={rest.length === 0} />
				</div>
			{/if}
			{#if rest.length}
				<div class="text-grid">
					{#each rest as item (item.slug)}
						<ArticleCard {item} compact />
					{/each}
				</div>
			{/if}
		</div>
	</section>
{/if}

<style>
	.cat-block {
		padding: 34px 0;
		border-bottom: 1px solid var(--ink);
	}
	.cat-block:last-child {
		border-bottom: none;
	}
	.article-layout {
		display: grid;
		grid-template-columns: minmax(320px, 50%) 1fr;
		gap: 40px;
		align-items: start;
	}
	.article-layout.solo {
		grid-template-columns: 1fr;
	}
	.text-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 32px 30px;
	}

	@media (max-width: 900px) {
		.article-layout {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 560px) {
		.text-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
