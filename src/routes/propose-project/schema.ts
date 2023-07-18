import { z } from 'zod';

export const proposedProjectSchema = z.object({
	name: z.string(),
	description: z.string().transform((v) => v.trim()),
	submitterWantsToLead: z.coerce.boolean(),
	preformedTeamSize: z.coerce.number().default(0),
	email: z.string().email(),
	contact: z.string()
});

export type ProposedProject = z.infer<typeof proposedProjectSchema>;
