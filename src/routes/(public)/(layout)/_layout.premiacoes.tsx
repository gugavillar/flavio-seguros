import { createFileRoute } from '@tanstack/react-router'

import { HeaderAwards, MainAwards, RecognizedQuality, TimelineAwards, TrustedPartners } from '@/components/public'

export const Route = createFileRoute('/(public)/(layout)/_layout/premiacoes')({
	component: AwardsPage,
	staticData: {
		breadcrumb: 'Premiações',
	},
})

function AwardsPage() {
	return (
		<>
			<HeaderAwards />
			<MainAwards />
			<TimelineAwards />
			<TrustedPartners />
			<RecognizedQuality />
		</>
	)
}
