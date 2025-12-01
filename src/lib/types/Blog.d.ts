import type { Person } from './Person';

export interface FrontMatter {
	title: string;
	summary: string;
	description: string;
	category: string;
	tags: string[];
	author: Person;
	created: Date;
	updated: Date;
	coverExtension: string;
}

export interface Article {
	slug: string;
	html: string;
	cover: string;
	fm: FrontMatter;
}

