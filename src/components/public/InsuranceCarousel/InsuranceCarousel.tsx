import { useMediaQuery } from '@uidotdev/usehooks'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { insurancesLogos } from '@/__mocks__/aboutUs'
import { PageContainer } from '@/components/core'

export const InsuranceCarousel = () => {
	const isSmallDevice = useMediaQuery('only screen and (max-width : 767px)')
	return (
		<PageContainer className='bg-gray-200/50'>
			<div className='mx-auto max-w-6xl'>
				<Swiper
					autoplay={{
						delay: 0,
						disableOnInteraction: false,
					}}
					loop
					modules={[Autoplay]}
					slidesPerView={isSmallDevice ? 2 : 4}
					speed={4000}
				>
					{insurancesLogos.map((logo) => (
						<SwiperSlide className='w-auto' key={logo.alt}>
							<div className='mx-auto flex h-20 w-40 items-center justify-center'>
								<img {...logo} className='max-h-full max-w-full object-contain' />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</PageContainer>
	)
}
