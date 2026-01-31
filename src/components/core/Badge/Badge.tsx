import type { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type BadgeProps = ComponentProps<'div'> & {
	icon?: ReactNode
	label: string
}

export const Badge = ({ icon, label, className, ...props }: BadgeProps) => {
	return (
		<div
			className={twMerge(
				'mb-6 inline-flex items-center gap-2 rounded-full bg-primary/25 px-4 py-2 font-medium font-sans text-primary text-sm',
				className
			)}
			{...props}
		>
			{icon}
			<span>{label}</span>
		</div>
	)
}
