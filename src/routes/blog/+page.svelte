<script lang="ts">
	import { browser } from '$app/environment';
	import Page from '$lib/components/blog/Page.svelte';

	const { data } = $props();
	const articles = $derived(data.articles);
	const totalPages = $derived(data.totalPages);

	$effect(() => {
		if(browser) {
			console.log("Running in browser on +page.svelte");
		}
	});
</script>

<Page {articles} currentPage={1} {totalPages} paginationTemplateHref="/blog/page/:page" />
