<script lang="ts">
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import Breadcrumbs from '$lib/components/blog/article/Breadcrumbs.svelte';
	import Header from '$lib/components/blog/article/Header.svelte';

	const { data } = $props();
	const { article, slug } = data;
	const { fm, html, cover } = article;
	const canonicalUrl = `${PUBLIC_BASE_URL}/blog/${slug}`;

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': canonicalUrl
		},
		headline: fm.title,
		description: fm.description,
		image: [cover],
		author: {
			'@type': 'Person',
			name: fm.author
		},
		publisher: {
			'@type': 'Organization',
			name: 'Studio Lisi',
			logo: {
				'@type': 'ImageObject',
				url: `${PUBLIC_BASE_URL}/logo.png`
			}
		},
		datePublished: fm.created.toISOString(),
		dateModified: fm.updated.toISOString()
	};
</script>

<svelte:head>
	<!-- SEO: title, description and canonical -->
	<title>{fm.title} | Studio Lisi</title>
	<meta name="description" content={fm.description} />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph + Twitter -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content={fm.title} />
	<meta property="og:description" content={fm.description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:site_name" content="Studio Lisi" />
	<meta property="og:image" content={cover} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@example" />
	<meta name="twitter:title" content={fm.title} />
	<meta name="twitter:description" content={fm.description} />
	<meta name="twitter:image" content={cover} />

	<!-- JSON-LD -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
	<Breadcrumbs title={fm.title} />

	<article class="prose lg:prose-xl dark:prose-invert">
		<Header {article} />

		<!-- Hero image with responsive srcset -->
		<enhanced:img
			src={cover}
			alt={fm.title}
			width="1600"
			height="900"
			class="mt-3 w-full rounded-md object-cover"
			loading="lazy"
		/>

		<div class="prose prose-gray max-w-none">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html html}
		</div>
	</article>
</div>
