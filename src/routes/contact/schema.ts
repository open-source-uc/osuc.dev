import { z } from 'zod';

export const contactMsgSchema = z.object({
	subject: z.string(),
	email: z.string().email(),
	message: z.string().transform((v) => v.trim())
});

export type ContactMsg = z.infer<typeof contactMsgSchema>;
