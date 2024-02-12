import { getValidDate } from '$lib';

export async function load() {
	const data = await fetch('http://localhost:3000/api/v1/notes');
	const notes = await data.json();

	return {
		notes: notes.map(
			(
				/** @type {{ id: string; title: string; updated_at: string; }} */
				note
			) => ({
				id: note.id,
				title: note.title,
				lastUpdated: getValidDate(note.updated_at)
			})
		)
	};
}
