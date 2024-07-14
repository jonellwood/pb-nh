<script>
	// export let data;
	import { page } from '$app/stores';

	const navigation = [
		{ name: 'Profile', href: '/my/settings/profile' },
		{ name: 'Account', href: '/my/settings/account' },
		{ name: 'Security', href: '/my/settings/security' }
	];
</script>

<div class="h-full w-full px-2">
	<h3 class="text-2xl font-medium">Settings</h3>
	<div class="divider"></div>
</div>
<div class="flex h-full w-full space-x-4">
	<ul class="menu w-56 rounded-box bg-base-100 p-2">
		{#each navigation as navItem}
			<li>
				<a
					href={navItem.href}
					class="font-medium {$page.url.pathname === navItem.href ? 'active' : ''}"
					>{navItem.name}</a
				>
			</li>
		{/each}
	</ul>
	<div class="w-full">
		<slot />
	</div>
</div>
