<script lang="ts">
	import '../app.css';
	import { afterNavigate, onNavigate } from '$app/navigation';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import PrimaryNav from '$lib/components/PrimaryNav.svelte';
	import Drawer from '$lib/components/Drawer.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import DoorsTransition from '$lib/components/DoorsTransition.svelte';
	import { closeDoors, openDoors } from '$lib/doors.svelte';

	let { children } = $props();

	// A cada troca de página, as portas fecham antes da nova página
	// aparecer por baixo, e reabrem depois — ver src/lib/doors.svelte.ts.
	// Navegação só por âncora (mesma pathname, muda só o #hash) não conta,
	// senão os links do sumário dos artigos disparariam o efeito à toa.
	onNavigate((navigation) => {
		const to = navigation.to?.url;
		const from = navigation.from?.url;
		if (!to || (from && to.pathname === from.pathname && to.search === from.search)) return;
		return closeDoors();
	});

	// Ao navegar pra outra página (ou âncora), fecha qualquer dropdown do
	// menu principal (<details>) e o menu lateral (checkbox), que senão
	// continuam abertos porque o layout não é remontado entre navegações.
	// Também reabre as portas depois que a nova página já está montada.
	afterNavigate(() => {
		document.querySelectorAll('details[open].nav-dropdown').forEach((d) => d.removeAttribute('open'));
		const menuToggle = document.getElementById('menu-toggle') as HTMLInputElement | null;
		if (menuToggle) menuToggle.checked = false;
		openDoors();
	});

	// <details name="..."> só fecha os outros dropdowns do grupo quando um
	// deles abre — clicar fora de todos (ou num link "#" que não navega,
	// então não passa pelo afterNavigate acima) deixava o menu aberto pra
	// sempre. Fecha qualquer dropdown aberto cujo clique não veio de dentro
	// dele mesmo.
	function closeDropdownsOutside(e: MouseEvent) {
		document.querySelectorAll('details[open].nav-dropdown').forEach((d) => {
			if (!d.contains(e.target as Node)) d.removeAttribute('open');
		});
	}
</script>

<svelte:window onclick={closeDropdownsOutside} />

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<DoorsTransition />

<input type="checkbox" id="menu-toggle" class="menu-checkbox" />

<div class="site-topbar">
	<Header />
	<PrimaryNav />
</div>

<main>
	{@render children()}
</main>

<Footer />
<Drawer />

<style>
	.menu-checkbox {
		position: absolute;
		opacity: 0;
		pointer-events: none;
	}
	.site-topbar {
		position: sticky;
		top: 0;
		z-index: 30;
		background: var(--paper);
	}
</style>
