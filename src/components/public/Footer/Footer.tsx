import type { ComponentProps, ReactNode } from 'react'

import { company, insurances, social, support } from '@/__mocks__/footer'
import { AvatarLogo } from '@/components/core'

import { Anchor } from '../Anchor'

const SocialLink = ({ href, icon }: { href: string; icon: ReactNode }) => {
	return (
		<a
			className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-200/10 transition-colors hover:bg-primary'
			href={href}
		>
			{icon}
		</a>
	)
}

const LinkList = ({ title, links }: { title: string; links: Array<ComponentProps<'a'>> }) => {
	return (
		<div>
			<h4 className='mb-4 font-semibold'>{title}</h4>
			<ul className='space-y-3 text-gray-400'>
				{links.map((link, index) => (
					<li key={index}>
						<Anchor {...link} className='transition-colors hover:text-white' />
					</li>
				))}
			</ul>
		</div>
	)
}

export const Footer = () => {
	return (
		<footer className='bg-black/80 py-16 text-white'>
			<div className='container mx-auto px-4'>
				<div className='mb-12 grid gap-12 md:grid-cols-4'>
					<div className='space-y-4'>
						<AvatarLogo />
						<p className='text-gray-400 text-sm leading-relaxed'>
							Há mais de 15 anos protegendo famílias brasileiras com as melhores soluções em seguros.
						</p>
						<div className='flex gap-4'>
							{social.map((item, index) => (
								<SocialLink {...item} key={index} />
							))}
						</div>
					</div>
					<LinkList {...insurances} />
					<LinkList {...company} />
					<LinkList {...support} />
				</div>
				<div className='flex flex-col items-center justify-between gap-4 border-gray-200/30 border-t pt-8 md:flex-row'>
					<p className='text-sm'>© 2026 Flávio Seguros. Todos os direitos reservados.</p>
					<p>SUSEP Nº 12345678 - Corretora de seguros</p>
				</div>
			</div>
		</footer>
	)
}
