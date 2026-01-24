import { ClientOnly, createFileRoute } from '@tanstack/react-router'

import { AboutUs, Faq, Hero, HeroTop, InsuranceCarousel, ScriptChat, Services, Testimonials } from '@/components/public'

export const Route = createFileRoute('/(public)/(layout)/_layout/')({
	component: IndexPage,
})

function IndexPage() {
	return (
		<>
			<HeroTop />
			<Services />
			<AboutUs />
			<ClientOnly>
				<InsuranceCarousel />
				<Testimonials />
			</ClientOnly>
			<Faq />
			<Hero />
			<ScriptChat />
		</>
	)
}
