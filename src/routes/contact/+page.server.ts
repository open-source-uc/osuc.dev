import { validateTurnstileChallenge } from '$lib/cloudflare-turnstile/validate.server.js';
import { broadcastToAdmins } from '$lib/server/telegram/bot.js';
import { composeMessage } from '$lib/server/telegram/msg.js';
import { fail } from '@sveltejs/kit';
import { contactMsgSchema, type ContactMsg } from './schema.js';

export const actions = {
	default: async (event) => {
		const body = await event.request.formData();
		const passedChallenge = await validateTurnstileChallenge(event.request, body);
		if (!passedChallenge) {
			return fail(403, { error: 'No pudimos confirmar que eres humano' });
		}

		const payload = Object.fromEntries(body);
		const parsed = contactMsgSchema.safeParse(payload);

		if (!parsed.success) {
			const { fieldErrors } = parsed.error.flatten();
			return fail(400, { error: 'Datos inválidos', data: payload, errors: fieldErrors });
		}

		const { msg, entities } = formatContactMsg(parsed.data);

		try {
			broadcastToAdmins(msg, { entities });
			return { success: true };
		} catch (error) {
			console.error(error);
			return fail(500, { error: 'Error interno, por favor, reporta el error' });
		}
	}
};
const formatContactMsg = (msg: ContactMsg) =>
	composeMessage()
		.push('Mensaje: ', 'bold')
		.push(msg.subject)
		.push('\n')
		.push(msg.email, 'code')
		.push('\n\n')
		.push(msg.message)
		.build();
