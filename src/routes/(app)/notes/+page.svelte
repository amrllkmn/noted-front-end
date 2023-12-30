<script lang="ts">
	import NotesHeader from '$lib/components/NotesHeader.svelte';
	import Button from '$lib/components/Button.svelte';
	import NotesList from '$lib/components/NotesList.svelte';

	function onClickHandler() {
		console.log('Create new clicked');
	}
</script>

<NotesHeader />
<div class="border-base grid grid-rows-[1fr_0fr_3fr] gap-8 rounded-b-md border p-8">
	<h3 class="mb-4 font-base text-h3 font-bold text-text">Your notes</h3>
	<Button background="bg-primary" text="Create new" {onClickHandler} style={'w-1/6'} />
	<NotesList />
</div>
