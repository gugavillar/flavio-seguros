import { PrismicImage } from '@prismicio/react'
import { Phone } from 'lucide-react'

import { Button, HeaderSection, PageContainer, WhatsAppIcon } from '@/components/core'
import { type PartnerType, useInsuranceContext } from '@/contexts'
import { formatPhone } from '@/formatters'
import type { AssistancePrismicType } from '@/routes/(public)/(layout)/_layout.assistencia'
import { generateWhatsAppLink } from '@/utils'

type EmergencePhoneProps = Pick<
	AssistancePrismicType,
	'assistance-partner-badge' | 'assistance-partner-title' | 'assistance-partner-description'
>

const EmergencePhoneCard = ({
	primary: {
		'company-assistance-phone': assistancePhone,
		'company-name': title,
		'company-whatsapp': whatsappPhone,
		'company-logo': url,
	},
}: PartnerType) => {
	return (
		<div className='rounded-lg bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl'>
			<div className='p-6'>
				<div className='flex h-16 items-center justify-center rounded-lg p-3'>
					<PrismicImage
						className='max-h-full max-w-40 object-contain'
						fetchPriority='high'
						field={url}
						imgixParams={{ auto: ['compress', 'format'], w: 160 }}
						loading='eager'
					/>
				</div>
				<h3 className='mb-6 text-center font-semibold text-black/80 text-lg'>{title}</h3>
				<div className='flex items-center justify-center gap-6'>
					<Button as='a' href={`tel:${assistancePhone}`}>
						<Phone />
						{formatPhone(assistancePhone)}
					</Button>
					{whatsappPhone && (
						<Button as='a' href={generateWhatsAppLink({ phone: whatsappPhone })} target='_blank'>
							<WhatsAppIcon className='fill-white' />
							{formatPhone(whatsappPhone)}
						</Button>
					)}
				</div>
			</div>
		</div>
	)
}

export const EmergencePhones = ({
	'assistance-partner-badge': badgeLabel,
	'assistance-partner-title': title,
	'assistance-partner-description': description,
}: EmergencePhoneProps) => {
	const contextData = useInsuranceContext()
	return (
		<>
			<PageContainer>
				<div className='mx-auto max-w-3xl text-center'>
					<HeaderSection badgeLabel={badgeLabel} description={description} title={title} />
				</div>
				<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
					{contextData.partners.map((partner) => (
						<EmergencePhoneCard key={partner.primary['company-name']} {...partner} />
					))}
				</div>
			</PageContainer>
		</>
	)
}
