import type { ReactNode } from 'react'

type BadgeProps = {
	icon?: ReactNode
	label: string
}

export const Badge = ({ icon, label }: BadgeProps) => {
	return (
		<div className='mb-6 inline-flex items-center gap-2 rounded-full bg-primary/25 px-4 py-2 font-medium font-sans text-primary text-sm'>
			{icon}
			<span>{label}</span>
		</div>
	)
}
