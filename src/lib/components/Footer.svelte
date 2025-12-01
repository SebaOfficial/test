<script lang="ts">
	import {
		Footer,
		FooterLinkGroup,
		FooterLink,
		FooterIcon,
		FooterCopyright
	} from 'flowbite-svelte';
	import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from 'flowbite-svelte-icons';
	import { PUBLIC_VAT_NUMBER } from '$env/static/public';
</script>

<Footer footerType="sitemap" class="bg-gray-500">
	<div class="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-3">
		<div>
			<h2 class="mb-6 text-sm font-semibold text-gray-300 uppercase">Utilità</h2>
			<FooterLinkGroup class="text-gray-100">
				<FooterLink class="mb-4" href="/">Home</FooterLink>
				<FooterLink class="mb-4" href="/contatti">Prenota un Appuntamento</FooterLink>
				<FooterLink class="mb-4" href="/chi-siamo">Chi Siamo</FooterLink>
				<FooterLink class="mb-4" href="/contatti">Contattaci</FooterLink>
			</FooterLinkGroup>
		</div>
		<div>
			<h2 class="mb-6 text-sm font-semibold text-gray-300 uppercase">Legali</h2>
			<FooterLinkGroup class="text-gray-100">
				<FooterLink class="mb-4" href="/privacy-policy">Privacy Policy</FooterLink>
				<FooterLink class="mb-4" href="/termini-e-condizioni">Termini & Condizioni</FooterLink>
			</FooterLinkGroup>
		</div>
		<div>
			<h2 class="mb-6 text-sm font-semibold text-gray-300 uppercase">Crediti</h2>
			<FooterLinkGroup class="text-gray-100">
				<FooterLink class="mb-4" href="https://racca.me/it/" target="_blank"
					>Sviluppatore</FooterLink
				>
			</FooterLinkGroup>
		</div>
	</div>
	<div class="bg-gray-500 px-4 py-6 md:flex md:items-center md:justify-between">
		<FooterCopyright
			class="text-sm text-gray-100 sm:text-center"
			href="/"
			by="Studio Lisi"
			copyrightMessage="Tutti i diritti riservati. P.iva: {PUBLIC_VAT_NUMBER}"
		/>
		<div class="mt-4 flex space-x-6 sm:justify-center md:mt-0 rtl:space-x-reverse">
			<FooterIcon href="/">
				<FacebookSolid class="h-5 w-5 text-gray-500 hover:text-gray-100" />
			</FooterIcon>
			<FooterIcon href="/">
				<DiscordSolid class="h-5 w-5 text-gray-500 hover:text-gray-100" />
			</FooterIcon>
			<FooterIcon href="/">
				<TwitterSolid class="h-5 w-5 text-gray-500 hover:text-gray-100" />
			</FooterIcon>
			<FooterIcon href="/">
				<GithubSolid class="h-5 w-5 text-gray-500 hover:text-gray-100" />
			</FooterIcon>
		</div>
	</div>
</Footer>
