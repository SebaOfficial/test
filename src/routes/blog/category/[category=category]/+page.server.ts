import { categories } from '$lib/data/blog.js';
import { getArticles } from '$lib/utils';

export const entries = () => {
	return categories.map((category) => {
		return {
			category,
		};
	});
}

export const load = ({ params: { category } }) => {
	return {
		...getArticles(1, category),
		category,
	}
}
