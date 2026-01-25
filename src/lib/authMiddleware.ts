import { redirect } from '@tanstack/react-router'
import { createMiddleware } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'

import { getSession } from '@/lib/authClient'

export const authMiddleware = createMiddleware().server(async ({ next }) => {
	const { data: session } = await getSession({
		fetchOptions: {
			headers: getRequestHeaders(),
		},
	})

	if (!session?.user?.email) {
		return redirect({ search: { error: 'notAuthenticated' }, to: '/login' })
	}

	const allowedEmails = process.env.ALLOWED_EMAILS?.split(',')
	const isAllowedEmail = allowedEmails?.includes(session?.user?.email ?? '')

	if (!isAllowedEmail) {
		return redirect({ search: { error: 'unauthorized' }, to: '/login' })
	}

	return await next({
		context: {
			user: {
				email: session?.user?.email,
				id: session?.user?.id,
				image: session?.user?.image,
				name: session?.user?.name,
			},
		},
	})
})
