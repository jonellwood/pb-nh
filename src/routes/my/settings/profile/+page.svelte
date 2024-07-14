<script>
	import { invalidateAll } from '$app/navigation';
	import { enhance, applyAction } from '$app/forms';
	import { Icon, Pencil } from 'svelte-hero-icons';
	import { Input } from '$lib/components';
	import { getImageURL } from '$lib/utils';
	export let data;
	let loading;

	$: loading = false;

	const showPreview = (event) => {
		const target = event.target;
		const files = target.files;
		console.log('Files are : ', files);
		if (files.length > 0) {
			const src = URL.createObjectURL(files[0]);
			const preview = document.getElementById('avatar-preview');
			preview.src = src;
		}
	};

	const submitUpdateProfile = (event) => {
		loading = true;
		return async ({ result }) => {
			switch (result.type) {
				case 'success':
					await invalidateAll();
					break;
				case 'error':
					break;
				default:
					await applyAction(result);
			}
			loading = false;
		};
	};
</script>

<div class="flex h-full w-full flex-col">
	<form
		action="?/updateProfile"
		method="POST"
		class="flex w-full flex-col space-y-2"
		enctype="multipart/form-data"
		use:enhance={submitUpdateProfile}
	>
		<h3 class="text-2xl font-medium">Update Profile</h3>
		<div class="form-control w-full max-w-lg">
			<label for="avatar" class="label pb-1 font-medium">
				<span class="label-text">Profile Picture</span>
			</label>
			<label for="avatar" class="avatar w-32 rounded-full hover:cursor-pointer">
				<label for="avatar" class="absolute -bottom-0.5 -right-0.5 hover:cursor-pointer">
					<span class="btn btn-circle btn-secondary btn-sm">
						<Icon src={Pencil} class="h-4 w-4" />
					</span>
				</label>
				<div class="w-32 rounded-full">
					<img
						src={data.user?.avatar
							? getImageURL(data.user?.collectionId, data.user?.id, data.user?.avatar)
							: `https://ui-avatars.com/api/?name=${data.user?.name}`}
						alt="user avatar"
						id="avatar-preview"
					/>
				</div>
			</label>
			<input
				type="file"
				name="avatar"
				id="avatar"
				value=""
				accept="image/*"
				hidden
				on:change={showPreview}
				disabled={loading}
			/>
		</div>
		<Input
			id="name"
			name="name"
			label="Name"
			value={data?.user?.name}
			type="text"
			disabled={loading}
		/>
		<div class="w-full max-w-lg pt-3">
			<button type="submit" class="btn btn-primary w-full max-w-lg" disabled={loading}
				>Update Profile</button
			>
		</div>
	</form>
</div>
