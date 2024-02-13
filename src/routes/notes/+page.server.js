import { fail, redirect } from '@sveltejs/kit';

/**
 * @typedef {Object} Note
 * @property {string} content
 * @property {string} created_at
 * @property {string} id
 * @property {string} title
 * @property {string} updated_at
 *
 * @typedef {Object} ErrorResponse
 * @property {string} message
 */
export const actions = {
	create: async ({ request }) => {
		// get form data
		const data = await request.formData();
		let responseBody;

		/**
		 * @type {Object<string, FormDataEntryValue | string>}
		 */
		const body = {};

		data.forEach((value, key) => {
			body[key] = value;
		});

		body.content = '';

		const requestBody = JSON.stringify(body);

		// submit form data to endpoint
		const response = await fetch('http://localhost:3000/api/v1/notes', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: requestBody
		});

		if (response.ok) {
			responseBody = /** @type {Note} */ (await response.json());
			throw redirect(302, `/notes/${responseBody.id}`);
		} else if (response.status === 400) {
			responseBody = await response.text();
		} else {
			responseBody = /** @type {ErrorResponse} */ (await response.json());
			return fail(response.status, { error: responseBody.message });
		}
	},

	delete: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id');
		await fetch(`http://localhost:3000/api/v1/notes/${id}`, {
			method: 'DELETE'
		});
	}
};
