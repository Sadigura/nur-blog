<script lang="ts">
	import { base } from '$app/paths';
	import SearchBar from './SearchBar.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<nav class="primary-nav">
	<div class="primary-nav-inner wrap">
		<div class="nav-left">
			<details class="nav-dropdown" name="primary-nav-dropdown">
				<summary>Filósofos</summary>
				<div class="dropdown-panel">
					<a href="{base}/artigos/al-farabi-vida-e-reflexao-filosofica">Al-Fārābī</a>
					<a href="{base}/artigos/al-qirqisani">Al-Qirqisani</a>
					<a href="{base}/artigos/ibn-sina">Avicena (Ibn Sina)</a>
					<a href="{base}/artigos/daud-al-muqammas">Daud al-Muqammas</a>
					<a href="{base}/artigos/ibn-arabi">Ibn Arabi</a>
					<a href="{base}/artigos/ibn-gabirol">Ibn Gabirol</a>
					<a href="{base}/artigos/isaac-israeli">Isaac Israeli</a>
					<a href="{base}/artigos/maimonides">Maimônides</a>
					<a href="{base}/artigos/saadia-al-fayyumi">Saadia Al-Fayyumi</a>
					<a href="{base}/artigos/samuel-ibn-nagrella">Samuel ibn Nagrella</a>
					<a href="{base}/artigos/yehuda-halevi">Yehuda Halevi</a>
				</div>
			</details>
			<span class="nav-sep">|</span>
			<details class="nav-dropdown" name="primary-nav-dropdown">
				<summary>Cursos do NUR</summary>
				<div class="dropdown-panel">
					<a href="#">2023</a>
					<a href="#">2024</a>
					<a href="{base}/cursos/2025">2025</a>
					<a href="{base}/cursos/2026">2026</a>
				</div>
			</details>
		</div>
		<div class="nav-right">
			<SearchBar />
			<ThemeToggle />
			<div class="nav-box-group">
				<a href="{base}/integrantes" class="plain">Integrantes</a>
				<details class="nav-dropdown" name="primary-nav-dropdown">
					<summary>Recursos</summary>
					<div class="dropdown-panel">
						<a href="{base}/publicacoes">Publicações</a>
						<a href="{base}/recursos/recursos-bibliograficos">Recursos bibliográficos</a>
						<a href="#">Sobre o NUR</a>
						<a href="mailto:contato.nur@unifesp.br">Contato</a>
					</div>
				</details>
				<a href="mailto:contato.nur@unifesp.br" class="btn-contact">Contato</a>
			</div>
		</div>
	</div>
</nav>

<style>
	.primary-nav {
		border-top: 1px solid var(--ink);
		border-bottom: 1px solid var(--ink);
	}
	.primary-nav-inner {
		display: flex;
		align-items: stretch;
		justify-content: space-between;
		gap: 20px;
		flex-wrap: wrap;
		font-family: var(--font-mono);
		font-size: 1.02rem;
	}
	.nav-left {
		display: flex;
		align-items: center;
		gap: 18px;
	}
	.nav-right {
		display: flex;
		align-items: center;
		gap: 16px;
	}
	.nav-sep {
		color: var(--ink);
	}
	.nav-dropdown {
		position: relative;
	}
	.nav-dropdown summary {
		list-style: none;
		cursor: pointer;
		padding: 14px 0;
		display: flex;
		align-items: center;
		gap: 5px;
	}
	.nav-dropdown summary::-webkit-details-marker {
		display: none;
	}
	.nav-dropdown summary::after {
		content: 'v';
		font-family: var(--font-mono);
		font-size: 0.75em;
	}
	.nav-dropdown[open] summary::after {
		content: '^';
	}
	.dropdown-panel {
		position: absolute;
		left: 0;
		margin-top: -2px;
		background: var(--paper-raised);
		border: 1px solid var(--ink);
		padding: 10px 0;
		min-width: 200px;
		box-shadow: 0 8px 20px rgb(0 0 0 / 0.12);
		display: flex;
		flex-direction: column;
		z-index: 20;
	}
	.dropdown-panel a {
		padding: 9px 16px;
		font-family: var(--font-mono);
	}
	.dropdown-panel a:hover {
		background: var(--accent-tint);
	}

	/* a tira fechada da direita: Integrantes | Recursos | Contato, tudo
	   dentro de uma única borda preta, com divisórias entre as células */
	.nav-box-group {
		display: flex;
		align-items: stretch;
		align-self: stretch;
	}
	.nav-box-group a.plain {
		display: flex;
		align-items: center;
		align-self: center;
		padding: 0 18px;
		font-family: var(--font-mono);
		border-right: 1px solid var(--ink);
	}
	.nav-box-group a.plain:hover {
		background: var(--paper-raised);
	}
	.nav-box-group .nav-dropdown {
		align-self: center;
		border-right: 1px solid var(--ink);
	}
	.nav-box-group .nav-dropdown summary {
		padding: 0 18px;
		height: 100%;
	}
	.btn-contact {
		display: flex;
		align-items: center;
		background: var(--ink);
		color: var(--paper);
		padding: 0 20px 0 26px;
		margin-left: -6px;
		font-weight: 400;
		letter-spacing: 0.03em;
		font-family: var(--font-mono);
	}
	.btn-contact:hover {
		background: var(--accent);
	}

	@media (max-width: 900px) {
		.nav-box-group a.plain {
			display: none;
		}
	}
	@media (max-width: 720px) {
		.primary-nav-inner {
			font-size: 0.9rem;
		}
	}
</style>
