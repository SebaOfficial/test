import { articles } from '$lib/data/blog';

export const load = async ({ params: { slug } }) => {
	return {
		article: articles.find((article) => article.slug == slug)!,
		slug
	};
};
