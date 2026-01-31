import { Car, Heart, Home, Plane, Shield, Umbrella } from 'lucide-react'

export const services = [
	{
		description: 'Proteção financeira para sua família em momentos difíceis. Coberturas flexíveis e personalizadas.',
		icon: <Heart />,
		title: 'Seguro de Vida',
	},
	{
		description: 'Proteção completa para seu veículo com assistência 24h, guincho e carro reserva.',
		icon: <Car />,
		title: 'Seguro Auto',
	},
	{
		description: 'Seu lar protegido contra incêndio, roubo, danos elétricos e muito mais.',
		icon: <Home />,
		title: 'Seguro Residencial',
	},
	{
		description: 'Soluções completas para proteger seu negócio e patrimônio empresarial.',
		icon: <Umbrella />,
		title: 'Seguro Empresarial',
	},
	{
		description: 'Planeje seu futuro com planos de previdência que se adaptam aos seus objetivos.',
		icon: <Shield />,
		title: 'Previdência Privada',
	},
	{
		description: 'Viaje tranquilo com cobertura médica, extravio de bagagem e muito mais.',
		icon: <Plane />,
		title: 'Seguro Viagem',
	},
]

export const servicePage = {
	'seguro-auto': {
		badgeLabel: 'Proteção veicular completa',
		icon: Car,
		subtitle:
			'Proteja seu veículo contra roubo, colisão e imprevistos com as melhores coberturas do mercado. Assistência 24h e atendimento humanizado.',
		title: 'Seguro Auto',
	},
}
