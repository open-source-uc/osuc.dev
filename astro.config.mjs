import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
	integrations: [tailwind({ config: { path: "./tailwind.config.cjs" } })],
	experimental: {
		assets: true,
	},
});
