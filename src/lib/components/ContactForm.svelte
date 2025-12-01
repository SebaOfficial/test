<script lang="ts">
	import { PUBLIC_HELLO_EMAIL } from '$env/static/public';
	import { Label, Input, Textarea, Button } from 'flowbite-svelte';
	import type { Snippet } from 'svelte';

	const { children, class: className }: { children?: Snippet; class?: string } = $props();
</script>

<form action="mailto:{PUBLIC_HELLO_EMAIL}" method="get" enctype="text/plain" class={className}>
	{@render children?.()}
	<div class="mb-6">
		<Label for="subject" class="mb-2 block">Oggetto</Label>
		<Input id="subject" name="subject" placeholder="Oggetto" required />
	</div>
	<div class="mb-6">
		<Label for="body" class="mb-2 block">Messaggio</Label>
		<Textarea
			id="body"
			name="body"
			placeholder="Il tuo messaggio"
			class="w-full"
			rows={4}
			required
		/>
	</div>

	<Button type="submit">Invia</Button>
</form>
