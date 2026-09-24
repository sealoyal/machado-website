import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const services = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		summary: z.string(),
		audience: z.enum(['Residential', 'Commercial']),
		order: z.number(),
	}),
});

export const collections = { services };
