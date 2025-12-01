<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children, class: className }: { children: Snippet; class?: string } = $props();
</script>

<section class="p-10 {className}">
	{@render children()}
</section>
