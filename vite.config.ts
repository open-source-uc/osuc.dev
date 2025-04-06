import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [imagetools(), tailwindcss(), sveltekit()]
});
