import { Home, Phone } from 'lucide-react'

import { Navbar } from '@/components/public'

import { NavLink } from '../NavLink'

export const NotFound = () => {
	return (
		<section className='flex h-dvh flex-col'>
			<Navbar showLinks={false} />
			<div className='grow'>
				<div className='container mx-auto flex h-full items-center justify-center px-4'>
					<div className='mx-auto flex max-w-lg flex-col text-center'>
						<div className='mb-8'>
							<div className='font-bold font-title text-[180px] text-primary/20 leading-none md:text-[220px]'>404</div>
						</div>
						<h1 className='mb-4 font-bold font-title text-3xl text-black/80 md:text-4xl'>Página não encontrada</h1>
						<p className='mb-8 text-gray-500 text-lg leading-relaxed'>
							Parece que você se perdeu no caminho. A página que você está procurando não existe ou foi movida.
						</p>
						<div className='flex flex-col justify-center gap-4 sm:flex-row'>
							<NavLink
								className='inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-8 font-medium text-primary-foreground text-sm text-white ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0'
								to='/'
							>
								<Home className='size-5' />
								Voltar ao início
							</NavLink>
							<a
								className='inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-gray-300 bg-transparent px-8 font-medium text-black/80 text-sm ring-offset-background transition-colors hover:bg-primary/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0'
								href='mailto:[EMAIL_ADDRESS]'
							>
								<Phone className='size-5' />
								Fale conosco
							</a>
						</div>
					</div>
				</div>
			</div>
			<footer className='border-gray-300 border-t'>
				<div className='container mx-auto px-4'>
					<div className='flex flex-col items-center justify-between gap-4 py-8 md:flex-row'>
						<p className='text-sm'>© 2026 Flávio Seguros. Todos os direitos reservados.</p>
						<p>SUSEP Nº 12345678 - Corretora de seguros</p>
					</div>
				</div>
			</footer>
		</section>
	)
}
