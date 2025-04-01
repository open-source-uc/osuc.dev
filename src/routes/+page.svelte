<script lang="ts">
	import LandingProject from './LandingProject.svelte';

	// Todo: ver porque TS alega por estos imports
	import colaborateImgSrc from '$assets/landing/colaborate.jpg?h=512&format=webp';
	import joinImgSrc from '$assets/landing/join.jpg?h=1024&format=webp';
	import moreImgSrc from '$assets/landing/more.jpg?h=512&format=webp';

	export let data;
	const { pinnedRepos } = data;
</script>

<svelte:head>
	<title>Open Source UC</title>
	<meta
		name="description"
		content="Somos una comunidad de estudiantes de la UC Chile apasionada por crear e impulsar proyectos bacanes de código abierto"
	/>
</svelte:head>

<!-- <div
	class="px-4 py-2 flex flex-col sm:flex-row justify-center items-center sm:gap-4 bg-primary-100"
>
	<div class="text-center">Abrimos las postulaciones al equipo OSUC</div>
	<a href="https://osuc.dev/join" class="bg-primary-500 py-1 px-4 rounded text-primary-50"
		>Únete</a
	>
</div> -->

<section class="hero z-10 overflow-hidden relative text-base-100 border-b-2 border-base-900">
	<div class="container px-4 py-12 sm:py-32 text-center">
		<h1 class="font-display font-bold text-4xl sm:text-6xl mb-4">Open Source UC</h1>
		<p class="text-base-300 font-medium text-lg sm:text-2xl max-w-lg mx-auto mb-6">
			Somos una comunidad de estudiantes de la <a
				href="https://uc.cl"
				class="underline underline-offset-2">UC Chile</a
			> apasionada por crear e impulsar proyectos bacanes de código abierto
		</p>
		<div
			class="flex flex-col sm:flex-row flex-wrap gap-1 sm:gap-2 justify-center max-w-md sm:max-w-none mx-auto"
		>
			<a href="/about" class="rounded px-4 py-2 bg-base-600 hover:underline text-base-50"
				>Más sobre nosotros</a
			>
			<a href="/join" class="rounded bg-primary-600 hover:underline text-primary-50 px-4 py-2"
				>Sé parte</a
			>
		</div>
	</div>
</section>

<section id="projects" class="py-6 px-2 [scroll-margin-top:-3rem]">
	<h2 class="text-center font-display my-8 text-3xl sm:text-5xl font-semibold text-base-900">
		<a href="#projects">Proyectos destacados</a>
	</h2>
	<ul class="mx-auto grid w-fit auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each pinnedRepos as repo}
			<LandingProject {repo} />
		{/each}
	</ul>
	<div
		class="mx-auto grid w-full auto-rows-auto grid-cols-1 gap-8 p-4 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3 lg:px-6"
	>
		<a
			href="https://github.com/issues?q=is:open+is:issue+archived:false+user:open-source-uc"
			class="flex items-center justify-center gap-2 bg-base-200 border px-4 py-2 rounded hover:underline"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 16 16"
				><path fill="currentColor" d="M8 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z" /><path
					fill="currentColor"
					d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0Z"
				/></svg
			>
			Ver todas las issues</a
		>
		<a
			href="https://github.com/open-source-uc"
			class="flex items-center justify-center bg-base-900 text-base-100 gap-2 px-4 py-2 rounded hover:underline"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"
				><path
					fill="currentColor"
					d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38c0-.27.01-1.13.01-2.2c0-.75-.25-1.23-.54-1.48c1.78-.2 3.65-.88 3.65-3.95c0-.88-.31-1.59-.82-2.15c.08-.2.36-1.02-.08-2.12c0 0-.67-.22-2.2.82c-.64-.18-1.32-.27-2-.27c-.68 0-1.36.09-2 .27c-1.53-1.03-2.2-.82-2.2-.82c-.44 1.1-.16 1.92-.08 2.12c-.51.56-.82 1.28-.82 2.15c0 3.06 1.86 3.75 3.64 3.95c-.23.2-.44.55-.51 1.07c-.46.21-1.61.55-2.33-.66c-.15-.24-.6-.83-1.23-.82c-.67.01-.27.38.01.53c.34.19.73.9.82 1.13c.16.45.68 1.31 2.69.94c0 .67.01 1.3.01 1.49c0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
				/></svg
			>
			Ir a GitHub
		</a>
		<a
			href="https://t.me/+zQdotSmFEIRkMzcx"
			class="flex items-center justify-center bg-primary-600 text-base-100 gap-2 px-4 py-2 rounded hover:underline"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38z"
				/></svg
			>
			Grupo de Telegram
		</a>
	</div>
</section>

<section class="bg-base-100">
	<div
		class="container py-8 mx-auto grid max-w-xl grid-flow-row grid-cols-1 gap-4 lg:max-w-screen-lg lg:grid-cols-2"
	>
		<div
			class="grid h-min gap-4 overflow-clip rounded-md lg:col-span-2 lg:grid-cols-2"
			style="background: linear-gradient(135deg, #0d47a1, #1976d2, #42a5f5);"
		>
			<!-- Contenedor del texto (en móvil aparece primero, en desktop a la derecha) -->
			<div class="order-1 flex flex-col justify-start px-6 pt-20 lg:order-2">
				<div>
					<h2 class="mb-4 font-display text-4xl font-semibold text-white">
						Únete a nuestros eventos
					</h2>
				</div>
				<div class="text-blue-50">
					Únete a nuestros talleres, charlas y eventos, donde podrás desarrollar tus ideas mientras
					conoces a personas apasionadas con intereses similares. Amplía tu red profesional y
					personal en un ambiente inspirador y colaborativo.
				</div>
			</div>

			<!-- Contenedor del calendario (en móvil aparece segundo, en desktop a la izquierda) -->
			<div class="order-2 p-6 lg:order-1 bg-opacity-10 rounded-md">
				<iframe
					src="https://lu.ma/embed/calendar/cal-Jf0O0m07SCYrmXs/events?lt=light"
					frameborder="0"
					class="w-full rounded-md border bg-white shadow-lg"
					height="350"
					aria-hidden="false"
					title="Calendario de eventos"
					loading="lazy"
				/>
			</div>
		</div>
		<div class="flex flex-col overflow-clip bg-base-50 border border-base-300 rounded-md">
			<img src={moreImgSrc} alt="" class="h-36 w-full object-cover object-[50%_30%] rounded-b-md" />
			<div class="flex flex-grow flex-col p-4">
				<div class="flex-grow">
					<h2 class="text-2xl font-bold text-base-800">Conoce más</h2>
					<div class="text-base-700 leading-tight">
						Entérate de todo lo que es lo que estamos haciendo, como estamos impulsando la comunidad
						de código abierto, y como puedes participar.
					</div>
				</div>
				<div class="mt-8 flex flex-col sm:flex-row gap-2">
					<a
						href="https://www.instagram.com/opensource_euc/"
						class="flex w-full items-center gap-2 justify-center rounded bg-base-100 py-2 px-4 text-base-900 hover:underline lg:w-max"
					>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
							/></svg
						>
						Síguenos en Instagram
					</a>
					<a
						href="/about"
						class="flex w-full items-center justify-center rounded bg-base-100 py-2 px-4 text-base-900 hover:underline lg:w-max"
						>Más sobre nosotros</a
					>
				</div>
			</div>
		</div>
		<div class="flex flex-col overflow-clip bg-base-50 border border-base-300 rounded-md">
			<img
				src={colaborateImgSrc}
				alt=""
				class="h-36 w-full object-cover object-[50%_30%] brightness-125 rounded-b-md"
			/>
			<div class="flex flex-grow flex-col p-4">
				<h2 class="text-2xl font-bold text-base-800">Colabora con nosotros</h2>
				<div class="text-base-700 leading-tight">
					Desde empresas hasta otras iniciativas de otras universidades, buscamos colaborar para
					impulsar la comunidad de código abierto.
				</div>
				<div class="mt-8 flex gap-2 flex-col sm:flex-row">
					<a
						href="/contact"
						class="flex py-2 w-full items-center justify-center bg-base-100 px-4 text-base-900 hover:underline lg:w-max"
						>Contáctanos</a
					>
				</div>
			</div>
		</div>
		<div
			class="grid h-min gap-4 overflow-clip bg-primary-600 lg:col-span-2 lg:grid-cols-2 rounded-md"
		>
			<div class="relative max-h-64 lg:-mr-4 lg:max-h-96">
				<div class="absolute inset-0 bg-primary-600 opacity-20 mix-blend-overlay" />
				<div
					class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-600 lg:bg-gradient-to-r"
				/>
				<img src={joinImgSrc} alt="" class="h-full max-h-96 w-full object-cover object-[50%_35%]" />
			</div>
			<div class="flex flex-col px-6 py-6">
				<div class="flex-grow">
					<h2 class="lg:mt-4 mb-4 font-display text-4xl font-semibold text-primary-50">Únete</h2>
					<div class="text-primary-100">
						Participa en la creación y colaboración en proyectos de distinto ámbito y alcance. Únete
						a desarrollar uno de los proyectos que organizamos cada semestre o a apoyar a impulsar
						la comunidad.
					</div>
				</div>
				<div class="mt-8 flex flex-col gap-2">
					<div class="text-primary-50 flex flex-wrap gap-2">
						<a
							href="https://t.me/+zQdotSmFEIRkMzcx"
							class="flex gap-2 border justify-center flex-grow border-primary-50 rounded py-2 px-2 hover:underline"
						>
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6" viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38z"
								/></svg
							>
							Grupo de Telegram
						</a>
						<a
							href="https://discord.gg/jRdQCGn6yS"
							class="flex gap-2 border justify-center flex-grow border-primary-50 rounded py-2 px-2 hover:underline"
						>
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6" viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
								/></svg
							>
							Servidor de Discord
						</a>
					</div>
					<a
						href="/join"
						class="flex py-2 px-2 text-center min-h-fit rounded items-center justify-center bg-primary-50 text-primary-700 hover:underline"
						>Participa en nuestra comunidad</a
					>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.hero::after {
		content: '';
		position: absolute;
		width: 100000%;
		height: 100000%;
		top: 0;
		left: 0;
		z-index: -1;
		transform: translate(-50%, -50%) rotate(15deg);
		background-position: center center;
		background: url('$assets/svg/git-branches.svg?') 0 0 repeat, theme('colors.base.900');
		margin: 0;
	}
	#projects {
		background-color: theme('colors.base.50');
		background-image: linear-gradient(theme('colors.base.100') 1px, transparent 1px),
			linear-gradient(90deg, theme('colors.base.100') 1px, transparent 1px);
		background-size: 15px 15px, 15px 15px;
		background-position: center center;
	}
</style>
