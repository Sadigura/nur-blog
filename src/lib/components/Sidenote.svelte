<script lang="ts">
	import type { Snippet } from 'svelte';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	let { n, children }: { n: number | string; children: Snippet } = $props();

	// Alterna o lado nota a nota (par → esquerda, ímpar → direita) — sem
	// precisar de uma prop nova em cada uma das dezenas de chamadas já
	// escritas nos artigos.
	let side: 'left' | 'right' = $derived(Number(n) % 2 === 0 ? 'left' : 'right');

	let markerEl: HTMLElement;
	let boxEl: HTMLElement;
	let marginTop = $state(2);
	let lineWidth = $state(0);

	// Alinha o topo da caixa com a linha de texto onde o número cai (varia
	// a cada nota) e mede a distância horizontal até ela, pra desenhar uma
	// linha reta e só horizontal — nunca cruzando por cima do texto.
	function measure() {
		if (!markerEl || !boxEl) return;
		const m = markerEl.getBoundingClientRect();
		const b = boxEl.getBoundingClientRect();
		const naturalTop = b.top - marginTop;
		marginTop = Math.max(2, m.top - naturalTop);

		const nearEdgeX = side === 'right' ? b.left : b.right;
		const markerEdgeX = side === 'right' ? m.right : m.left;
		lineWidth = Math.max(0, Math.abs(nearEdgeX - markerEdgeX));
	}

	onMount(() => {
		measure();
		// Refaz a medição depois que as fontes (Fontsource, carregadas à
		// parte) terminarem de carregar, já que a troca da fonte de
		// fallback pra definitiva pode refluir o texto e mudar a posição
		// do número.
		document.fonts?.ready?.then(measure);
		const settle = setTimeout(measure, 300);
		let resizeTimer: ReturnType<typeof setTimeout>;
		const onResize = () => {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(measure, 120);
		};
		window.addEventListener('resize', onResize);
		return () => {
			clearTimeout(settle);
			clearTimeout(resizeTimer);
			window.removeEventListener('resize', onResize);
		};
	});
</script>

<sup class="sidenote-marker" bind:this={markerEl}>{n}</sup><span
	class="sidenote side-{side}"
	bind:this={boxEl}
	style="margin-top: {marginTop}px;"
	><span
		class="sidenote-line"
		style="width: {lineWidth}px; {side === 'right' ? `left: -${lineWidth}px;` : `left: 100%;`}"
	></span><img class="sidenote-hand" src="{base}/images/manicula.png" alt="" aria-hidden="true" /><span
		class="sidenote-n">{n}</span
	>{@render children()}</span
>

<style>
	/* Destaque na cor da categoria em volta do próprio número, marcando a
	   referência dentro do texto corrido (não só a caixa do lado). */
	.sidenote-marker {
		font-family: var(--font-mono);
		font-weight: 700;
		font-size: 0.7em;
		color: #171016;
		background: color-mix(in srgb, var(--cat, var(--accent)) 45%, #fff7f4);
		padding: 0 4px;
		border-radius: 2px;
	}
	/* Caixa de destaque na cor da seção/categoria do artigo (--cat, herdado
	   do <article> em EssayShell.svelte ou da página do ensaio). Mistura
	   sempre com um tom claro fixo (não com --paper) pra continuar legível
	   — texto escuro fixo por cima — mesmo com o tema escuro ativado, onde
	   --paper vira quase preto. margin-top vem medido via JS (ver measure())
	   pra alinhar o topo da caixa com a linha de texto onde o número cai. */
	.sidenote {
		position: relative;
		width: 260px;
		margin-bottom: 0.8em;
		padding: 14px 16px;
		background: color-mix(in srgb, var(--cat, var(--accent)) 20%, #fff7f4);
		font-family: var(--font-mono);
		font-size: 0.76rem;
		line-height: 1.55;
		color: #171016;
		text-align: left;
	}
	.sidenote.side-right {
		float: right;
		clear: right;
		margin-right: -300px;
	}
	.sidenote.side-left {
		float: left;
		clear: left;
		margin-left: -300px;
	}
	/* Linha reta e só horizontal, logo abaixo da linha de texto (nunca
	   cruzando por cima das letras) — largura e lado vêm medidos via JS. */
	.sidenote-line {
		position: absolute;
		top: 10px;
		height: 2px;
		background: var(--cat, var(--accent));
		pointer-events: none;
	}
	.sidenote-hand {
		position: absolute;
		top: -50px;
		width: 84px;
		height: auto;
		z-index: 1;
	}
	/* A mão aponta pra dentro, na direção do texto — sentido natural (sem
	   espelhar) quando a nota está à esquerda do texto, espelhada quando
	   está à direita. */
	.sidenote.side-right .sidenote-hand {
		left: -18px;
		transform: scaleX(-1);
	}
	.sidenote.side-left .sidenote-hand {
		right: -18px;
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
	   mais coluna de texto ao lado pra puxar a linha até ela, então ela
	   some; a mão volta pra dentro da caixa, bem menor. */
	@media (max-width: 1100px) {
		.sidenote.side-left,
		.sidenote.side-right {
			float: none;
			clear: none;
			margin-left: 0;
			margin-right: 0;
		}
		.sidenote {
			display: block;
			width: auto;
			margin-top: 8px !important;
			margin-bottom: 18px;
			padding-left: 42px;
		}
		.sidenote-line {
			display: none;
		}
		.sidenote-hand,
		.sidenote.side-right .sidenote-hand,
		.sidenote.side-left .sidenote-hand {
			top: 10px;
			left: 8px;
			right: auto;
			width: 26px;
			transform: none;
		}
	}
</style>
