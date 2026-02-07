import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

import { Anchor } from '@/components/public'
import { generateWhatsAppLink, NAVIGATION_HASH } from '@/utils'

import { services } from './services'
import { messages } from './whatsapp'

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
			children: (
				<Anchor className='text-gray-400 hover:text-white' to='/assistencia'>
					Assistência 24h
				</Anchor>
			),
		},
		{
			children: (
				<a
					className='font-medium text-gray-400 underline-offset-8 transition-colors hover:text-white hover:underline'
					href={generateWhatsAppLink({ message: messages.talk })}
					target='_blank'
				>
					Fale conosco
				</a>
			),
		},
		{
			children: (
				<a
					className='font-medium text-gray-400 underline-offset-8 transition-colors hover:text-white hover:underline'
					href='/docs/politica-de-privacidade.pdf'
					rel='noopener noreferrer'
					target='_blank'
				>
					Política de privacidade
				</a>
			),
		},
		{
			children: (
				<a
					className='font-medium text-gray-400 underline-offset-8 transition-colors hover:text-white hover:underline'
					href='/docs/politica-de-cookies.pdf'
					rel='noopener noreferrer'
					target='_blank'
				>
					Política de cookies
				</a>
			),
		},
	],
	title: 'Suporte',
}

export const company = {
	links: [
		{
			children: (
				<Anchor className='text-gray-400 hover:text-white' hash={NAVIGATION_HASH.ABOUT} to='/'>
					Sobre nós
				</Anchor>
			),
		},
		{
			children: <Anchor className='text-gray-400 hover:text-white'>Nossa equipe</Anchor>,
		},
		{
			children: <Anchor className='text-gray-400 hover:text-white'>Trabalhe conosco</Anchor>,
		},
		{
			children: (
				<Anchor className='text-gray-400 hover:text-white' to='/premiacoes'>
					Premiações
				</Anchor>
			),
		},
	],
	title: 'Empresa',
}
