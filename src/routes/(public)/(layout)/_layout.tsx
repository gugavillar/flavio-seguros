import { createFileRoute, Outlet } from '@tanstack/react-router'

import { Footer, Navbar } from '@/components/public'

export const Route = createFileRoute('/(public)/(layout)/_layout')({
	component: PublicLayoutComponent,
})

function PublicLayoutComponent() {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
			{/* <ScriptChat /> */}
		</>
	)
}
