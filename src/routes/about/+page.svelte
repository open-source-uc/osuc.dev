<script lang="ts">
	export let data;
	const { leadersHistory } = data;
</script>

<div class="container-sm my-8 prose-headings:font-display">
	<main class="prose">
		<h1>Sobre Open Source UC<span class="text-primary-500">.</span></h1>
		<p>
			Open Source UC es una iniciativa estudiantil que busca crear y potenciar proyectos de código
			abierto en la Pontificia Universidad Católica de Chile.
		</p>
		<p>
			La iniciativa es llamada abreviadamente como OSUC, y en ocasiones se usa Open Source eUC para
			denotar que es de estudiantes de la UC.
		</p>

		<h2>Por qué Open Source en la Universidad</h2>
		<ul>
			<li>
				Cualquier persona puede colaborar y aprender en los proyectos. Evita que varios tengan que
				reinventar la rueda, y da el espacio para que se puedan crear proyectos grandes en conjunto.
			</li>
			<li>
				Crea un espacio de aprendizaje y ayuda. Uno puede ir más allá de los cursos de la
				universidad, aprendiendo y aplicando conocimientos en proyectos reales.
			</li>
			<li>
				Se potencia una comunidad donde se comparten experiencias y motivaciones. Al desarrollar de
				forma más pública, podrás conocer gente con mismos intereses o que pueda guiarte en tu
				aprendizaje.
			</li>
		</ul>

		<h2>Qué es lo que hacemos</h2>
		<p>
			Organizamos, potenciamos y mantenemos proyectos de código abierto. Nos enfocamos en proyectos
			relacionados a una problemática que identificamos en la universidad, aunque también apoyamos
			otros que sean de interés.
		</p>
		<p>
			Puedes ver los proyectos en <a href="https://github.com/open-source-uc">nuestro GitHub</a> y
			se participa cada semestre en la
			<a href="/join">página de como unirse</a>.
		</p>

		<h2>Historia</h2>
		<p>
			Desde el 2006 existieron grupos como OpenPUC que buscaban incentivar el interés por el código
			abierto en la universidad. El 2017 se armó un grupo que creó Open Source UC que se mantuvo
			activo hasta finales del 2018. Y el 2021 se reorganizó la iniciativa, quedando en la
			organización que conocemos ahora.
		</p>

		<h2>Timeline de Coordinadores</h2>
		<div class="relative border-l-2 border-gray-300">
			{#each leadersHistory as { year, leaders }}
				<div class="mb-6">
					<h3 class="text-2xl font-semibold text-primary-500 mb-4 ml-2">{year}</h3>
					<div class="ml-4">
						{#each leaders as leader}
							<div class="flex items-center mb-6 space-x-6">
								<div
									class="flex-shrink-0 w-16 h-16 rounded-full border-2 border-primary-500 flex items-center justify-center"
								>
									{#if leader?.avatarUrl}
										<img
											src={leader?.avatarUrl}
											alt={leader.name}
											class="rounded-full w-16 h-16 object-cover"
										/>
									{:else}
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e3e3e3">
											<path
												d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"
											/>
										</svg>
									{/if}
								</div>
								<div class="flex flex-col p-2">
									<p class="font-semibold">
										<span class="text-primary-600" />{leader.name}<br />
										{leader.description}
									</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</main>
</div>
