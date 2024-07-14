<script>
	import '../app.css';
	export let data;
</script>

<div class="min-h-full">
	<nav class="navbar border-b bg-base-100">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost text-xl normal-case">Showcase</a>
		</div>
		<div class="flex-none">
			{#if !data.user}
				<div class="drowpdown dropdown-end">
					<a href="/login" class="btn btn-primary">login</a>
					<a href="/register" class="btn btn-secondary">register</a>
				</div>
			{:else}
				<div class="dropdown dropdown-end mr-4">
					<a href="/projects/new" class="btn btn-outline btn-primary">Add Project</a>
				</div>

				<div class="dropdown dropdown-end">
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label tabindex="0" class="avatar btn btn-circle btn-ghost">
						<div class="w-10 rounded-full">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzgup07l-IhHq_3j2u1iEK9tJWGJGKInZWA&s0"
								alt="user avatar"
							/>
						</div>
					</label>
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<ul
						tabindex="0"
						class="menu-compact menu dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
					>
						<li><a href="/my/projects">My Projects</a></li>
						<li><a href="/my/settings">Settings</a></li>
						<li>
							<form action="/logout" method="POST">
								<button type="submit" class="w-fulll text-start">Logout</button>
							</form>
						</li>
					</ul>
				</div>
			{/if}
		</div>
	</nav>
	<div class="py-10">
		<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
			<slot />
		</div>
	</div>
</div>
