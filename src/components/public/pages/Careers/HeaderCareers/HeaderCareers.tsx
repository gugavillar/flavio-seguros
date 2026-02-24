import { Users } from 'lucide-react'

import { HeaderInternalPages } from '@/components/core'
import type { CareersPrismicType } from '@/routes/(public)/_layout/trabalhe-conosco'

export const HeaderCareers = ({
	'careers-badge': badge,
	'careers-description': description,
	'careers-title': title,
}: Pick<CareersPrismicType, 'careers-badge' | 'careers-description' | 'careers-title'>) => {
	return (
		<HeaderInternalPages
			badge={{ icon: <Users />, label: badge }}
			description={description}
			isSplitTitle
			title={title}
		/>
	)
}
