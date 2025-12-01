<script lang="ts">
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';

	const { title }: { title: string } = $props();
</script>

<Breadcrumb aria-label="Breadcrumbs" class="mb-4 text-sm">
	<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
	<BreadcrumbItem href="/blog/">Blog</BreadcrumbItem>
	<BreadcrumbItem aria-current="page">{title}</BreadcrumbItem>
</Breadcrumb>
