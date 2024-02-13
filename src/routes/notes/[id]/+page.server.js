export async function load({ params }) {
	const data = await fetch(`http://localhost:3000/api/v1/notes/${params.id}`);
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

		const response = await fetch(`http://localhost:3000/api/v1/notes/${params.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});

		if (response.ok) {
			const responseBody = await response.json();
			console.log(responseBody);
		}
	}
};
