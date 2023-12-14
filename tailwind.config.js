/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				gunmetal: '#1F252B',
				'charcoal-dark': '#35414C',
				charcoal: '#404e5c',
				'paynes-gray': '#4f6272',
				slate: '#788CA5',
				'cadet-gray': '#98A4B7',
				'powder-blue': '#a1b5d8',
				'baby-powder': '#fffcf7',
				nyanza: '#E4F0D0'
			},
			fontFamily: {
				lato: ['Lato', 'sans-serif']
			},
			fontSize: {
				title: 186
			}
		}
	},
	plugins: []
};
