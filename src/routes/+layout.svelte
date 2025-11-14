<script lang="ts">
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	import './styles.css';

	import openGraphImgUrl from '$assets/og/og.image.jpg';
	import twitterImgUrl from '$assets/og/twitter.image.jpg';

	const meta = derived(
		page,
		({ data: { meta = {} } }) =>
			({
				title: meta.title || 'Open Source UC',
				description:
					meta.description ||
					'Open Source UC es una iniciativa de estudiantes de la PUC Chile que busca promover el desarrollo de software de código abierto.',
				openGraphImgUrl: meta.openGraphImgUrl || openGraphImgUrl,
				twitterImgUrl: meta.twitterImgUrl || twitterImgUrl
			}) as PageMetadata
	);
</script>

<svelte:head>
	{#if !dev}
		<script
			defer
			src="https://static.cloudflareinsights.com/beacon.min.js"
			data-cf-beacon={`{"token": "b61e21e66efc4f88a31dd5f273a46edc"}`}
		></script>
	{/if}
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="osuc.dev" />
	<meta property="og:title" content={$meta.title} />
	<meta property="og:description" content={$meta.description} />
	<meta property="og:image" content={$meta.openGraphImgUrl} />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={$meta.title} />
	<meta property="twitter:description" content={$meta.description} />
	<meta property="twitter:image" content={$meta.twitterImgUrl} />
</svelte:head>

<header class="bg-base-950 text-base-100">
	<div class="container px-4 py-4 flex justify-between">
		<a href="/" class="flex items-center justify-center gap-4 font-display font-semibold text-xl">
			<svg
				width="32"
				height="32"
				viewBox="0 0 500 500"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect width="500" height="500" rx="50" />
				<path
					d="M449.318 284.209C449.318 375.396 375.396 449.318 284.209 449.318L284.209 284.209L449.318 284.209Z"
					fill="white"
				/>
				<path
					d="M449.318 50.6824V215.791C358.131 215.791 284.209 141.869 284.209 50.6824L449.318 50.6824Z"
					fill="white"
				/>
				<path
					d="M215.791 50.6824L215.791 215.791L50.6824 215.791C50.6824 124.604 124.604 50.6824 215.791 50.6824Z"
					fill="white"
				/>
				<path
					d="M50.6824 284.209C141.869 284.209 215.791 358.131 215.791 449.318H50.6824L50.6824 284.209Z"
					fill="white"
				/>
				<path d="M274.211 225.831V274.169H225.79V225.831H274.211Z" fill="white" />
				<path
					d="M191.657 284.21C205.005 284.21 215.868 295.03 215.868 308.379C215.868 321.727 205.005 332.547 191.657 332.547C178.309 332.547 167.447 321.727 167.447 308.379C167.447 295.03 178.309 284.21 191.657 284.21Z"
					fill="white"
				/>
				<path
					d="M308.419 167.446C321.768 167.446 332.63 178.267 332.63 191.615C332.63 204.963 321.768 215.784 308.419 215.784C295.071 215.784 284.209 204.963 284.209 191.615C284.209 178.267 295.071 167.446 308.419 167.446Z"
					fill="white"
				/>
			</svg>

			<span class="leading-none -mb-1">Open Source UC</span>
			<span class="sr-only">(ir al inicio)</span>
		</a>
		<div>
			<a href="https://github.com/open-source-uc">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-8" viewBox="0 0 16 16"
					><path
						fill="currentColor"
						d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38c0-.27.01-1.13.01-2.2c0-.75-.25-1.23-.54-1.48c1.78-.2 3.65-.88 3.65-3.95c0-.88-.31-1.59-.82-2.15c.08-.2.36-1.02-.08-2.12c0 0-.67-.22-2.2.82c-.64-.18-1.32-.27-2-.27c-.68 0-1.36.09-2 .27c-1.53-1.03-2.2-.82-2.2-.82c-.44 1.1-.16 1.92-.08 2.12c-.51.56-.82 1.28-.82 2.15c0 3.06 1.86 3.75 3.64 3.95c-.23.2-.44.55-.51 1.07c-.46.21-1.61.55-2.33-.66c-.15-.24-.6-.83-1.23-.82c-.67.01-.27.38.01.53c.34.19.73.9.82 1.13c.16.45.68 1.31 2.69.94c0 .67.01 1.3.01 1.49c0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
					/></svg
				>
				<span class="sr-only">Ir al perfil de Open Source UC en GitHub</span>
			</a>
		</div>
	</div>
</header>

<div class="grow bg-base-50">
	<slot />
</div>

<footer class="bg-base-950 text-base-500 text-center px-2 py-4">
	&copy; Open Source UC {new Date().getFullYear()} -
	<a href="https://github.com/open-source-uc/osuc.dev">Código en GitHub</a>
</footer>
