<script lang="ts">
	import { base } from '$app/paths';
	import YouTubeIcon from './icons/YouTubeIcon.svelte';
	import InstagramIcon from './icons/InstagramIcon.svelte';
	import FacebookIcon from './icons/FacebookIcon.svelte';
</script>

<footer>
	<div class="wrap">
		<div class="footer-links">
			<a class="link-box" href="#"><strong>Ver todos os filósofos</strong><span>Autores estudados pelo Núcleo</span></a>
			<a class="link-box" href="{base}/publicacoes"><strong>Ver todas as publicações</strong><span>O acervo completo do NUR</span></a>
		</div>
		<hr class="rule" />
		<div class="newsletter">
			<div class="newsletter-left">
				<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<path
						d="M6 24L42 10L30 42L23 27L6 24Z"
						stroke="currentColor"
						stroke-width="2"
						stroke-linejoin="round"
					/>
					<path d="M23 27L42 10" stroke="currentColor" stroke-width="2" />
				</svg>
				<div>
					<h2>Fique por dentro</h2>
					<p>Novas publicações do Núcleo, direto na sua caixa de entrada.</p>
				</div>
			</div>
			<form class="newsletter-form" onsubmit={(e) => e.preventDefault()}>
				<input type="email" placeholder="Digite seu e-mail" aria-label="E-mail" required />
				<button type="submit">Assinar</button>
			</form>
		</div>
		<hr class="rule" />
		<div class="contact">
			<div class="contact-head">
				<h2>Fale com o NUR</h2>
				<a class="back-top" href="#">Voltar ao topo ↑</a>
			</div>
			<dl class="contact-grid">
				<div>
					<dt>Contato geral</dt>
					<dd><a href="mailto:contato.nur@unifesp.br">contato.nur@unifesp.br</a></dd>
					<dt>Integrantes</dt>
					<dd><a href="{base}/integrantes">Ver todos os integrantes</a></dd>
				</div>
				<div>
					<dt>Cursos e atividades</dt>
					<dd><a href="{base}/cursos/2026">Cursos do NUR</a></dd>
					<dt>Redes</dt>
					<dd class="social-row">
						<a
							href="https://www.youtube.com/@nur-unifesp105"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="YouTube"><YouTubeIcon /></a
						>
						<a
							href="https://www.instagram.com/nurunifesp/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram"><InstagramIcon /></a
						>
						<a
							href="https://www.facebook.com/groups/nurunifesp/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Facebook"><FacebookIcon /></a
						>
					</dd>
				</div>
			</dl>
		</div>
		<div class="legal-bar">
			<span>NUR — Núcleo de Estudos, UNIFESP &copy; 2026</span>
			<span>Layout em teste — imagens e textos de exemplo</span>
		</div>
	</div>
</footer>

<style>
	.footer-links {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
		padding: 40px 0;
	}
	.link-box {
		border: var(--rule);
		padding: 26px 30px;
		display: flex;
		flex-direction: column;
		gap: 6px;
		transition: background 0.15s;
	}
	.link-box:hover {
		background: var(--paper-raised);
	}
	.link-box strong {
		font-family: var(--font-headline);
		font-size: 1.5rem;
		font-weight: 700;
	}
	.link-box span {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		color: var(--ink-soft);
	}
	.rule {
		border: none;
		border-top: var(--rule);
		margin: 0;
	}
	.newsletter {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 30px;
		padding: 34px 0;
		flex-wrap: wrap;
	}
	.newsletter-left {
		display: flex;
		align-items: center;
		gap: 20px;
	}
	.newsletter-left svg {
		width: 48px;
		height: 48px;
		flex: none;
		color: var(--accent);
	}
	.newsletter h2 {
		font-family: var(--font-headline);
		font-size: 1.4rem;
	}
	.newsletter p {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: var(--ink-soft);
		margin: 6px 0 0;
	}
	.newsletter-form {
		display: flex;
		gap: 0;
		flex: none;
	}
	.newsletter-form input {
		font-family: var(--font-mono);
		font-size: 0.85rem;
		border: var(--rule);
		border-right: none;
		padding: 14px 16px;
		width: 260px;
		background: var(--paper-raised);
		color: var(--ink);
	}
	.newsletter-form input::placeholder {
		color: var(--ink-faint);
	}
	.newsletter-form button {
		font-family: var(--font-mono);
		font-weight: 400;
		font-size: 0.85rem;
		border: var(--rule);
		background: var(--accent);
		color: #fff;
		padding: 14px 22px;
		cursor: pointer;
	}
	.newsletter-form button:hover {
		background: var(--accent-strong);
	}
	.contact {
		padding: 34px 0 22px;
	}
	.contact-head {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}
	.contact-head h2 {
		font-family: var(--font-headline);
		font-size: 1.3rem;
	}
	.back-top {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		color: var(--ink-soft);
	}
	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
		margin-top: 20px;
		padding-top: 20px;
		border-top: var(--rule);
	}
	.contact-grid dt {
		font-family: var(--font-mono);
		font-size: 0.76rem;
		color: var(--ink-soft);
		margin-bottom: 4px;
	}
	.contact-grid dd {
		margin: 0 0 18px;
		font-family: var(--font-headline);
	}
	.contact-grid dd a:hover {
		color: var(--accent);
	}
	.social-row {
		display: flex;
		gap: 14px;
		align-items: center;
	}
	.social-row :global(svg) {
		width: 20px;
		height: 20px;
	}
	.legal-bar {
		border-top: var(--rule);
		padding-top: 16px;
		margin-top: 6px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 8px;
		font-family: var(--font-mono);
		font-size: 0.74rem;
		color: var(--ink-faint);
	}

	@media (max-width: 900px) {
		.footer-links {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 640px) {
		.newsletter {
			flex-direction: column;
			align-items: flex-start;
		}
		.newsletter-form {
			width: 100%;
		}
		.newsletter-form input {
			width: 100%;
		}
		.contact-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
