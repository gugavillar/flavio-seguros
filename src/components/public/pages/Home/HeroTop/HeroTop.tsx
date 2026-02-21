import { PrismicImage } from '@prismicio/react'
import { CheckCircle2, Shield } from 'lucide-react'
import { Fragment } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { stats } from '@/__mocks__/heroTop'
import { messages } from '@/__mocks__/whatsapp'
import { Button, FloatCard, PageContainer } from '@/components/core'
import { generateWhatsAppLink, goToHash, NAVIGATION_HASH } from '@/utils'

export type HeroTopPrismicType = {
	slice_type: string
	'homepage-top-images': Array<{
		'homepage-top-image': Object
	}>
	primary: {
		'hero-title': string
		'hero-description': string
	}
	items: Array<{
		'hero-info-list': string
	}>
}

export const HeroTop = ({
	data: { primary, items },
	images,
}: {
	data: HeroTopPrismicType
	images: HeroTopPrismicType['homepage-top-images']
}) => {
	const words = primary['hero-title']?.trim().split(/\s+/) ?? []
	const firstPart = words.slice(0, 3).join(' ')
	const secondPart = words.slice(3).join(' ')
	return (
		<PageContainer className='relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24'>
			<div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-16'>
				<div className='animate-fade-up space-y-8'>
					<h1 className='font-bold font-title text-4xl text-black/80 leading-tight md:text-5xl lg:text-[3.65rem]'>
						{firstPart} <span className='text-primary'>{secondPart}</span>
					</h1>
					<p className='text-gray-500 text-lg leading-relaxed lg:max-w-xl'>{primary['hero-description']}</p>

					<ul className='space-y-3'>
						{items.map((item, index) => (
							<li className='flex items-center gap-3 text-gray-700' key={index}>
								<CheckCircle2 className='text-primary' />
								<span className='text-lg'>{item['hero-info-list']}</span>
							</li>
						))}
					</ul>
					<div className='flex flex-col gap-4 sm:flex-row'>
						<Button as='a' href={generateWhatsAppLink({ message: messages.price() })} target='_blank'>
							Solicitar cotação grátis
						</Button>
						<a
							className='inline-flex cursor-pointer items-center justify-center rounded-md border border-primary bg-transparent px-4 py-1.5 text-primary shadow-2xs transition-all duration-500 hover:bg-primary/10'
							href={`#${NAVIGATION_HASH.SERVICES}`}
							onClick={() => goToHash(NAVIGATION_HASH.SERVICES)}
						>
							Conhecer seguros
						</a>
					</div>
					<div className='flex items-center gap-8 pt-4 max-sm:justify-center'>
						{stats.map((item, index) => (
							<Fragment key={index}>
								<div className='text-center md:min-w-32 md:max-w-32'>
									<p className='font-bold text-2xl text-black/80'>{item.title}</p>
									<p className='text-gray-500 text-sm'>{item.subtitle}</p>
								</div>
								<div className='h-12 w-px bg-gray-200 last:hidden' />
							</Fragment>
						))}
					</div>
				</div>
				<div className='relative min-w-0 animate-fade-up'>
					<Swiper
						autoplay={{
							delay: 4000,
							disableOnInteraction: false,
						}}
						className='rounded-2xl'
						loop
						modules={[Autoplay]}
						slidesPerView={1}
						speed={4000}
					>
						{images.map((image, index) => (
							<SwiperSlide key={index}>
								<div className='relative overflow-hidden rounded-2xl shadow-2xl'>
									<div className='absolute inset-0 bg-linear-to-t from-black/40 to-transparent' />
									<PrismicImage
										fetchPriority='high'
										field={image['homepage-top-image']}
										imgixParams={{ auto: ['compress', 'format'], w: 720 }}
										loading='eager'
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<FloatCard
						className='-bottom-6 -left-6 z-10 animate-float'
						description='Proteção garantida'
						icon={<Shield className='text-white' />}
						title='100% Seguro'
					/>
				</div>
			</div>
		</PageContainer>
	)
}
