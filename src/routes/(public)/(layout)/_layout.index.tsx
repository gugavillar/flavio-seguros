import { ClientOnly, createFileRoute } from '@tanstack/react-router'

import {
	AboutUs,
	Faq,
	type FaqPrismicType,
	Hero,
	HeroTop,
	InsuranceCarousel,
	Services,
	type TestimonialPrismicType,
	Testimonials,
} from '@/components/public'
import { client } from '@/lib/prismic'

export const Route = createFileRoute('/(public)/(layout)/_layout/')({
	component: IndexPage,
	loader: async () => {
		const response = await client.getByUID('homepage', 'home')
		return response.data
	},
})

function IndexPage() {
	const data = Route.useLoaderData()
	const testimonials = data.body.find((item: TestimonialPrismicType) => item.slice_type === 'testimonials')
	const faqs = data.body.find((item: FaqPrismicType) => item.slice_type === 'faq')
	return (
		<>
			<HeroTop />
			<Services />
			<AboutUs />
			<ClientOnly>
				<InsuranceCarousel />
				<Testimonials data={testimonials} />
			</ClientOnly>
			<Faq data={faqs} />
			<Hero />
		</>
	)
}
