import { CheckCircle2, type LucideIcon } from 'lucide-react'

import { FloatCard, HeaderSection, PageContainer } from '@/components/core'
import { translateIcon } from '@/formatters'
import { NAVIGATION_HASH } from '@/utils'

export type AboutUsPrismicType = {
	slice_type: string
	primary: {
		'about-us-badge': string
		'about-us-description': string
		'about-us-title': string
	}
	items: Array<{
		'about-us-card-description': string
		'about-us-card-icon': keyof typeof translateIcon
		'about-us-card-title': string
	}>
}

const AboutUsCard = ({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) => {
	return (
		<div className='group rounded-xl bg-gray-200/50 p-4 text-left transition-colors hover:bg-primary/15'>
			<div className='mb-4 flex size-12 items-center justify-center rounded-lg bg-primary-gradient text-white transition-transform group-hover:scale-110'>
				<Icon />
			</div>
			<h3 className='mb-2 font-semibold text-black/80'>{title}</h3>
			<p className='text-gray-500 text-sm'>{description}</p>
		</div>
	)
}

export const AboutUs = ({
	data: { primary, items },
	totalPartners,
}: {
	data: AboutUsPrismicType
	totalPartners: string
}) => {
	return (
		<PageContainer id={NAVIGATION_HASH.ABOUT}>
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
						title={totalPartners}
					/>
				</div>
				<div className='order-1 space-y-8 max-lg:text-center lg:order-2'>
					<HeaderSection
						badgeLabel={primary['about-us-badge']}
						className='max-lg:mx-auto max-lg:max-w-2xl'
						description={primary['about-us-description']}
						title={primary['about-us-title']}
					/>
					<div className='grid gap-6 sm:grid-cols-2'>
						{items.map((feature) => {
							const icon = translateIcon[feature['about-us-card-icon']]
							return (
								<AboutUsCard
									description={feature['about-us-card-description']}
									icon={icon}
									key={feature['about-us-card-title']}
									title={feature['about-us-card-title']}
								/>
							)
						})}
					</div>
				</div>
			</div>
		</PageContainer>
	)
}
