import { DescriptionCard, PageContainer } from '@/components/core'
import type { InsuranceType } from '@/contexts'
import { translateIcon } from '@/formatters'

type BenefitsServiceProps = Pick<InsuranceType, 'insurance-benefits'>

export const BenefitsService = ({ 'insurance-benefits': benefits }: BenefitsServiceProps) => {
	return (
		<PageContainer className='py-20'>
			<div className='container mx-auto'>
				<h2 className='mb-12 text-center font-bold font-title text-3xl text-black/80 md:text-4xl'>
					Principais benefícios
				</h2>
				<div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
					{benefits.map((benefit, index) => {
						const icon = translateIcon[benefit['insurance-benefit-icon']]
						return (
							<DescriptionCard
								description={benefit['insurance-benefit-description']}
								icon={icon}
								key={index}
								title={benefit['insurance-benefit-title']}
							/>
						)
					})}
				</div>
			</div>
		</PageContainer>
	)
}
