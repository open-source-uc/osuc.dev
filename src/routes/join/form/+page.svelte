<script>
	let loading = true;

	function handleLoad() {
		loading = false;
	}
</script>

<div class="prose p-4 prose-headings:font-display w-full h-full">
	<h1>Únete a la comunidad</h1>

	{#if loading}
		<p class="text-xl text-center mb-4">Cargando formulario...</p>
	{/if}

	<div class="relative w-full h-[600px]">
		<iframe
			class="airtable-embed absolute inset-0 w-full h-full border border-gray-200 rounded-lg"
			src="https://airtable.com/embed/app7Lzkf0EjHJvuXp/pagzGz0PrFAGw3rBB/form"
			frameborder="0"
			allowfullscreen
			title="Formulario de inscripción"
			loading="eager"
			on:load={handleLoad}
		></iframe>
	</div>

	<noscript>
		<div class="mt-4 p-4 text-center bg-gray-50 border border-gray-200 rounded-lg">
			Para ver el formulario de registro, por favor habilita JavaScript en tu navegador o utiliza
			otro navegador compatible.
		</div>
	</noscript>
</div>
