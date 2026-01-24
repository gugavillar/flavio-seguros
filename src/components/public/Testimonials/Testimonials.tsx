import { useMediaQuery } from '@uidotdev/usehooks'
import { Quote, Star } from 'lucide-react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { testimonials } from '@/__mocks__/testimonials'
import { Card, HeaderSection, PageContainer, UserAvatar } from '@/components/core'

const TestimonialCard = ({
	content,
	user,
	rating,
}: {
	content: string
	user: { name: string; description: string }
	rating: number
}) => {
	return (
		<Card>
			<div className='p-6'>
				<Quote className='mb-4 size-10 text-primary/40' />
				<div className='mb-4 flex gap-1'>
					{[...Array(rating)].map((_, i) => (
						<Star className='size-4 fill-current text-primary' key={i} />
					))}
				</div>
				<p className='mb-6 line-clamp-3 leading-relaxed'>{content}</p>
				<UserAvatar description={user.description} name={user.name} />
			</div>
		</Card>
	)
}

export const Testimonials = () => {
	const isSmallDevice = useMediaQuery('only screen and (max-width : 767px)')
	return (
		<PageContainer id='depoimentos'>
			<div className='mx-auto mb-16 max-w-2xl text-center'>
				<HeaderSection
					badgeLabel='Depoimentos'
					description='A satisfação dos nossos clientes é o que nos motiva a continuar oferecendo o melhor serviço.'
					title='O que nossos clientes dizem'
				/>
			</div>
			<Swiper
				className='h-[320px]'
				loop
				modules={[Pagination]}
				pagination={{ clickable: true }}
				slidesPerView={isSmallDevice ? 1 : 3}
				spaceBetween={24}
			>
				{testimonials.map((item) => (
					<SwiperSlide>
						<TestimonialCard content={item.content} key={item.name} rating={item.rating} user={item} />
					</SwiperSlide>
				))}
			</Swiper>
		</PageContainer>
	)
}
