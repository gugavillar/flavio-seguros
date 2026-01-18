import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)/(layout)/_layout')({
	component: PublicLayoutComponent,
})

function PublicLayoutComponent() {
	return (
		<>
			{/* <Navbar /> */}
			<main>
				<Outlet />
			</main>
			{/* <Footer /> */}
			{/* <ScriptChat /> */}
		</>
	)
}
