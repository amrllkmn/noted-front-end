<script lang="ts">
	import { goto } from '$app/navigation';

	async function onClickHandler() {
		let result = await goto('/');
		return result;
	}
</script>

<button type="button" on:click={onClickHandler} class="my-2">
	<h1 class="font-base text-h1 font-bold leading-heading text-text">Noted.</h1>
</button>
