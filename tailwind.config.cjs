/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				chad: ['Montserrat', 'sans-serif']
			}, boxShadow: {
				'custom': '0 0px 25px -5px rgb(0 0 0 / 0.5), 0px 8px 10px -6px rgb(0 0 0 / 0.1)',
			}
		},
	},
	plugins: [
		require('@headlessui/tailwindcss')({ prefix: 'ui' }),
	],
}
