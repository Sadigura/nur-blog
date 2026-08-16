<script lang="ts">
	import { base } from '$app/paths';
</script>

<header class="site-header">
	<a class="brand" href="{base}/" aria-label="NUR, página inicial">
		<img class="mark" src="{base}/images/logo-averroes-512.png" alt="Retrato ilustrado de Averróis (Ibn Rushd)" />
		<span class="wordmark">NUR<small>Filosofia islâmica, judaica e oriental na UNIFESP</small></span>
	</a>
	<label for="menu-toggle" class="hamburger-btn" aria-label="Abrir menu">
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" stroke-width="1.6" />
		</svg>
	</label>
</header>

<style>
	.site-header {
		max-width: var(--max);
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 14px clamp(16px, 4vw, 40px);
		gap: 20px;
	}
	.brand {
		display: flex;
		align-items: center;
		gap: 18px;
		min-width: 0;
	}
	.brand .mark {
		width: 112px;
		height: 112px;
		flex: none;
		border-radius: 50%;
		object-fit: cover;
	}
	.brand .wordmark {
		font-family: var(--font-headline);
		font-weight: 700;
		font-size: 1.3rem;
		letter-spacing: 0.02em;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	.brand .wordmark small {
		font-family: var(--font-mono);
		font-weight: 400;
		font-size: 0.7rem;
		color: var(--ink-faint);
		letter-spacing: 0.02em;
		max-width: 26ch;
		line-height: 1.35;
	}
	.hamburger-btn {
		cursor: pointer;
		padding: 8px;
		flex: none;
	}
	.hamburger-btn svg {
		width: 26px;
		height: 26px;
	}

	@media (max-width: 640px) {
		.brand .mark {
			width: 76px;
			height: 76px;
		}
		.brand .wordmark small {
			display: none;
		}
	}
</style>
