import { getArticles } from '$lib/utils';

export const trailingSlash = 'always';

export const load = () => {
	return {
		...getArticles(1),
	}
}
