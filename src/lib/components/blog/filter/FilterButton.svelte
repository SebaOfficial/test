<script lang="ts">
	const { onclick, item, active }: { onclick: () => void; item: string; active: boolean } =
		$props();
</script>

<button
	class="cursor-pointer rounded-lg border border-gray-300 px-3 py-1.5 text-sm
                 hover:bg-gray-200 focus:outline-none focus-visible:ring-2
                 focus-visible:ring-blue-500"
	class:bg-gray-200={active}
	{onclick}
>
	{item}
</button>
