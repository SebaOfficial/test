<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	import CTA from '../CTA.svelte';

	type Props = {
		image: { src: Picture; alt: string };
		title: string;
		description: string;
		cta: { text: string; href: string } | false;
		titleBeforeImage?: boolean;
	};
	const { image, title, description, cta, titleBeforeImage = false }: Props = $props();
</script>

{#if titleBeforeImage}
	<h2 class="text-center text-3xl font-bold">{title}</h2>
{/if}

<enhanced:img src={image.src} class="max-h-100 w-auto" alt={image.alt} />
<div class="w-[90%] {!titleBeforeImage ? 'md:w-[60%]' : ''}">
	{#if !titleBeforeImage}
		<h2 class="text-3xl font-bold">{title}</h2>
	{/if}
	<p class="text-md my-4">{description}</p>
	{#if cta}
		<CTA text={cta.text} href={cta.href} />
	{/if}
</div>
