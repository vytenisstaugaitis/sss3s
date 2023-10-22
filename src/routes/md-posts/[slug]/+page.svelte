<script>
	import { formatDate } from '$lib/utils'

	export let data
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p class="text-xs lg:text-sm">Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<div class="mt-1 flex gap-3">
		{#each data.meta.categories as category}
			<span class="text-xs lg:text-sm">&num;{category}</span>
		{/each}
	</div>

	<div class="mt-5 lg:mt-8 content">
		<svelte:component this={data.content} />
	</div>

	<div class="mt-8">
		<a href="https://github.com/vytenisstaugaitis/sss3s/edit/main/src/posts/{data.slug}.md" class="inline-flex gap-1.5 items-center text-sm underline" target="_blank">
			<svg class="w-4" width="50" height="50" viewBox="0 0 24 24" stroke="var(--text)" fill="none">
				<path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
				<polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
			</svg>
			Edit this post on GitHub
		</a>
	</div>
</article>