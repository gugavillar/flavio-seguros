import { useMatchRoute } from '@tanstack/react-router'
import { useClickAway } from '@uidotdev/usehooks'
import { Menu, X } from 'lucide-react'
import { type Dispatch, type SetStateAction, useState } from 'react'

import { AvatarLogo } from '@/components/core'
import { BreadcrumbBar, Button } from '@/components/public'
import { goToHash, NAVIGATION_HASH } from '@/utils'

const Links = ({ setIsOpen, isOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>>; isOpen: boolean }) => {
	const onNavigate = (hash: string) => {
		goToHash(hash)
		setIsOpen(false)
	}
	return (
		<>
			<div className='hidden items-center gap-8 md:flex'>
				<a className='cursor-pointer px-1.5 py-2' onClick={() => onNavigate(NAVIGATION_HASH.SERVICES)}>
					Serviços
				</a>
				<a className='cursor-pointer px-1.5 py-2' onClick={() => onNavigate(NAVIGATION_HASH.ABOUT)}>
					Sobre nós
				</a>
				<a className='cursor-pointer px-1.5 py-2' onClick={() => onNavigate(NAVIGATION_HASH.TESTIMONIALS)}>
					Depoimentos
				</a>
				<a className='cursor-pointer px-1.5 py-2' onClick={() => onNavigate(NAVIGATION_HASH.FAQ)}>
					FAQ
				</a>
			</div>
			<div className='hidden md:block'>
				<Button as='a' href='#'>
					Fale conosco
				</Button>
			</div>
			<button
				aria-label='Menu'
				className='p-2 text-gray-500 md:hidden'
				onClick={isOpen ? () => setIsOpen(false) : () => setIsOpen(true)}
				role='navigation'
			>
				{isOpen ? <X className='size-6' /> : <Menu className='size-6' />}
			</button>
		</>
	)
}

type NavbarProps = {
	showLinks?: boolean
}

export const Navbar = ({ showLinks = true }: NavbarProps) => {
	const [isOpen, setIsOpen] = useState(false)

	const ref = useClickAway<HTMLDivElement>(() => {
		setIsOpen(false)
	})

	const matchRoute = useMatchRoute()
	const isServicePage = matchRoute({ to: '/$service' })

	const onNavigate = (hash: string) => {
		goToHash(hash)
		setIsOpen(false)
	}
	return (
		<header className='fixed top-0 right-0 left-0 z-50 border-gray-200 border-b bg-off-white-1'>
			<div className='container mx-auto p-4' ref={ref}>
				<nav aria-label='Navbar' className='flex items-center justify-between' role='navigation'>
					<AvatarLogo />
					{showLinks && <Links isOpen={isOpen} setIsOpen={setIsOpen} />}
				</nav>
				{isOpen && showLinks && (
					<div className='absolute top-full right-0 left-0 animate-fade-up border-border border-b bg-off-white-1 md:hidden'>
						<div className='flex flex-col gap-4 p-4 text-gray-500'>
							<a className='cursor-pointer py-2 font-medium' onClick={() => onNavigate(NAVIGATION_HASH.SERVICES)}>
								Serviços
							</a>
							<a className='cursor-pointer py-2 font-medium' onClick={() => onNavigate(NAVIGATION_HASH.ABOUT)}>
								Sobre Nós
							</a>
							<a className='cursor-pointer py-2 font-medium' onClick={() => onNavigate(NAVIGATION_HASH.TESTIMONIALS)}>
								Depoimentos
							</a>
							<a className='cursor-pointer py-2 font-medium' onClick={() => onNavigate(NAVIGATION_HASH.FAQ)}>
								FAQ
							</a>
							<Button className='w-full text-white'>Fale Conosco</Button>
						</div>
					</div>
				)}
			</div>
			{isServicePage && showLinks && <BreadcrumbBar />}
		</header>
	)
}
