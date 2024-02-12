<script>
	import { onMount, onDestroy, afterUpdate } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';

	/**
	 * @type {string}
	 */
	export let content;

	/**
	 * @type {any}
	 */
	let element;
	/**
	 * @type {Editor}
	 */
	let editor;

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [StarterKit],
			content: `<p>${content}</p>`,
			onTransaction: () => {
				editor = editor;
			}
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});

	afterUpdate(() => {
		if (editor) {
			let newContent = `<p>${content}</p>`;
			editor.commands.setContent(newContent);
		}
	});
</script>

<div bind:this={element} />

<style>
	:global(.tiptap p) {
		font-family: 'Space Grotesk';
		font-weight: 300;
		font-size: 1rem;
		line-height: 1.8rem;
	}

	:global(.tiptap h1) {
		font-family: 'Space Grotesk';
		font-weight: 700;
		font-size: 2.986rem;
		line-height: 2.986rem;
	}
	:global(.tiptap h2) {
		font-family: 'Space Grotesk';
		font-weight: 700;
		font-size: 2.488rem;
		line-height: 2.488rem;
	}
	:global(.tiptap h3) {
		font-family: 'Space Grotesk';
		font-weight: 700;
		font-size: 2.074rem;
		line-height: 2.074rem;
	}
	:global(.tiptap h4) {
		font-family: 'Space Grotesk';
		font-weight: 700;
		font-size: 1.728rem;
		line-height: 1.728rem;
	}
	:global(.tiptap h5) {
		font-family: 'Space Grotesk';
		font-weight: 700;
		font-size: 1.44rem;
		line-height: 1.44rem;
	}
	:global(.tiptap h6) {
		font-family: 'Space Grotesk';
		font-weight: 700;
		font-size: 1.2rem;
		line-height: 1.2rem;
	}

	:global(.tiptap a) {
		font-family: 'Space Grotesk';
	}

	:global(.tiptap li) {
		font-family: 'Space Grotesk';
		font-weight: 300;
	}

	:global(.tiptap) {
		padding: 1rem;
	}
</style>
