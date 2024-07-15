<script>
	import { getImageURL } from '$lib/utils';
	export let data;
</script>

<div class="mt-4 flex w-full flex-col">
	<div class="avatar">
		<div class="w-20 rounded">
			<img
				src={data.project?.thumbnail
					? getImageURL(data.project.collectionId, data.project.id, data.project.thumbnail, '80x80')
					: `https://via.placeholder.com/80/4506CB/FFFFFF/?text=${data.project.name}`}
				alt="project thumbnail"
			/>
		</div>
	</div>
	<h1 class="mt-4 text-2xl font-bold">
		{data.project?.name}
	</h1>
	<p class="mt-2 text-2xl font-light">{data?.project?.tagline}</p>
	<p>{data.project?.description}</p>
</div>
