import { PUBLIC_BLOG_ARTICLES_PER_PAGE, PUBLIC_DEFAULT_LOCALE } from '$env/static/public';
import { articles } from './data/blog';

export const estimateReadTime = (html: string, wordsPerMinute = 200) => {
	// 1. Remove HTML tags
	const text = html
		.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '') // remove scripts
		.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '') // remove styles
		.replace(/<\/?[^>]+(>|$)/g, '') // remove HTML tags
		.replace(/\s+/g, ' ') // collapse whitespace
		.trim();

	return Math.ceil((text ? text.split(/\s+/).length : 0) / wordsPerMinute);
};

export const dateNormalizer = (date: Date) => {
	const formatted = new Intl.DateTimeFormat(PUBLIC_DEFAULT_LOCALE, {
		weekday: 'short',
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	}).format(date);

	return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

export const getArticles = (page: number, category?: string) => {
	const filteredArticles = articles.filter(article =>
		category ? article.fm.category === category : true
	);

	const totalPages = Math.ceil(filteredArticles.length / Number(PUBLIC_BLOG_ARTICLES_PER_PAGE));

	const start = (Number(page) - 1) * Number(PUBLIC_BLOG_ARTICLES_PER_PAGE);
	const end = start + Number(PUBLIC_BLOG_ARTICLES_PER_PAGE);

	const paginatedArticles = filteredArticles.slice(start, end);

	return { articles: paginatedArticles, totalPages };
}

