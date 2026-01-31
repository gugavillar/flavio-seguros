import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { NavLink } from '@/components/core'

export const Anchor = ({ className, ...props }: ComponentProps<typeof NavLink>) => {
	return (
		<NavLink
			{...props}
			className={twMerge(
				'font-medium text-gray-500 underline-offset-8 transition-colors hover:text-primary hover:underline',
				className
			)}
		/>
	)
}
