import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import env from '$lib/variables/variables.server';

export const handle = SvelteKitAuth({
	/* eslint-disable */
	// @ts-ignore
	providers: [GitHub({ clientId: env.GITHUB_ID, clientSecret: env.GITHUB_SECRET })]
});
