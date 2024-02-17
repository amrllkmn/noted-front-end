<script>
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';

	export let data;
	export let form;

	/** @type {HTMLDialogElement} */
	let dialog;
	let creating = false;

	onMount(() => {
		// @ts-ignore
		dialog = document.getElementById('create-new-modal');
	});

	/**
	 * Adds a row to the bottom of the list
	 */
	function showDialog() {
		if (dialog) {
			dialog.showModal();
		}
	}

	function hideDialog() {
		if (dialog) {
			dialog.close();
		}
	}
</script>

<dialog id="create-new-modal">
	{#if creating}
		<div style="display: grid; align-items:center; justify-items:center;">
			<h3>Creating your note...</h3>
		</div>
	{:else}
		<form
			method="post"
			action="?/create"
			use:enhance={() => {
				creating = true;
				return async ({ update }) => {
					update();
					creating = false;
				};
			}}
		>
			<label for="title"><h3>Create new note</h3></label>
			<input placeholder="Title" name="title" required disabled={creating} />
			<div style="display: flex; justify-content:flex-end; gap:1rem;">
				<button type="submit">Create new</button>
				<button type="button" on:click={hideDialog}>Cancel</button>
			</div>
		</form>
	{/if}
</dialog>
<header>
	<a href="/" class="logo">
		<h1>Noted.</h1>
	</a>
	<form class="search">
		<input placeholder="Search for your notes..." required />
		<button type="submit"> Search </button>
	</form>
</header>
{#if form?.error}
	<div class="button-row">
		<p class="error">{form.error}</p>
	</div>
{/if}
<div class="button-row">
	<button on:click={showDialog} class="create-new-button">Create new</button>
</div>
<div class="content">
	<div class="notes-list-title">
		<h2>Title</h2>
		<h2>Last Updated</h2>
		<div />
	</div>
	{#each data.notes as note}
		<form class="delete-note-form" method="post" action="?/delete" use:enhance>
			<a href="/notes/{note.id}" class="notes-list-item">
				<p>{note.title}</p>
				<p>{note.lastUpdated}</p>
			</a>
			<input hidden value={note.id} name="id" />
			<button type="submit">Delete</button>
		</form>
	{/each}
</div>

<style>
	a.logo {
		color: inherit;
		text-decoration: none;
	}

	h1 {
		font-family: 'Space Grotesk';
		font-weight: 700;
		font-size: 2.986rem;
		line-height: 2.986rem;
	}

	h2 {
		font-family: 'Space Grotesk';
		font-weight: 700;
		font-size: 2.488rem;
		line-height: 2.488rem;
	}

	h3 {
		font-family: 'Space Grotesk';
		font-weight: 700;
		font-size: 2.074rem;
		line-height: 2.074rem;
	}

	p {
		font-family: 'Space Grotesk';
		font-weight: 300;
		font-size: 1rem;
		line-height: 1.8rem;
	}

	div.content {
		margin: 1rem;
		padding: 0 1rem;
	}

	div.notes-list-title {
		display: grid;
		grid-template-columns: 3fr 1fr 1fr;
		align-items: center;
		justify-items: start;
	}

	a.notes-list-item {
		display: grid;
		grid-template-columns: 3fr 1fr;
		justify-items: start;
		width: 100%;
		color: inherit;
		text-decoration: none;
	}

	form.delete-note-form {
		display: grid;
		grid-template-columns: 4fr 1fr;
		align-items: center;
		justify-items: center;
	}
	a.notes-list-item:hover {
		background-color: rgb(222, 222, 220);
	}

	a.notes-list-item:hover p {
		font-weight: 400;
		font-size: 1.05rem;
	}
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 1rem;
		padding: 0 1rem;
		border-bottom: 0.25rem solid;
	}

	form.search {
		width: 25%;
		display: flex;
		gap: 10px;
	}

	form input {
		width: 75%;
		height: 1.5rem;
		padding: 0.25rem;
		font-family: 'Space Grotesk';
		font-weight: 400;
	}

	button {
		width: 25%;
		font-family: 'Space Grotesk';
	}

	button:hover {
		font-weight: 700;
	}

	button.create-new-button {
		width: 10%;
		padding: 1rem;
	}

	div.button-row {
		margin: 1rem;
		padding: 0 1rem;
	}

	dialog {
		width: 35%;
		height: 35%;
		border: 0px;
		border-radius: 8px;
		padding: 1rem;
	}

	dialog form {
		display: grid;
		grid-template-rows: 1fr 1fr 1fr;
		align-items: center;
	}

	dialog form input {
		width: auto;
	}

	p.error {
		color: red;
	}
</style>
