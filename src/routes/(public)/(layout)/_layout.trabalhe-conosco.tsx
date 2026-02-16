import { createFileRoute } from '@tanstack/react-router'

import { Doubts, FormCareer, HeaderCareers, WhyWork } from '@/components/public'
import type { translateIcon } from '@/formatters'
import { client } from '@/lib/prismic'

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
	loader: async () => {
		const response = await client.getByUID('careers', 'trabalhe-conosco')
		return response.data
	},
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
