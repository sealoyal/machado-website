export const site = {
	name: 'Australian Solar Care',
	tagline: 'Panel cleaning specialist',
	description:
		'Solar panel cleaning and maintenance in Adelaide and South Australia.',
	phone: '0411 676 346',
	phoneHref: 'tel:+61411676346',
	whatsappHref: 'https://wa.me/61411676346',
	email: 'australiansolarcare@gmail.com',
	area: 'Adelaide and South Australia',
} as const;

export const nav = [
	{ href: '/', label: 'Home' },
	{ href: '/services', label: 'Services' },
	{ href: '/gallery', label: 'Gallery' },
	{ href: '/contact', label: 'Contact' },
] as const;

export const services = [
	{
		href: '/services/residential',
		title: 'Residential systems',
		summary:
			'Professional solar panel cleaning and maintenance across Adelaide and regional areas.',
		icon: 'home',
	},
	{
		href: '/services/commercial',
		title: 'Commercial solutions',
		summary:
			'Large-scale solar panel cleaning, including South Australia’s first solar cleaning robot.',
		icon: 'building',
	},
	{
		href: '/services/bird-proofing',
		title: 'Bird proofing',
		summary:
			'Approved, warranty-safe bird proofing to stop birds and animals nesting under solar panels.',
		icon: 'bird',
	},
	{
		href: '/services/operations-maintenance',
		title: 'Commercial O&M',
		summary:
			'Quarterly, bi-annual, or annual operations and maintenance for large PV systems.',
		icon: 'wrench',
	},
] as const;

export const testimonials = [
	{
		name: 'Benjamin bunker',
		quote:
			'Thanks for your great work guys. Dan and his team cleaned my solar panels which I could never have done myself. Very pleasant, punctual and thorough with his work. My panels much more efficient once the dirt is gone. Will use you again for sure.',
	},
	{
		name: 'Alejandro Carriel',
		quote:
			'Daniel and Nicolas were a great find. I came across them through a friend, who recommended them to me. I needed to clean up my solar panels. They were super easy to deal with and delivered beyond expectations. Super friendly team of professionals. Couldn’t recommend more!',
	},
	{
		name: 'James Gold',
		quote:
			'Dan and his team were thorough and efficient!! I’ve used cleaning services before but I was very happy with the given quote. I recommend Australian Solar Care for any and all jobs around the home or business. Well done guys!',
	},
] as const;
