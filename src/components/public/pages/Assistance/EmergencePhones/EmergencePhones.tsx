import { Phone } from 'lucide-react'

import { emergencePhones } from '@/__mocks__/assistance'
import { Button, HeaderSection, PageContainer, WhatsAppIcon } from '@/components/core'
import { formatPhone } from '@/formatters'
import { generateWhatsAppLink } from '@/utils'

const EmergencePhoneCard = ({
	url,
	title,
	types,
	assistancePhone,
	whatsappPhone,
}: {
	url: string
	title: string
	types: Array<string>
	assistancePhone: string
	whatsappPhone: string
}) => {
	return (
		<div className='rounded-lg bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl'>
			<div className='p-6'>
				<div className='flex h-16 items-center justify-center rounded-lg p-3'>
					<img alt={title} className='max-h-full max-w-full object-contain' src={url} />
				</div>
				<h3 className='mb-2 text-center font-semibold text-black/80 text-lg'>{title}</h3>
				<div className='mb-4 flex flex-wrap justify-center gap-1'>
					{types.map((type, index) => (
						<span className='rounded-full bg-primary/15 px-2 py-1 text-primary text-xs' key={index}>
							{type}
						</span>
					))}
				</div>
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

export const EmergencePhones = () => {
	return (
		<>
			<PageContainer>
				<div className='mx-auto max-w-3xl text-center'>
					<HeaderSection
						badgeLabel='Telefones de emergência'
						description='Ligue diretamente para a central de atendimento da sua seguradora. Todas as ligações são gratuitas e o atendimento funciona 24 horas.'
						title='Nossas seguradoras parceiras'
					/>
				</div>
				<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
					{emergencePhones.map((emergencePhone) => (
						<EmergencePhoneCard key={emergencePhone.title} {...emergencePhone} />
					))}
				</div>
			</PageContainer>
		</>
	)
}
