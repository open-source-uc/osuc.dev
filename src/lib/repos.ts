import cache from "memory-cache";

const graphqlUrl = "https://api.github.com/graphql";
const graphqlImgQuery = "query($user:String!,$repo:String!){repository(owner:$user,name:$repo){openGraphImageUrl}}";
const headers = { "Content-Type": "application/json", Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}` };

export async function getRepoImg(variables: { user: string; repo: string }): Promise<string | undefined> {
	const cached = cache.get(`${variables.user}/${variables.repo}/img`);
	const body = JSON.stringify({ query: graphqlImgQuery, variables });
	if (cached) return cached;

	const response = await fetch(graphqlUrl, { method: "POST", body, headers });
	if (!response.ok) throw new Error(await response.text());

	const json = await response.json();
	const imgUrl = json.data.repository.openGraphImageUrl;
	cache.put(`${variables.user}/${variables.repo}/img`, imgUrl, 5 * 1000);

	return imgUrl;
}
