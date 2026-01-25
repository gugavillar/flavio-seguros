import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

import { AvatarLogo, GoogleIcon, NavLink } from '@/components/core'
import { Button } from '@/components/public'
import { signIn } from '@/lib/authClient'

export const Route = createFileRoute('/login')({
	component: LoginPage,
	validateSearch: z.object({
		error: z.string().optional(),
	}),
})

const errorMessageMap: Record<string, string> = {
	notAuthenticated: 'Usuário não autenticado',
	unauthorized: 'Sua conta não tem permissão.',
}

function LoginPage() {
	const { error } = Route.useSearch()
	return (
		<div className='h-dvh w-dvw'>
			<div className='flex size-full items-center justify-center px-4'>
				<div className='container mx-auto max-w-xl rounded-lg bg-gray-300'>
					<div className='flex flex-col items-center justify-center space-y-4 py-4'>
						<AvatarLogo />
						<div className='text-center'>
							<p className='text-xl'>Bem vindo!</p>
							<p className='text-sm'>Para continuar, entre com sua conta Google</p>
						</div>
						<Button onClick={() => signIn.social({ callbackURL: '/admin', provider: 'google' })}>
							<GoogleIcon />
							Entrar com Google
						</Button>
						<NavLink to='/'>Volta para o site</NavLink>
					</div>
					{error && <p className='pb-4 text-center text-red-400'>{errorMessageMap[error] ?? 'Erro desconhecido'}</p>}
				</div>
			</div>
		</div>
	)
}
