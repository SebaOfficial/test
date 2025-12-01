import people from '$lib/data/people';

export const load = ({ params }) => {
	return {
		person: people.find((person) => person.slug === params.person)!
	};
};
