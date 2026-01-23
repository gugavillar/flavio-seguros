import { Sparkles } from 'lucide-react'

import { Badge } from '@/components/core'

export const Header = () => {
	return (
		<header className='mb-16 text-center sm:mb-20'>
			<Badge icon={<Sparkles className='size-4' />} label='Portal de Serviços' />
			<h1 className='mb-4 font-bold text-4xl text-foreground tracking-tight sm:text-5xl lg:text-6xl'>
				Catálogo de <span className='text-primary'>Soluções</span>
			</h1>
			<p className='mx-auto max-w-2xl font-sans text-lg text-muted-foreground sm:text-xl'>
				Este é o portal de serviços da corretora onde reunimos todos os links para facilitar seu atendimento.
			</p>
		</header>
	)
}
