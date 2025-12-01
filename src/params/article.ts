import { articles } from '$lib/data/blog';

const slugs = new Set(articles.map((article) => article.slug));

export const match = (param: string) => {
	return slugs.has(param);
};
