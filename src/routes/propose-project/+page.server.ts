import { broadcastToAdmins } from '$lib/server/telegram/bot.js';
import { composeMessage } from '$lib/server/telegram/msg.js';
import { validateTurnstileChallenge } from '$lib/cloudflare-turnstile/validate.server.js';

import { superValidate, message } from 'sveltekit-superforms/server';
import { proposedProjectSchema, type ProposedProject } from './schema.js';

type Schema = typeof proposedProjectSchema;
type Message = { error: string; success?: undefined } | { error?: undefined; success: true };

export async function load() {
	const form = await superValidate<Schema, Message>(proposedProjectSchema);
	return { form };
}

export const actions = {
	default: async (event) => {
		const body = await event.request.formData();
		const passedChallenge = await validateTurnstileChallenge(event.request, body);
		if (!passedChallenge) {
			const form = await superValidate<Schema, Message>(proposedProjectSchema);
			return message(form, { error: 'No pudimos confirmar que eres humano' }, { status: 403 });
		}

		const form = await superValidate(body, proposedProjectSchema);

		if (!form.valid) {
			return message(form, { error: 'Datos inválido' }, { status: 422 });
		}

		const { msg, entities } = formatProposedProject(form.data);

		try {
			broadcastToAdmins(msg, { entities });
			return message(form, { success: true });
		} catch (error) {
			console.error(error);
			return message(
				form,
				{ error: 'Error interno, por favor, reporta el error' },
				{ status: 500 }
			);
		}
	}
};

const formatProposedProject = (project: ProposedProject) =>
	composeMessage()
		.push('Idea proyecto: ', 'bold')
		.push(project.name)
		.push('\n\nDescripción:\n', 'bold')
		.push(project.description)
		.push('\n\n')
		.push(project.submitterWantsToLead ? '- Quiere liderar el proyecto\n' : '')
		.push(
			project.preformedTeamSize
				? `- Equipo preformado de ${project.preformedTeamSize} personas\n`
				: ''
		)
		.push(project.email ? `- Contacto: ${project.contact} y ${project.email}\n` : '')
		.push('\n')
		.push(JSON.stringify(project), 'code')
		.build();
