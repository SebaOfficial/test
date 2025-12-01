<script lang="ts">
	import people from '$lib/data/people';
	import CTA from '../CTA.svelte';
</script>

<h2 class="mb-6 w-full text-center text-2xl font-semibold">
	Chi {people.length > 1 ? 'Siamo' : 'Sono'}
</h2>

<div class="align-center flex flex-col justify-around gap-3 md:flex-row">
	{#each people as person (person.slug)}
		<div class="flex flex-col items-center text-center">
			<enhanced:img
				src={person.images[0]}
				alt={person.name}
				class="mb-3 h-20 w-20 rounded-full object-cover"
				width="100"
				height="100"
				loading="lazy"
			/>
			<h3>{person.name}</h3>
			<p>{person.smallDescription}</p>
			<CTA href="/chi-siamo/{person.slug}" text="Scopri di più" size="xs" class="mt-2" />
		</div>
	{/each}
</div>
