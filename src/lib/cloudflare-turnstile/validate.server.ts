// https://developers.cloudflare.com/turnstile/get-started/server-side-validation/

import { env } from '$env/dynamic/private';

const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export async function validateTurnstileChallenge(request: Request, body: FormData) {
	try {
		const token = body.get('cf-turnstile-response');
		if (!token) return false;

		const formData = new FormData();
		formData.append('secret', env.CLOUDFLARE_TURNSTILE_SECRET_KEY);
		formData.append('response', token);

		const ip = request.headers.get('CF-Connecting-IP');
		if (ip) formData.append('remoteip', ip);

		const result = await fetch(url, { method: 'POST', body: formData });
		const outcome = await result.json();
		if (outcome.success) return true;
	} catch (error) {
		console.error(error);
	}
	return false;
}
