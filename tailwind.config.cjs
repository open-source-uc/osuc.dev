const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	corePlugins: {
		container: false
	},
	plugins: [
		plugin(({ addComponents, theme }) => {
			addComponents({
				'.container': {
					margin: '0 auto',
					maxWidth: theme('screens.lg'),
					padding: theme('spacing.4'),
					[`@media (min-width: ${theme('screens.md')})`]: {
						padding: theme('spacing.8')
					}
				},
				'.container-sm': {
					margin: '0 auto',
					maxWidth: theme('screens.sm'),
					padding: theme('spacing.4'),
					[`@media (min-width: ${theme('screens.md')})`]: {
						padding: theme('spacing.8')
					}
				}
			});
		}),
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms')
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Manrope Variable', 'Inter', ...defaultTheme.fontFamily.sans],
				display: ['League Spartan Variable', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				primary: {
					50: '#F2F7FF',
					100: '#E1F1FF',
					200: '#BCDEFE',
					300: '#91C3FF',
					400: '#609FFF',
					500: '#0073DE',
					600: '#0060C0',
					700: '#0448AF',
					800: '#01358D',
					900: '#022975',
					950: '#021E56'
				},
				base: {
					50: '#FBFBFD',
					100: '#F2F3F7',
					200: '#E1E4EC',
					300: '#CACFDB',
					400: '#8791A0',
					500: '#566378',
					600: '#445066',
					700: '#2C374B',
					800: '#1C2637',
					900: '#141B27',
					950: '#0F1520'
				}
			}
		}
	}
};

module.exports = config;
