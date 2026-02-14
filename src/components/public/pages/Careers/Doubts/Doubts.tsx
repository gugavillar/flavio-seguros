import { Mail, Shield } from 'lucide-react'

import { info } from '@/__mocks__/hero'
import { messages } from '@/__mocks__/whatsapp'
import { Button, CTACard } from '@/components/core'
import { generateWhatsAppLink } from '@/utils'

export const Doubts = () => {
	const email = info.filter((item) => item.icon === Mail)[0]?.text
	return (
		<CTACard
			description={`Entre em contato conosco pelo e-mail ${email} ou ligue para mais informações. Teremos prazer em ajudá-lo.`}
			icon={Shield}
			title='Dúvidas sobre o processo?'
		>
			<Button
				as='a'
				className='border border-gray-200 bg-white text-primary hover:bg-white/70'
				href={generateWhatsAppLink({ message: messages.careers })}
				target='_blank'
			>
				Fale conosco
			</Button>
		</CTACard>
	)
}
