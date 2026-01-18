import { createFileRoute } from '@tanstack/react-router'

import { signIn } from '@/lib/authClient'

export const Route = createFileRoute('/(public)/(layout)/_layout/')({
	component: IndexPage,
})

function IndexPage() {
	return <button onClick={() => signIn.social({ callbackURL: '/admin', provider: 'google' })}>Login</button>
}
