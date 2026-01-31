import { createFileRoute, Outlet } from '@tanstack/react-router'

import { NotFound } from '@/components/core'
import { Footer, Navbar } from '@/components/public'

export const Route = createFileRoute('/(public)/(layout)/_layout')({
	component: PublicLayoutComponent,
	notFoundComponent: NotFound,
})

function PublicLayoutComponent() {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
