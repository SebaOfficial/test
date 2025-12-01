<script lang="ts">
	import {
		Dropdown,
		DropdownItem,
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Button
	} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import { page } from '$app/state';
	import logo from '$lib/assets/logo.png?enhanced';

	let activeUrl = $derived(page.url.pathname);
</script>

<Navbar closeOnClickOutside={true}>
	<NavBrand href="/">
		<enhanced:img src={logo} class="me-3 h-auto w-[50px]" alt="Studio Lisi" />
		<span class="self-center text-xl font-semibold whitespace-nowrap"> Studio Lisi </span>
	</NavBrand>
	<div class="flex md:order-2">
		<Button size="sm" href="/contatti">Contattaci</Button>
		<NavHamburger />
	</div>
	<NavUl {activeUrl}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/contatti">Contatti</NavLi>
		<NavLi href="/blog/">Blog</NavLi>
		<NavLi href="/faq">FAQ</NavLi>
		<NavLi class="cursor-pointer">
			Ambiti d'Intervento<ChevronDownOutline
				class="ms-2 inline h-6 w-6 text-primary-800 dark:text-white"
			/>
		</NavLi>
		<Dropdown simple>
			<DropdownItem href="/ambiti-intervento/neurofeedback">Neurofeedback</DropdownItem>
			<DropdownItem href="/ambiti-intervento/fotobiomodulazione">Fotobiomodulazione</DropdownItem>
		</Dropdown>
	</NavUl>
</Navbar>
