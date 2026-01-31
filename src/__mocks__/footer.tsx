import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

import { services } from './services'

export const social = [
	{
		href: '',
		icon: <Facebook />,
	},
	{
		href: '',
		icon: <Instagram />,
	},
	{
		href: '',
		icon: <Linkedin />,
	},
	{
		href: '',
		icon: <Twitter />,
	},
]

export const servicesFooter = {
	links: services.map((service) => ({
		children: service.title,
		to: service.path,
	})),
	title: 'Seguros',
}

export const support = {
	links: [
		{
			children: 'Assistência 24h',
			href: '',
		},
		{
			children: 'Fale conosco',
			href: '',
		},
		{
			children: 'Política de privacidade',
			href: '',
		},
		{
			children: 'Termos de uso',
			href: '',
		},
	],
	title: 'Suporte',
}

export const company = {
	links: [
		{
			children: 'Sobre nós',
			hash: 'sobre',
			to: '/',
		},
		{
			children: 'Nossa equipe',
			href: '',
		},
		{
			children: 'Trabalhe conosco',
			href: '',
		},
		{
			children: 'Premiações',
			href: '',
		},
	],
	title: 'Empresa',
}
