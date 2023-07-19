<script lang="ts">
	import { enhance } from '$app/forms';
	import TurnstileWidget from '$lib/cloudflare-turnstile/TurnstileWidget.svelte';

	export let form;
</script>

<main class="bg-base-50 text-base-900">
	<div class="container-sm">
		<h1 class="text-base-800 text-2xl font-semibold my-2 font-display">Contactanos</h1>
		<p class="text-base-600 text-md font-medium">
			Buscamos colaborar con diferentes grupos, comunidades y emrpesas para impulsar el desarrollo
			de código abierto en la Universidad Católica. Si crees que podemos colaborar en proyectos,
			talleres, u otras actividades, contactarnos.
		</p>
		<form class="my-8" method="post" use:enhance>
			<div class="mb-4">
				<label for="c-subject" class="block text-base-800 font-bold">Asunto</label>
				<input
					id="c-subject"
					name="subject"
					type="text"
					class="text-sm w-full placeholder-base-400"
					required
					placeholder="Sponsor, posibilidad de taller, colaboración, ..."
				/>
			</div>
			<div class="mb-4">
				<label for="c-email" class="block text-base-800 font-bold">Correo</label>
				<input
					id="pj-email"
					name="email"
					type="email"
					class="w-full placeholder-base-400 text-sm"
					placeholder="tu-correo@uc.cl"
					required
				/>
			</div>
			<div>
				<label for="c-message" class="block text-base-800 font-bold">Mensaje</label>
				<textarea id="c-message" name="message" class="text-sm w-full" rows="8" required />
			</div>
			<button type="submit" class="bg-primary-500 mb-2 mt-6 w-full text-primary-50 px-4 py-2">
				Enviar
			</button>
			{#if form?.error}
				<div class="font-bold text-red-600 text-center">
					Hubo un error al enviar el formulario ({form.error})
				</div>
			{/if}
			{#if form?.success}
				<div class="font-bold text-center">Enviado, nos contactaremos contigo pronto.</div>
			{/if}
			<TurnstileWidget action="contact" />
		</form>
	</div>
</main>
