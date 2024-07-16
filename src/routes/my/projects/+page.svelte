<script>
	import MyProjectItem from '$lib/components/MyProjectItem.svelte';

	export let data;
</script>

<h2 class="text-3xl font-bold">My Projects</h2>
<div class="items-centered mt-4 flex w-full flex-col">
	{#if data.projects.length === 0}
		<p class="text-center text-3xl">🙁</p>
		<p class="text-center text-3xl">Looks like you don't have any projects</p>
		<a href="/projects/new" class="btn btn-primary mt-4 max-w-md">Add One</a>
	{:else}
		{#each data.projects as project}
			<MyProjectItem {project} />
			<div class="divider mb-2 mt-0" />
		{/each}
	{/if}
</div>
