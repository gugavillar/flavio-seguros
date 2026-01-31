import { BadgeCheck, Car, Clock, Heart, HeartHandshake, Home, Plane, Shield, Umbrella, Wrench } from 'lucide-react'

export const services = [
	{
		description: 'Proteção financeira para sua família em momentos difíceis. Coberturas flexíveis e personalizadas.',
		icon: Heart,
		title: 'Seguro de Vida',
	},
	{
		description: 'Proteção completa para seu veículo com assistência 24h, guincho e carro reserva.',
		icon: Car,
		title: 'Seguro Auto',
	},
	{
		description: 'Seu lar protegido contra incêndio, roubo, danos elétricos e muito mais.',
		icon: Home,
		title: 'Seguro Residencial',
	},
	{
		description: 'Soluções completas para proteger seu negócio e patrimônio empresarial.',
		icon: Umbrella,
		title: 'Seguro Empresarial',
	},
	{
		description: 'Planeje seu futuro com planos de previdência que se adaptam aos seus objetivos.',
		icon: Shield,
		title: 'Previdência Privada',
	},
	{
		description: 'Viaje tranquilo com cobertura médica, extravio de bagagem e muito mais.',
		icon: Plane,
		title: 'Seguro Viagem',
	},
]

export const servicePage = {
	'seguro-auto': {
		badgeLabel: 'Proteção veicular completa',
		benefits: [
			{
				description: 'Proteção contra roubo, furto, colisão, incêndio e danos causados pela natureza.',
				icon: Shield,
				title: 'Cobertura completa',
			},
			{
				description: 'Socorro mecânico, guincho, chaveiro e troca de pneus a qualquer hora do dia.',
				icon: Clock,
				title: 'Assistência 24 horas',
			},
			{
				description: 'Ampla rede de oficinas e concessionárias credenciadas em todo o Brasil.',
				icon: Wrench,
				title: 'Rede credenciada',
			},
			{
				description: 'Veículo substituto enquanto o seu estiver em reparo ou em caso de sinistro.',
				icon: Car,
				title: 'Carro reserva',
			},
			{
				description: 'Proteção contra danos materiais e corporais causados a outras pessoas.',
				icon: BadgeCheck,
				title: 'Cobertura para terceiros',
			},
			{
				description: 'Suporte dedicado durante todo o processo de sinistro.',
				icon: HeartHandshake,
				title: 'Atendimento humanizado',
			},
		],
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
