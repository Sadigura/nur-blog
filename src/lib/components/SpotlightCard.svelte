<script lang="ts">
	import { base } from '$app/paths';
	import CategoryPattern from './CategoryPattern.svelte';
	import { categoryLabel } from '$lib/data/categories';
	import type { Article } from '$lib/data/articles';
	import type { Resource } from '$lib/data/resources';

	let {
		article,
		badge,
		wide = false,
		tint = { bg: 'var(--tint-a)', ink: 'var(--tint-a-ink)' }
	}: {
		article: Article | Resource;
		badge?: string;
		wide?: boolean;
		tint?: { bg: string; ink: string };
	} = $props();
</script>

<article class="spotlight" class:wide style="--cat-tint: {tint.bg}; --cat-ink: {tint.ink};">
	<div class="spotlight-media">
		{#if badge}
			<div class="spotlight-tags">
				<span class="highlight">{badge}</span>
			</div>
		{/if}
		{#if article.image}
			<img src="{base}{article.image}" alt="" />
		{:else}
			<CategoryPattern tint={tint.bg} id="pattern-spot-{article.slug}" />
		{/if}
	</div>
	<div class="spotlight-body">
		<h2><a class="stretched-link" href="{base}{article.href}">{article.title}</a></h2>
		<div class="spotlight-byline">Palavras de <b>{article.author}</b></div>
	</div>
	<div class="spotlight-foot">
		<p class="spotlight-dek">{article.description}</p>
		<span class="read-more">Ler mais →</span>
	</div>
	<div class="tag-row">
		<span class="tag-label">{categoryLabel(article.category)}</span>
		<span class="tag-filler"></span>
	</div>
</article>

<style>
	.spotlight {
		position: relative;
	}
	.stretched-link {
		color: inherit;
		text-decoration: none;
	}
	.stretched-link::after {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 1;
	}
	.spotlight-media {
		aspect-ratio: 4 / 3;
		background: var(--ink);
		position: relative;
		overflow: hidden;
	}
	.spotlight.wide .spotlight-media {
		aspect-ratio: 21 / 7;
	}
	.spotlight-media img,
	.spotlight-media :global(svg) {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.spotlight-tags {
		position: absolute;
		top: 14px;
		left: 14px;
		display: flex;
		gap: 8px;
		z-index: 2;
	}
	.spotlight-tags span {
		font-family: var(--font-mono);
		font-size: 0.68rem;
		font-weight: 400;
		letter-spacing: 0.04em;
		padding: 6px 10px;
		background: var(--ink);
		color: var(--paper);
	}
	.spotlight-tags span.highlight {
		background: #000;
		color: #fff;
	}
	.spotlight-body {
		background: var(--cat-tint);
		color: var(--cat-ink);
		padding: 24px 24px 0;
	}
	.spotlight-body h2 {
		font-family: var(--font-headline);
		font-size: 1.4rem;
		line-height: 1.2;
		color: var(--cat-ink);
	}
	.spotlight-byline {
		font-family: var(--font-mono);
		font-size: 0.76rem;
		color: var(--cat-ink);
		opacity: 0.75;
		padding: 10px 0;
		margin-top: 12px;
		border-top: 1px solid var(--cat-ink);
	}
	.spotlight-byline b {
		font-family: var(--font-mono-bold);
		color: var(--cat-ink);
		opacity: 1;
		font-weight: 700;
	}
	.spotlight-foot {
		background: var(--cat-tint);
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		gap: 10px;
		padding: 0 24px 20px;
	}
	.spotlight-dek {
		font-family: var(--font-body);
		font-size: 0.92rem;
		line-height: 1.5;
		color: var(--cat-ink);
		max-width: 34ch;
		margin: 0;
	}
	.read-more {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		font-weight: 700;
		white-space: nowrap;
		color: var(--cat-ink);
	}
	.tag-row {
		display: flex;
		border-top: 1px solid var(--cat-ink);
	}
	.tag-label {
		font-family: var(--font-mono);
		font-size: 0.74rem;
		font-weight: 400;
		color: var(--cat-ink);
		padding: 10px 16px;
		border-right: 1px solid var(--cat-ink);
		white-space: nowrap;
	}
	.tag-filler {
		flex: 1;
		background: var(--cat-tint);
	}
</style>
