<script lang="ts">
	import Section from '$lib/components/home/Section.svelte';
	import Stats from '$lib/components/home/stats/Stats.svelte';
	import Intro from '$lib/components/home/Intro.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import People from '$lib/components/home/People.svelte';
	import ImageSection from '$lib/components/home/ImageSection.svelte';

	import patient from '$lib/assets/patient.jpg?enhanced';
	import neurofeedback from '$lib/assets/neurofeedback.jpg?enhanced';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	onMount(() => {
		if (browser) {
			console.log('Mounted +page.svelte (/) in browser');
		}
	});
	$effect(() => {
		if (browser) {
			console.log('Running in browser on +page.svelte (/)');
		}
	});
</script>

<Section
	class="align-center flex flex-col justify-center gap-5 bg-amber-200 md:flex-row-reverse md:gap-10"
>
	<Intro />
</Section>

<div class="h-32 bg-linear-to-b from-amber-200 to-amber-400"></div>

<Section class="align-center flex flex-col justify-center gap-5 bg-amber-400 md:flex-row md:gap-10">
	<!-- TODO: move to appropriate component -->
	<ImageSection
		image={{ src: patient, alt: 'Paziente dello Studio Lisi' }}
		title="Lorem Ipsium"
		description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dicta deserunt pariatur ipsam
			vero? Quo ut harum porro quis, fuga eum, soluta tenetur corrupti natus nostrum rerum quod
			numquam voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nam
			exercitationem expedita dicta facere! Maxime autem error quae harum culpa deserunt velit
			sapiente tempora fugiat eveniet. Neque ad odio provident? Lorem ipsum dolor sit amet
			consectetur adipisicing elit. Odio dicta deserunt pariatur ipsam vero? Quo ut harum porro
			quis, fuga eum, soluta tenetur corrupti natus nostrum rerum quod numquam voluptates. Lorem
			ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nam exercitationem expedita dicta
			facere! Maxime autem error quae harum culpa deserunt velit sapiente tempora fugiat eveniet.
			Neque ad odio provident? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dicta
			deserunt pariatur ipsam vero? Quo ut harum porro quis, fuga eum, soluta tenetur corrupti natus
			nostrum rerum quod numquam voluptates. Lorem ipsum dolor sit amet consectetur adipisicing
			elit. Nesciunt nam exercitationem expedita dicta facere! Maxime autem error quae harum culpa
			deserunt velit sapiente tempora fugiat eveniet. Neque ad odio provident?"
		cta={{ text: 'Fissa Appuntamento', href: '/contatti' }}
	/>
</Section>

<div class="h-32 bg-linear-to-b from-amber-400 to-transparent"></div>

<Section>
	<Stats />
</Section>

<div class="h-32 bg-linear-to-b from-transparent to-amber-200"></div>

<Section
	class="align-center flex flex-col items-center justify-center gap-5 bg-amber-200 md:gap-10"
>
	<!-- TODO: move to appropriate component -->
	<ImageSection
		image={{ src: neurofeedback, alt: 'Tecnica Neurofeedback' }}
		titleBeforeImage={true}
		title="Lorem Ipsium"
		description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dicta deserunt pariatur ipsam
			vero? Quo ut harum porro quis, fuga eum, soluta tenetur corrupti natus nostrum rerum quod
			numquam voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nam
			exercitationem expedita dicta facere! Maxime autem error quae harum culpa deserunt velit
			sapiente tempora fugiat eveniet. Neque ad odio provident? Lorem ipsum dolor sit amet
			consectetur adipisicing elit. Odio dicta deserunt pariatur ipsam vero? Quo ut harum porro
			quis, fuga eum, soluta tenetur corrupti natus nostrum rerum quod numquam voluptates. Lorem
			ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nam exercitationem expedita dicta
			facere!"
		cta={false}
	/>
</Section>

<div class="h-32 bg-linear-to-b from-amber-200 to-transparent"></div>

<Section>
	<People />
</Section>

<Section class="align-center flex justify-center">
	<ContactForm class="max-w-100">
		<h3 class="text-xl font-semibold whitespace-nowrap">Contattaci</h3>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cumque at nam voluptatum eveniet
			culpa quod iusto, adipisci, asperiores nulla, est aut eius? Harum, laudantium eaque est
			cupiditate nihil ad.
		</p>
		<CTA text="Fissa Appuntamento" href="/contatti" size="sm" class="mt-2 mb-5" />
	</ContactForm>
</Section>
