/** @type {import('prettier').Options} */
module.exports = {
	useTabs: true,
	printWidth: 120,
	plugins: [require("prettier-plugin-astro"), require("prettier-plugin-tailwindcss")],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
