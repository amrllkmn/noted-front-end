<script lang="ts">
	import { goto } from '$app/navigation';

	async function onClickHandler() {
		let result = await goto('/notes');
		return result;
	}
</script>

<div class="grid h-full w-full content-center justify-items-center gap-12">
	<div
		class="grid h-full w-full grid-rows-[3fr_1fr_1fr_1fr] content-center justify-items-center gap-4"
	>
		<div class="text-text font-base leading-heading flex h-full items-center text-title font-bold">
			Noted.
		</div>
		<div class="text-text font-base font-regular leading-text tracking-heading flex items-center">
			<p>The note editor with Markdown. By devs, for devs.</p>
		</div>
		<button></button>
		<div
			class="text-text font-base leading-text tracking-heading text-small flex items-center font-light"
		>
			<p>Check out the repo here. Or, check out the challenge this app is based on.</p>
		</div>
	</div>
</div>
