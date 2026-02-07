import { AlertTriangle, Car, Clock, Headphones, Heart, Home, LucideShield } from 'lucide-react'

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

export const assistanceTypes = [
	{
		description: 'Socorro mecânico, reboque, chaveiro, troca de pneus, pane seca e elétrica para seu veículo.',
		icon: Car,
		title: 'Assistência Automotiva',
	},
	{
		description: 'Chaveiro, eletricista, encanador, vidraceiro e outros serviços emergenciais para sua casa.',
		icon: Home,
		title: 'Assistência Residencial',
	},
	{
		description: 'Remoção médica, orientação médica telefônica e agendamento de consultas.',
		icon: Heart,
		title: 'Assistência à Saúde',
	},
	{
		description: 'Atendimento prioritário em situações de emergência, 24 horas por dia, 7 dias por semana.',
		icon: AlertTriangle,
		title: 'Assistência Emergencial',
	},
]

export const importantTips = [
	{
		description: 'Isso agiliza o atendimento e permite que a seguradora localize rapidamente suas informações.',
		title: 'Tenha seu número de apólice em mãos',
	},
	{
		description: 'Tenha referências do local para facilitar o envio do socorro ou prestador de serviço.',
		title: 'Informe sua localização exata',
	},
	{
		description: 'Sempre solicite e guarde o número do protocolo para acompanhamento posterior.',
		title: 'Anote o protocolo de atendimento',
	},
	{
		description: 'Nossa equipe está pronta para orientá-lo sobre qual assistência acionar.',
		title: 'Em caso de dúvida, ligue para nós',
	},
]

export const emergencePhones = insurances.map((insurance) => ({
	assistancePhone: insurance.assistancePhone,
	title: insurance.name,
	types: ['Auto', 'Residencial', 'Saúde'],
	url: insurance.image,
	whatsappPhone: insurance.whatsappPhone,
}))
