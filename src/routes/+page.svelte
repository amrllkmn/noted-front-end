<script>
	import { navigateToPage } from '$lib/index';
</script>

<title>Noted.</title>
<div class="main">
	<h1 class="title">Noted.</h1>
	<p>A note-taking app, with Markdown support.</p>
	<button class="navigation" on:click={() => navigateToPage('/notes')}>Try it out</button>
	<p class="small">
		Check out <a href="https://github.com/amrllkmn/noted">the back-end repo</a>,
		<a href="https://github.com/amrllkmn/noted-front-end"> the front-end repo</a>
		, or go to
		<a href="https://codingchallenges.substack.com/p/coding-challenge-35-google-keep"
			>Coding Challenges</a
		>
		to see what challenge this app is based on.
	</p>
</div>

<style>
	h1 {
		font-family: 'Space Grotesk';
		font-weight: 700;
		font-size: 120px;
		line-height: 150%;
	}

	p {
		font-family: 'Space Grotesk';
		font-weight: 400;
		font-size: 1rem;
		line-height: 1.8rem;
	}

	p.small {
		font-family: 'Space Grotesk';
		font-weight: 300;
		font-size: 0.8rem;
		line-height: 0.8rem;
	}

	.main {
		display: grid;
		gap: 1rem;
		grid-template-rows: 3fr 1fr 0fr 1fr;
		height: 100vh;
		justify-items: center;
		align-content: center;
	}

	a:hover {
		font-weight: 400;
	}

	button.navigation {
		font-family: 'Space Grotesk';
		font-weight: 400;
		width: 25%;
		font-size: 1rem;
		padding: 0.75rem;
	}
</style>
