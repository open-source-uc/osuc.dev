import { defineCollection, z } from "astro:content";

export const collections = {
	projects: defineCollection({
		schema: z.object({
			pin: z.number().optional(),
			name: z.string(),
			github_url: z.string().url(),
			short_description: z.string(),
			tags: z.string().array(),
		}),
	}),
};
