import { createFileRoute } from '@tanstack/react-router'

import { GlobalLoading } from '@/components/core'
import { Disclaimer, HeaderTeams, SmallTeam, type TeamsWhyDifferencePrismicType } from '@/components/public'
import { TEN_MINUTES } from '@/constants'
import { getPageData } from '@/lib/prismic'

export type TeamsPrismicType = {
	'teams-badge': string
	'teams-description': string
	'teams-title': string
	body: Array<{
		slice_type: string
	}>
}

export const Route = createFileRoute('/(public)/(layout)/_layout/nossa-equipe')({
	component: TeamsPage,
	loader: async () => {
		const response = await getPageData({
			data: {
				args: ['teams', 'nossa-equipe'],
				method: 'getByUID',
			},
		})
		return {
			data: response.data,
		}
	},
	pendingComponent: () => <GlobalLoading />,
	staleTime: TEN_MINUTES,
	staticData: {
		breadcrumb: 'Nossa equipe',
	},
})

function TeamsPage() {
	const { data } = Route.useLoaderData()
	const teams = data.body.find((slice: TeamsWhyDifferencePrismicType) => slice.slice_type === 'why-difference')
	return (
		<>
			<HeaderTeams
				teams-badge={data['teams-badge']}
				teams-description={data['teams-description']}
				teams-title={data['teams-title']}
			/>
			<SmallTeam data={teams} />
			<Disclaimer />
		</>
	)
}
