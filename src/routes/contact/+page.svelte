<script>
	let loading = true;

	function handleLoad() {
		loading = false;
	}
</script>

<div class="prose p-4 prose-headings:font-display w-full h-full">
	<h1>Contacto</h1>

	{#if loading}
		<p class="text-xl text-center mb-4">Cargando formulario...</p>
	{/if}
	<div class="relative w-full h-[600px]">
		<iframe
			class="airtable-embed absolute inset-0 w-full h-full border border-gray-200 rounded-lg"
			src="https://airtable.com/embed/apprK49P0NhkU8q3c/pagzGz0PrFAGw3rBB/form"
			frameborder="0"
			title="Formulario de contacto"
			allowfullscreen
			on:load={handleLoad}
		/>
		<noscript>
			<div
				class="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200 p-4 text-center"
			>
				Para ver el formulario de registro, por favor habilita JavaScript en tu navegador o utiliza
				otro navegador compatible.
			</div>
		</noscript>
	</div>
</div>
