<div class="prose mt-8 prose-headings:font-display">
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
</div>

<ul class="grid grid-cols-2 gap-2 my-4">
	<li class="border flex flex-col bg-base-50 px-4 py-4 border-base-200 rounded">
		<div class="flex-grow">
			<h2 class="font-bold text-xl text-base-800 my-1">Equipos de Desarrollo</h2>
			<p class="text-base-600 leading-tight my-1">
				Únete como desarrollador a uno de los proyectos guiados.
			</p>
			<a href="/join/projects" class="btn">Conoce más</a>
		</div>
	</li>
	<li class="border flex flex-col bg-base-50 px-4 py-4 border-base-200 rounded">
		<div class="flex-grow">
			<h2 class="font-bold text-xl text-base-800">Equipo Interno</h2>
			<p class="text-base-600 leading-tight my-1">
				Apoya en la organización de actividades y proyectos.
			</p>
		</div>
		<a href="/join/internal" class="btn">Conoce más</a>
	</li>
</ul>

<slot />

<style>
	.btn {
		margin-top: theme('margin.4');
		display: block;
		padding: theme('padding.1') theme('padding.4');
		border-radius: theme('borderRadius.DEFAULT');
		background: theme('colors.primary.500');
		color: theme('colors.primary.50');
	}
	.btn:hover {
		text-decoration: underline;
	}
</style>
