<script>
    import { page } from '$app/stores'
    import { formatDate } from '$lib/utils'

	export let data
</script>

<h1>Posts</h1>
<div class="mt-3 lg:mt-5">
	{#each data.posts as post}
		<div>
			<a href={$page.route.id+'/'+post.slug} class="font-bold">{post.title}</a>
			<p class="mt-1 text-xs lg:text-sm">{formatDate(post.date)}</p>
			<p class="mt-3 text-sm">{post.description}</p>
		</div>
	{/each}
</div>