import { Shield } from 'lucide-react'

import { HeaderInternalPages } from '@/components/core'
import type { TeamsPrismicType } from '@/routes/(public)/_layout/nossa-equipe'

type HeaderTeamsProps = Pick<TeamsPrismicType, 'teams-badge' | 'teams-description' | 'teams-title'>

export const HeaderTeams = ({
	'teams-badge': teamsBadge,
	'teams-description': teamsDescription,
	'teams-title': teamsTitle,
}: HeaderTeamsProps) => {
	return (
		<HeaderInternalPages
			badge={{ icon: <Shield />, label: teamsBadge }}
			description={teamsDescription}
			endSplitIndex={2}
			isSplitTitle
			title={teamsTitle}
		/>
	)
}
