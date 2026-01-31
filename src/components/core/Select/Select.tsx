import { type ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type SelectProps = ComponentProps<'select'> & {
	options: { value: string; label: string }[]
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ className, options, ...props }, ref) => {
	return (
		<select
			className={twMerge(
				'flex h-10 w-full appearance-none rounded-md border border-gray-400 bg-white/10 px-3 py-2 text-base text-white ring-offset-white file:border-0 file:bg-transparent file:font-medium file:text-black/80 file:text-sm placeholder:text-gray-300 focus:border-white focus-visible:outline-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
				className
			)}
			ref={ref}
			{...props}
		>
			<option disabled value=''>
				Selecione uma opção
			</option>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	)
})

Select.displayName = 'Select'
