import { ChartLine, Mail } from 'lucide-react'

import { WhatsAppIcon } from '@/components/core'

export const principalServices = [
	{
		description: 'Plataforma de cotação.',
		image: <ChartLine className='size-12' />,
		name: 'Cotação',
		url: 'https://app.segfy.com/',
	},
	{
		description: 'Plataforma de atendimento via WhatsApp.',
		image: <WhatsAppIcon className='size-12 fill-primary' />,
		name: 'WhatsApp',
		url: 'https://painel.multi360.com.br/login.html',
	},
	{
		description: 'Plataforma de e-mail corporativo.',
		image: <Mail className='size-12' />,
		name: 'E-mail',
		url: 'http://webmail.gravatacorretora.com.br/',
	},
]
