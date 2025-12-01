import { PUBLIC_BLOG_ARTICLES_PER_PAGE } from '$env/static/public';
import { articles } from '$lib/data/blog';
import { getArticles } from '$lib/utils';

export const entries = () => {
	return Array.from({ length: Math.ceil(articles.length / +PUBLIC_BLOG_ARTICLES_PER_PAGE) }).map((_, i) => {
		return {
			page: (i + 1).toString(),
		};
	})
}

export const load = ({ params: { page } }) => {
	return {
		...getArticles(Number(page)),
		currentPage: Number(page),
	}
}
