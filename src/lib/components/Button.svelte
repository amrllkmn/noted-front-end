<script lang="ts">
	import { stringify } from 'postcss';
	import type { MouseEventHandler } from 'svelte/elements';

	export let text: string;
	export let onClickHandler: MouseEventHandler<HTMLButtonElement>;
	export let background: string;
	export let style: string | null;
</script>

<button
	class="rounded {background} p-4 font-base font-bold text-text hover:bg-accent {style}"
	type="button"
	on:click={onClickHandler}
>
	{text}
</button>
