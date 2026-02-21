import { createFileRoute } from '@tanstack/react-router'

import { GlobalLoading } from '@/components/core'
import { Doubts, FormCareer, HeaderCareers, WhyWork } from '@/components/public'
import { TEN_MINUTES } from '@/constants'
import type { translateIcon } from '@/formatters'
import { getPageData } from '@/lib/prismic'

export type CareersPrismicType = {
	'careers-badge': string
	'careers-description': string
	'careers-title': string
	body: Array<{
		primary: {
			'careers-why-work-title': string
			'careers-why-work-description': string
		}
		items: Array<{
			'careers-why-work-card-title': string
			'careers-why-work-card-description': string
			'careers-why-work-card-icon': keyof typeof translateIcon
		}>
	}>
}

export const Route = createFileRoute('/(public)/(layout)/_layout/trabalhe-conosco')({
	component: CareersPage,
	head: () => ({
		meta: [
			{
				content:
					'Quer trabalhar em uma corretora de seguros sólida e em crescimento? Envie seu currículo e faça parte do nosso time.',
				name: 'description',
			},
			{
				title: 'Flávio Seguros | Corretora de Seguros | Trabalhe Conosco | Faça Parte da Nossa Equipe',
			},
		],
	}),
	loader: async () => {
		const response = await getPageData({
			data: {
				args: ['careers', 'trabalhe-conosco'],
				method: 'getByUID',
			},
		})
		return response.data
	},
	pendingComponent: () => <GlobalLoading />,
	staleTime: TEN_MINUTES,
	staticData: {
		breadcrumb: 'Trabalhe Conosco',
	},
})

function CareersPage() {
	const response: CareersPrismicType = Route.useLoaderData()

	return (
		<>
			<HeaderCareers {...response} />
			<WhyWork body={response.body[0]} />
			<FormCareer />
			<Doubts />
		</>
	)
}
