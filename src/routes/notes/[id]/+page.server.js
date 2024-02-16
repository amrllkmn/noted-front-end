import { API_URL } from '$env/static/private';

export async function load({ params }) {
	const data = await fetch(`${API_URL}/${params.id}`);
	const note = await data.json();
	return {
		note: {
			title: note.title,
			content: note.content,
			lastUpdated: note.updated_at
		}
	};
}

export const actions = {
	update: async ({ params, request }) => {
		const data = await request.formData();
		/**
		 * @type {Object<string, FormDataEntryValue | string>}
		 */
		const body = {};

		data.forEach((value, key) => {
			body[key] = value;
		});

		await fetch(`${API_URL}/${params.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});
	}
};
