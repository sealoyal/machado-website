export const site = {
	name: 'Australian Solar Care',
	tagline: 'Panel cleaning specialist',
	description:
		'Australian Solar Care is a panel cleaning specialist for homes and commercial sites.',
	phone: '[Phone]',
	email: '[Email]',
	area: '[Service area]',
} as const;

export const nav = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/services', label: 'Services' },
	{ href: '/contact', label: 'Contact' },
] as const;
