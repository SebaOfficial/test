import { categories } from '$lib/data/blog';

export const match = (param: string) => {
	return categories.includes(param);
};
