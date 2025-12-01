<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="sticky start-0 top-0 z-20 w-full bg-white">
	<NavBar />
</header>

<main class="flex min-h-150 flex-col" itemscope itemprop="mainEntityOfPage">
	{@render children()}
</main>

<footer>
	<Footer />
</footer>
