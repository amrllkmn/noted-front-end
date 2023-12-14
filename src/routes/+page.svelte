<script lang="ts">
	import { goto } from '$app/navigation';

	async function onClickHandler() {
		let result = await goto('/notes');
		return result;
	}
</script>

<title>Noted</title>
<div class="grid h-full grid-rows-[1fr_3fr_1fr]">
	<div />
	<div class="flex h-full flex-col items-center justify-between gap-8">
		<h1 class="font-lato text-gunmetal">NOTED.</h1>
		<h2 class="font-lato text-paynes-gray">
			The note editor with Markdown. Built on Axum and Svelte.
		</h2>
		<button
			class="w-1/4 rounded-md bg-paynes-gray px-4 py-2 font-lato text-baby-powder hover:bg-slate"
			on:click={onClickHandler}>Try it out</button
		>
		<p class="font-lato text-baby-powder">
			Check out the <a class="underline" href="https://github.com/amrllkmn/noted">back-end repo</a>.
		</p>
	</div>
	<div />
</div>

<style>
	h1 {
		font-weight: 900;
		font-size: 180px;
		letter-spacing: 0.025em;
	}

	h2 {
		font-size: 36px;
		font-weight: 300;
		letter-spacing: 0.025em;
	}

	button {
		font-size: 20px;
		font-weight: 400;
		letter-spacing: 0.025em;
	}

	p {
		font-size: 18px;
		letter-spacing: 0.03em;
		font-weight: 300;
	}
</style>
