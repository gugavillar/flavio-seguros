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
		description: {
			content: [
				'O Seguro Auto é a proteção essencial para quem possui um veículo. Mais do que apenas cobrir danos materiais, nosso seguro oferece tranquilidade para você e sua família no dia a dia.',
				'Trabalhamos com as melhores seguradoras do mercado para oferecer as coberturas mais completas com os melhores preços. Nossa equipe especializada analisa seu perfil e encontra a opção ideal para suas necessidades.',
				'Com nosso seguro, você tem a garantia de um atendimento ágil e humanizado em qualquer situação. Desde um simples socorro mecânico até casos mais complexos de sinistro, estamos ao seu lado.',
			],
			indications: [
				'Proprietários de veículos novos ou seminovos',
				'Motoristas que utilizam o carro diariamente',
				'Quem financia ou faz leasing do veículo',
				'Motoristas de aplicativo e frotas empresariais',
			],
			title: 'Sobre o seguro Auto',
		},
		icon: Car,
		subtitle:
			'Proteja seu veículo contra roubo, colisão e imprevistos com as melhores coberturas do mercado. Assistência 24h e atendimento humanizado.',
		title: 'Seguro Auto',
	},
}
