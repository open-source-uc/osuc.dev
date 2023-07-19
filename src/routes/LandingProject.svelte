<script lang="ts">
	import type { Repo } from './+page.server';

	export let repo: Repo;

	function issueUrl(label?: string) {
		const url = new URL(repo.url);
		url.pathname += '/issues';
		const labelParam = label ? ` label:"${label}"` : '';
		url.searchParams.set('q', `is:issue is:open${labelParam}`);
		return url.toString();
	}
</script>

<li class="bg-base-50 flex max-w-xs flex-col overflow-clip rounded border border-base-800 shadow">
	<img
		src={repo.openGraphImageUrl}
		class="object-cover object-center border-b text-base-800 border-base-800"
		alt={repo.name}
		width="1280"
		height="640"
	/>
	<div class="flex flex-grow flex-col px-4 pt-2 pb-3 gap-3">
		<div class="flex-grow">
			<div class="flex justify-between items-center mt-1">
				<a href={repo.url} class="underline text-base-800 font-bold text-xl">
					{repo.name}
				</a>
				{#if repo.homepageUrl}
					<a href={repo.homepageUrl} class="text-base-600">
						<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 16 16"
							><path
								fill="currentColor"
								d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM5.78 8.75a9.64 9.64 0 0 0 1.363 4.177c.255.426.542.832.857 1.215c.245-.296.551-.705.857-1.215A9.64 9.64 0 0 0 10.22 8.75Zm4.44-1.5a9.64 9.64 0 0 0-1.363-4.177c-.307-.51-.612-.919-.857-1.215a9.927 9.927 0 0 0-.857 1.215A9.64 9.64 0 0 0 5.78 7.25Zm-5.944 1.5H1.543a6.507 6.507 0 0 0 4.666 5.5c-.123-.181-.24-.365-.352-.552c-.715-1.192-1.437-2.874-1.581-4.948Zm-2.733-1.5h2.733c.144-2.074.866-3.756 1.58-4.948c.12-.197.237-.381.353-.552a6.507 6.507 0 0 0-4.666 5.5Zm10.181 1.5c-.144 2.074-.866 3.756-1.58 4.948c-.12.197-.237.381-.353.552a6.507 6.507 0 0 0 4.666-5.5Zm2.733-1.5a6.507 6.507 0 0 0-4.666-5.5c.123.181.24.365.353.552c.714 1.192 1.436 2.874 1.58 4.948Z"
							/></svg
						>
						<span class="sr-only">Ver sitio web</span>
					</a>
				{/if}
			</div>
			<div class="leading-tight text-sm text-base-700">
				{repo.description}
			</div>
		</div>
		<ul class="flex gap-2">
			{#each repo.topics as { name, url, stars }}
				<li class="contents">
					<a
						class="bg-base-200 text-xs px-2 py-0.5 rounded hover:underline"
						data-stars={stars}
						href={url}
					>
						{name}
					</a>
				</li>
			{/each}
		</ul>
	</div>
	<div class="hidden sm:block text-xs border-t text-base-500 border-base-800 bg-base-100 px-4 py-2">
		<a href={issueUrl()} class="underline inline">
			{repo.issues.totalCount} issues</a
		>{#if (repo.issues.totalCount > 0 && repo.needsHelpIssues.totalCount > 0) || repo.goodFirstIssues.totalCount > 0}:{/if}
		{#if repo.needsHelpIssues.totalCount > 0}
			<a href={issueUrl('help wanted')} class="inline underline"
				>{repo.needsHelpIssues.totalCount}
				buscan ayuda</a
			>
		{/if}
		{#if repo.needsHelpIssues.totalCount > 0 && repo.goodFirstIssues.totalCount > 0}
			y
		{/if}
		{#if repo.goodFirstIssues.totalCount > 0}
			<a href={issueUrl('good first issue')} class="inline underline"
				>{repo.goodFirstIssues.totalCount} para empezar</a
			>
		{/if}
	</div>
</li>
