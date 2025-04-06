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
			<svg viewBox="0 0 40 56" class="h-8 -mt-1 align-middle" xmlns="http://www.w3.org/2000/svg">
				<path
					fill="currentColor"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M16 8C16 10.9611 14.3912 13.5465 12 14.9297V33.6642C14.4498 32.5938 17.1556 32 20 32C24.4183 32 28 28.4183 28 24V22.9297C25.6088 21.5465 24 18.9611 24 16C24 11.5817 27.5817 8 32 8C36.4183 8 40 11.5817 40 16C40 18.9611 38.3912 21.5465 36 22.9297V24C36 32.8366 28.8366 40 20 40C17.5286 40 15.2318 40.7471 13.3229 42.0277C14.9656 43.4929 16 45.6256 16 48C16 52.4183 12.4183 56 8 56C3.58172 56 0 52.4183 0 48C0 45.0389 1.60879 42.4535 4 41.0703V14.9297C1.60879 13.5465 0 10.9611 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4 48C4 45.7909 5.79086 44 8 44C10.2091 44 12 45.7909 12 48C12 50.2091 10.2091 52 8 52C5.79086 52 4 50.2091 4 48ZM12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8ZM36 16C36 18.2091 34.2091 20 32 20C29.7909 20 28 18.2091 28 16C28 13.7909 29.7909 12 32 12C34.2091 12 36 13.7909 36 16Z"
				/>
				<circle cx="33" cy="49" r="7" fill="#0073DE" />
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
