<script lang="ts">
	import studio from '$lib/assets/studio.jpg?enhanced';
	import ImageSection from './ImageSection.svelte';
</script>

<ImageSection
	image={{ src: studio, alt: 'Lo Studio Lisi' }}
	title="Lorem ipsum"
	description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dicta deserunt pariatur ipsam
		vero? Quo ut harum porro quis, fuga eum, soluta tenetur corrupti natus nostrum rerum quod
		numquam voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nam
		exercitationem expedita dicta facere! Maxime autem error quae harum culpa deserunt velit
		sapiente tempora fugiat eveniet. Neque ad odio provident? Lorem ipsum dolor sit amet consectetur
		adipisicing elit. Odio dicta deserunt pariatur ipsam vero? Quo ut harum porro quis, fuga eum,
		soluta tenetur corrupti natus nostrum rerum quod numquam voluptates. Lorem ipsum dolor sit amet
		consectetur adipisicing elit. Nesciunt nam exercitationem expedita dicta facere! Maxime autem
		error quae harum culpa deserunt velit sapiente tempora fugiat eveniet. Neque ad odio provident?
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dicta deserunt pariatur ipsam
		vero? Quo ut harum porro quis, fuga eum, soluta tenetur corrupti natus nostrum rerum quod
		numquam voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nam
		exercitationem expedita dicta facere! Maxime autem error quae harum culpa deserunt velit
		sapiente tempora fugiat eveniet. Neque ad odio provident?"
	cta={{ text: 'Fissa Appuntamento', href: '/contatti' }}
/>
