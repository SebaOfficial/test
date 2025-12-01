import type { Picture } from 'vite-imagetools';

export type Person = {
	name: string;
	smallDescription: string;
	description: string;
	/**
	 * The first image is a big picture, the second one is a small avatar.
	 */
	images: [Picture, Picture];
	slug: string;
};
