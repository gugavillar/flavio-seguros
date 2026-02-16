import { createFileRoute } from '@tanstack/react-router'

import {
	EmergencePhones,
	HeaderAssistance,
	Tips,
	type TipsPrismicType,
	WhatIsAssistance,
	type WhatIsAssistancePrismicType,
} from '@/components/public'
import { client } from '@/lib/prismic'

export type AssistancePrismicType = {
	'assistance-badge': string
	'assistance-description': string
	'assistance-title': string
	body: Array<{
		slice_type: string
	}>
}

export const Route = createFileRoute('/(public)/(layout)/_layout/assistencia')({
	component: AssistancePage,
	loader: async () => {
		const response = await client.getByUID('assistance', 'assistencia')
		return response.data
	},
	staticData: {
		breadcrumb: 'Assistência 24h',
	},
})

function AssistancePage() {
	const response = Route.useLoaderData()
	const whatIsAssistance = response.body.find((slice: WhatIsAssistancePrismicType) => slice.slice_type === 'what-is')
	const tips = response.body.find((slice: TipsPrismicType) => slice.slice_type === 'tips')
	return (
		<>
			<HeaderAssistance />
			<WhatIsAssistance data={whatIsAssistance} />
			<EmergencePhones />
			<Tips data={tips} />
		</>
	)
}
