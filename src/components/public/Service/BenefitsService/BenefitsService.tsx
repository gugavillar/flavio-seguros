import type { LucideIcon } from 'lucide-react'

import { DescriptionCard, PageContainer } from '@/components/core'

type BenefitsServiceProps = {
	benefits: Array<{
		icon: LucideIcon
		title: string
		description: string
	}>
}

export const BenefitsService = ({ benefits }: BenefitsServiceProps) => {
	return (
		<PageContainer className='py-20'>
			<div className='container mx-auto'>
				<h2 className='mb-12 text-center font-bold font-title text-3xl text-black/80 md:text-4xl'>
					Principais benefícios
				</h2>
				<div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
					{benefits.map((benefit, index) => (
						<DescriptionCard key={index} {...benefit} />
					))}
				</div>
			</div>
		</PageContainer>
	)
}
