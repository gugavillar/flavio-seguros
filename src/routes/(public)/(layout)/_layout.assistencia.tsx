import { createFileRoute } from '@tanstack/react-router'

import { HeaderAssistance, WhatIsAssistance } from '@/components/public'

export const Route = createFileRoute('/(public)/(layout)/_layout/assistencia')({
	component: AssistancePage,
})

function AssistancePage() {
	return (
		<>
			<HeaderAssistance />
			<WhatIsAssistance />
		</>
	)
}
