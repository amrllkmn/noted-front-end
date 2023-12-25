/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				text: '#F9F9F6',
				background: '#0C0C08',
				primary: '#CFCF98',
				secondary: '#495436',
				accent: '#C3C360'
			},
			fontFamily: {
				base: ['Space Grotesk', 'sans-serif']
			},
			fontSize: {
				title: '120px',
				h1: '2.986rem',
				h2: '2.488rem',
				h3: '2.074rem',
				h4: '1.728rem',
				h5: '1.44rem',
				h6: '1.2rem',
				p: '1rem',
				small: '0.833rem'
			},
			fontWeight: {
				light: 300,
				regular: 400,
				bold: 700
			},
			lineHeight: {
				heading: '1.15rem',
				text: '1.8rem'
			},
			letterSpacing: {
				text: '0.05rem',
				headings: '-0.022rem'
			}
		}
	},
	plugins: []
};
