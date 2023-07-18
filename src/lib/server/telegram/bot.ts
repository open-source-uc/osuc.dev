import { env } from '$env/dynamic/private';

import type { Context as BaseContext, Api, RawApi } from 'grammy';
import type { Conversation, ConversationFlavor } from '@grammyjs/conversations';
import { createBaseBot } from './build';
import type { Other } from 'grammy/out/core/api';

type Options = Other<RawApi, 'sendMessage', 'chat_id' | 'text'>;
export type BotContext = BaseContext & ConversationFlavor;
export type BotConversation = Conversation<BotContext>;

export const bot = createBaseBot();

export function broadcastToAdmins(text: string, options: Options = {}) {
	options.disable_notification = true; // Remove if needed
	return bot.api.sendMessage(+env.TELEGRAM_BROADCAST_CHANNEL_ID!, text, options);
}
