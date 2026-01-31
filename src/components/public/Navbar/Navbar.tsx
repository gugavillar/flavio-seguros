import { useMatchRoute } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

import { AvatarLogo, NavLink } from '@/components/core'
import { BreadcrumbBar, Button } from '@/components/public'

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const matchRoute = useMatchRoute()
	const isServicePage = matchRoute({ to: '/$service' })

	const handleToggle = () => setIsOpen(!isOpen)
	return (
		<header className='fixed top-0 right-0 left-0 z-50 border-gray-200 border-b bg-off-white-1'>
			<div className='container mx-auto p-4'>
				<nav aria-label='Navbar' className='flex items-center justify-between' role='navigation'>
					<AvatarLogo />
					<div className='hidden items-center gap-8 md:flex'>
						<NavLink hash='servicos' to='/'>
							Serviços
						</NavLink>
						<NavLink hash='sobre' to='/'>
							Sobre nós
						</NavLink>
						<NavLink hash='depoimentos' to='/'>
							Depoimentos
						</NavLink>
						<NavLink hash='faq' to='/'>
							FAQ
						</NavLink>
					</div>
					<div className='hidden md:block'>
						<Button>Fale conosco</Button>
					</div>
					<button className='p-2 text-gray-400 md:hidden' onClick={handleToggle}>
						{isOpen ? <X className='size-6' /> : <Menu className='size-6' />}
					</button>
				</nav>
				{isOpen && (
					<div className='absolute top-full right-0 left-0 animate-fade-up border-border border-b bg-off-white-1 md:hidden'>
						<div className='flex flex-col gap-4 p-4 text-gray-400'>
							<a className='py-2 font-medium' href='#servicos' onClick={handleToggle}>
								Serviços
							</a>
							<a className='py-2 font-medium' href='#sobre' onClick={handleToggle}>
								Sobre Nós
							</a>
							<a className='py-2 font-medium' href='#depoimentos' onClick={handleToggle}>
								Depoimentos
							</a>
							<a className='py-2 font-medium' href='#faq' onClick={handleToggle}>
								FAQ
							</a>
							<Button className='w-full text-white'>Fale Conosco</Button>
						</div>
					</div>
				)}
			</div>
			{isServicePage && <BreadcrumbBar />}
		</header>
	)
}
