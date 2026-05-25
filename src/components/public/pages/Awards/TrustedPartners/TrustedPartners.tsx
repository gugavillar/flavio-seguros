import { PrismicImage } from '@prismicio/react'

import { HeaderSection, PageContainer } from '@/components/core'
import { useInsuranceContext } from '@/contexts'
import type { AwardsPrismicType } from '@/routes/(public)/_layout/premiacoes'

type TrustedPartnersProps = Pick<AwardsPrismicType, 'partners-award-title' | 'partners-award-description'>

const PartnerCard = ({ name, image }: { name: string; image: Object }) => {
	return (
		<div className='rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-soft-white'>
			<div className='flex aspect-square flex-col items-center justify-center p-6'>
				<div className='mb-3 flex size-16 items-center justify-center rounded-xl'>
					<PrismicImage
						field={image}
						height={64}
						imgixParams={{ auto: ['format', 'compress'], fit: 'max', q: 75, w: 64 }}
						loading='eager'
						width={64}
					/>
				</div>
				<p className='text-center text-gray-500 text-xs'>{name}</p>
			</div>
		</div>
	)
}

export const TrustedPartners = ({
	'partners-award-title': title,
	'partners-award-description': description,
}: TrustedPartnersProps) => {
	const contextData = useInsuranceContext()
	return (
		<PageContainer>
			<div className='mx-auto mb-16 max-w-2xl text-center'>
				<HeaderSection description={description} title={title} />
			</div>
			<div className='mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6'>
				{contextData.partners.map(({ primary }) => (
					<PartnerCard image={primary['company-logo']} key={primary['company-name']} name={primary['company-name']} />
				))}
			</div>
		</PageContainer>
	)
}
