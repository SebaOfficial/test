<script lang="ts">
	import { goto } from '$app/navigation';
	import { Pagination } from 'flowbite-svelte';
	import { ChevronLeftOutline, ChevronRightOutline } from 'flowbite-svelte-icons';

	type Props = {
		pagesNumber: number;
		currentPage: number;
		/** Template string where `:page` will be replaced with the page number */
		paginationTemplateHref: string;
	};

	const { pagesNumber, currentPage, paginationTemplateHref }: Props = $props();

	let pages = $derived(
		Array.from({ length: pagesNumber }, (_, i) => {
			return {
				name: (i + 1).toString(),
				href: paginationTemplateHref.replace(':page', (i + 1).toString()),
				active: i + 1 === currentPage
			};
		})
	);

	const previous = () => {
		if (currentPage > 1) {
			const prevPage = currentPage - 1;
			const href = paginationTemplateHref.replace(':page', prevPage.toString());
			goto(href);
		}
	};

	const next = () => {
		if (currentPage < pagesNumber) {
			const nextPage = currentPage + 1;
			const href = paginationTemplateHref.replace(':page', nextPage.toString());
			goto(href);
		}
	};
</script>

<div class="flex flex-col items-center justify-center gap-3">
	<Pagination {pages} {previous} {next}>
		{#snippet prevContent()}
			<span class="sr-only">Pagina Precedente</span>
			<ChevronLeftOutline class="h-5 w-5" />
		{/snippet}
		{#snippet nextContent()}
			<span class="sr-only">Pagina Successiva</span>
			<ChevronRightOutline class="h-5 w-5" />
		{/snippet}
	</Pagination>
</div>
