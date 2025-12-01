import { PUBLIC_BLOG_ARTICLES_PER_PAGE } from '$env/static/public'
import { articles, categories } from '$lib/data/blog.js'

export const entries = () => {
	return categories.map((category) => {
		return Array.from({ length: Math.ceil(articles.filter(article => article.fm.category == category).length / +PUBLIC_BLOG_ARTICLES_PER_PAGE) }).map((_, i) => {
			return {
				category,
				page: (i + 1).toString(),
			};
		})
	}).flat();
}

import { getArticles } from '$lib/utils';

export const load = ({ params: { category, page } }) => {
	return {
		...getArticles(Number(page), category),
		currentPage: Number(page),
		category,
	}
}
