import { TrophyIcon } from 'lucide-react'

import { HeaderInternalPages } from '@/components/core'
import type { AwardsPrismicType } from '@/routes/(public)/(layout)/_layout.premiacoes'

type HeaderAwardsProps = Pick<AwardsPrismicType, 'awards-badge' | 'awards-description' | 'awards-title'>

export const HeaderAwards = ({
	'awards-badge': badge,
	'awards-description': description,
	'awards-title': title,
}: HeaderAwardsProps) => {
	return (
		<HeaderInternalPages
			badge={{ icon: <TrophyIcon />, label: badge }}
			description={description}
			isSplitTitle
			title={title}
		/>
	)
}
