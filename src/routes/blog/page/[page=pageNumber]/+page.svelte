<script lang="ts">
	import Page from '$lib/components/blog/Page.svelte';

	const { data } = $props();
	const articles = $derived(data.articles);
	const totalPages = $derived(data.totalPages);
	const currentPage = $derived(data.currentPage);
</script>

<Page {articles} {currentPage} {totalPages} paginationTemplateHref="/blog/page/:page" />
