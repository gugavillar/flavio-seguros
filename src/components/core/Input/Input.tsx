import { type ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>(({ className, ...props }, ref) => {
	return (
		<input
			className={twMerge(
				'flex h-10 w-full rounded-md border border-gray-400 px-3 py-2 text-base ring-offset-white file:border-0 file:bg-transparent file:font-medium file:text-black/80 file:text-sm placeholder:text-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
				className
			)}
			ref={ref}
			{...props}
		/>
	)
})

Input.displayName = 'Input'
