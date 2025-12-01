<script lang="ts">
	import FilterButton from './FilterButton.svelte';

	type Props = {
		name: string;
		list: string[];
		onToggle: (item: string) => void;
		activeFilters?: string[];
	};

	const { name, list, onToggle, activeFilters }: Props = $props();
</script>

<div>
	<h3 class="mx-auto max-w-3xl space-y-8 text-left">{name}</h3>
	<div class="flex flex-row flex-wrap gap-2">
		{#each list as item (item)}
			<FilterButton {item} onclick={() => onToggle(item)} active={activeFilters?.includes(item) || false} />
		{/each}
	</div>
</div>
