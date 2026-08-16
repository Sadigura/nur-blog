<script lang="ts">
	let { tint, id }: { tint: string; id: string } = $props();
</script>

<svg
	viewBox="0 0 120 75"
	preserveAspectRatio="xMidYMid slice"
	xmlns="http://www.w3.org/2000/svg"
	role="img"
	aria-label="Padrão geométrico islâmico de estrela de oito pontas"
>
	<defs>
		<pattern {id} width="30" height="30" patternUnits="userSpaceOnUse">
			<rect width="30" height="30" fill={tint} />
			<g stroke="#000" stroke-width="1" fill="none" opacity="0.55">
				<rect x="5" y="5" width="20" height="20" />
				<rect x="5" y="5" width="20" height="20" transform="rotate(45 15 15)" />
			</g>
		</pattern>
	</defs>
	<rect width="120" height="75" fill="url(#{id})" />
</svg>
