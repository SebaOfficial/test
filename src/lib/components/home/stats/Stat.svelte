<script lang="ts">
	import Progress from '@bonosoft/sveltekit-progress';
	import { onMount } from 'svelte';

	type Props = {
		percentage: number;
		text: number;
		suffix: string;
		delay: number;
		textDelay: number;
		title: string;
		description: string;
	};
	const { percentage, text, suffix, title, description, delay, textDelay }: Props = $props();

	let progress = $state(0);
	let progressText = $state(0);
	let container: HTMLElement | null = null;
	let started = false;

	function startAnimation() {
		if (started) return;
		started = true;

		let pctInterval = setInterval(() => {
			if (progress < percentage) {
				progress += 1;
				if (progress > percentage) {
					progress = percentage;
				}
			} else {
				clearInterval(pctInterval);
			}
		}, delay);

		let textInterval = setInterval(() => {
			if (progressText < text) {
				progressText += Math.ceil(text / 100);
				if (progressText > text) {
					progressText = text;
				}
			} else {
				clearInterval(textInterval);
			}
		}, textDelay);
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						startAnimation();
						observer.disconnect();
					}
				});
			},
			{ threshold: 0.2 }
		);
		if (container) observer.observe(container);

		return () => observer.disconnect();
	});
</script>

<div bind:this={container} class="flex flex-col items-center justify-center gap-1">
	<Progress progress={progress.toString()} customContent="true">
		{progressText}{suffix}
	</Progress>
	<h3 class="font-semibold">{title}</h3>
	<p>{description}</p>
</div>
