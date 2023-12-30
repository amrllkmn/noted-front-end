<script lang="ts">
	import { onMount } from 'svelte';
	interface Note {
		id: string;
		title: string;
		updated_at: string;
		content: string;
		created_at: string;
	}

	let notesList: Note[];

	onMount(async () => {
		const response = await fetch('http://localhost:3000/api/v1/notes', {
			method: 'GET'
		});
		notesList = await response.json();
	});
</script>

<div class="grid grid-cols-[7fr_1fr] gap-4">
	<div class="bg-background font-base text-h5 font-bold text-text">Title</div>
	<div class="bg-background font-base text-h5 font-bold text-text">Last modified</div>

	{#if notesList}
		{#each notesList as item (item.id)}
			<div class="bg-background font-base text-p font-regular text-text hover:bg-primary">
				<p class="pl-4 pt-4">{item.title}</p>
			</div>
			<div class="bg-background font-base text-p font-regular text-text">
				<p class="pl-4 pt-4">{item.updated_at}</p>
			</div>
		{/each}
	{/if}
</div>
