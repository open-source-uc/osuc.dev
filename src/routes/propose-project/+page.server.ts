import { z } from "zod"
import { fail } from '@sveltejs/kit';
import { broadcastToAdmins } from "$lib/server/telegram/bot.js";
import { composeMessage } from "$lib/server/telegram/msg.js";

const proposedProjectSchema = z.object({
  name: z.string(),
  description: z.string().transform((v) => v.trim()),
  submitterWantsToLead: z.coerce.boolean(),
  preformedTeamSize: z.coerce.number(),
  email: z.string().email(),
  contact: z.string(),
})

type ProposedProject = z.infer<typeof proposedProjectSchema>

export const actions = {
  default: async (event) => {
    const payload = Object.fromEntries(await event.request.formData())
    const parsed = proposedProjectSchema.safeParse(payload)

    if (!parsed.success) {
      const { fieldErrors } = parsed.error.flatten()
      return fail(400, { error: "Datos inválidos", data: payload, errors: fieldErrors })
    }

    const { msg, entities } = formatProposedProject(parsed.data)

    try {
      broadcastToAdmins(msg, { entities })
      return { success: true };
    } catch (error) {
      console.error(error)
      return fail(500, { error: "Error interno, por favor, reporta el error" })
    }

  }
}

const formatProposedProject = (project: ProposedProject) => composeMessage()
  .push("Idea proyecto: ", "bold")
  .push(project.name)
  .push("\n\nDescripción:\n", "bold")
  .push(project.description)
  .push("\n\n")
  .push(project.submitterWantsToLead ? "- Quiere liderar el proyecto\n" : "")
  .push(project.preformedTeamSize ? `- Equipo preformado de ${project.preformedTeamSize} personas\n` : "")
  .push(project.email ? `- Contacto: ${project.contact} y ${project.email}\n` : "")
  .push("\n")
  .push(JSON.stringify(project), "code")
  .build()
