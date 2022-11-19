import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter(),
		trailingSlash: 'always'
	},
	preprocess: [
		mdsvex({
			extensions: ['.md']
		}),
		preprocess()
	]
};

export default config;
