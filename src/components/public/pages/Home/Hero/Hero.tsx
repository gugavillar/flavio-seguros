import { ArrowRight, ChevronDown, type LucideIcon } from 'lucide-react'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { info } from '@/__mocks__/hero'
import { messages } from '@/__mocks__/whatsapp'
import { Button, PageContainer, Select } from '@/components/core'
import type { InsuranceType } from '@/contexts'
import { generateWhatsAppLink } from '@/utils'

export type CtaPrismicType = {
	slice_type: 'cta'
	primary: {
		'cta-title': string
		'cta-description': string
	}
	insurances: Pick<InsuranceType, 'insurance-title' | 'insurance-subtitle'>[]
}

export const HeroInfo = ({
	icon: Icon,
	text,
	href,
	rel,
	target,
}: {
	icon: LucideIcon
	text: string
	href: string
	rel?: string
	target?: string
}) => {
	return (
		<div className='flex items-center gap-2'>
			<Icon />
			<span>
				<a className='underline-offset-8 hover:text-white hover:underline' href={href} rel={rel} target={target}>
					{text}
				</a>
			</span>
		</div>
	)
}

export const Hero = ({
	data: { primary },
	insurances,
}: {
	data: CtaPrismicType
	insurances: CtaPrismicType['insurances']
}) => {
	const [service, setService] = useState('')
	return (
		<PageContainer className='bg-primary-gradient'>
			<div className='mx-auto max-w-4xl text-center'>
				<h2 className='mb-6 font-bold font-title text-2xl text-white md:text-3xl lg:text-4xl'>
					{primary['cta-title']}
				</h2>
				<p className='mx-auto mb-8 max-w-2xl text-gray-300 text-lg'>{primary['cta-description']}</p>
				<div className='mx-auto mb-12 flex max-w-xl flex-col gap-4 sm:flex-row'>
					<div className='relative w-full'>
						<label className='hidden' htmlFor='services'>
							Selecione um seguro
						</label>
						<Select
							id='services'
							name='services'
							onChange={(e) => setService(e.target.value)}
							options={insurances.map((services) => ({
								label: services['insurance-title'],
								value: services['insurance-title'],
							}))}
							value={service}
						/>
						<ChevronDown className='absolute top-1/2 right-2 -translate-y-1/2 text-white' />
					</div>
					<Button
						as='a'
						className={twMerge(
							'bg-white text-primary hover:bg-white hover:opacity-70',
							!service && 'pointer-events-none cursor-not-allowed opacity-50'
						)}
						href={generateWhatsAppLink({ message: messages.price(service) })}
						target='_blank'
					>
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
