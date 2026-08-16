<script lang="ts">
	import { base } from '$app/paths';
	import YouTubeIcon from './icons/YouTubeIcon.svelte';
	import InstagramIcon from './icons/InstagramIcon.svelte';
	import FacebookIcon from './icons/FacebookIcon.svelte';
</script>

<div class="drawer-backdrop"></div>
<aside class="drawer">
	<div class="drawer-head">
		<label for="menu-toggle" class="drawer-close" aria-label="Fechar menu">
			<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
				<path d="M5 5L19 19M19 5L5 19" stroke="currentColor" stroke-width="1.6" />
			</svg>
		</label>
	</div>
	<nav class="drawer-nav">
		<a href="#">Filósofos</a>
		<a href="#">Cursos do NUR</a>
		<a href="{base}/integrantes">Integrantes</a>
		<a href="#">Publicações</a>
		<a href="#">Sobre o NUR</a>
		<a href="mailto:contato.nur@unifesp.br">Contato</a>
	</nav>
	<div class="drawer-social">
		<a href="#" aria-label="YouTube"><YouTubeIcon /></a>
		<a href="#" aria-label="Instagram"><InstagramIcon /></a>
		<a href="#" aria-label="Facebook"><FacebookIcon /></a>
	</div>
	<a class="drawer-card" href="#">
		<span class="label">Sobre o núcleo</span>
		<strong>Filosofia islâmica, judaica e oriental na UNIFESP</strong>
		<span class="saiba">Saiba mais →</span>
	</a>
</aside>

<style>
	.drawer-backdrop {
		position: fixed;
		inset: 0;
		background: rgba(10, 6, 8, 0.35);
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.2s ease;
		z-index: 40;
	}
	:global(#menu-toggle:checked) ~ .drawer-backdrop {
		opacity: 1;
		pointer-events: auto;
	}
	.drawer {
		position: fixed;
		top: 0;
		right: 0;
		height: 100%;
		width: min(380px, 88vw);
		background: var(--paper);
		border-left: var(--rule);
		transform: translateX(100%);
		transition: transform 0.25s ease;
		z-index: 50;
		overflow-y: auto;
		padding: 20px 26px 30px;
		display: flex;
		flex-direction: column;
		gap: 22px;
	}
	:global(#menu-toggle:checked) ~ .drawer {
		transform: translateX(0);
	}
	.drawer-head {
		display: flex;
		justify-content: flex-end;
	}
	.drawer-close {
		cursor: pointer;
		padding: 6px;
	}
	.drawer-close svg {
		width: 20px;
		height: 20px;
	}
	.drawer-nav {
		display: flex;
		flex-direction: column;
	}
	.drawer-nav a {
		font-family: var(--font-mono);
		font-size: 1.3rem;
		padding: 14px 0;
		border-bottom: 1px solid var(--line);
	}
	.drawer-social {
		display: flex;
		gap: 14px;
		color: var(--ink-soft);
	}
	.drawer-social a {
		display: flex;
	}
	.drawer-social :global(svg) {
		width: 22px;
		height: 22px;
	}
	.drawer-social a:hover {
		color: var(--accent);
	}
	.drawer-card {
		border: var(--rule);
		padding: 18px;
		display: block;
		margin-top: auto;
	}
	.drawer-card .label {
		display: block;
		font-family: var(--font-mono);
		font-size: 0.7rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: var(--accent);
	}
	.drawer-card strong {
		display: block;
		font-family: var(--font-headline);
		font-size: 1.05rem;
		line-height: 1.25;
		margin: 6px 0 8px;
	}
	.drawer-card .saiba {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		text-decoration: underline;
	}
</style>
