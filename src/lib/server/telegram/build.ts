import { env } from '$env/dynamic/private';

import { Bot, type Api, type Context, type RawApi } from "grammy";

/* Creador de bot base para modo desarrollo y producción */
export function createBaseBot<C extends Context, A extends Api = Api<RawApi>>() {
  const bot = new Bot<C, A>(env.TELEGRAM_BOT_TOKEN!);

  bot.command('start', (ctx) => ctx.reply('👋'));

  bot.command('status', (ctx) => {
    if (env.TEST === 'true') {
      ctx.reply('En modo de desarrollo');
    } else {
      ctx.reply('En modo de producción');
    }
  });

  return bot;
}