import { createFileRoute } from '@tanstack/react-router'

import { auth } from '@/lib/auth'

export const Route = createFileRoute('/api/auth/$')({
	server: {
		handlers: {
			GET: async ({ request }) => {
				try {
					return await auth.handler(request)
				} catch (err) {
					console.error('AUTH CALLBACK ERROR:', err)
					return new Response('Auth error', { status: 500 })
				}
			},
			POST: async ({ request }) => {
				try {
					return await auth.handler(request)
				} catch (err) {
					console.error('AUTH CALLBACK ERROR:', err)
					return new Response('Auth error', { status: 500 })
				}
			},
		},
	},
})
