import type { Article, FrontMatter } from '$lib/types/Blog';
import { compile } from 'mdsvex';
// @ts-expect-error: no type declarations for rehype-add-classes
import rehypeAddClasses from 'rehype-add-classes';
import rehypeSlug from 'rehype-slug';
import { plugin as rehypeSectionize } from '@rstacruz/rehype-sectionize';
import people from './people';

const compileMdx = async (contents: string) => {
	return (await compile(contents, {
		rehypePlugins: [
			rehypeSlug,
			rehypeSectionize,
			[
				rehypeAddClasses,
				{
					section: 'mt-8',
					h2: 'text-2xl font-bold mt-6',
					h3: 'text-xl font-semibold mt-6',
					h4: 'text-lg font-semibold mt-5',
					h5: 'text-base font-semibold mt-4',
					h6: 'text-sm font-semibold mt-3 uppercase tracking-wide text-gray-600',
					p: 'mt-4'
				}
			]
		]
	}))!;
};

const mdxFiles = import.meta.glob<string>('/blog/*/index.mdx', {
	query: '?raw',
	import: 'default'
});

const coverFiles = import.meta.glob('/blog/*/cover.*', {
	eager: true
});

const getAuthor = (authorName: string) =>
	people.find((person) => person.name.toLowerCase() === authorName.toLowerCase());

export const articles: Article[] = (
	await Promise.all(
		Object.entries(mdxFiles).map(async ([path, fn]) => {
			const slug = path.split('/').slice(-2)[0];

			const source = await fn();
			const mdx = await compileMdx(source);

			const html = mdx.code;
			const fm = mdx.data!.fm as FrontMatter;

			const cover = (coverFiles[`/blog/${slug}/cover.${fm.coverExtension}`] as { default: string })
				.default;

			const author = getAuthor(fm.author as unknown as string);
			if (!author) throw new Error(`Author "${fm.author}" not found for article "${slug}".`);
			fm.author = author;

			return {
				slug,
				html,
				fm,
				cover
			};
		})
	)
).sort((a, b) => new Date(b.fm.created).getTime() - new Date(a.fm.created).getTime());

export const tags = articles
	.map((article) => article.fm.tags)
	.flat()
	.filter((tag, index, self) => self.indexOf(tag) === index);

export const categories = articles
	.map((article) => article.fm.category)
	.filter((category, index, self) => self.indexOf(category) === index);

export const authors = articles
	.map((article) => article.fm.author)
	.filter((author, index, self) => self.indexOf(author) === index);

