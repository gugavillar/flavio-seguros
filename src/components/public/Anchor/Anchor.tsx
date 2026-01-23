import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const Anchor = ({ className, ...props }: ComponentProps<'a'>) => {
	return (
		<a
			{...props}
			className={twMerge(
				'font-medium text-gray-500 underline-offset-8 transition-colors hover:text-primary hover:underline',
				className
			)}
		/>
	)
}
