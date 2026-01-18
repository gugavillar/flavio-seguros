import { createFileRoute } from '@tanstack/react-router'

import { Footer, Header, Insurances, PrincipalServices, SupportAndResources } from '@/components/admin'

export const Route = createFileRoute('/(admin)/(layout)/_layout/admin')({
	component: AdminPage,
})

function AdminPage() {
	return (
		<main className='text-black font-title'>
			<section className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20'>
				<Header />
				<div className='space-y-12 sm:space-y-16'>
					<PrincipalServices />
					<Insurances />
					<SupportAndResources />
				</div>
				<Footer />
			</section>
		</main>
	)
}
