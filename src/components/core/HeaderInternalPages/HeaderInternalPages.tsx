import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { Badge, type BadgeProps, PageContainer } from '@/components/core'

type HeaderInternalPagesProps = ComponentProps<'div'> & {
	badge: BadgeProps
	title: string
	description: string
	isSplitTitle?: boolean
	endSplitIndex?: number
}

export const HeaderInternalPages = ({
	badge,
	title,
	description,
	isSplitTitle = false,
	className,
	children,
	endSplitIndex = 1,
	...props
}: HeaderInternalPagesProps) => {
	const words = isSplitTitle ? title?.trim().split(/\s+/) : title
	const newTitle = Array.isArray(words) ? (
		<>
			{words.slice(0, endSplitIndex).join(' ')}{' '}
			<span className='text-primary'>{words.slice(endSplitIndex).join(' ')}</span>
		</>
	) : (
		words
	)
	return (
		<PageContainer className={twMerge('pt-44 pb-20 text-center', className)} {...props}>
			<Badge {...badge} />
			<h1 className='mb-6 font-bold font-title text-4xl text-black/80 md:text-5xl lg:text-6xl'>{newTitle}</h1>
			<p className='mx-auto max-w-2xl text-gray-500 text-lg md:text-xl'> {description}</p>
			{children}
		</PageContainer>
	)
}
