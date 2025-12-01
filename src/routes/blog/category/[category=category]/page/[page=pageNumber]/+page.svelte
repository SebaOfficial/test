<script lang="ts">
	import Page from '$lib/components/blog/Page.svelte';

	const { data } = $props();
	const articles = $derived(data.articles);
	const totalPages = $derived(data.totalPages);
	const currentPage = $derived(data.currentPage);
	const category = $derived(data.category);
</script>

<Page {articles} {currentPage} currentCategory={category} {totalPages} paginationTemplateHref="/blog/category/{category}/page/:page" />
