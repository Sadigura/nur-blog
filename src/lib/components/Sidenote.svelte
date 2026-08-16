<script lang="ts">
	import type { Snippet } from 'svelte';

	let { n, children }: { n: number | string; children: Snippet } = $props();
</script>

<sup class="sidenote-marker">{n}</sup><span class="sidenote"
	><span class="sidenote-n">{n}</span>{@render children()}</span
>

<style>
	.sidenote-marker {
		font-family: var(--font-mono);
		font-size: 0.7em;
		color: var(--cat, var(--accent));
	}
	.sidenote {
		float: right;
		clear: right;
		width: 260px;
		margin-right: -300px;
		margin-top: 0.2em;
		margin-bottom: 0.8em;
		font-family: var(--font-mono);
		font-size: 0.76rem;
		line-height: 1.55;
		color: var(--ink-soft);
		text-align: left;
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
			padding-left: 14px;
			border-left: 2px solid var(--line-strong);
		}
	}
</style>
