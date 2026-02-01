import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

import { Anchor } from '@/components/public'
import { goToHash, NAVIGATION_HASH } from '@/utils'

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
		children: (
			<Anchor className='text-gray-400 hover:text-white' to={service.path}>
				{service.title}
			</Anchor>
		),
	})),
	title: 'Serviços',
}

export const support = {
	links: [
		{
			children: 'Assistência 24h',
		},
		{
			children: 'Fale conosco',
		},
		{
			children: 'Política de privacidade',
			href: '/docs/politica-de-privacidade.pdf',
			rel: 'noopener noreferrer',
			target: '_blank',
		},
		{
			children: 'Política de cookies',
			href: '/docs/politica-de-cookies.pdf',
			rel: 'noopener noreferrer',
			target: '_blank',
		},
	],
	title: 'Suporte',
}

export const company = {
	links: [
		{
			children: (
				<a className='text-gray-400 hover:text-white' onClick={() => goToHash(NAVIGATION_HASH.ABOUT)}>
					Sobre nós
				</a>
			),
		},
		{
			children: <Anchor className='text-gray-400 hover:text-white'>Nossa equipe</Anchor>,
		},
		{
			children: <Anchor className='text-gray-400 hover:text-white'>Trabalhe conosco</Anchor>,
		},
		{
			children: <Anchor className='text-gray-400 hover:text-white'>Premiações</Anchor>,
		},
	],
	title: 'Empresa',
}
