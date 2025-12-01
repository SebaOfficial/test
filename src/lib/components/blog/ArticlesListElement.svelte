<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Article } from '$lib/types/Blog';
	import { dateNormalizer } from '$lib/utils';

	const { article }: { article: Article } = $props();
</script>

<a href={resolve(`/blog/${article.slug}`)}>
	<article
		itemtype="https://schema.org/BlogPosting"
		itemprop="blogPost"
		class="index-post group relative flex w-full transform flex-col overflow-hidden shadow-xl transition duration-500 hover:shadow-2xl md:w-3xl md:rounded-lg md:hover:scale-105"
	>
		<enhanced:img
			src={article.cover}
			alt="{article.fm.title}'s Cover"
			class="absolute inset-0 h-full w-full object-cover blur-md"
		/>
		<div class="bg-opacity-50 absolute top-2 right-2 rounded bg-black/20 px-2 py-1 text-sm text-white">
			{article.fm.category}
		</div>
		<div class="relative p-6 text-white">
			<time
				class="dt-published opacity-80 group-hover:font-semibold"
				datetime={article.fm.created.toISOString()}
				itemprop="datePublished"
			>
				{dateNormalizer(article.fm.created)}
			</time>
			<time
				class="dt-updated hidden"
				datetime={article.fm.updated.toISOString()}
				itemprop="dateModified"
			>
				{dateNormalizer(article.fm.updated)}
			</time>
			<h2
				class="line-clamp-2 text-2xl font-bold group-hover:font-extrabold"
				itemprop="name headline"
			>
				{article.fm.title}
			</h2>
			<p class="line-clamp-2 text-lg group-hover:font-semibold" itemprop="description">
				{article.fm.summary}
			</p>
		</div>
	</article>
</a>
