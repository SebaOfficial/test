import people from '$lib/data/people';

const slugs = new Set(people.map((person) => person.slug));

export const match = (param: string) => {
	return slugs.has(param);
};
