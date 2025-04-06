<script>
	let checked = false;

	$: if (checked) {
		window.location.href = '/join/form';
	}
</script>

<div class="prose my-8 prose-headings:font-display">
	<h1>Únete a la comunidad</h1>

	<p>
		Queremos potenciar el desarrollo de código abierto en la universidad, desarrollando proyectos
		que sean útiles para la comunidad y realizando actividades que permitan aprender y compartir
		conocimiento sobre desarrollo de software.
	</p>
	<p>
		Para esto, necesitamos personas motivadas que nos ayuden. Tenemos dos formas en las que te
		puedes sumar, siempre respetando nuestro Código de Conducta:
	</p>
	<a
		href="/conduct"
		class="rounded-sm px-4 py-2 bg-base-600 hover:underline no-underline text-base-50"
		>🫂 Código de Conducta</a
	>
	<h2>Equipos de Desarrollo</h2>
	<p>
		Únete como desarrollador en uno de los proyectos del semestre, dedicándole tiempo de trabajo a
		la semana y reuniéndote con tu equipo periódicamente. Recibirás ayuda y feedback durante todo el
		proceso para que puedas aprender cómo desarrollar software en equipo.
	</p>

	<h2>Equipo Interno</h2>
	<p>
		Apoya en la organización de actividades y proyectos, potenciando la comunidad de código abierto
		en la universidad. Ayuda a los equipos de desarrollo y mantenimiento de proyectos, la difusión
		de actividades y la organización de diferentes eventos. Se divide en:
	</p>
	<ul>
		<li>Proyectos: organiza los equipos de desarrollo y mantiene proyectos.</li>
		<li>Marketing y Diseño: se encarga de la difusión y apoya en el diseño de los proyectos.</li>
	</ul>

	<div class="not-prose flex items-center gap-2 mt-4">
		<input type="checkbox" bind:checked class="w-5 h-5" id="joinCheckbox" />
		<label for="joinCheckbox" class="text-primary-500 cursor-pointer">
			He leído y acepto el Código de Conducta. Marcar la casilla para inscribirte.
		</label>
	</div>
</div>
