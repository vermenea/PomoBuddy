/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				vt323: ['VT323', 'monospace'],
				oswald: ['Oswald', 'sans-serif'],
			},
      backgroundImage: theme => ({
        '[background-img]': "url('/bcg.png')",
      }),
		},
		plugins: [],
	},
};

