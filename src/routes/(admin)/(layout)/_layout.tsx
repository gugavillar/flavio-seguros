import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

import { Navbar } from '@/components/admin'
import { getUser } from '@/lib/authServer'

export const Route = createFileRoute('/(admin)/(layout)/_layout')({
	beforeLoad: async () => {
		const user = await getUser()
		return {
			user,
		}
	},
	component: AdminLayoutComponent,
	loader: async ({ context }) => {
		if (!context?.user?.id) {
			throw redirect({ search: { error: 'notAuthenticated' }, to: '/login' })
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
