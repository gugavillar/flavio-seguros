import { CheckCircle2, Shield } from 'lucide-react'
import { Fragment } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { images, listItems, stats } from '@/__mocks__/heroTop'
import { FloatCard, NavLink, PageContainer } from '@/components/core'

import { Button } from '../Button'

export const HeroTop = () => {
	return (
		<PageContainer className='relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24'>
			<div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-16'>
				<div className='animate-fade-up space-y-8'>
					<h1 className='font-bold font-title text-4xl text-black/80 leading-tight md:text-5xl lg:text-[3.65rem]'>
						Proteja o que <span className='text-primary'>realmente importa</span>
					</h1>
					<p className='max-w-lg text-gray-500 text-lg leading-relaxed'>
						Há mais de 20 anos ajudando famílias brasileiras a encontrar o seguro ideal. Oferecemos soluções
						personalizadas com as melhores seguradoras do mercado.
					</p>

					<ul className='space-y-3'>
						{listItems.map((item, index) => (
							<li className='flex items-center gap-3 text-gray-700' key={index}>
								<CheckCircle2 className='text-primary' />
								<span className='text-lg'>{item}</span>
							</li>
						))}
					</ul>
					<div className='flex flex-col gap-4 sm:flex-row'>
						<Button as='a' href='#'>
							Solicitar cotação grátis
						</Button>
						<NavLink
							className='inline-flex items-center justify-center rounded-md border border-primary bg-transparent px-4 py-1.5 text-primary shadow-2xs transition-all duration-500 hover:bg-primary/10'
							hash='servicos'
							to='/'
						>
							Conhecer seguros
						</NavLink>
					</div>
					<div className='flex items-center gap-8 pt-4'>
						{stats.map((item, index) => (
							<Fragment key={index}>
								<div className='text-center'>
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
									<img alt={image.alt} src={image.src} />
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
