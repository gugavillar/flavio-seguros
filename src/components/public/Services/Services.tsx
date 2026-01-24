import type { ReactNode } from 'react'

import { services } from '@/__mocks__/services'
import { Card, HeaderSection, PageContainer } from '@/components/core'

const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: ReactNode }) => {
	return (
		<Card className='group cursor-pointer'>
			<div className='flex flex-col space-y-1.5 p-6'>
				<div className='mb-4 flex size-14 items-center justify-center rounded-xl bg-primary-gradient text-white transition-transform duration-300 group-hover:scale-110'>
					{icon}
				</div>
				<h3 className='font-semibold font-title text-black/80 text-xl tracking-tight transition-colors group-hover:text-primary'>
					{title}
				</h3>
			</div>
			<div className='p-6 pt-0'>
				<p className='text-gray-400 text-sm leading-relaxed'>{description}</p>
			</div>
		</Card>
	)
}

export const Services = () => {
	return (
		<PageContainer id='servicos'>
			<div className='mx-auto mb-16 max-w-2xl text-center'>
				<HeaderSection
					badgeLabel='Nossos Serviços'
					description='Trabalhamos com as melhores seguradoras do mercado para oferecer as melhores condições e coberturas para você.'
					title='Seguros para todas as suas necessidades'
				/>
			</div>
			<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
				{services.map((item) => (
					<ServiceCard key={item.title} {...item} />
				))}
			</div>
		</PageContainer>
	)
}
