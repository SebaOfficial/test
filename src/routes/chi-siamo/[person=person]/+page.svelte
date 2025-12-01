<script lang="ts">
	const { data } = $props();
	const { person } = data;
</script>

<div class="flex flex-col gap-5 px-10 md:flex-row">
	<enhanced:img src={person.images[1]} alt={person.name} class="max-h-100 w-auto" />
	<div>
		<h2 class="text-3xl font-bold">{person.name}</h2>
		<p>{person.description}</p>
	</div>
</div>

<!-- TODO: add socials? -->
