import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

import { NavLink } from '@/components/core'
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
			<NavLink className='text-gray-400 underline-offset-8 hover:text-white hover:underline' to={service.path}>
				{service.title}
			</NavLink>
		),
	})),
	title: 'Seguros',
}

export const support = {
	links: [
		{
			children: (
				<NavLink className='text-gray-400 underline-offset-8 hover:text-white hover:underline' to='/assistencia'>
					Assistência 24h
				</NavLink>
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
				<NavLink
					className='text-gray-400 underline-offset-8 hover:text-white hover:underline'
					hash={NAVIGATION_HASH.ABOUT}
					to='/'
				>
					Sobre nós
				</NavLink>
			),
		},
		{
			children: (
				<NavLink className='text-gray-400 underline-offset-8 hover:text-white hover:underline' to='/'>
					Nossa equipe
				</NavLink>
			),
		},
		{
			children: (
				<NavLink className='text-gray-400 underline-offset-8 hover:text-white hover:underline' to='/'>
					Trabalhe conosco
				</NavLink>
			),
		},
		{
			children: (
				<NavLink className='text-gray-400 underline-offset-8 hover:text-white hover:underline' to='/premiacoes'>
					Premiações
				</NavLink>
			),
		},
	],
	title: 'Empresa',
}
