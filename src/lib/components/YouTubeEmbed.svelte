<script lang="ts">
	let { id, title }: { id: string; title: string } = $props();
</script>

<div class="yt-embed">
	<iframe
		src="https://www.youtube-nocookie.com/embed/{id}"
		{title}
		loading="lazy"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen
	></iframe>
</div>

<style>
	.yt-embed {
		position: relative;
		aspect-ratio: 16 / 9;
		background: var(--ink);
		margin: 8px 0 30px;
		border: var(--rule);
	}
	.yt-embed iframe {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		border: none;
	}
</style>
