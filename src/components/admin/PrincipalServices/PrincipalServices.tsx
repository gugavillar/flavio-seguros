import { BriefcaseBusiness } from 'lucide-react'

import { principalServices } from '@/__mocks__/principalServices'

import { CardContent } from '../CardContent'
import { SectionTitle } from '../SectionTitle'

export const PrincipalServices = () => {
	return (
		<section className='space-y-6'>
			<SectionTitle icon={<BriefcaseBusiness className='w-5 h-5' />} title='Serviços Principais' />
			<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
				{principalServices.map((service) => (
					<CardContent
						as='a'
						description={service.description}
						href={service.url}
						icon={service.image}
						key={service.name}
						rel='noopener noreferrer'
						target='_blank'
						title={service.name}
					/>
				))}
			</div>
		</section>
	)
}
