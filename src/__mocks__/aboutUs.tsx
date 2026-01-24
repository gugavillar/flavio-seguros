import { Award, Clock, Headphones, Users } from 'lucide-react'

import { insurances } from './insurances'

export const features = [
	{
		description: 'Cada cliente é único. Analisamos seu perfil para oferecer a melhor solução.',
		icon: <Users />,
		title: 'Atendimento Personalizado',
	},
	{
		description: 'Receba sua cotação em até 24 horas com as melhores condições do mercado.',
		icon: <Clock />,
		title: 'Agilidade na Cotação',
	},
	{
		description: 'Trabalhamos apenas com as seguradoras mais confiáveis e bem avaliadas.',
		icon: <Award />,
		title: 'Parceiros Premium',
	},
	{
		description: 'Estamos sempre disponíveis para ajudar em qualquer situação.',
		icon: <Headphones />,
		title: 'Suporte 24/7',
	},
]

export const insurancesLogos = insurances.map((insurance) => ({ alt: insurance.name, src: insurance.image }))
