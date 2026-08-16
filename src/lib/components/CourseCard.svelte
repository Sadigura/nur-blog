<script lang="ts">
	import { base } from '$app/paths';
	import CategoryPattern from './CategoryPattern.svelte';
	import type { Course } from '$lib/data/courses';

	let {
		course,
		tint = { bg: 'var(--tint-a)', ink: 'var(--tint-a-ink)' }
	}: {
		course: Course;
		tint?: { bg: string; ink: string };
	} = $props();
</script>

<article class="course-card" style="--cat-tint: {tint.bg}; --cat-ink: {tint.ink};">
	<div class="course-media">
		{#if course.modality}
			<div class="course-tags">
				<span class="tag-dark">{course.modality}</span>
				{#if course.year}
					<span class="tag-light">{course.year}</span>
				{/if}
			</div>
		{/if}
		{#if course.image}
			<img src="{base}{course.image}" alt="" />
		{:else}
			<CategoryPattern tint={tint.bg} id="pattern-course-{course.slug}" />
		{/if}
	</div>
	<div class="course-body">
		<h2>
			{#if course.href}
				<a class="stretched-link" href="{base}{course.href}">{course.title}</a>
			{:else}
				{course.title}
			{/if}
		</h2>
		<div class="course-byline">{course.professor}</div>
	</div>
	{#if course.href}
		<div class="course-foot">
			<span class="read-more">Ler mais →</span>
		</div>
	{/if}
</article>

<style>
	.course-card {
		display: flex;
		flex-direction: column;
		position: relative;
	}
	.stretched-link {
		color: inherit;
		text-decoration: none;
	}
	.stretched-link::after {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 1;
	}
	.course-media {
		aspect-ratio: 21 / 9;
		background: var(--ink);
		position: relative;
		overflow: hidden;
	}
	.course-media img,
	.course-media :global(svg) {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.course-tags {
		position: absolute;
		top: 14px;
		left: 14px;
		display: flex;
		z-index: 2;
	}
	.tag-dark,
	.tag-light {
		font-family: var(--font-mono);
		font-size: 0.68rem;
		font-weight: 400;
		letter-spacing: 0.04em;
		padding: 6px 12px;
	}
	.tag-dark {
		background: #000;
		color: #fff;
	}
	.tag-light {
		background: var(--paper);
		color: var(--ink);
	}
	.course-body {
		background: var(--cat-tint);
		color: var(--cat-ink);
		padding: 24px;
		flex: 1;
	}
	.course-body h2 {
		font-family: var(--font-headline);
		font-size: 1.3rem;
		line-height: 1.25;
		color: var(--cat-ink);
	}
	.course-byline {
		font-family: var(--font-mono-bold);
		font-weight: 700;
		font-size: 0.78rem;
		color: var(--cat-ink);
		opacity: 0.85;
		padding-top: 12px;
		margin-top: 14px;
		border-top: 1px solid var(--cat-ink);
	}
	.course-foot {
		background: var(--cat-tint);
		display: flex;
		justify-content: flex-end;
		padding: 0 24px 20px;
	}
	.read-more {
		font-family: var(--font-mono);
		font-size: 0.78rem;
		font-weight: 700;
		white-space: nowrap;
		color: var(--cat-ink);
	}
</style>
