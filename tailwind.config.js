/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			margin: {
				micro: 'calc(1em / (1.618 * 1.618 * 1.618))', // 1em / scaleFactor^3
				tiny: 'calc(1em / (1.618 * 1.618))', // 1em / scaleFactor^2
				small: 'calc(1em / 1.618)', // 1em / scaleFactor
				medium: '1em', // base size
				large: 'calc(1em * 1.618)', // 1em * scaleFactor
				big: 'calc(1em * 1.618 * 1.618)', // 1em * scaleFactor^2
				huge: 'calc(1em * 1.618 * 1.618 * 1.618)', // 1em * scaleFactor^3
			},
		},
	},
	plugins: [],
}
