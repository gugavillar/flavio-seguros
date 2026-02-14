import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type LabelProps = ComponentProps<'label'>

export const Label = ({ className, ...props }: LabelProps) => {
	return (
		<label
			className={twMerge(
				'text-black/80 text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
				className
			)}
			{...props}
		/>
	)
}
