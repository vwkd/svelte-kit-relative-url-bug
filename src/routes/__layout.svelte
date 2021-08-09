<svelte:head>
	<!-- needed because GitHub Pages hosts on subpath -->
	<base href="/svelte-kit-relative-url-bug/">
</svelte:head>

<header>
	<p>Relative</p>
	<nav>
		<a href=".">Home</a>
		<a href="about">About</a>
	</nav>

	<p>Absolute</p>
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
	</nav>
</header>

<main>
	<slot />
</main>
