import { github } from '$lib/server/github';
import pinnedReposQuery from './getPinnedRepos.graphql?raw';

export type Repo = ReturnType<typeof cleanupPinnedRepos>[number];

function cleanupPinnedRepos(data: PinnedReposResponse) {
	return data.organization.pinnedItems.edges.map(({ node }) => {
		const topicEntries = node.repositoryTopics.nodes;
		const sortedTopics = topicEntries.sort(
			(a, b) => a.topic.stargazerCount - b.topic.stargazerCount
		);

		const { topics } = sortedTopics.reduce(
			(acc, entry) => {
				if (acc.count + entry.topic.name.length > 40) return acc;
				return { count: acc.count + entry.topic.name.length + 4, topics: [...acc.topics, entry] };
			},
			{ count: 0, topics: [] as TopicEntry[] }
		);

		return {
			topics: topics.map(({ topic: { name, stargazerCount }, url }) => ({
				name,
				url,
				stars: stargazerCount
			})),
			...node
		};
	});
}

export async function load(event) {
	try {
		const data = await github.graphql<PinnedReposResponse>(pinnedReposQuery);

		// Cache using Cloudflare's cache Headers API
		// https://developers.cloudflare.com/workers/runtime-apis/cache/#headers
		// Usage limits: 5000 points per hour -> aprox 12 requests second
		// https://docs.github.com/en/graphql/overview/resource-limitations#returning-a-calls-rate-limit-status
		event.setHeaders({
			'Cache-Control': 'public, max-age=20, stale-while-revalidate=604800'
		});

		return {
			pinnedRepos: cleanupPinnedRepos(data)
		};
	} catch (error) {
		return {
			pinnedRepos: []
		};
	}
}

type TopicEntry = {
	url: string;
	resourcePath: string;
	topic: {
		name: string;
		stargazerCount: number;
	};
};

type PinnedReposResponse = {
	organization: {
		pinnedItems: {
			edges: Array<{
				node: {
					name: string;
					description: string;
					openGraphImageUrl: string;
					usesCustomOpenGraphImage: boolean;
					url: string;
					homepageUrl: string;
					repositoryTopics: {
						nodes: TopicEntry[];
					};
					issues: {
						totalCount: number;
					};
					goodFirstIssues: {
						totalCount: number;
					};
					needsHelpIssues: {
						totalCount: number;
					};
				};
			}>;
		};
	};
};
