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
			<a href={repo.url} class="underline text-base-800 font-bold text-xl mt-1">
				{repo.name}
			</a>
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
