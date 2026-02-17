import { createFileRoute } from '@tanstack/react-router'

import {
	EmergencePhones,
	HeaderAssistance,
	Tips,
	type TipsPrismicType,
	WhatIsAssistance,
	type WhatIsAssistancePrismicType,
} from '@/components/public'
import { TEN_MINUTES } from '@/constants'
import { getPageData } from '@/lib/prismic'

export type AssistancePrismicType = {
	'assistance-badge': string
	'assistance-description': string
	'assistance-title': string
	'assistance-partner-badge': string
	'assistance-partner-title': string
	'assistance-partner-description': string
	body: Array<{
		slice_type: string
	}>
}

export const Route = createFileRoute('/(public)/(layout)/_layout/assistencia')({
	component: AssistancePage,
	loader: async () => {
		const response = await getPageData({
			data: {
				args: ['assistance', 'assistencia'],
				method: 'getByUID',
			},
		})
		return response.data
	},
	ssr: true,
	staleTime: TEN_MINUTES,
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
			<HeaderAssistance
				assistance-badge={response['assistance-badge']}
				assistance-description={response['assistance-description']}
				assistance-title={response['assistance-title']}
			/>
			<WhatIsAssistance data={whatIsAssistance} />
			<EmergencePhones
				assistance-partner-badge={response['assistance-partner-badge']}
				assistance-partner-description={response['assistance-partner-description']}
				assistance-partner-title={response['assistance-partner-title']}
			/>
			<Tips data={tips} />
		</>
	)
}
