import { Crown } from 'lucide-react'

import { messages } from '@/__mocks__/whatsapp'
import { Button, CTACard } from '@/components/core'
import { generateWhatsAppLink } from '@/utils'

export const RecognizedQuality = () => {
	return (
		<CTACard
			description='Nossas premiações refletem o compromisso diário de oferecer o melhor serviço para você e sua família. Conte conosco!'
			icon={Crown}
			title='Qualidade reconhecida'
		>
			<Button
				as='a'
				className='border border-gray-200 bg-white text-primary hover:bg-white/70'
				href={generateWhatsAppLink({ message: messages.price() })}
				target='_blank'
			>
				Solicitar cotação
			</Button>
		</CTACard>
	)
}
