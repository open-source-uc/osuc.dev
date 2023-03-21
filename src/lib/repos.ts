import cache from "memory-cache";

const graphqlUrl = "https://api.github.com/graphql";
const graphqlImgQuery = "query($user:String!,$repo:String!){repository(owner:$user,name:$repo){openGraphImageUrl}}";
const headers = { "Content-Type": "application/json", Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}` };

export async function getRepoImg(variables: { user: string; repo: string }) {
	const cached = cache.get(`${variables.user}/${variables.repo}/img`);
	const body = JSON.stringify({ query: graphqlImgQuery, variables });
	if (cached) return cached;

	const response = await fetch(graphqlUrl, { method: "POST", body, headers });
	if (!response.ok) throw new Error(await response.text());

	const json = await response.json();
	const imgUrl = json.data.repository.openGraphImageUrl as string;

	const hasOpenGraphImage = imgUrl.includes("repository-images.githubusercontent.com/");
	const realImageUrl = hasOpenGraphImage ? imgUrl : undefined;

	cache.put(`${variables.user}/${variables.repo}/img`, realImageUrl, 5 * 1000);

	return realImageUrl;
}
