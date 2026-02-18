import { createFileRoute } from '@tanstack/react-router'

import { Disclaimer, HeaderTeams, SmallTeam } from '@/components/public'

export const Route = createFileRoute('/(public)/(layout)/_layout/nossa-equipe')({
	component: TeamsPage,
	staticData: {
		breadcrumb: 'Nossa equipe',
	},
})

function TeamsPage() {
	return (
		<>
			<HeaderTeams />
			<SmallTeam />
			<Disclaimer />
		</>
	)
}
