/**
 * @typedef {Object} Note
 * @property {string} content
 * @property {string} created_at
 * @property {string} id
 * @property {string} title
 * @property {string} updated_at
 */
import { getValidDate } from '$lib';

export async function load() {
	const data = await fetch('http://localhost:3000/api/v1/notes');
	const notes = /** @type {Note[]} */ (await data.json());

	return {
		notes: notes.map((note) => ({
			id: note.id,
			title: note.title,
			lastUpdated: getValidDate(note.updated_at)
		}))
	};
}
