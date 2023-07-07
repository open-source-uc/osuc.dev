import type { MessageEntity } from 'grammy/types';

export function composeMessage() {
	let offset = 0;
	let msg = '';
	const entities: MessageEntity.CommonMessageEntity[] = [];

	const ctx = {
		push(content: string, ...types: MessageEntity.CommonMessageEntity['type'][]) {
			if (!content) return ctx;

			for (const type of types) entities.push({ offset, length: content.length, type });
			offset += content.length;
			msg += content;
			return ctx;
		},
		build() {
			return { msg, entities };
		}
	};
	return ctx;
}
