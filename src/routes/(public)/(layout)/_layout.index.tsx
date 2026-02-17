import { ClientOnly, createFileRoute } from '@tanstack/react-router'

import { GlobalLoading } from '@/components/core'
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
import { TEN_MINUTES } from '@/constants'
import { useInsuranceContext } from '@/contexts'
import { nearestLowerMultipleOfFive } from '@/formatters'
import { getPageData } from '@/lib/prismic'

export const Route = createFileRoute('/(public)/(layout)/_layout/')({
	component: IndexPage,
	loader: async () => {
		const response = await getPageData({
			data: {
				args: ['homepage', 'home'],
				method: 'getByUID',
			},
		})
		return {
			data: response.data,
		}
	},
	pendingComponent: () => <GlobalLoading />,
	staleTime: TEN_MINUTES,
})

function IndexPage() {
	const { data } = Route.useLoaderData()
	const contextData = useInsuranceContext()

	const testimonials = data.body.find((item: TestimonialPrismicType) => item.slice_type === 'testimonials')
	const faqs = data.body.find((item: FaqPrismicType) => item.slice_type === 'faq')
	const cta = data.body.find((item: CtaPrismicType) => item.slice_type === 'cta')
	const service = data.body.find((item: ServicePrismicType) => item.slice_type === 'services')
	const aboutUs = data.body.find((item: AboutUsPrismicType) => item.slice_type === 'about-us')
	const hero = data.body.find((item: HeroTopPrismicType) => item.slice_type === 'hero')

	const totalPartners = `+${nearestLowerMultipleOfFive(contextData.partners.length)}`

	return (
		<>
			<HeroTop data={hero} />
			<Services data={service} insurances={contextData.insurances} />
			<AboutUs data={aboutUs} totalPartners={totalPartners} />
			<ClientOnly>
				<InsuranceCarousel />
				<Testimonials data={testimonials} />
			</ClientOnly>
			<Faq data={faqs} />
			<Hero data={cta} insurances={contextData.insurances} />
		</>
	)
}
