<script>
	import NoteEditor from '$lib/NoteEditor.svelte';
	export let data;
</script>

<div class="test">
	<aside>
		<h3>Notes</h3>
		<ul>
			{#each data.notes as note}
				<li><a href={`/notes/${note.id}`}><p>{note.title}</p></a></li>
			{/each}
		</ul>
		<a href="/notes"><p>Home</p></a>
	</aside>
	<NoteEditor content={data.note.content} title={data.note.title} />
</div>

<style>
	h3 {
		font-family: 'Space Grotesk';
		font-weight: 700;
		font-size: 2.074rem;
		line-height: 2.074rem;
	}

	a {
		font-family: 'Space Grotesk';
	}

	li a p {
		margin: 0;
	}

	a:hover p {
		font-weight: 400;
	}

	ul {
		padding: 0 1rem;
	}

	p {
		font-family: 'Space Grotesk';
		font-weight: 300;
		font-size: 1rem;
		line-height: 1.8rem;
	}

	div.test {
		display: grid;
		grid-template-columns: 1fr 5fr;
	}
</style>
