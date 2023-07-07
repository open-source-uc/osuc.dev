import { broadcastToAdmins } from "$lib/server/telegram/bot.js"
import { composeMessage } from "$lib/server/telegram/msg.js"
import { fail } from "@sveltejs/kit"
import { z } from "zod"

const contactMsgSchema = z.object({
  subject: z.string(),
  email: z.string().email(),
  message: z.string().transform((v) => v.trim()),
})

type ContactMsg = z.infer<typeof contactMsgSchema>

export const actions = {
  default: async (event) => {
    const payload = Object.fromEntries(await event.request.formData())
    const parsed = contactMsgSchema.safeParse(payload)

    if (!parsed.success) {
      const { fieldErrors } = parsed.error.flatten()
      return fail(400, { error: "Datos inválidos", data: payload, errors: fieldErrors })
    }

    const { msg, entities } = formatContactMsg(parsed.data)

    try {
      broadcastToAdmins(msg, { entities })
      return { success: true };
    } catch (error) {
      console.error(error)
      return fail(500, { error: "Error interno, por favor, reporta el error" })
    }
  }
}
const formatContactMsg = (msg: ContactMsg) => composeMessage()
  .push("Mensaje: ", "bold")
  .push(msg.subject)
  .push("\n")
  .push(msg.email, "code")
  .push("\n\n")
  .push(msg.message)
  .build()

