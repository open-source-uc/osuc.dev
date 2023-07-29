// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	interface PageMetadata {
		title?: string;
		description?: string;
		twitterImgUrl?: string;
		openGraphImgUrl?: string;
	}

	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			meta: PageMetadata;
		}
		// interface Platform {}
	}
}

export {};
