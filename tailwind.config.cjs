/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
		colors: {
			transparent: "transparent",
			primary: {
				50: "#F2F7FF",
				100: "#E1F1FF",
				200: "#BCDEFE",
				300: "#91C3FF",
				400: "#609FFF",
				500: "#0073DE",
				600: "#0060C0",
				700: "#0448AF",
				800: "#01358D",
				900: "#022975",
			},
			base: {
				50: "#FBFBFD",
				100: "#F2F3F7",
				200: "#E1E4EC",
				300: "#CACFDB",
				400: "#8791A0",
				500: "#566378",
				600: "#445066",
				700: "#2C374B",
				800: "#1C2637",
				900: "#141B27",
			},
		},
	},
	plugins: [],
};
