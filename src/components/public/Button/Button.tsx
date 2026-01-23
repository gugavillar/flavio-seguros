import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const Button = ({ className, ...props }: ComponentProps<'button'>) => {
	return (
		<button
			{...props}
			className={twMerge(
				'inline-flex h-10 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 font-medium text-sm text-white shadow-2xs ring-offset-primary transition-opacity hover:bg-primary/90 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
				className
			)}
		/>
	)
}
