import { createFileRoute } from '@tanstack/react-router'

import { Faq, Hero, Testimonials } from '@/components/public'

export const Route = createFileRoute('/(public)/(layout)/_layout/')({
	component: IndexPage,
})

function IndexPage() {
	return (
		<>
			<Testimonials />
			<Faq />
			<Hero />
		</>
	)
}
