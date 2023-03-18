import { defineCollection, z } from "astro:content";

export const collections = {
	projects: defineCollection({
		schema: z.object({
			pin: z.number().optional(),
			name: z.string(),
			github: z.object({
				user: z.string().optional().default("open-source-uc"),
				repo: z.string(),
			}),
			short_description: z.string(),
			tags: z.string().array(),
		}),
	}),
};
