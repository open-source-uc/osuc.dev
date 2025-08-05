<script lang="ts">
	export let data;
	const { leadersHistory } = data;
</script>

<div class="container-sm my-8 prose-headings:font-display">
	<main class="prose">
		<h1>Sobre Open Source UC<span class="text-primary-500">.</span></h1>
		<p>
			Open Source UC es una iniciativa estudiantil de innovación tecnológica que impulsar a estudiantes a colaborar y crecer profesionalmente a través
			de la filosofía open-source en la Pontificia Universidad Católica de Chile.
		</p>

		<h2>¿Por qué existimos?</h2>
		<ul>
			<li>
				Creamos un espacio de aprendizaje práctico que permite a nuestros miembros ir más allá de los cursos universitarios, aplicando conocimientos en proyectos con impacto real y desarrollando habilidades que demanda la industria tecnológica.
			</li>
			<li>
				Construimos una comunidad de crecimiento mutuo donde se comparten experiencias, conocimientos y motivaciones. Al desarrollar de forma pública, Open Source reúne a estudiantes con diversos niveles de experiencia, fomentando el mentoring y la colaboración entre pares.
			</li>
			<li>
				Promovemos la transparencia y el aprendizaje abierto mediante proyectos de código abierto que no solo benefician a nuestra comunidad, sino que también contribuyen al ecosistema tecnológico regional y permiten que otros aprendan de nuestro trabajo.
			</li>
		</ul>

		<h2>Historia</h2>
		<p>
			Desde el año 2006, existieron grupos como OpenPUC que buscaban incentivar el interés por el código
			abierto en la universidad. En el año 2017, un grupo de estudiantes – inspirados en OpenPUC – creó Open Source UC, organización que se mantuvo
			activa hasta finales del 2018. Desde el año 2021 se reorganizó la iniciativa, quedando en la
			comunidad que conocemos ahora.
		</p>

		<h2>Timeline de Coordinadores</h2>
		<div class="relative border-l-2 border-gray-300 not-prose">
			{#each leadersHistory as { year, leaders }}
				<div class="mb-6">
					<h3 class="text-2xl font-semibold text-primary-500 mb-4 ml-2">{year}</h3>
					<div class="ml-4 flex flex-col gap-1">
						{#each leaders as leader}
							<div class="flex items-center space-x-6">
								<div
									class="shrink-0 w-16 h-16 rounded-full border-2 border-primary-500 flex items-center justify-center"
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
										<span class="text-primary-600"></span>
										{leader.name}<br />
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
