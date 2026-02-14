import { createFileRoute } from '@tanstack/react-router'

import { Doubts, HeaderCareers, WhyWork } from '@/components/public'

export const Route = createFileRoute('/(public)/(layout)/_layout/trabalhe-conosco')({
	component: CareersPage,
	staticData: {
		breadcrumb: 'Trabalhe Conosco',
	},
})

function CareersPage() {
	return (
		<>
			<HeaderCareers />
			<WhyWork />
			<Doubts />
		</>
	)
}
