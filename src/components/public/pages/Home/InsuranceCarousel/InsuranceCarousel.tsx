import { PrismicImage } from '@prismicio/react'
import { useMediaQuery } from '@uidotdev/usehooks'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { PageContainer } from '@/components/core'
import { useInsuranceContext } from '@/contexts'

export const InsuranceCarousel = () => {
	const isSmallDevice = useMediaQuery('only screen and (max-width : 767px)')
	const contextData = useInsuranceContext()
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
					{contextData.partners.map(({ primary }) => (
						<SwiperSlide className='w-auto' key={primary['company-name']}>
							<div className='mx-auto flex h-20 w-40 items-center justify-center'>
								<PrismicImage
									className='max-h-full max-w-full object-contain'
									fetchPriority='high'
									field={primary['company-logo']}
									imgixParams={{
										auto: ['compress', 'format'],
										w: 160,
									}}
									loading='eager'
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</PageContainer>
	)
}
