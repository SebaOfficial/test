<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import type { ComponentProps } from 'svelte';

	type Props = {
		text: string;
		href: string;
		class?: string;
		size?: ComponentProps<typeof Button>['size'];
	};
	const { text, href, size = 'md', class: buttonClass }: Props = $props();
</script>

<Button {href} {size} class={buttonClass}>
	<span>{text}</span>
	<ArrowRightOutline class="ml-3 h-6 w-6 shrink-0" />
</Button>
