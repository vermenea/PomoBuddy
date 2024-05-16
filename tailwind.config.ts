import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				'[background-img]': "url('bcg.png')",
			}),
			fontFamily: {
				vt323: ['VT323', 'monospace'],
				oswald: ['Oswald', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
export default config;
