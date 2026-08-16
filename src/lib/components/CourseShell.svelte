<script lang="ts">
	import type { Snippet } from 'svelte';
	import { base } from '$app/paths';

	let {
		title,
		modality,
		professor,
		backHref = '/cursos/2025',
		backLabel = 'Cursos do NUR — 2025',
		children
	}: {
		title: string;
		modality?: string;
		professor: string;
		backHref?: string;
		backLabel?: string;
		children: Snippet;
	} = $props();
</script>

<article class="essay">
	<div class="wrap essay-head">
		<a class="back-link" href="{base}{backHref}">← Voltar para {backLabel}</a>
		<p class="eyebrow">{modality ?? 'Minicurso'} · NUR</p>
		<h1>{title}</h1>
		<div class="byline">Por <b>{professor}</b></div>
	</div>

	<div class="wrap essay-body">
		<div class="prose">
			{@render children()}
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
		color: var(--accent);
		margin: 0 0 8px;
	}
	.essay-head h1 {
		font-family: var(--font-headline);
		font-size: clamp(2.2rem, 6vw, 3.6rem);
		line-height: 1;
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
		font-weight: 400;
	}

	.essay-body {
		padding: 34px 0 60px;
	}

	.prose {
		max-width: 68ch;
		margin: 0 auto;
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
		border-bottom: 2px solid var(--accent);
		color: var(--accent);
	}
	.prose :global(h3) {
		font-family: var(--font-headline);
		font-size: 1.05rem;
		margin: 0 0 14px;
		color: var(--ink);
	}
	.prose :global(a) {
		color: var(--accent);
		text-decoration: underline;
		text-underline-offset: 2px;
		text-decoration-color: var(--line-strong);
	}
	.prose :global(a:hover) {
		text-decoration-color: currentColor;
	}
	.prose :global(em) {
		font-style: italic;
	}
	.prose :global(ul),
	.prose :global(ol) {
		margin: 0 0 20px;
		padding-left: 1.3em;
	}
	.prose :global(li) {
		margin-bottom: 8px;
	}
	.prose :global(.info-box) {
		border: var(--rule);
		padding: 20px 24px;
		margin: 0 0 30px;
		font-family: var(--font-mono);
		font-size: 0.85rem;
		line-height: 1.7;
	}
	.prose :global(.info-box dt) {
		color: var(--ink-soft);
	}
	.prose :global(.info-box dd) {
		margin: 0 0 10px;
		color: var(--ink);
	}
	.prose :global(.info-box dd:last-child) {
		margin-bottom: 0;
	}
	.prose :global(.schedule dt) {
		font-family: var(--font-mono);
		font-size: 0.82rem;
		color: var(--accent);
		margin: 0 0 4px;
	}
	.prose :global(.schedule dd) {
		margin: 0 0 20px;
	}
</style>
