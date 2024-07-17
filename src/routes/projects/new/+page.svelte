<script>
	import { Input, TextArea } from '$lib/components';
	export let form;
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
			<Input
				id="name"
				label="Project Name"
				value={form?.data?.name ?? ''}
				errors={form?.errors?.name}
			/>
			<Input
				id="tagline"
				label="Project Tagline"
				value={form?.data?.tagline ?? ''}
				errors={form?.errors?.tagline}
			/>
			<Input
				id="url"
				label="Project URL"
				value={form?.data?.url ?? ''}
				errors={form?.errors?.url}
			/>
			<TextArea
				id="description"
				label="Project Description"
				value={form?.data?.description ?? ''}
				errors={form?.errors?.description}
			/>
			<Input
				id="thumbnail"
				type="file"
				label="Project Thumbnail"
				errors={form?.errors?.thumbnail}
			/>

			<div class="w-full max-w-lg pt-3">
				<button type="submit" class="btn btn-primary w-full max-w-lg">Create Project</button>
			</div>
		</form>
	</div>
</div>
