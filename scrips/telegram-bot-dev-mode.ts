import { bot, type BotContext, type BotConversation } from "../src/lib/server/telegram/bot";
import { Keyboard } from "grammy";
import {  createConversation } from "@grammyjs/conversations";

async function getChannelId(conversation: BotConversation, ctx: BotContext) {
  const keyboard = new Keyboard().requestChat("Canal", 1, { chat_is_channel: true, bot_is_member: true })
  await ctx.reply("Indícame el canal a obtener el ID",  { reply_markup: keyboard })
  const newCtx = await conversation.waitFor("msg:chat_shared")

  if (!newCtx.message?.chat_shared) {
    await ctx.reply("No se ha encontrado el canal")
    return
  }

  const chatId = newCtx.message.chat_shared.chat_id
  await ctx.reply(`El ID del canal es \`${chatId}\``, { parse_mode: "MarkdownV2" })
  conversation.log(chatId)
}

bot.use(createConversation(getChannelId))

bot.command("add_to_channel", async (ctx) => {
  await ctx.conversation.enter("getChannelId")
})


bot.start()