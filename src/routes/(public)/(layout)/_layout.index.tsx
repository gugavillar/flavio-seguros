import { ClientOnly, createFileRoute } from '@tanstack/react-router'

import {
	AboutUs,
	type AboutUsPrismicType,
	type CtaPrismicType,
	Faq,
	type FaqPrismicType,
	Hero,
	HeroTop,
	type HeroTopPrismicType,
	InsuranceCarousel,
	type ServicePrismicType,
	Services,
	type TestimonialPrismicType,
	Testimonials,
} from '@/components/public'
import { useInsuranceContext } from '@/contexts'
import { client } from '@/lib/prismic'

export const Route = createFileRoute('/(public)/(layout)/_layout/')({
	component: IndexPage,
	loader: async () => {
		const response = await client.getByUID('homepage', 'home')
		return {
			data: response.data,
		}
	},
})

function IndexPage() {
	const { data } = Route.useLoaderData()
	const insurances = useInsuranceContext()

	const testimonials = data.body.find((item: TestimonialPrismicType) => item.slice_type === 'testimonials')
	const faqs = data.body.find((item: FaqPrismicType) => item.slice_type === 'faq')
	const cta = data.body.find((item: CtaPrismicType) => item.slice_type === 'cta')
	const service = data.body.find((item: ServicePrismicType) => item.slice_type === 'services')
	const aboutUs = data.body.find((item: AboutUsPrismicType) => item.slice_type === 'about-us')
	const hero = data.body.find((item: HeroTopPrismicType) => item.slice_type === 'hero')

	return (
		<>
			<HeroTop data={hero} />
			<Services data={service} insurances={insurances} />
			<AboutUs data={aboutUs} />
			<ClientOnly>
				<InsuranceCarousel />
				<Testimonials data={testimonials} />
			</ClientOnly>
			<Faq data={faqs} />
			<Hero data={cta} insurances={insurances} />
		</>
	)
}
