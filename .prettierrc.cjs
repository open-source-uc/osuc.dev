/** @type {import('prettier').Options} */
module.exports = {
	useTabs: true,
	printWidth: 120,
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
