import { env } from "$env/dynamic/private"

import { Bot, Context as BaseContext, session, type Api } from "grammy";
import { conversations, type Conversation, type ConversationFlavor} from "@grammyjs/conversations";


type ParametersExceptFirst<F> = F extends (arg0: any, ...rest: infer R) => any ? R : never;

export type BotContext = BaseContext & ConversationFlavor;
export type BotConversation = Conversation<BotContext>;

export const bot = new Bot<BotContext>(env.TELEGRAM_BOT_TOKEN)

export function broadcastToAdmins(...params: ParametersExceptFirst<Api["sendMessage"]>) {
  return bot.api.sendMessage(+env.TELEGRAM_BROADCAST_CHANNEL_ID!, ...params)
}

bot.use(session({ initial: () => ({}) }))
bot.use(conversations());


bot.command("start", ctx => ctx.reply("👋"))
bot.command("status", ctx => {
  if (env.TEST === "true") {
    ctx.reply("En modo de desarrollo")
  } else {
    ctx.reply("En modo de producción")
  }
})

