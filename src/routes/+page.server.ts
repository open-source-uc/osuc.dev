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
		// const data = await github.graphql<PinnedReposResponse>(pinnedReposQuery);

		// Cache using Cloudflare's cache Headers API
		// https://developers.cloudflare.com/workers/runtime-apis/cache/#headers
		// Usage limits: 5000 points per hour -> aprox 12 requests second
		// https://docs.github.com/en/graphql/overview/resource-limitations#returning-a-calls-rate-limit-status
		// event.setHeaders({
		// 	'Cache-Control': 'public, max-age=20, stale-while-revalidate=604800'
		// });
		// const d = cleanupPinnedRepos(data)
		// console.log(JSON.stringify(d, null, 2));
		return {
			pinnedRepos: [
  {
    "topics": [],
    "url": "https://github.com/open-source-uc/UbiCate-v2",
    "name": "UbiCate-v2",
    "description": "Mapa para dar mayor accesibilidad a ubicación de salas, baños y puntos de interés en los distintos campus de la UC",
    "openGraphImageUrl": "https://repository-images.githubusercontent.com/655421805/96f04980-e4dd-4b98-b8a2-7bc168753074",
    "usesCustomOpenGraphImage": true,
    "homepageUrl": "https://ubicate.osuc.dev",
    "repositoryTopics": {
      "nodes": []
    },
    "issues": {
      "totalCount": 9
    },
    "goodFirstIssues": {
      "totalCount": 1
    },
    "needsHelpIssues": {
      "totalCount": 2
    }
  },
  {
    "topics": [
      {
        "name": "uc",
        "url": "https://github.com/topics/uc",
        "stars": 0
      },
      {
        "name": "uc-chile",
        "url": "https://github.com/topics/uc-chile",
        "stars": 0
      },
      {
        "name": "buscaramos",
        "url": "https://github.com/topics/buscaramos",
        "stars": 0
      },
      {
        "name": "chile",
        "url": "https://github.com/topics/chile",
        "stars": 6
      }
    ],
    "url": "https://github.com/open-source-uc/v2-ramos",
    "name": "v2-ramos",
    "description": "Este es el repositorio oficial de BuscaRamos desarrollado por OpenSource eUC.",
    "openGraphImageUrl": "https://repository-images.githubusercontent.com/874818597/250ddd5d-bfa2-4c07-8d8a-0a79164c4af5",
    "usesCustomOpenGraphImage": true,
    "homepageUrl": "https://buscaramos.osuc.dev/",
    "repositoryTopics": {
      "nodes": [
        {
          "url": "https://github.com/topics/uc",
          "topic": {
            "name": "uc",
            "stargazerCount": 0
          }
        },
        {
          "url": "https://github.com/topics/uc-chile",
          "topic": {
            "name": "uc-chile",
            "stargazerCount": 0
          }
        },
        {
          "url": "https://github.com/topics/buscaramos",
          "topic": {
            "name": "buscaramos",
            "stargazerCount": 0
          }
        },
        {
          "url": "https://github.com/topics/chile",
          "topic": {
            "name": "chile",
            "stargazerCount": 6
          }
        },
        {
          "url": "https://github.com/topics/courses",
          "topic": {
            "name": "courses",
            "stargazerCount": 92
          }
        }
      ]
    },
    "issues": {
      "totalCount": 27
    },
    "goodFirstIssues": {
      "totalCount": 5
    },
    "needsHelpIssues": {
      "totalCount": 0
    }
  },
  {
    "topics": [
      {
        "name": "latex-template",
        "url": "https://github.com/topics/latex-template",
        "stars": 57
      },
      {
        "name": "templates",
        "url": "https://github.com/topics/templates",
        "stars": 83
      }
    ],
    "url": "https://github.com/open-source-uc/latex-templates",
    "name": "latex-templates",
    "description": "Repositorio donde se recopilan los templates creados por la comunidad OSUC",
    "openGraphImageUrl": "https://repository-images.githubusercontent.com/368000008/b84fc123-2e85-450e-ba68-f5ef278da8a7",
    "usesCustomOpenGraphImage": true,
    "homepageUrl": "",
    "repositoryTopics": {
      "nodes": [
        {
          "url": "https://github.com/topics/latex-template",
          "topic": {
            "name": "latex-template",
            "stargazerCount": 57
          }
        },
        {
          "url": "https://github.com/topics/templates",
          "topic": {
            "name": "templates",
            "stargazerCount": 83
          }
        }
      ]
    },
    "issues": {
      "totalCount": 4
    },
    "goodFirstIssues": {
      "totalCount": 0
    },
    "needsHelpIssues": {
      "totalCount": 1
    }
  },
  {
    "topics": [
      {
        "name": "uc",
        "url": "https://github.com/topics/uc",
        "stars": 0
      },
      {
        "name": "puc",
        "url": "https://github.com/topics/puc",
        "stars": 0
      },
      {
        "name": "syllabus",
        "url": "https://github.com/topics/syllabus",
        "stars": 2
      },
      {
        "name": "chile",
        "url": "https://github.com/topics/chile",
        "stars": 6
      }
    ],
    "url": "https://github.com/open-source-uc/awesome-uc",
    "name": "awesome-uc",
    "description": "A curated list of awesome UC projects, software, tools and material.",
    "openGraphImageUrl": "https://repository-images.githubusercontent.com/83893862/60f2556f-196f-48a5-bac4-42374e903f32",
    "usesCustomOpenGraphImage": true,
    "homepageUrl": "",
    "repositoryTopics": {
      "nodes": [
        {
          "url": "https://github.com/topics/uc",
          "topic": {
            "name": "uc",
            "stargazerCount": 0
          }
        },
        {
          "url": "https://github.com/topics/puc",
          "topic": {
            "name": "puc",
            "stargazerCount": 0
          }
        },
        {
          "url": "https://github.com/topics/syllabus",
          "topic": {
            "name": "syllabus",
            "stargazerCount": 2
          }
        },
        {
          "url": "https://github.com/topics/chile",
          "topic": {
            "name": "chile",
            "stargazerCount": 6
          }
        },
        {
          "url": "https://github.com/topics/awesome-list",
          "topic": {
            "name": "awesome-list",
            "stargazerCount": 2709
          }
        },
        {
          "url": "https://github.com/topics/awesome",
          "topic": {
            "name": "awesome",
            "stargazerCount": 82957
          }
        }
      ]
    },
    "issues": {
      "totalCount": 2
    },
    "goodFirstIssues": {
      "totalCount": 0
    },
    "needsHelpIssues": {
      "totalCount": 0
    }
  },
  {
    "topics": [],
    "url": "https://github.com/open-source-uc/ccc.ing.puc.cl",
    "name": "ccc.ing.puc.cl",
    "description": "Página del Capítulo de Ciencia de la Computación de la Universidad Católica",
    "openGraphImageUrl": "https://repository-images.githubusercontent.com/522059184/24df18ba-da40-4c85-8c26-8b2834cdd9e9",
    "usesCustomOpenGraphImage": true,
    "homepageUrl": "https://ccc.ing.puc.cl",
    "repositoryTopics": {
      "nodes": []
    },
    "issues": {
      "totalCount": 3
    },
    "goodFirstIssues": {
      "totalCount": 2
    },
    "needsHelpIssues": {
      "totalCount": 2
    }
  },
  {
    "topics": [
      {
        "name": "astrojs",
        "url": "https://github.com/topics/astrojs",
        "stars": 14
      },
      {
        "name": "tailwindcss",
        "url": "https://github.com/topics/tailwindcss",
        "stars": 635
      }
    ],
    "url": "https://github.com/open-source-uc/osuc.dev",
    "name": "osuc.dev",
    "description": "La nueva página de Open Source UC",
    "openGraphImageUrl": "https://repository-images.githubusercontent.com/612376857/ea9d067b-ed72-46a7-93f1-da7abf0184bc",
    "usesCustomOpenGraphImage": true,
    "homepageUrl": "https://osuc.dev",
    "repositoryTopics": {
      "nodes": [
        {
          "url": "https://github.com/topics/astrojs",
          "topic": {
            "name": "astrojs",
            "stargazerCount": 14
          }
        },
        {
          "url": "https://github.com/topics/tailwindcss",
          "topic": {
            "name": "tailwindcss",
            "stargazerCount": 635
          }
        }
      ]
    },
    "issues": {
      "totalCount": 3
    },
    "goodFirstIssues": {
      "totalCount": 0
    },
    "needsHelpIssues": {
      "totalCount": 0
    }
  }
]
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
