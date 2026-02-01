import { Award, Star, Trophy } from 'lucide-react'

export const mainAwards = [
	{
		description: 'Reconhecimento pela excelência em atendimento e inovação no setor de seguros brasileiro.',
		icon: Trophy,
		organization: 'Prêmio CNSEG',
		title: 'Melhor Corretora de Seguros',
		year: '2024',
	},
	{
		description: 'Destaque entre as melhores empresas do setor em satisfação do cliente e crescimento.',
		icon: Star,
		organization: 'Revista Exame',
		title: 'Top 10 Seguradoras do Brasil',
		year: '2023',
	},
	{
		description: 'Certificação por ser um excelente ambiente de trabalho com foco no bem-estar dos colaboradores.',
		icon: Award,
		organization: 'GPTW Brasil',
		title: 'Empresa Great Place to Work',
		year: '2023',
	},
]

export const timelineAwards = [
	{
		awards: [
			{ description: 'Excelência em atendimento ao consumidor', title: 'Selo RA1000 - Reclame Aqui' },
			{ description: 'Reconhecimento pelo atendimento telefônico', title: 'Prêmio ABT - Melhor SAC' },
		],
		year: '2024',
	},
	{
		awards: [
			{ description: 'Melhor experiência do cliente em seguros', title: 'Prêmio Consumidor Moderno' },
			{ description: 'Certificação de qualidade em processos', title: 'ISO 9001:2015' },
		],
		year: '2023',
	},
	{
		awards: [
			{ description: 'Compromisso com sustentabilidade e governança', title: 'Selo ESG' },
			{ description: 'Destaque em gestão financeira', title: 'Prêmio IBEF' },
		],
		year: '2022',
	},
	{
		awards: [
			{ description: 'Marca mais lembrada na categoria', title: 'Top of Mind - Seguros' },
			{ description: 'Melhor atendimento ao cliente', title: 'Prêmio ABAC' },
		],
		year: '2021',
	},
]
