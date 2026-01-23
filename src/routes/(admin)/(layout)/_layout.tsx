import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

import { Navbar } from '@/components/admin'
import { getUser } from '@/lib/authServer'

export const Route = createFileRoute('/(admin)/(layout)/_layout')({
	beforeLoad: async () => {
		const user = await getUser()
		const allowedEmails = process.env.ALLOWED_EMAILS?.split(',')
		if (!user?.email || !allowedEmails?.includes(user?.email)) {
			throw redirect({ to: '/' })
		}
		return {
			user,
		}
	},
	component: AdminLayoutComponent,
	loader: async ({ context }) => {
		if (!context?.user?.id) {
			throw redirect({ to: '/' })
		}
	},
})

function AdminLayoutComponent() {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	)
}
