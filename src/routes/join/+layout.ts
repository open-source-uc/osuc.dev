import twitterImgUrl from '$assets/og/join.png';

export const load = async () => {
	return {
		meta: {
			title: 'Únete a Open Source UC',
			description:
				'Participa en uno de los proyectos del semestre o únete al equipo que potencia esta comunidad',
			twitterImgUrl
		}
	};
};
