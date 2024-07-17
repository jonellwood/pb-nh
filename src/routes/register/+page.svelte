<script>
	import { Input } from '$lib/components';
	export let form;
</script>

<div class="flex h-full w-full flex-col items-center">
	<h2 class="text-base-context mt-2 text-center text-3xl font-bold tracking-tight">
		Register for an account
	</h2>
	<p class="mt-1 text-center">
		Or <a href="/login" class="font-medium text-primary hover:cursor-pointer hover:underline"
			>sign in</a
		> if you already have an account.
	</p>
	<form action="?/register" method="POST" class="flex w-full flex-col items-center space-y-2 pt-4">
		<Input
			type="name"
			label="Name"
			id="name"
			value={form?.data?.name ?? ''}
			errors={form?.errors?.name}
		/>
		<Input
			type="email"
			label="Email"
			id="email"
			value={form?.data?.email ?? ''}
			errors={form?.errors?.email}
		/>
		<Input type="password" label="Password" id="password" errors={form?.errors?.password} />
		<Input
			type="password"
			label="Password Confirm"
			id="passwordConfirm"
			errors={form?.errors?.passwordConfirm}
		/>
		<div class="w-full max-w-lg pt-2">
			<button type="submit" class="btn btn-primary w-full">Register</button>
		</div>
	</form>
</div>
