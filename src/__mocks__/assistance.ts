import { Clock, Headphones, LucideShield } from 'lucide-react'

import { insurances } from './insurances'

export const benefits = [
	{
		icon: LucideShield,
		label: 'Cobertura nacional',
	},
	{
		icon: Headphones,
		label: 'Atendimento humanizado',
	},
	{
		icon: Clock,
		label: 'Resposta rápida',
	},
]

export const emergencePhones = insurances.map((insurance) => ({
	assistancePhone: insurance.assistancePhone,
	title: insurance.name,
	types: ['Auto', 'Residencial', 'Saúde'],
	url: insurance.image,
	whatsappPhone: insurance.whatsappPhone,
}))
