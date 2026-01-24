import { AvatarLogo } from '@/components/core'
import { Anchor, Button } from '@/components/public'
import { signIn } from '@/lib/authClient'

export const Navbar = () => {
	return (
		<header className='fixed top-0 right-0 left-0 z-50 border-gray-200 border-b bg-off-white-1'>
			<div className='container mx-auto p-4'>
				<nav className='flex items-center justify-between'>
					<AvatarLogo />
					<div className='hidden items-center gap-8 md:flex'>
						<Anchor href='#'>Serviços</Anchor>
						<Anchor href='#'>Sobre nós</Anchor>
						<Anchor href='#'>Depoimentos</Anchor>
						<Anchor href='#'>FAQ</Anchor>
					</div>
					<div className='hidden md:block'>
						<Button>Fale conosco</Button>
						<Button onClick={() => signIn.social({ callbackURL: '/admin', provider: 'google' })}>Administrativo</Button>
					</div>
				</nav>
			</div>
		</header>
	)
}
