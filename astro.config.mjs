// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Replace this origin before launch. It is only a placeholder for canonical URLs.
const site = 'https://www.australiansolarcare.example';

// https://astro.build/config
export default defineConfig({
	site,
	output: 'static',
	trailingSlash: 'never',
	compressHTML: true,
	build: {
		inlineStylesheets: 'auto',
	},
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'hover',
	},
	image: {
		layout: 'constrained',
		responsiveStyles: true,
	},
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: 'Outfit',
			cssVariable: '--font-outfit',
			weights: [400, 600],
			styles: ['normal'],
			subsets: ['latin'],
			formats: ['woff2'],
			fallbacks: ['sans-serif'],
		},
	],
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [sitemap()],
});
