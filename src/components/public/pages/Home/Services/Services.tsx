import { DescriptionCard, HeaderSection, NavLink, PageContainer } from '@/components/core'
import type { InsuranceType } from '@/contexts'
import { translateIcon } from '@/formatters'
import { NAVIGATION_HASH } from '@/utils'

export type ServicePrismicType = {
	slice_type: string
	primary: {
		'service-badge': string
		'service-description': string
		'service-title': string
	}
	insurances: Pick<InsuranceType, 'insurance-icon' | 'insurance-title' | 'insurance-subtitle' | 'insurance-path'>[]
}

export const Services = ({
	data: { primary },
	insurances,
}: {
	data: ServicePrismicType
	insurances: ServicePrismicType['insurances']
}) => {
	return (
		<PageContainer id={NAVIGATION_HASH.SERVICES}>
			<div className='mx-auto mb-16 max-w-2xl text-center'>
				<HeaderSection
					badgeLabel={primary['service-badge']}
					description={primary['service-description']}
					title={primary['service-title']}
				/>
			</div>
			<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
				{insurances.map((item) => {
					const icon = translateIcon[item['insurance-icon']]
					return (
						<NavLink className='flex' key={item['insurance-title']} preload='intent' to={item['insurance-path']}>
							<DescriptionCard description={item['insurance-subtitle']} icon={icon} title={item['insurance-title']} />
						</NavLink>
					)
				})}
			</div>
		</PageContainer>
	)
}
