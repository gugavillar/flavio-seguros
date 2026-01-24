import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const Card = ({ className, ...props }: ComponentProps<'div'>) => {
	return (
		<div
			className={twMerge(
				'rounded-lg border border-gray-300 bg-white text-gray-400 shadow-lg transition-all duration-300 hover:-translate-y-1',
				className
			)}
			{...props}
		/>
	)
}
