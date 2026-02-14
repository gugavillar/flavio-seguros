import { useMatches } from '@tanstack/react-router'
import { useClickAway } from '@uidotdev/usehooks'
import { Menu, X } from 'lucide-react'
import { type Dispatch, type SetStateAction, useState } from 'react'

import { messages } from '@/__mocks__/whatsapp'
import { AvatarLogo, Button, NavLink } from '@/components/core'
import { BreadcrumbBar } from '@/components/public'
import { generateWhatsAppLink, NAVIGATION_HASH, transformPath } from '@/utils'

const commonProps = {
	activeOptions: { includeHash: true },
	activeProps: { className: 'text-primary underline underline-offset-3' },
	className: 'cursor-pointer px-1.5 py-2 hover:underline hover:underline-offset-3',
}

const Links = ({ setIsOpen, isOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>>; isOpen: boolean }) => {
	return (
		<>
			<div className='hidden items-center gap-8 lg:flex'>
				<NavLink {...commonProps} hash={NAVIGATION_HASH.SERVICES} to='/'>
					Seguros
				</NavLink>
				<NavLink {...commonProps} hash={NAVIGATION_HASH.ABOUT} to='/'>
					Sobre nós
				</NavLink>
				<NavLink {...commonProps} hash={NAVIGATION_HASH.TESTIMONIALS} to='/'>
					Depoimentos
				</NavLink>
				<NavLink {...commonProps} hash={NAVIGATION_HASH.FAQ} to='/'>
					FAQ
				</NavLink>
			</div>
			<div className='hidden lg:block'>
				<Button as='a' href={generateWhatsAppLink({ message: messages.talk })} target='_blank'>
					Fale conosco
				</Button>
			</div>
			<button
				aria-label='Menu'
				className='p-2 text-gray-500 lg:hidden'
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

	const matches = useMatches()
	const allBreadcrumbs = matches
		.map((match) => {
			const breadcrumb = match.staticData?.breadcrumb

			if (!breadcrumb) return undefined

			return typeof breadcrumb === 'function' ? transformPath(breadcrumb(match)) : breadcrumb
		})
		.filter((v): v is string => Boolean(v))
	const hasBreadcrumbs = Boolean(allBreadcrumbs.length)
	const closeMenu = () => setIsOpen(false)

	return (
		<header className='fixed top-0 right-0 left-0 z-50 border-gray-200 border-b bg-off-white-1'>
			<div className='container mx-auto p-4' ref={ref}>
				<nav aria-label='Navbar' className='flex items-center justify-between' role='navigation'>
					<AvatarLogo />
					{showLinks && <Links isOpen={isOpen} setIsOpen={setIsOpen} />}
				</nav>
				{isOpen && showLinks && (
					<div className='absolute top-full right-0 left-0 animate-fade-up border-border border-b bg-off-white-1 lg:hidden'>
						<div className='flex flex-col gap-4 p-4 text-gray-500'>
							<NavLink {...commonProps} hash={NAVIGATION_HASH.SERVICES} onClick={closeMenu} to='/'>
								Serviços
							</NavLink>
							<NavLink {...commonProps} hash={NAVIGATION_HASH.ABOUT} onClick={closeMenu} to='/'>
								Sobre Nós
							</NavLink>
							<NavLink {...commonProps} hash={NAVIGATION_HASH.TESTIMONIALS} onClick={closeMenu} to='/'>
								Depoimentos
							</NavLink>
							<NavLink {...commonProps} hash={NAVIGATION_HASH.FAQ} onClick={closeMenu} to='/'>
								FAQ
							</NavLink>
							<Button
								as='a'
								className='w-full text-white'
								href={generateWhatsAppLink({ message: messages.talk })}
								target='_blank'
							>
								Fale Conosco
							</Button>
						</div>
					</div>
				)}
			</div>
			{hasBreadcrumbs && showLinks && <BreadcrumbBar breadcrumbs={allBreadcrumbs} />}
		</header>
	)
}
