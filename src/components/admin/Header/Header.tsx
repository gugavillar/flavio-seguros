import { Sparkles } from 'lucide-react'

export const Header = () => {
	return (
		<header className='text-center mb-16 sm:mb-20'>
			<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/25 text-primary text-sm font-medium mb-6 font-sans'>
				<Sparkles className='w-4 h-4' />
				<span>Portal de Serviços</span>
			</div>
			<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4'>
				Catálogo de <span className='text-primary'>Soluções</span>
			</h1>
			<p className='text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-sans'>
				Este é o portal de serviços da corretora onde reunimos todos os links para facilitar seu atendimento.
			</p>
		</header>
	)
}
