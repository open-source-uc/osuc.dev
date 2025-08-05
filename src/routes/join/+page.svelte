<script>
	let checked = false;

	$: if (checked) {
		window.location.href = '/join/form';
	}
</script>

<div class="prose my-8 prose-headings:font-display">
	<h1>Únete a la comunidad</h1>

	<p>
		En Open Source UC, desarrollamos proyectos de innovación tecnológica
		que hacen un impacto a nuestra comunidad universitaria, junto a actividades que permitan desarrollar a nuestros miembros profesionalmente. 
	</p>
	<p>
		Al unirte a nuestra comunidad, aceptas siempre respetar y velar por nuestro código de conducta:
	</p>
	<a
		href="/conduct"
		class="rounded-sm px-4 py-2 bg-base-600 hover:underline no-underline text-base-50"
		>🫂 Código de Conducta</a
	>

	<div class="not-prose flex items-center gap-2 mt-4">
		<input type="checkbox" bind:checked class="w-5 h-5" id="joinCheckbox" />
		<label for="joinCheckbox" class="text-primary-500 cursor-pointer">
			He leído y acepto el Código de Conducta. Marcar la casilla para inscribirte.
		</label>
	</div>
</div>
