/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {

		},
		"shiki-color-text": "var(--shiki-color-text)",
		"shiki-color-background": "var(--shiki-color-background)",
		"shiki-token-constant": "var(--shiki-token-constant)",
		"shiki-token-string": "var(--shiki-token-string)",
		"shiki-token-comment": "var(--shiki-token-comment)",
		"shiki-token-keyword": "var(--shiki-token-keyword)",
		"shiki-token-parameter": "var(--shiki-token-parameter)",
		"shiki-token-function": "var(--shiki-token-function)",
		"shiki-token-string-expression": "var(--shiki-token-string-expression)",
		"shiki-token-punctuation": "var(--shiki-token-punctuation)",
		"shiki-token-link": "var(--shiki-token-link)",

	},
	screens: {
		'smd': '481px',
		'ssm': '480px',
	},
	fontFamily: {
		'FiraCode': ['"Fira Code"', 'mono']
	},
	plugins: [require("daisyui")],
}
