import { ClockIcon, type LucideIcon } from 'lucide-react'

import { benefits } from '@/__mocks__/assistance'
import { HeaderInternalPages } from '@/components/core'
import type { AssistancePrismicType } from '@/routes/(public)/_layout/assistencia'

type HeaderAssistanceProps = Pick<
	AssistancePrismicType,
	'assistance-badge' | 'assistance-description' | 'assistance-title'
>

const Benefit = ({ icon: Icon, label }: { icon: LucideIcon; label: string }) => {
	return (
		<div className='flex items-center gap-2 text-black/80'>
			<Icon className='text-primary' />
			<span>{label}</span>
		</div>
	)
}

export const HeaderAssistance = ({
	'assistance-badge': badge,
	'assistance-description': description,
	'assistance-title': title,
}: HeaderAssistanceProps) => {
	return (
		<HeaderInternalPages badge={{ icon: <ClockIcon />, label: badge }} description={description} title={title}>
			<div className='mt-8 flex flex-wrap justify-center gap-4'>
				{benefits.map((item) => (
					<Benefit key={item.label} {...item} />
				))}
			</div>
		</HeaderInternalPages>
	)
}
