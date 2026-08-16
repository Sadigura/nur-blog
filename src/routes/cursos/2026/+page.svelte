<script lang="ts">
	import CourseCard from '$lib/components/CourseCard.svelte';
	import { COURSES_2026 } from '$lib/data/courses';

	const TINT_CYCLE = [
		{ bg: 'var(--tint-a)', ink: 'var(--tint-a-ink)' },
		{ bg: 'var(--tint-b)', ink: 'var(--tint-b-ink)' },
		{ bg: 'var(--tint-c)', ink: 'var(--tint-c-ink)' }
	];
</script>

<svelte:head>
	<title>Cursos do NUR — 2026</title>
</svelte:head>

<section class="wrap section-block">
	<div class="section-nav"><span class="label">Cursos do NUR — 2026</span></div>
	<div class="course-grid">
		{#each COURSES_2026 as course, i (course.slug)}
			<CourseCard {course} tint={TINT_CYCLE[i % TINT_CYCLE.length]} />
		{/each}
	</div>
</section>

<style>
	.section-block {
		padding-top: 40px;
		padding-bottom: 60px;
	}
	.section-nav {
		font-family: var(--font-mono);
		font-size: 0.82rem;
		color: var(--ink-soft);
		padding-bottom: 14px;
		border-bottom: var(--rule);
		margin-bottom: 24px;
	}
	.section-nav .label {
		color: var(--ink);
	}
	.course-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
	}

	@media (max-width: 800px) {
		.course-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
