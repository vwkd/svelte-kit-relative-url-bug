import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter({ pages: "docs" }),
		paths: {
			base:
				"/svelte-kit-relative-url-bug"
		}
	}
};

export default config;