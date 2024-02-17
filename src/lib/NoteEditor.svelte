<script>
	import { onMount, onDestroy, afterUpdate } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import { enhance } from '$app/forms';

	let saving = false;

	/**
	 * @type {string}
	 */
	export let content;

	/**
	 * @type {string}
	 */
	export let title;

	/**
	 * @type {any}
	 */
	let element;
	/**
	 * @type {Editor}
	 */
	let editor;

	/**
	 * @type {HTMLTextAreaElement}
	 */
	let textarea;

	onMount(() => {
		title = title;
		editor = new Editor({
			element: element,
			extensions: [StarterKit],
			content: `<p>${content}</p>`,
			onTransaction: () => {
				editor = editor;
			},
			onUpdate: () => {
				let newContent = editor.getHTML();
				// @ts-ignore
				textarea = document.getElementById('content');
				textarea.value = newContent;
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
			editor.commands.setContent(content);
			title = title;
		}
	});
</script>

<div>
	<form
		method="post"
		action="?/update"
		use:enhance={() => {
			saving = true;
			return async ({ update }) => {
				update({ reset: false });
				saving = false;
			};
		}}
	>
		<label hidden for="title"></label>
		<input class="title-form" bind:value={title} name="title" />
		<div bind:this={element} />
		<label hidden for="content"></label>
		<textarea hidden name="content" id="content" />
		<button type="submit"> {saving ? 'Saving...' : 'Save'}</button>
	</form>
</div>

<style>
	input.title-form {
		font-family: 'Space Grotesk';
		font-weight: 700;
		font-size: 2.986rem;
		line-height: 2.986rem;
		width: 100%;
		margin-bottom: 1rem;
		border: 0;
		padding: 1rem;
	}
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

	button {
		margin: 1rem 0;
		padding: 1rem;
		font-family: 'Space Grotesk';
		font-weight: 400;
	}

	button:hover {
		font-weight: 700;
	}
</style>
