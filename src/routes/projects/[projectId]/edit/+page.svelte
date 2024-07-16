<script>
	import { Icon, Trash, Pencil } from 'svelte-hero-icons';
	import { Input } from '$lib/components';
	import { getImageURL } from '$lib/utils';
	export let data;
</script>

<div class="flex h-full w-full flex-col p-2">
	<div class="w-full">
		<form
			method="POST"
			action="?/updateProject"
			class="flex w-full flex-col items-center space-y-2"
			enctype="multipart/form-data"
		>
			<h3 class="text-3xl font-bold">Edit {data.project.name}</h3>
			<Input id="name" value={data.project.name ?? ''} label="Project Name" />
			<Input id="tagline" value={data.project.tagline ?? ''} label="Project Tagline" />
			<Input id="url" value={data.project.url ?? ''} label="Project URL" />
			<div class="form-control w-full max-w-lg">
				<label for="description" class="label pb-1 font-medium">
					<span class="label-text">Project Description</span>
				</label>
				<textarea
					name="description"
					class="textarea textarea-bordered h-24 resize-none"
					value={data.project.description ?? ''}
				/>
			</div>
			<div class="form-control w-full max-w-lg">
				<label for="thumbnail" class="label pb-1 font-medium">
					<span class="label-text">Project Thumbnail</span>
				</label>
				{#if data.project.thumbnail}
					<label for="thumbnail" class="avatar w-20 hover:cursor-pointer">
						<label for="thumbnail" class="absolute -right-1.5 -top-1.5 hover:cursor-pointer">
							<button formaction="?/deleteThumbnail" class="btn btn-circle btn-error btn-sm">
								<Icon src={Trash} class="h-4 w-4 text-white" />
							</button>
							<!-- <span class="btn btn-circle btn-secondary btn-sm">
                                <Icon src={Pencil} class="h-4 w-4" />
                            </span> -->
						</label>
						<div class="w-20 rounded">
							<img
								src={getImageURL(
									data.project.collectionId,
									data.project.id,
									data.project.thumbnail,
									'80x80'
								)}
								alt="project thumbnail"
								id="thumbnail-preview"
							/>
						</div>
					</label>
				{/if}
				<input
					type="file"
					name="thumbnail"
					id="thumbnail"
					class="file-input file-input-bordered w-full max-w-lg"
				/>
				<div class="w-full max-w-lg pt-3">
					<button type="submit" class="btn btn-primary w-full max-w-lg">Save Changes</button>
				</div>
			</div>
		</form>
	</div>
</div>
