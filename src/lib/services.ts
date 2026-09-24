import { getCollection, type CollectionEntry } from 'astro:content';

export async function getServices(): Promise<CollectionEntry<'services'>[]> {
	const services = await getCollection('services');
	return services.sort((a, b) => a.data.order - b.data.order);
}
