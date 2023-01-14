<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
</script>

<div>
	<header>
		<div>
			<p>
				{#if $page.data.session}
					{#if $page.data.session.user?.image}
						<span style="background-image: url('{$page.data.session.user.image}')" />
					{/if}
					<span>
						<small>Signed in as</small><br />
						<strong>{$page.data.session.user?.email ?? $page.data.session.user?.name}</strong>
					</span>
					<a href="/auth/signout" data-sveltekit-preload-data="off">Sign out</a>
				{:else}
					<span>You are not signed in</span>
					<a href="/auth/signin" data-sveltekit-preload-data="off">Sign in</a>
				{/if}
			</p>
		</div>
		<nav>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/protected">Protected</a></li>
			</ul>
		</nav>
	</header>
	<slot />
</div>
