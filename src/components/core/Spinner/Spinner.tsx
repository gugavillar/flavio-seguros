import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const Spinner = ({ className, ...props }: ComponentProps<'div'>) => {
	return (
		<div
			aria-label='loading'
			className={twMerge(
				'inline-block size-6 animate-spin rounded-[999px] border-3 border-current border-t-transparent text-primary',
				className
			)}
			{...props}
			role='status'
		>
			<span className='sr-only'>Loading...</span>
		</div>
	)
}
