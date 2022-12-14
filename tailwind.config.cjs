/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				'orchid': {
					'50': '#fef5fe',
					'100': '#fcebfb',
					'200': '#f9d5f7',
					'300': '#f3b4eb',
					'400': '#eb87de',
					'500': '#e170d2',
					'600': '#c039ac',
					'700': '#9f2c8c',
					'800': '#822671',
					'900': '#6b245c',
				},
				'ebony': {
					'50': '#eef8ff',
					'100': '#e0f1ff',
					'200': '#c7e4fe',
					'300': '#a5d1fc',
					'400': '#81b4f8',
					'500': '#6395f1',
					'600': '#4672e5',
					'700': '#385eca',
					'800': '#304fa3',
					'900': '#0f172a',
				},
				'pickled-bluewood': {
					'50': '#f5f7fa',
					'100': '#ebeef3',
					'200': '#d2d9e5',
					'300': '#abbbce',
					'400': '#7d95b3',
					'500': '#5d789a',
					'600': '#496080',
					'700': '#3c4d68',
					'800': '#334155',
					'900': '#2f3a4b',
				},
				'pickel-me-pink': {
					'50': '#fff3fe',
					'100': '#ffe6fe',
					'200': '#ffccfc',
					'300': '#ffa3f6',
					'400': '#ff6def',
					'500': '#ff1dee',
					'600': '#e316cf',
					'700': '#bd0ea9',
					'800': '#9a0e88',
					'900': '#7e116e',
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
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	]
}
