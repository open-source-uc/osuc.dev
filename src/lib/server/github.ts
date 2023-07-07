import { Octokit } from "octokit";
import { env } from "$env/dynamic/private"

export const github = new Octokit({ auth: env.GITHUB_TOKEN });

