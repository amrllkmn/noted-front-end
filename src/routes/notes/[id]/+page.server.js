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
