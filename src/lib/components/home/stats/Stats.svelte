<script lang="ts">
	import Stat from './Stat.svelte';

	const stats = [
		{
			percentage: 98,
			text: 98,
			suffix: '%',
			title: 'Testo',
			description: 'Descrizione molto bella',
			delay: 30,
			textDelay: 30
		},
		{
			percentage: 50,
			text: 500,
			suffix: '+',
			title: 'Testo',
			description: 'Descrizione molto bella',
			delay: 30,
			textDelay: 15
		},
		{
			percentage: 70,
			text: 20,
			suffix: '+',
			title: 'Testo',
			description: 'Descrizione molto bella',
			delay: 30,
			textDelay: 100
		}
	];
</script>

<div class="align-center flex w-[100%] flex-col justify-around gap-4 md:flex-row">
	{#each stats as stat, i (i)}
		<Stat {...stat} />

		{#if i !== stats.length - 1}
			<div
				role="separator"
				aria-orientation="vertical"
				class="h-[100%] w-[2px] bg-gray-400"
				aria-hidden="false"
			></div>
		{/if}
	{/each}
</div>
