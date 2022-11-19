import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	let post: any;
	console.log('params :>> ', params);
	try {
		// TODO: Normalise how the slug is handled. Is the frontmattter or the filename canonical?
		post = await import(`../../content/${params.path}.md`);
	} catch (e) {
		throw error(404, 'Not found');
	}

	const content: string = post.default.render().html;

	return {
		content
	};
};
