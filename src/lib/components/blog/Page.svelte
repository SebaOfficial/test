<script lang="ts">
	import ArticlesList from '$lib/components/blog/ArticlesList.svelte';
	import Pagination from '$lib/components/blog/Pagination.svelte';
	import FilterList from '$lib/components/blog/filter/FilterList.svelte';
	import { page } from '$app/state';
	import { onMount, tick } from 'svelte';
	import type { Article } from '$lib/types/Blog';
	import { browser, building } from '$app/environment';

	type Props = {
		articles: Article[];
		currentPage: number;
		currentCategory?: string;
		totalPages: number;
		paginationTemplateHref: string;
	};
	const { articles, currentPage, currentCategory, totalPages, paginationTemplateHref }: Props =
		$props();

	$effect(() => {
		if (browser) {
			console.log('Running in browser on Page.svelte');
		}
	});
</script>

<section class="mx-auto mt-12 max-w-5xl px-4 text-center" aria-labelledby="blog-title">
	<h1 id="blog-title" class="mb-4 text-4xl font-bold tracking-tight">Blog</h1>
	<p class="mb-8 text-lg text-gray-600">Ecco i nostri ultimi articoli</p>
</section>

<div class="mx-auto mb-12 max-w-5xl px-4">
	<FilterList activeCategory={currentCategory} />
</div>

<section class="mx-auto max-w-5xl space-y-12 px-4 pb-16">
	<ArticlesList {articles} />

	<div class="flex justify-center">
		<Pagination pagesNumber={totalPages} {currentPage} {paginationTemplateHref} />
	</div>
</section>
