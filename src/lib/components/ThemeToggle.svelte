<script lang="ts">
	import { closeDoors, openDoors } from '$lib/doors.svelte';

	let theme = $state<'light' | 'dark'>('light');

	$effect(() => {
		const stored = localStorage.getItem('nur-theme');
		theme = stored === 'dark' ? 'dark' : 'light';
	});

	async function toggle() {
		await closeDoors();
		theme = theme === 'light' ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('nur-theme', theme);
		openDoors();
	}
</script>

<button
	type="button"
	class="theme-toggle"
	onclick={toggle}
	aria-pressed={theme === 'dark'}
	aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
	title={theme === 'light' ? 'Modo escuro' : 'Modo claro'}
>
	{#if theme === 'light'}
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path
				d="M21 12.6A9 9 0 1 1 11.4 3a7 7 0 0 0 9.6 9.6Z"
				stroke="currentColor"
				stroke-width="1.6"
				stroke-linejoin="round"
			/>
		</svg>
	{:else}
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1.6" />
			<path
				d="M12 2.5V5M12 19V21.5M4.4 4.4L6.1 6.1M17.9 17.9L19.6 19.6M2.5 12H5M19 12H21.5M4.4 19.6L6.1 17.9M17.9 6.1L19.6 4.4"
				stroke="currentColor"
				stroke-width="1.6"
				stroke-linecap="round"
			/>
		</svg>
	{/if}
</button>

<style>
	.theme-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		padding: 0;
		border: 1px solid var(--ink);
		border-radius: 50%;
		background: transparent;
		color: var(--ink);
		cursor: pointer;
		flex: none;
	}
	.theme-toggle:hover {
		background: var(--paper-raised);
		color: var(--accent);
	}
	.theme-toggle svg {
		width: 18px;
		height: 18px;
	}
</style>
