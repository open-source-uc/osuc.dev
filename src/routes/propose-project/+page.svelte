<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import TurnstileWidget from '$lib/cloudflare-turnstile/TurnstileWidget.svelte';

	export let data;

	let validSubmission = false;

	const { form, enhance, capture, restore, message, reset } = superForm(data.form, {
		taintedMessage: null,
		onSubmit: () => (validSubmission = false),
		onUpdated({ form }) {
			if (form.valid && $message?.success) {
				reset();
				validSubmission = true;
			}
		}
	});

	export const snapshot = { capture, restore };
</script>

<main class="bg-base-50 text-base-900">
	<div class="container-sm">
		<h1 class="text-base-800 text-2xl font-semibold my-2 font-display">Propón un proyecto</h1>
		<p class="text-base-700 text-md font-medium">
			Cada semestre formamos equipos para impulsar proyectos de código abierto. Si tienes una idea
			de proyecto, ¡proponla! El proyecto tiene que ser sin fines de lucro, y debe apuntar a
			usuarios que no sean solo los desarrolladores.
		</p>
		<form method="post" class="my-8" use:enhance>
			<div class="mb-6">
				<label for="pj-name" class="text-base-800 font-bold">Nombre del proyecto</label>
				<p class="text-base-600 text-sm">
					No es necesario que sea un nombre final, es solamente para identificarlo
				</p>
				<input
					id="pj-name"
					name="name"
					type="text"
					class="text-sm w-full placeholder-base-400"
					required
					placeholder="Automatización de cosas"
					bind:value={$form.name}
				/>
			</div>
			<div class="flex flex-col gap-1 mb-6">
				<label for="pj-description" class="text-base-800 font-bold">Descripción del proyecto</label>
				<div class="text-base-600 text-sm">
					<p>La descripción debe incluir:</p>
					<ul class="list-disc ml-4">
						<li>El contexto del proyecto y el problema que busca resolver (¿por qué?)</li>
						<li>Cuales son los objetivos de la solución (¿qué es lo que se busca hacer?)</li>
						<li>Cuál es el público objetivo (¿para quién?)</li>
						<li>Requerimientos esenciales (¿qué se necesita para que el proyecto funcione?)</li>
					</ul>
					<p>
						Puedes incluir tecnologías que te gustaría usar si quieres ser parte del equipo de
						desarrollo. Revisaremos la factibilidad tecnica, la factibilidad práctica y el impacto
						del proyecto. <strong>No es necesario que sea larga</strong>. Puedes incluir links.
					</p>
				</div>
				<textarea
					id="pj-description"
					name="description"
					class="text-sm"
					rows="5"
					required
					bind:value={$form.description}
				/>
			</div>
			<div class="text-base-800 font-bold mt-4 mb-2">Información Personal</div>
			<div class="mb-4">
				<label for="pj-leader" class="text-sm font-semibold mr-2"
					>¿Quieres liderar en el desarrollo del proyecto?</label
				>
				<input id="pj-leader" name="submitterWantsToLead" type="checkbox" />
			</div>
			<div class="mb-4">
				<label for="pj-preformed-team-size" class="block text-sm font-semibold"
					>Indica cuantas personas conoces (sin considerarte) que te gustarían que participaran en
					tu equipo. Si no tienes un equipo, deja el valor en 0.
				</label>
				<input
					id="pj-preformed-team-size"
					name="preformedTeamSize"
					class="w-full text-sm"
					type="number"
					min="0"
					required
					bind:value={$form.preformedTeamSize}
				/>
			</div>
			<div class="mb-4">
				<label for="pj-email" class="block text-sm font-semibold">Mail de contacto</label>
				<input
					id="pj-email"
					name="email"
					type="email"
					autocomplete="email"
					class="w-full placeholder-base-400 text-sm"
					placeholder="tu-correo@uc.cl"
					required
					bind:value={$form.email}
				/>
			</div>
			<div class="mb-4">
				<label for="pj-contact" class="block text-sm font-semibold"
					>Teléfono o usuario de Telegram</label
				>
				<input
					id="pj-contact"
					name="contact"
					type="text"
					class="w-full placeholder-base-400 text-sm"
					required
					bind:value={$form.contact}
					placeholder="@tu-usuario"
				/>
			</div>
			<button type="submit" class="bg-primary-500 mb-2 mt-6 w-full text-primary-50 px-4 py-2">
				Enviar
			</button>
			{#if $message && 'error' in $message}
				<div class="font-bold text-red-600 text-center text-sm">
					Hubo un error al enviar el formulario ({$message.error})
				</div>
			{/if}
			{#if validSubmission}
				<div class="font-bold text-center">¡Gracias por proponer un proyecto!</div>
			{/if}
			<TurnstileWidget action="propose-project" />
		</form>
	</div>
</main>
