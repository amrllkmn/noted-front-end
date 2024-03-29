/**
 * @typedef {Object} Note
 * @property {string} content
 * @property {string} created_at
 * @property {string} id
 * @property {string} title
 * @property {string} updated_at
 */
import { getValidDate } from '$lib';
import { API_URL } from '$env/static/private';

export async function load({ url }) {
	const { searchParams } = url;
	const searchTerm = searchParams.get('search');
	let data;
	if (searchTerm) {
		data = await fetch(`${API_URL}?search=${searchTerm}`);
	} else {
		data = await fetch(API_URL);
	}
	const notes = /** @type {Note[]} */ (await data.json());

	return {
		notes: notes.map((note) => ({
			id: note.id,
			title: note.title,
			lastUpdated: getValidDate(note.updated_at)
		}))
	};
}
