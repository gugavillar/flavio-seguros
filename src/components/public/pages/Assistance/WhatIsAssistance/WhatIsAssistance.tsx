import type { LucideIcon } from 'lucide-react'

import { assistanceTypes } from '@/__mocks__/assistance'
import { HeaderSection, PageContainer } from '@/components/core'

const AssistanceCard = ({
	icon: Icon,
	title,
	description,
}: {
	icon: LucideIcon
	title: string
	description: string
}) => {
	return (
		<div className='rounded-lg bg-white text-gray-500 shadow-sm transition-all hover:shadow-2xl'>
			<div className='p-6 text-center'>
				<div className='mx-auto mb-4 flex size-14 items-center justify-center rounded-xl bg-primary-gradient text-white'>
					<Icon className='size-7' />
				</div>
				<h3 className='mb-2 font-semibold font-title text-black/80 text-lg'>{title}</h3>
				<p className='text-sm'>{description}</p>
			</div>
		</div>
	)
}

export const WhatIsAssistance = () => {
	return (
		<PageContainer>
			<div className='mx-auto max-w-3xl text-center'>
				<HeaderSection
					badgeLabel='O que é?'
					description='A assistência 24 horas é um serviço incluído em seu seguro que oferece suporte emergencial a qualquer hora do dia ou da noite, todos os dias do ano.'
					title='Entenda a assistência 24 horas'
				/>
			</div>
			<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
				{assistanceTypes.map((item) => (
					<AssistanceCard key={item.title} {...item} />
				))}
			</div>
		</PageContainer>
	)
}
