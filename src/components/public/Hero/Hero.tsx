import { ArrowRight, ChevronDown } from 'lucide-react'
import { type ReactNode, useState } from 'react'

import { info } from '@/__mocks__/hero'
import { services } from '@/__mocks__/services'
import { PageContainer, Select } from '@/components/core'

import { Button } from '../Button'

export const HeroInfo = ({
	icon,
	text,
	href,
	rel,
	target,
}: {
	icon: ReactNode
	text: string
	href: string
	rel?: string
	target?: string
}) => {
	return (
		<div className='flex items-center gap-2'>
			{icon}
			<span>
				<a href={href} rel={rel} target={target}>
					{text}
				</a>
			</span>
		</div>
	)
}

export const Hero = () => {
	const [service, setService] = useState('')
	return (
		<PageContainer className='bg-primary-gradient'>
			<div className='mx-auto max-w-4xl text-center'>
				<h2 className='mb-6 font-bold font-title text-2xl text-white md:text-3xl lg:text-4xl'>
					Pronto para proteger o que importa?
				</h2>
				<p className='mx-auto mb-8 max-w-2xl text-gray-300 text-lg'>
					Solicite uma cotação gratuita e sem compromisso. Nossa equipe entrará em contato em até 24 horas com as
					melhores opções para você.
				</p>
				<div className='mx-auto mb-12 flex max-w-xl flex-col gap-4 sm:flex-row'>
					<div className='relative w-full'>
						<Select
							name='services'
							onChange={(e) => setService(e.target.value)}
							options={services.map((services) => ({ label: services.title, value: services.title }))}
							value={service}
						/>
						<ChevronDown className='absolute top-1/2 right-2 -translate-y-1/2 text-white' />
					</div>
					<Button className='bg-white text-primary hover:bg-white hover:opacity-70' disabled={!service}>
						Solicitar cotação <ArrowRight />
					</Button>
				</div>
				<div className='flex flex-wrap justify-center gap-8 text-gray-300'>
					{info.map((item) => (
						<HeroInfo key={item.text} {...item} />
					))}
				</div>
			</div>
		</PageContainer>
	)
}
