import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
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
			<div className='flex size-full items-center justify-center bg-[url(/images/Login.webp)] bg-cover px-4'>
				<div className='container mx-auto max-w-lg rounded-lg border border-gray-200 bg-white/50 backdrop-blur-sm'>
					<div className='flex h-full flex-col items-center justify-between py-4'>
						<AvatarLogo />
						<div className='mt-8 space-y-6 px-4 text-center sm:px-10'>
							<div>
								<p className='text-xl'>Área administrativa</p>
								<p className='text-sm'>O acesso é restrito a usuários autorizados</p>
								<p className='text-sm'>Entre com sua conta Google utilizando um e-mail previamente liberado.</p>
							</div>
							<Button onClick={() => signIn.social({ callbackURL: '/admin', provider: 'google' })}>
								<GoogleIcon />
								Entrar com Google
							</Button>
						</div>
						<NavLink className='mt-8 flex items-center gap-2 text-primary text-sm underline underline-offset-3' to='/'>
							<ArrowLeft />
							Voltar para o site
						</NavLink>
					</div>
					{error && <p className='pb-4 text-center text-red-600'>{errorMessageMap[error] ?? 'Erro desconhecido'}</p>}
				</div>
			</div>
		</div>
	)
}
