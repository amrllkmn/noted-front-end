<script lang="ts">
	import Fa from 'svelte-fa';
	import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
	let searchTerm = '';

	function onSubmitHandler() {
		console.log(searchTerm);
	}
</script>

<form on:submit={onSubmitHandler} class="align-center flex">
	<input
		bind:value={searchTerm}
		placeholder="Search for your notes..."
		class="rounded-bl-md rounded-tl-md border border-text bg-background py-2 pl-4 font-base text-small font-light text-text"
	/>
	<button
		type="submit"
		class="rounded-br-md rounded-tr-md border border-text bg-background px-4 py-2 font-base font-light text-text hover:bg-text hover:text-background"
		on:submit={onSubmitHandler}
	>
		<Fa icon={faMagnifyingGlass} />
	</button>
</form>
