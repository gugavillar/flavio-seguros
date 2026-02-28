import { Medal } from 'lucide-react'

import { HeaderSection, PageContainer } from '@/components/core'
import type { AwardsPrismicType } from '@/routes/(public)/_layout/premiacoes'

export type TimelineAwardsPrismicType = Pick<AwardsPrismicType, 'timeline-award-title' | 'timeline-award-description'>

export type TimelineAwardsSlicePrismicType = {
	slice_type: string
	primary: {
		'timeline-award-year': number
	}
	items: Array<{
		'timeline-award-title-award': string
		'timeline-award-description-award': string
	}>
}

const CardAward = ({
	'timeline-award-title-award': title,
	'timeline-award-description-award': description,
}: {
	'timeline-award-title-award': string
	'timeline-award-description-award': string
}) => {
	return (
		<div className='rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-300 hover:shadow-soft-white'>
			<div className='p-5'>
				<div className='flex items-start gap-3'>
					<Medal className='mt-0.5 size-5 shrink-0 text-primary' />
					<div>
						<h4 className='font-semibold text-black/80 text-sm'>{title}</h4>
						<p className='mt-1 text-xs'>{description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

const Timeline = ({
	year,
	awards,
	isLast,
}: {
	year: string
	awards: { 'timeline-award-title-award': string; 'timeline-award-description-award': string }[]
	isLast?: boolean
}) => {
	return (
		<div className='mb-8 flex gap-6 last:mb-0'>
			<div className='flex h-auto flex-col items-center'>
				<div className='flex size-16 items-center justify-center rounded-full bg-primary-gradient font-bold text-lg text-white shadow-soft-white'>
					{year}
				</div>
				{!isLast && <div className='mt-4 w-0.5 grow bg-primary/60' data-testid='timeline-line' />}
			</div>
			<div className='flex-1 pt-2'>
				<div className='grid gap-4 md:grid-cols-2'>
					{awards.map((award) => (
						<CardAward key={award['timeline-award-title-award']} {...award} />
					))}
				</div>
			</div>
		</div>
	)
}

export const TimelineAwards = ({
	'timeline-award-description': description,
	'timeline-award-title': title,
	data,
}: TimelineAwardsPrismicType & { data: Array<TimelineAwardsSlicePrismicType> }) => {
	return (
		<PageContainer>
			<div className='mb-16 text-center'>
				<HeaderSection description={description} title={title} />
			</div>
			<div className='mx-auto max-w-4xl'>
				{data.map((item, index) => (
					<Timeline
						awards={item.items}
						isLast={index === data.length - 1}
						key={item.primary['timeline-award-year']}
						year={item.primary['timeline-award-year'].toString()}
					/>
				))}
			</div>
		</PageContainer>
	)
}
