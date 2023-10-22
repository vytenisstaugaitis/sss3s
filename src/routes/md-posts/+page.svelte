<script>
    import { page } from '$app/stores'
    import { formatDate } from '$lib/utils'

	export let data
</script>

<h1>Posts</h1>
<div class="mt-3 lg:mt-5 flex gap-3">
	{#each data.posts as post}
		<a href={$page.route.id+'/'+post.slug} alt="" class="p-4 border border-gray-700 rounded-lg lg:hover:bg-[rgba(255,255,255,0.01)]">
			<h6>{post.title}</h6>
			<p class="mt-1 text-xs lg:text-sm">{formatDate(post.date)}</p>
			<p class="mt-3 text-sm">{post.description}</p>
		</a>
	{/each}
</div>