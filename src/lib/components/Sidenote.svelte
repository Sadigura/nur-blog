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
		margin-top: 2.6em;
		margin-bottom: 0.8em;
		padding: 14px 16px;
		background: color-mix(in srgb, var(--cat, var(--accent)) 20%, #fff7f4);
		border-left: 3px solid var(--cat, var(--accent));
		font-family: var(--font-mono);
		font-size: 0.76rem;
		line-height: 1.55;
		color: #171016;
		text-align: left;
	}
	/* O "fio" que liga a referência no texto até a caixa: como a posição
	   exata da chamada <sup> no meio do parágrafo varia a cada uso (e só
	   dá pra saber medindo com JS em tempo real), a linha aqui é uma
	   aproximação fixa — sai do canto superior esquerdo da caixa e sobe/
	   estica pra trás, na direção geral de onde a chamada normalmente cai
	   logo acima, em vez de mirar o pixel exato do número no texto. */
	.sidenote::before {
		content: '';
		position: absolute;
		top: -1.8em;
		left: -34px;
		width: 34px;
		height: 1.9em;
		border-top: 2px solid var(--cat, var(--accent));
		border-left: 2px solid var(--cat, var(--accent));
		border-top-left-radius: 10px;
	}
	.sidenote-hand {
		position: absolute;
		top: -78px;
		left: -74px;
		width: 108px;
		height: auto;
		z-index: 1;
	}
	.sidenote-n {
		font-weight: 700;
		color: var(--cat, var(--accent));
		margin-right: 5px;
	}
	.sidenote :global(em) {
		font-style: italic;
	}

	/* Abaixo de 1100px a caixa vira bloco empilhado (sem float) — não há
	   mais coluna de texto ao lado pra "puxar" com o fio, então ele some;
	   a mão volta pra dentro da caixa, bem menor. */
	@media (max-width: 1100px) {
		.sidenote {
			float: none;
			clear: none;
			display: block;
			width: auto;
			margin: 8px 0 18px;
			padding-left: 42px;
		}
		.sidenote::before {
			display: none;
		}
		.sidenote-hand {
			top: 10px;
			left: 8px;
			width: 26px;
		}
	}
</style>
