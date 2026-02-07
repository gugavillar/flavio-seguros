import { createFileRoute } from '@tanstack/react-router'

import { EmergencePhones, HeaderAssistance, Tips, WhatIsAssistance } from '@/components/public'

export const Route = createFileRoute('/(public)/(layout)/_layout/assistencia')({
	component: AssistancePage,
	staticData: {
		breadcrumb: 'Assistência 24h',
	},
})

function AssistancePage() {
	return (
		<>
			<HeaderAssistance />
			<WhatIsAssistance />
			<EmergencePhones />
			<Tips />
		</>
	)
}
