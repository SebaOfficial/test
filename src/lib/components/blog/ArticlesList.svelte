<script lang="ts">
	import type { Article } from '$lib/types/Blog';
	import ArticlesListElement from './ArticlesListElement.svelte';

	const { articles }: { articles: Article[] } = $props();

	let groupedArticles: [string, Article[]][] = $derived(
		Object.entries(
			articles.reduce((groups: Record<string, Article[]>, article) => {
				const year = article.fm.created.getFullYear().toString();
				(groups[year] ??= []).push(article);
				return groups;
			}, {})
		).sort(([yearA], [yearB]) => parseInt(yearB) - parseInt(yearA)) // sort years descending
	);
</script>

<section itemscope itemtype="https://schema.org/Blog">
	<meta itemprop="name" content="Blog Articles" />

	<div class="flex flex-col items-center gap-6 py-4">
		{#each groupedArticles as [year, articles] (year)}
			<div class="my-4 md:my-0" style="">{year}</div>
			{#each articles as article (article.slug)}
				<ArticlesListElement {article} />
			{/each}
		{/each}
	</div>
</section>
