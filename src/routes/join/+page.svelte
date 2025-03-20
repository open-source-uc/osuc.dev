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
		Para esto, necesitamos personas motivadas que nos ayuden. Tenemos 2 formas en las que te puedes
		sumar:
	</p>

	<h2>Equipos de Desarrollo</h2>
	<p>
		Únete como desarrollador en uno de los proyectos del semestre, dedicándole al menos 4 horas de
		trabajo a la semana y reuniéndote con tu equipo cada semana. Recibirás ayuda y feedback durante
		todo el proceso para que puedas aprender cómo desarrollar software en equipo.
	</p>

	<h2>Equipo Interno</h2>
	<p>
		Apoya en la organización de actividades y proyectos, potenciando la comunidad de código abierto
		en la universidad. Apoya a los equipos de desarrollo y mantención de proyectos, la difusión de
		actividades y proyectos, o la organización de diferentes actividades. Se divide en 3 grupos:
	</p>
	<ul>
		<li>Proyectos: organiza los equipos de desarrollo y mantiene proyectos</li>
		<li>Marketing y Diseño: ve la difusión y apoya en el diseño de los proyectos</li>
	</ul>
	<div class="not-prose flex items-center gap-2">
		<input type="checkbox" bind:checked class="w-5 h-5" id="joinCheckbox" />
		<label for="joinCheckbox" class="text-primary-500 cursor-pointer">
			Leído esto, marca la casilla para inscribirte.
		</label>
	</div>
</div>
