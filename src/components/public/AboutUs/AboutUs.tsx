import { CheckCircle2 } from 'lucide-react'
import type { ReactNode } from 'react'

import { features } from '@/__mocks__/aboutUs'
import { FloatCard, HeaderSection, PageContainer } from '@/components/core'

const AboutUsCard = ({ icon, title, description }: { icon: ReactNode; title: string; description: string }) => {
	return (
		<div className='group rounded-xl bg-gray-200/50 p-4 text-left transition-colors hover:bg-primary/15'>
			<div className='mb-4 flex size-12 items-center justify-center rounded-lg bg-primary-gradient text-white transition-transform group-hover:scale-110'>
				{icon}
			</div>
			<h3 className='mb-2 font-semibold text-black/80'>{title}</h3>
			<p className='text-gray-400 text-sm'>{description}</p>
		</div>
	)
}

export const AboutUs = () => {
	return (
		<PageContainer id='sobre'>
			<div className='grid items-center gap-16 lg:grid-cols-2'>
				<div className='relative order-2 lg:order-1'>
					<div className='relative'>
						<img
							alt='Ilustração de proteção'
							className='mx-auto w-full max-w-lg animate-float rounded-xl'
							src='/logos/Illustration.webp'
						/>
					</div>
					<FloatCard
						className='right-0 max-sm:bottom-0 sm:top-10'
						description='Seguradoras parceiras'
						icon={<CheckCircle2 className='text-white' />}
						title='+50'
					/>
				</div>
				<div className='order-1 space-y-8 max-sm:text-center lg:order-2'>
					<HeaderSection
						badgeLabel='Por que nos escolher?'
						description='Com mais de 15 anos de experiência no mercado de seguros, nossa missão é proteger o que você mais ama. Oferecemos soluções completas com transparência e compromisso.'
						title='Sua tranquilidade é nossa prioridade'
					/>
					<div className='grid gap-6 sm:grid-cols-2'>
						{features.map((feature) => (
							<AboutUsCard key={feature.title} {...feature} />
						))}
					</div>
				</div>
			</div>
		</PageContainer>
	)
}
