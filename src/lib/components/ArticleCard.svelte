<script lang="ts">
	import { base } from '$app/paths';
	import CategoryPattern from './CategoryPattern.svelte';
	import { categoryLabel } from '$lib/data/categories';
	import type { Article } from '$lib/data/articles';
	import type { Resource } from '$lib/data/resources';

	let { item, compact = false }: { item: Article | Resource; compact?: boolean } = $props();
</script>

<article
	class="card"
	class:compact
	style="--cat: var(--cat-{item.category}); --cat-tint: var(--tint-a);"
>
	{#if !compact}
		<div class="card-media">
			{#if item.image}
				<img src="{base}{item.image}" alt="" />
			{:else}
				<CategoryPattern tint="var(--cat-tint)" id="pattern-{item.slug}" />
			{/if}
		</div>
	{/if}
	<h3>{item.title}</h3>
	<div class="byline">{compact ? 'Artigo de' : 'Palavras de'} <b>{item.author}</b></div>
	<div class="dek-row">
		<p class="dek">{item.description}</p>
		<a class="read-more" href="{base}{item.href}">Ler mais →</a>
	</div>
	<div class="tag-row">
		<span class="tag-label">{categoryLabel(item.category)}</span>
		<span class="tag-filler"></span>
	</div>
</article>

<style>
	.card {
		display: flex;
		flex-direction: column;
	}
	.card.compact {
		border: 1px solid var(--ink);
		padding: 18px 20px 0;
	}
	.card-media {
		aspect-ratio: 16 / 10;
		overflow: hidden;
		margin-bottom: 16px;
	}
	.card-media img,
	.card-media :global(svg) {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.card h3 {
		font-family: var(--font-headline);
		font-size: 1.08rem;
		line-height: 1.25;
	}
	.card.compact h3 {
		margin-top: 0;
	}
	.byline {
		font-family: var(--font-mono);
		font-size: 0.74rem;
		color: var(--ink-soft);
		padding: 8px 0;
		margin-top: 10px;
		border-top: 1px solid var(--ink);
	}
	.card.compact .byline {
		border-top: none;
		padding: 0;
		margin-top: 6px;
	}
	.byline b {
		font-family: var(--font-mono-bold);
		color: var(--ink);
		font-weight: 400;
	}
	.dek-row {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin-top: 10px;
		flex: 1;
	}
	.card.compact .dek-row {
		padding-top: 12px;
		border-top: 1px solid var(--ink);
	}
	.dek {
		font-family: var(--font-body);
		font-size: 0.86rem;
		line-height: 1.5;
		color: var(--ink-soft);
		margin: 0;
	}
	.read-more {
		align-self: flex-end;
		font-family: var(--font-mono);
		font-size: 0.74rem;
		font-weight: 700;
		color: var(--ink);
	}
	/* a "linha que fecha": rótulo + preenchimento vazio, ambos com
	   borda, formando uma tira fechada de ponta a ponta do card */
	.tag-row {
		display: flex;
		margin-top: 14px;
		border-top: 1px solid var(--ink);
	}
	.tag-label {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		font-weight: 400;
		color: var(--ink);
		padding: 10px 14px 10px 0;
		border-right: 1px solid var(--ink);
		white-space: nowrap;
	}
	.tag-filler {
		flex: 1;
	}
	.card.compact .tag-row {
		margin: 14px -20px 0;
	}
	.card.compact .tag-label {
		padding-left: 20px;
	}
</style>
