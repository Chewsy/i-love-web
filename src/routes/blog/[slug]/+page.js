import { error } from '@sveltejs/kit';

const posts = import.meta.glob('../../../lib/blog/*.md', { eager: true });

export function load({ params }) {
	const slug = params.slug;

	const found = Object.entries(posts).find(([path]) =>
		path.endsWith(`/${slug}.md`)
	);

	if (!found) {
		throw error(404, `Post '${slug}' not found`);
	}

	const [path, module] = found;
	const metadata = module.metadata ?? {};

	return {
		slug,
		metadata,
		Post: module.default
	};
}
