/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				figtree: ['Figtree', 'sans-serif'],
				sora: ['Sora', 'sans-serif'],
			},
			colors: {
				'other-black': '#1d1d26',
				'main-black': '#15151c',
				neutral: '#fafafa',
				'black-btn': '#30303d',
				'dark-clr': '#9a9999',
				// text-[]
			},
		},
	},
	plugins: [],
}
