import leadersAndYear from './coords.json';

export async function load({ setHeaders }) {
	const leadersWithGithubData = leadersAndYear.map((yearGroup) => ({
		...yearGroup,
		leaders: yearGroup.leaders.map((leader) => {
            const avatarUrl = leader.githubUser ? `https://github.com/${leader.githubUser}.png` : null;
            const githubUrl = leader.githubUser ? `https://github.com/${leader.githubUser}` : null;
			return {
				...leader,
                avatarUrl,
                githubUrl,
				name: leader.name ? leader.name : leader.githubUser// Si no hay githubUser, usar el nombre del líder
			};
		})
	}));

	setHeaders({
		'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3'
	});

	return {
		leadersHistory: leadersWithGithubData // Los líderes con sus datos de GitHub
	};
}
