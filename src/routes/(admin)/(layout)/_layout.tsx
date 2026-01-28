import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

import { Navbar } from '@/components/admin'
import { getUser } from '@/lib/authServer'

export const Route = createFileRoute('/(admin)/(layout)/_layout')({
	component: AdminLayoutComponent,
	loader: async () => {
		const user = await getUser()
		if (!user?.id) {
			throw redirect({ search: { error: 'notAuthenticated' }, to: '/login' })
		}
		return {
			user,
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
