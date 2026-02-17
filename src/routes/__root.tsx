import { type AnyRouteMatch, createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'

import '../styles.css'
import 'swiper/css'
import 'swiper/css/pagination'

import { Toaster } from 'react-hot-toast'

import { TEN_MINUTES, THIRTY_MINUTES } from '@/constants'
import { InsuranceProvider, type InsuranceType, type PartnerType } from '@/contexts'
import { client } from '@/lib/prismic'

declare module '@tanstack/react-router' {
	interface StaticDataRouteOption {
		breadcrumb?: string | ((ctx: AnyRouteMatch) => string)
	}
}

export const Route = createRootRoute({
	gcTime: THIRTY_MINUTES,
	head: () => ({
		meta: [
			{
				charSet: 'utf-8',
			},
			{
				content: 'width=device-width, initial-scale=1',
				name: 'viewport',
			},
			{
				title: 'Flávio Seguros',
			},
		],
	}),
	loader: async () => {
		const insurances = await client.getAllByType('insurance')
		const partners = await client.getByUID('companies', 'parceiros')

		const insuranceData = insurances.map(({ data, uid }) => ({
			...data,
			'insurance-path': `/${uid}`,
		}))

		const partnersData = partners.data.body.map((items: PartnerType) => ({
			...items,
		}))
		return {
			insurances: insuranceData,
			partners: partnersData,
		}
	},
	shellComponent: RootDocument,
	staleTime: TEN_MINUTES,
})

function RootDocument({ children }: { children: React.ReactNode }) {
	const data = Route.useLoaderData()
	return (
		<html lang='pt-BR'>
			<head>
				<HeadContent />
			</head>
			<InsuranceProvider insurances={data?.insurances as InsuranceType[]} partners={data?.partners as PartnerType[]}>
				<body className='bg-off-white-2'>
					{children}
					<Scripts />
					<Toaster position='top-right' toastOptions={{ duration: 3000 }} />
				</body>
			</InsuranceProvider>
		</html>
	)
}
