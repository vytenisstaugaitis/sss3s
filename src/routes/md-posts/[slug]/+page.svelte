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
</article>