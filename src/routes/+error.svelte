<script lang="ts">
	import { page } from '$app/state';
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
		<div class="error-text">
			<span class="label status-label">Erro {page.status}</span>
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
				<a href="/" class="btn-primary">Voltar ao início</a>
				<a href="mailto:contato.nur@unifesp.br" class="btn-secondary">Falar com o NUR</a>
			</div>
		</div>
		<div class="cat-frame" aria-hidden="true">
			<img src="/images/gato-404.png" alt="" width="512" height="486" />
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
		align-items: center;
		justify-content: space-between;
		gap: 48px;
		flex-wrap: wrap;
	}
	.error-text {
		flex: 1 1 380px;
		max-width: 560px;
	}
	.status-label {
		color: var(--ink-soft);
	}
	.error-hero h1 {
		font-size: clamp(1.8rem, 4vw, 2.6rem);
		line-height: 1.15;
		margin-top: 14px;
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

	/* Fundo creme fixo (não segue --paper) para que o gato preto continue
	   visível mesmo com o tema escuro ativado — ver src/app.css, onde
	   --paper vira quase preto no modo escuro e o gato desapareceria
	   contra ele sem esse "quadro" de fundo claro. */
	.cat-frame {
		flex: none;
		width: min(300px, 60vw);
		aspect-ratio: 1 / 0.95;
		background: #fff7f4;
		border: 1px solid var(--line-strong);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
	}
	.cat-frame img {
		width: 100%;
		height: auto;
		filter: drop-shadow(0 10px 22px rgb(0 0 0 / 0.3));
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
		.error-hero {
			flex-direction: column-reverse;
			text-align: center;
		}
		.error-actions {
			justify-content: center;
		}
		.recent-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
