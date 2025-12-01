<script lang="ts">
	import { faq } from '$lib/data/faq';
</script>

<!-- TODO: abbellisci -->
{#each faq as q, index (index)}
	<details class="group rounded-xl border border-gray-200 bg-white p-4 shadow">
		<summary class="flex cursor-pointer items-center justify-between text-lg font-medium">
			{q.question} <span class="ml-2 transition-transform group-open:rotate-180">▼</span></summary
		>
		<p class="mt-2 text-gray-600">
			{q.answer}
		</p>
	</details>
{/each}
