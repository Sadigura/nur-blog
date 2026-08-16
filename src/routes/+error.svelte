<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import { ARTICLES } from '$lib/data/articles';

	const recentes = ARTICLES.slice(-3).reverse();

	let is404 = $derived(page.status === 404);
</script>

<svelte:head>
	<title>{is404 ? 'Página não encontrada' : 'Erro'} — NUR</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="error-page wrap">
	<div class="error-hero">
		<span class="status-num">{page.status}</span>
		<img class="cat" src="{base}/images/gato-404.png" alt="" width="512" height="486" />
		{#if is404}
			<h1>Essa página se perdeu entre os manuscritos.</h1>
			<p class="dek">
				A página que você procura não existe ou foi movida. Use a busca no topo, volte ao
				início ou confira os textos mais recentes do Núcleo logo abaixo.
			</p>
		{:else}
			<h1>Algo deu errado.</h1>
			<p class="dek">
				{page.error?.message || 'Ocorreu um erro inesperado ao carregar esta página.'} Tente novamente
				ou volte ao início.
			</p>
		{/if}
		<div class="error-actions">
			<a href="{base}/" class="btn-primary">Voltar ao início</a>
			<a href="mailto:contato.nur@unifesp.br" class="btn-secondary">Falar com o NUR</a>
		</div>
	</div>

	{#if is404 && recentes.length}
		<section class="recent-section">
			<h2>Publicações recentes</h2>
			<div class="recent-grid">
				{#each recentes as item (item.slug)}
					<ArticleCard {item} compact />
				{/each}
			</div>
		</section>
	{/if}
</div>

<style>
	.error-page {
		padding: 56px 0 80px;
	}
	.error-hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 6px;
		max-width: 560px;
		margin: 0 auto;
	}
	.status-num {
		font-family: var(--font-mono-bold);
		font-weight: 400;
		font-size: clamp(4.5rem, 16vw, 8rem);
		line-height: 1;
		color: var(--ink-faint);
	}
	/* O gato do 404 (tuxedo preto e branco) fica visível no escuro sem
	   nenhum fundo/moldura por baixo: o pelo preto contrasta com o
	   --paper escuro (que não é preto puro, ver src/app.css), e o peito
	   branco + olhos amarelos garantem contraste em qualquer tema. */
	.cat {
		width: min(260px, 55vw);
		height: auto;
		margin: 4px 0 18px;
		filter: drop-shadow(0 10px 22px rgb(0 0 0 / 0.25));
	}
	.error-hero h1 {
		font-size: clamp(1.6rem, 3.6vw, 2.2rem);
		line-height: 1.2;
	}
	.dek {
		font-family: var(--font-body);
		font-size: 1.02rem;
		line-height: 1.6;
		color: var(--ink-soft);
		margin: 18px 0 0;
	}
	.error-actions {
		display: flex;
		justify-content: center;
		gap: 14px;
		flex-wrap: wrap;
		margin-top: 30px;
	}
	.btn-primary,
	.btn-secondary {
		font-family: var(--font-mono);
		font-size: 0.85rem;
		padding: 14px 24px;
		border: 1px solid var(--ink);
	}
	.btn-primary {
		background: var(--ink);
		color: var(--paper);
	}
	.btn-primary:hover {
		background: var(--accent);
		border-color: var(--accent);
	}
	.btn-secondary:hover {
		background: var(--paper-raised);
	}

	.recent-section {
		margin-top: 72px;
		padding-top: 40px;
		border-top: var(--rule);
	}
	.recent-section h2 {
		font-size: 1.3rem;
		margin-bottom: 26px;
	}
	.recent-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
	}

	@media (max-width: 720px) {
		.recent-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
