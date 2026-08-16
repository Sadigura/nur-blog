<script lang="ts">
	import MemberCard from '$lib/components/MemberCard.svelte';
	import { MEMBERS } from '$lib/data/members';
</script>

<svelte:head>
	<title>Integrantes — NUR</title>
</svelte:head>

<div class="wrap page-head">
	<a class="back-link" href="/">← Voltar para a página inicial</a>
	<h1>Integrantes</h1>
	<p class="subtitle">Quem faz parte do Núcleo de Estudos NUR.</p>
</div>

<div class="wrap page-body">
	{#if MEMBERS.length}
		<div class="member-grid">
			{#each MEMBERS as member (member.slug)}
				<MemberCard {member} />
			{/each}
		</div>
	{:else}
		<p class="empty">Em breve, a lista de integrantes do Núcleo.</p>
	{/if}
</div>

<style>
	.page-head {
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
	.page-head h1 {
		font-family: var(--font-headline);
		font-weight: 700;
		font-size: clamp(2.2rem, 6vw, 3.2rem);
		line-height: 1;
	}
	.subtitle {
		font-family: var(--font-body);
		font-size: 1.05rem;
		color: var(--ink-soft);
		margin: 10px 0 0;
	}
	.page-body {
		padding: 40px 0 70px;
	}
	.member-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 40px 30px;
	}
	.empty {
		font-family: var(--font-mono);
		font-size: 0.9rem;
		color: var(--ink-soft);
	}

	@media (max-width: 900px) {
		.member-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media (max-width: 640px) {
		.member-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
