<script lang="ts">
	import { base } from '$app/paths';
	import type { Article } from '$lib/data/articles';

	let { article }: { article: Article } = $props();
</script>

<section class="hero">
	<div class="hero-inner wrap">
		<div class="hero-box" style="--cat: var(--cat-{article.category}); --cat-tint: var(--tint-a);">
			<img class="hero-media" src="{base}{article.image}" alt="" />
			<div class="hero-caption">
				<h1>{article.title}</h1>
				<div class="hero-byline">Palavras de <b>{article.author}</b></div>
				<p class="hero-dek">{article.description}</p>
				<span class="hero-tag">Ler mais →</span>
			</div>
			<a class="hero-link" href="{base}{article.href}" aria-label={article.title}></a>
		</div>
	</div>
</section>

<style>
	.hero {
		background: var(--paper-raised);
		border-bottom: var(--rule);
		padding: 28px 0;
	}
	.hero-box {
		position: relative;
		border: 3px solid var(--cat);
		background: var(--cat-tint);
		/* limitada à largura do conteúdo da nav (Filósofos → Contato),
		   e com altura máxima pra caber inteira na tela em 100% de zoom */
		max-height: 62vh;
		overflow: hidden;
	}
	.hero-link {
		position: absolute;
		inset: 0;
		z-index: 2;
	}
	.hero-media {
		width: 100%;
		height: 100%;
		aspect-ratio: 21 / 8;
		max-height: 62vh;
		object-fit: cover;
		display: block;
	}
	.hero-caption {
		position: absolute;
		left: 0;
		bottom: 0;
		width: min(480px, 88vw);
		background: var(--cat-tint);
		padding: clamp(16px, 2.4vw, 26px) clamp(16px, 2.4vw, 26px) 20px;
	}
	.hero-caption h1 {
		font-size: clamp(1.2rem, 2.4vw, 1.7rem);
		line-height: 1.18;
	}
	.hero-byline {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--ink-soft);
		padding: 8px 0;
		margin-top: 10px;
		border-top: var(--rule);
	}
	.hero-byline b {
		font-family: var(--font-mono-bold);
		color: var(--ink);
		font-weight: 400;
	}
	.hero-dek {
		font-family: var(--font-body);
		font-size: 0.9rem;
		line-height: 1.5;
		color: var(--ink-soft);
		margin-top: 10px;
	}
	.hero-tag {
		display: inline-block;
		margin-top: 14px;
		padding-top: 10px;
		border-top: var(--rule);
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--cat);
		width: 100%;
	}

	@media (max-width: 640px) {
		.hero-box {
			max-height: none;
		}
		.hero-media {
			aspect-ratio: 4 / 5;
			max-height: 48vh;
		}
		.hero-caption {
			position: static;
			width: auto;
		}
	}
</style>
