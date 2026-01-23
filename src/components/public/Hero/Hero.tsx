import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

import { info } from '@/__mocks__/hero'

import { Button } from '../Button'

export const HeroInfo = ({ icon, text }: { icon: ReactNode; text: string }) => {
	return (
		<div className='flex items-center gap-2'>
			{icon}
			<span>{text}</span>
		</div>
	)
}

export const Hero = () => {
	return (
		<section className='bg-primary-gradient py-20'>
			<div className='container mx-auto px-4'>
				<div className='mx-auto max-w-4xl text-center'>
					<h2 className='mb-6 font-bold font-title text-2xl text-white md:text-3xl lg:text-4xl'>
						Pronto para proteger o que importa?
					</h2>
					<p className='mx-auto mb-8 max-w-2xl text-lg text-white/70'>
						Solicite uma cotação gratuita e sem compromisso. Nossa equipe entrará em contato em até 24 horas com as
						melhores opções para você.
					</p>
					<div className='mx-auto mb-12 flex max-w-xl flex-col gap-4 sm:flex-row'>
						<Button className='bg-white text-primary hover:bg-white hover:opacity-70'>
							Solicitar cotação <ArrowRight />
						</Button>
					</div>
					<div className='flex flex-wrap justify-center gap-8 text-white/70'>
						{info.map((item) => (
							<HeroInfo key={item.text} {...item} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
