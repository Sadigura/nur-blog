<script lang="ts">
	import { doors } from '$lib/doors.svelte';
</script>

<div class="doors" aria-hidden="true">
	<div
		class="door door-left"
		class:shut={doors.phase === 'closing' || doors.phase === 'closed'}
		style="background: {doors.color};"
	></div>
	<div
		class="door door-right"
		class:shut={doors.phase === 'closing' || doors.phase === 'closed'}
		style="background: {doors.color};"
	></div>
</div>

<style>
	/* Os painéis ficam sempre no DOM (fora da tela quando ociosos) —
	   se fossem montados só na hora de fechar, o navegador não teria um
	   estado anterior pra animar a partir e a transição "saltava" direto
	   pro estado fechado em vez de deslizar das bordas. */
	.doors {
		position: fixed;
		inset: 0;
		z-index: 999;
		display: flex;
		pointer-events: none;
	}
	.door {
		width: 50%;
		height: 100%;
		transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);
	}
	.door-left {
		transform: translateX(-100%);
	}
	.door-right {
		transform: translateX(100%);
	}
	.door-left.shut {
		transform: translateX(0);
	}
	.door-right.shut {
		transform: translateX(0);
	}
</style>
