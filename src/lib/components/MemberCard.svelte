<script lang="ts">
	import { base } from '$app/paths';
	import type { Member } from '$lib/data/members';

	let { member }: { member: Member } = $props();

	let initials = $derived(
		member.name
			.split(' ')
			.filter((w) => w.length > 2)
			.slice(0, 2)
			.map((w) => w[0])
			.join('')
			.toUpperCase()
	);
</script>

<article class="member">
	<div class="portrait">
		{#if member.photo}
			<img src="{base}{member.photo}" alt="" />
		{:else}
			<span class="initials">{initials}</span>
		{/if}
	</div>
	<h3>{member.name}</h3>
	<p class="role">{member.role}</p>
</article>

<style>
	.member {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 4px;
	}
	.portrait {
		width: 100%;
		aspect-ratio: 1 / 1;
		border: 1px solid var(--ink);
		border-radius: 50%;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--paper-raised);
		margin-bottom: 10px;
	}
	.portrait img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.initials {
		font-family: var(--font-headline);
		font-weight: 700;
		font-size: 1.8rem;
		color: var(--ink-faint);
	}
	.member h3 {
		font-family: var(--font-headline);
		font-size: 1.02rem;
	}
	.role {
		font-family: var(--font-mono);
		font-size: 0.76rem;
		color: var(--ink-soft);
		margin: 0;
	}
</style>
