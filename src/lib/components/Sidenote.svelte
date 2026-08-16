<script lang="ts">
	import type { Snippet } from 'svelte';
	import { base } from '$app/paths';

	let { n, children }: { n: number | string; children: Snippet } = $props();
</script>

<sup class="sidenote-marker">{n}</sup><span class="sidenote"
	><img class="sidenote-hand" src="{base}/images/manicula.png" alt="" aria-hidden="true" /><span
		class="sidenote-n">{n}</span
	>{@render children()}</span
>

<style>
	.sidenote-marker {
		font-family: var(--font-mono);
		font-size: 0.7em;
		color: var(--cat, var(--accent));
	}
	/* Caixa de destaque na cor da seção/categoria do artigo (--cat, herdado
	   do <article> em EssayShell.svelte ou da página do ensaio). Mistura
	   sempre com um tom claro fixo (não com --paper) pra continuar legível
	   — texto escuro fixo por cima — mesmo com o tema escuro ativado, onde
	   --paper vira quase preto. */
	.sidenote {
		position: relative;
		float: right;
		clear: right;
		width: 260px;
		margin-right: -300px;
		margin-top: 0.2em;
		margin-bottom: 0.8em;
		padding: 14px 16px 14px 42px;
		background: color-mix(in srgb, var(--cat, var(--accent)) 20%, #fff7f4);
		border-left: 3px solid var(--cat, var(--accent));
		font-family: var(--font-mono);
		font-size: 0.76rem;
		line-height: 1.55;
		color: #171016;
		text-align: left;
	}
	.sidenote-hand {
		position: absolute;
		left: 8px;
		top: 12px;
		width: 26px;
		height: auto;
	}
	.sidenote-n {
		font-weight: 700;
		color: var(--cat, var(--accent));
		margin-right: 5px;
	}
	.sidenote :global(em) {
		font-style: italic;
	}

	@media (max-width: 1100px) {
		.sidenote {
			float: none;
			clear: none;
			display: block;
			width: auto;
			margin: 8px 0 18px;
		}
	}
</style>
