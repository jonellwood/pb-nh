<script>
	import { Input } from '$lib/components';
	export let form;
</script>

<div class="flex h-full w-full flex-col items-center">
	<h2 class="text-base-context mt-2 text-center text-3xl font-bold tracking-tight">
		Login to your account
	</h2>
	<p class="mt-1 text-center">
		Or <a href="/register" class="font-medium text-primary hover:cursor-pointer hover:underline"
			>sign up</a
		> if you don't already have an account.
	</p>
	<form action="?/login" method="POST" class="flex w-full flex-col items-center space-y-2 pt-4">
		<Input
			type="email"
			label="Email"
			id="email"
			value={form?.data?.email ?? ''}
			errors={form?.errors?.email}
		/>
		<Input type="password" label="Password" id="password" errors={form?.errors?.password} />
		<div class="w-full max-w-lg">
			<a
				href="/reset-password"
				class="font-medium text-primary hover:cursor-pointer hover:underline"
				>Forgot your password?</a
			>
		</div>

		<div class="w-full max-w-md pt-2">
			<button type="submit" class="btn btn-primary w-full">Login</button>
		</div>
		{#if form?.notVerified}
			<div role="alert" class="alert alert-error w-full max-w-lg shadow-lg">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 shrink-0 stroke-current"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
				<span>Please verify your email address before logging in.</span>
			</div>
		{/if}
	</form>
</div>
