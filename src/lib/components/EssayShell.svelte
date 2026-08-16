<script lang="ts">
	import type { Snippet } from 'svelte';
	import { base } from '$app/paths';
	import type { CategoryId } from '$lib/data/categories';
	import { categoryLabel } from '$lib/data/categories';

	let {
		category,
		title,
		subtitle,
		author,
		children
	}: {
		category: CategoryId;
		title: string;
		subtitle?: string;
		author: string;
		children: Snippet;
	} = $props();
</script>

<article class="essay" style="--cat: var(--cat-{category});">
	<div class="wrap essay-head">
		<a class="back-link" href="{base}/">← Voltar para a página inicial</a>
		<p class="eyebrow">Artigo · <span class="cat-name">{categoryLabel(category)}</span></p>
		<h1>{title}</h1>
		{#if subtitle}
			<p class="subtitle">{subtitle}</p>
		{/if}
		<div class="byline">Por <b>{author}</b></div>
	</div>

	<div class="wrap essay-body">
		<div class="prose-outer">
			<div class="prose">
				{@render children()}
			</div>
		</div>
	</div>
</article>

<style>
	.essay-head {
		padding: 40px 0 24px;
		border-bottom: var(--rule);
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
	.eyebrow {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: var(--ink-soft);
		margin: 0 0 8px;
	}
	.eyebrow .cat-name {
		color: var(--cat);
		font-weight: 400;
	}
	.essay-head h1 {
		font-family: var(--font-headline);
		font-size: clamp(2.2rem, 6vw, 3.6rem);
		line-height: 1;
	}
	.subtitle {
		font-family: var(--font-body);
		font-size: 1.15rem;
		color: var(--ink-soft);
		margin: 10px 0 0;
	}
	.byline {
		font-family: var(--font-mono);
		font-size: 0.82rem;
		color: var(--ink-soft);
		margin-top: 18px;
	}
	.byline b {
		font-family: var(--font-mono-bold);
		color: var(--ink);
		font-weight: 700;
	}

	.essay-body {
		padding: 34px 0 60px;
	}

	.prose-outer {
		max-width: 940px;
		margin: 0 auto;
	}

	.prose {
		max-width: 68ch;
		font-family: var(--font-body);
		font-size: 1.05rem;
		line-height: 1.75;
		color: var(--ink);
	}
	.prose :global(p) {
		margin: 0 0 20px;
	}
	.prose :global(h2) {
		font-family: var(--font-headline);
		font-size: 1.4rem;
		margin: 40px 0 18px;
		padding-bottom: 10px;
		border-bottom: 2px solid var(--cat);
		color: var(--cat);
	}
	.prose :global(h3) {
		font-family: var(--font-headline);
		font-size: 1.05rem;
		margin: 0 0 14px;
		color: var(--ink);
	}
	.prose :global(sup a) {
		font-family: var(--font-mono);
		font-size: 0.7em;
		color: var(--cat);
	}
	.prose :global(a:not(sup a)) {
		color: var(--cat);
		text-decoration: underline;
		text-underline-offset: 2px;
		text-decoration-color: var(--line-strong);
	}
	.prose :global(a:not(sup a):hover) {
		text-decoration-color: currentColor;
	}
	.prose :global(em) {
		font-style: italic;
	}
	.prose :global(blockquote) {
		margin: 0 0 20px;
		padding: 4px 0 4px 20px;
		border-left: 3px solid var(--cat);
		color: var(--ink-soft);
		font-style: italic;
	}
	.prose :global(ul),
	.prose :global(ol.works) {
		margin: 0 0 20px;
		padding-left: 1.3em;
	}
	.prose :global(li) {
		margin-bottom: 8px;
	}

</style>
