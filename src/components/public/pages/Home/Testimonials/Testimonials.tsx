import { useMediaQuery } from '@uidotdev/usehooks'
import { Quote, Star } from 'lucide-react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Card, HeaderSection, PageContainer, UserAvatar } from '@/components/core'
import { NAVIGATION_HASH } from '@/utils'

export type TestimonialPrismicType = {
	id: string
	items: Array<{
		'comment-rate': number
		comment: string
		'comment-name': string
		'comment-role': string
	}>
	primary: {
		'comment-badge': string
		'comment-description': string
		'comment-title': string
	}
	slice_type: string
}

const TestimonialCard = ({
	'comment-name': name,
	'comment-rate': rate,
	'comment-role': role,
	comment,
}: TestimonialPrismicType['items'][number]) => {
	return (
		<Card>
			<div className='p-6'>
				<Quote className='mb-4 size-10 text-primary/40' />
				<div className='mb-4 flex gap-1'>
					{[...Array(rate)].map((_, i) => (
						<Star className='size-4 fill-current text-primary' key={i} />
					))}
				</div>
				<p className='mb-6 line-clamp-3 leading-relaxed'>{comment}</p>
				<UserAvatar description={role} name={name} />
			</div>
		</Card>
	)
}

export const Testimonials = ({ data: { primary, items } }: { data: TestimonialPrismicType }) => {
	const isSmallDevice = useMediaQuery('only screen and (max-width : 767px)')
	const isMediumDevice = useMediaQuery('only screen and (max-width : 1023px)')
	const showSlides = isSmallDevice ? 1 : isMediumDevice ? 2 : 3
	return (
		<PageContainer id={NAVIGATION_HASH.TESTIMONIALS}>
			<div className='mx-auto mb-16 max-w-2xl text-center'>
				<HeaderSection
					badgeLabel={primary['comment-badge']}
					description={primary['comment-description']}
					title={primary['comment-title']}
				/>
			</div>
			<Swiper
				className='h-[320px]'
				{...(items.length > showSlides && { loop: true })}
				modules={[Pagination]}
				pagination={{ clickable: true }}
				slidesPerView={showSlides}
				spaceBetween={24}
			>
				{items.map((item, index) => (
					<SwiperSlide>
						<TestimonialCard {...item} key={index} />
					</SwiperSlide>
				))}
			</Swiper>
		</PageContainer>
	)
}
