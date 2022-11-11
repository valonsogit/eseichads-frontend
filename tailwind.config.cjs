/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				chad: ['Montserrat', 'sans-serif']
			}, boxShadow: {
				'custom': '0 0 3px 1px  rgb(255 255 255 / 0.6)',
			}, colors: {
				'black': '#1e1e1e',
			}
		},
	},
	plugins: [
		require('@headlessui/tailwindcss')({ prefix: 'ui' }),
	],
}
