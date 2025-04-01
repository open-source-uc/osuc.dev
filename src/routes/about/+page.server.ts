interface LeaderProps {
	name: string;
	description: string;
	githubUser: string | null;
}

const leadersAndYear: { year: string; leaders: LeaderProps[] }[] = [
	{
		year: '2024-2',
		leaders: [
			{
				name: 'Vicente Muñoz',
				description: 'General',
				githubUser: 'utmite'
			},
			{
				name: 'Fabián Mendoza',
				description: 'Externo',
				githubUser: 'FabianMF1'
			},
			{
				name: 'Vicencio',
				description: 'Interno',
				githubUser: 'vicenciomf2'
			}
		]
	},
	{
		year: '2024-1',
		leaders: [
			{ name: 'Fabián Mendoza', description: 'General', githubUser: 'FabianMF1' },
			{ name: 'Emmanuel Norambuena', description: 'General (Ret)', githubUser: 'eanorambuena' },
			{ name: 'Matías Fernández', description: 'Comunidad', githubUser: 'Wh4rp' },
			{ name: 'Nicolás Cruzat', description: 'Marketing y Diseño', githubUser: 'nicru' },
			{
				name: 'Xavier Morales',
				description: 'Educación y Vinculación con el Medio',
				githubUser: null
			},
			{
				name: 'Amelia Fernández',
				description: 'Educación y Vinculación con el Medio',
				githubUser: null
			}
		]
	},
	{
		year: '2023-2',
		leaders: [
			{ name: 'Emmanuel Norambuena', description: 'General', githubUser: 'eanorambuena' },
			{ name: 'Fabián Mendoza', description: 'General', githubUser: 'FabianMF1' },
			{ name: 'Matías Fernández', description: 'Proyectos', githubUser: 'Wh4rp' },
			{ name: 'Benjamín Ubilla', description: 'Comunidad y Educación', githubUser: null },
			{ name: 'Josefa Fernández', description: 'Diseño', githubUser: null }
		]
	},
	{
		year: '2023-1',
		leaders: [
			{ name: 'Benjamín Vicente', description: 'General', githubUser: 'benjavicente' },
			{ name: 'Lucas Natero', description: 'Externo y Diseño', githubUser: 'lnatero' },
			{ name: 'Diego Costa', description: 'Comunidad', githubUser: 'diegocostares' },
			{ name: 'Emmanuel Norambuena', description: 'Educación', githubUser: 'eanorambuena' },
			{ name: 'Enzo Morata', description: 'Proyectos (Ret)', githubUser: null }
		]
	},
	{
		year: '2022-2',
		leaders: [
			{ name: 'Maximiliano Militzer', description: 'General (Ret)', githubUser: 'Dyotson' },
			{
				name: 'Benjamín Vicente',
				description: 'Proyectos',
				githubUser: 'benjavicente'
			},
			{
				name: 'Fernando Smith',
				description: 'Educación',
				githubUser: 'FernandoSmith'
			},
			{
				name: 'Lucas Natero',
				description: 'Externo y Diseño',
				githubUser: 'lnatero'
			},
			{ name: 'Diego Costa', description: 'Comunidad', githubUser: 'diegocostares' },
			{
				name: 'Agustín Covarrubias',
				description: 'Comodín',
				githubUser: 'agucova'
			}
		]
	},
	{
		year: '2022-1',
		leaders: [
			{
				name: 'Lucas Natero',
				description: 'Administrativo',
				githubUser: 'lnatero'
			},
			{
				name: 'Fernando Smith',
				description: 'Administrativo, técnico',
				githubUser: 'FernandoSmith'
			},
			{
				name: 'Caua Paz',
				description: 'Técnico, asiste en forma online (Ret)',
				githubUser: null
			},
			{
				name: 'Benjamín Vicente',
				description: 'Administrativo, Técnico, Social',
				githubUser: 'benjavicente'
			},
			{ name: 'Nicolás Berrios', description: 'Administrativo, Social', githubUser: null },
			{
				name: 'Alister Mac Cormack',
				description: 'Administrativo, Técnico, Social',
				githubUser: null
			}
		]
	},
	{
		year: '2021-2',
		leaders: [
			{
				name: 'Agustín Covarrubias',
				description: 'Cargo de confianza',
				githubUser: 'agucova'
			},
			{
				name: 'Gabriel Faúndez',
				description: 'Cargo de confianza',
				githubUser: null
			},
			{
				name: 'Benjamín Vicente',
				description: 'Facilitador y Cargo de confianza',
				githubUser: 'benjavicente'
			}
		]
	}
];

export async function load({ setHeaders }) {
	const leadersWithGithubData = leadersAndYear.map((yearGroup) => ({
		...yearGroup,
		leaders: yearGroup.leaders.map((leader) => {
			const avatarUrl = leader.githubUser ? `https://github.com/${leader.githubUser}.png` : null;
			return {
				...leader,
				avatarUrl,
				name: leader.githubUser ? leader.githubUser : leader.name // Si no hay githubUser, usar el nombre del líder
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
