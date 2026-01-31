import { ChevronRight, type LucideIcon } from 'lucide-react'

import { Badge, PageContainer } from '@/components/core'

type HeroServiceProps = {
	title: string
	subtitle: string
	icon: LucideIcon
	badgeLabel: string
}

export const HeroService = ({ title, subtitle, icon: Icon, badgeLabel }: HeroServiceProps) => {
	return (
		<PageContainer className='bg-primary-gradient pt-48'>
			<div className='container mx-auto'>
				<div className='flex flex-col items-center gap-12 lg:flex-row'>
					<div className='flex-1 text-center lg:text-left'>
						<Badge className='bg-slate-100/15 text-white' label={badgeLabel} />
						<h1 className='tex-4xl mb-6 font-bold font-title text-white leading-tight md:text-5xl lg:text-6xl'>
							{title}
						</h1>
						<p className='mb-8 max-w-3xl text-gray-300 text-lg opacity-90 md:text-xl'>{subtitle}</p>
						<a
							className='inline-flex items-center gap-2 rounded-xl border border-white/80 py-1.5 pr-2 pl-4 text-white transition-all duration-300 hover:scale-105'
							href='#'
						>
							Solicitar cotação grátis
							<ChevronRight />
						</a>
					</div>
					<div className='shrink-0'>
						<div className='flex h-48 w-48 items-center justify-center rounded-full bg-slate-100/15 md:h-64 md:w-64'>
							<Icon className='size-24 text-white md:size-32' />
						</div>
					</div>
				</div>
			</div>
		</PageContainer>
	)
}
