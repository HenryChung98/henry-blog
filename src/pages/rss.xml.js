import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { BLOG_INFO } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: BLOG_INFO.title,
		description: BLOG_INFO.description,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/henry-blog/posts/${post.id}`,
		})),
	});
}
