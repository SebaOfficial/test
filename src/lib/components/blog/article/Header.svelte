<script lang="ts">
	import { estimateReadTime, dateNormalizer } from '$lib/utils';
	import type { Article } from '$lib/types/Blog';

	const { article }: { article: Article } = $props();
</script>

<header>
	<h1 class="mb-2 text-3xl font-extrabold">{article.fm.title}</h1>
	<p class="mb-4 text-sm text-gray-600">{article.fm.description}</p>

	<div class="flex items-center gap-4 text-sm text-gray-500">
		<div class="flex items-center gap-3">
			<enhanced:img
				src={article.fm.author.images[1]}
				alt={article.fm.author.name}
				class="h-10 w-10 rounded-full object-cover"
				width="40"
				height="40"
				loading="lazy"
			/>
			<div>
				<div class="font-semibold">{article.fm.author.name}</div>
				<time datetime="2025-12-02">{dateNormalizer(article.fm.created)}</time>
			</div>
		</div>
		<div class="ml-auto">Estimated read: <strong>{estimateReadTime(article.html)} min</strong></div>
	</div>
</header>
