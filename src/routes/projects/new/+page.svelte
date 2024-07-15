<script>
	import { Input } from '$lib/components';
</script>

<div class="flex h-full w-full flex-col p-2">
	<div class="w-full">
		<form
			action="?/create"
			method="POST"
			class="flex w-full flex-col items-center space-y-2"
			enctype="multipart/form-data"
		>
			<h3 class="text-3xl font-bold">Create Project</h3>
			<p class="text lg mt-2">
				Please provide the name, tagline, link and description for this project
			</p>
			<!-- <div class="divider"></div> -->
			<Input id="name" label="Project Name" />
			<Input id="tagline" label="Project Tagline" />
			<Input id="url" label="Project URL" />
			<div class="form-control w-full max-w-lg">
				<label for="description" class="label pb-1 font-medium">
					<span class="label-text">Project Description</span>
				</label>
				<textarea
					name="description"
					id="description"
					class="textarea textarea-bordered h-24 resize-none"
				/>
			</div>
			<div class="form-control w-full max-w-lg">
				<label for="thumbnail" class="label pb-1 font-medium">
					<span class="label-text">Project Thumbnail</span>
				</label>
				<input
					type="file"
					name="thumbnail"
					id="thumbnail"
					class="file-input file-input-bordered w-full max-w-lg"
				/>
			</div>

			<div class="w-full max-w-lg pt-3">
				<button type="submit" class="btn btn-primary w-full max-w-lg">Create Project</button>
			</div>
		</form>
	</div>
</div>
