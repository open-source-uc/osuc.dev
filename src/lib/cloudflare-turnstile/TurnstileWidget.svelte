<script lang="ts">
	import { browser } from '$app/environment';
	import { env } from '$env/dynamic/public';
	import { onMount } from 'svelte';
	import type { Action } from 'svelte/action';

	export let action: string;

	let loaded = browser && 'turnstile' in window;
	let mounted = false;
	let widgetId: string | null = null;

	const turnstile: Action = (node) => {
		widgetId = window.turnstile.render(node, {
			sitekey: env.PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY,
			action,
			size: 'invisible'
		});
	};

	const onLoad = () => (loaded = true);

	onMount(() => {
		mounted = true;

		return () => {
			if (!widgetId) return;
			window.turnstile.remove(widgetId);
		};
	});
</script>

<svelte:head>
	{#if mounted && !loaded}
		<script
			src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
			async
			on:load={onLoad}
		></script>
	{/if}
</svelte:head>

{#if mounted && loaded}
	<div use:turnstile />
{/if}
