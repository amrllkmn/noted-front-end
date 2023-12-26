<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';

	export let text: string;
	export let onClickHandler: MouseEventHandler<HTMLButtonElement>;
</script>

<button
	class="rounded bg-primary p-4 font-base font-bold text-text hover:bg-accent"
	type="button"
	on:click={onClickHandler}
>
	{text}
</button>
