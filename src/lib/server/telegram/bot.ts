import { env } from '$env/dynamic/private';

import type { Context as BaseContext, Api } from 'grammy';
import type { Conversation, ConversationFlavor } from '@grammyjs/conversations';
import { createBaseBot } from './build';

type ParametersExceptFirst<F> = F extends (arg0: any, ...rest: infer R) => any ? R : never;

export type BotContext = BaseContext & ConversationFlavor;
export type BotConversation = Conversation<BotContext>;

export const bot = createBaseBot()

export function broadcastToAdmins(...params: ParametersExceptFirst<Api['sendMessage']>) {
	return bot.api.sendMessage(+env.TELEGRAM_BROADCAST_CHANNEL_ID!, ...params);
}


