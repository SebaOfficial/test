<script lang="ts">
	import { TagOutline } from 'flowbite-svelte-icons';
	import { page } from '$app/state';
	import { categories, tags } from '$lib/data/blog';
	import { goto, pushState, replaceState } from '$app/navigation';
	import FilterGroup from './FilterGroup.svelte';
	import { onMount, tick } from 'svelte';
	import { slide } from 'svelte/transition';
	import { browser, building } from '$app/environment';

	const { activeCategory }: { activeCategory?: string } = $props();

	let showFilters = $state(false);

	let activeTags: (typeof tags)[number][] = $state([]);

	$effect(() => {
		const url = page.url;

		if (activeTags.length > 0) {
			url.searchParams.set('tags', activeTags.join(','));
		} else {
			url.searchParams.delete('tags');
		}

		tick().then(() => pushState(url, {}));
	});

	// TODO: load tags
	onMount(() => {
		if (browser) {
			const url = page.url;
			const tagsParam = url.searchParams.get('tags');
			if (tagsParam) {
				activeTags = tagsParam.split(',').filter((tag) => tags.includes(tag));
			}
		}
	});

	$effect(() => {
		if (browser) {
			console.log('Running in browser on FilterList.svelte');
		}
	});

	const toggleCategory = (category: string) => {
		goto(activeCategory == category ? '/blog/' : `/blog/category/${category}`);
	};

	const toggleTag = (tag: string) => {
		if (activeTags.includes(tag)) {
			activeTags = activeTags.filter((t) => t !== tag);
		} else {
			activeTags = [...activeTags, tag];
		}
	};

	const toggleFilters = () => (showFilters = !showFilters);
</script>

<div class="relative mx-auto w-full max-w-4xl rounded-xl p-6 shadow-lg ring-1 ring-gray-200">
	<button
		onclick={toggleFilters}
		type="button"
		class="flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 hover:bg-gray-50 focus:outline-none active:scale-[0.98]"
		aria-label="Apri i filtri"
		aria-expanded={showFilters}
		aria-controls="blog-filters"
	>
		<span class="font-medium text-gray-700">Filtra Articoli</span>
		<TagOutline class="h-5 w-5 text-gray-600" />
	</button>

	{#if showFilters}
		<div id="blog-filters" class="mt-6 space-y-8 rounded-2xl" transition:slide>
			<FilterGroup
				name="Categorie"
				list={categories}
				onToggle={toggleCategory}
				activeFilters={activeCategory ? [activeCategory] : undefined}
			/>
			<FilterGroup name="Tags" list={tags} onToggle={toggleTag} activeFilters={activeTags} />
		</div>
	{/if}
</div>
