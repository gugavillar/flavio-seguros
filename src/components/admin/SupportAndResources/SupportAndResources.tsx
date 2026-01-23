import { Headphones } from 'lucide-react'

import { supportAndResources } from '@/__mocks__/supportAndResources'

import { CardContent } from '../CardContent'
import { SectionTitle } from '../SectionTitle'

export const SupportAndResources = () => {
	return (
		<section className='space-y-6'>
			<SectionTitle icon={<Headphones className='size-5' />} title='Suporte & Recursos' />
			<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
				{supportAndResources.map((item) => (
					<CardContent
						as='a'
						description={item.description}
						href={item.url}
						icon={item.image}
						key={item.name}
						rel='noopener noreferrer'
						target='_blank'
						title={item.name}
					/>
				))}
			</div>
		</section>
	)
}
