import { AlertTriangle, Car, Clock, Headphones, Heart, Home, LucideShield } from 'lucide-react'

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
