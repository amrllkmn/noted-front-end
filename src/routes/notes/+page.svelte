<script>
	export let data;
</script>

<header>
	<a href="/" class="logo">
		<h1>Noted.</h1>
	</a>
	<form class="search">
		<input placeholder="Search for your notes..." required />
		<button type="submit"> Search </button>
	</form>
</header>
<div class="content">
	<div class="notes-list-title">
		<h3>Title</h3>
		<h3>Last Updated</h3>
	</div>
	<div>
		{#each data.notes as note}
			<a href="/notes/{note.id}" class="notes-list-item">
				<p>{note.title}</p>
				<p>{note.lastUpdated}</p>
			</a>
		{/each}
	</div>
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
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	a.notes-list-item {
		display: flex;
		justify-content: space-between;
		text-decoration: none;
		color: inherit;
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

	form button {
		width: 25%;
		font-family: 'Space Grotesk';
	}
</style>
