import { PUBLIC_BLOG_ARTICLES_PER_PAGE } from '$env/static/public';
import { articles } from '$lib/data/blog';

export const match = (param: string, daje: string) => {
	return Number(param) > 0 && Number(param) <= Math.ceil(articles.length / +PUBLIC_BLOG_ARTICLES_PER_PAGE);
}
