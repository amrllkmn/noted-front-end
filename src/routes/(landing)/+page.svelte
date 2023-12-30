<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
	import Logo from '$lib/components/Logo.svelte';

	async function onClickHandler() {
		let result = await goto('/notes');
		return result;
	}
</script>

<div class="grid h-full w-full content-center justify-items-center gap-12">
	<div
		class="grid h-full w-full grid-rows-[3fr_1fr_1fr_1fr] content-center justify-items-center gap-4"
	>
		<Logo />
		<p class="tracking-heading flex items-center font-base font-regular leading-text text-text">
			The note editor with Markdown. By devs, for devs.
		</p>

		<Button background="bg-primary" text="Try it out" {onClickHandler} style={null} />

		<p
			class="tracking-heading flex items-center font-base text-small font-light leading-text text-text"
		>
			Check out&nbsp;<a
				class="underline hover:font-regular"
				href="https://github.com/amrllkmn/noted">the repo</a
			>. Or, check out&nbsp;<a
				class="underline hover:font-regular"
				href="https://codingchallenges.substack.com/p/coding-challenge-35-google-keep"
				>the challenge</a
			>&nbsp;this app is based on.
		</p>
	</div>
</div>
