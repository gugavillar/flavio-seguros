import { type AnyRouteMatch, createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'

import '../styles.css'
import 'swiper/css'
import 'swiper/css/pagination'

import { Toaster } from 'react-hot-toast'

import { TEN_MINUTES, THIRTY_MINUTES } from '@/constants'
import { InsuranceProvider, type InsuranceType, type PartnerType } from '@/contexts'
import { getPageData } from '@/lib/prismic'

declare module '@tanstack/react-router' {
	interface StaticDataRouteOption {
		breadcrumb?: string | ((ctx: AnyRouteMatch) => string)
	}
}

export const Route = createRootRoute({
	gcTime: THIRTY_MINUTES,
	head: () => ({
		links: [
			{
				crossOrigin: 'anonymous',
				href: 'https://fonts.gstatic.com',
				rel: 'preconnect',
			},
			{
				href: 'https://fonts.googleapis.com',
				rel: 'preconnect',
			},
			{
				href: 'https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@600;700&family=Poppins:wght@400;500;600;700&display=swap',
				rel: 'stylesheet',
			},
		],
		meta: [
			{
				charSet: 'utf-8',
			},
			{
				content: 'width=device-width, initial-scale=1',
				name: 'viewport',
			},
			{
				title: 'Flávio Seguros | Corretora de Seguros | Proteção completa para você e sua família',
			},
		],
	}),
	loader: async () => {
		const insurances = await getPageData({
			data: {
				args: ['insurance'],
				method: 'getAllByType',
			},
		})
		const partners = await getPageData({
			data: {
				args: ['companies', 'parceiros'],
				method: 'getByUID',
			},
		})

		const insuranceData = insurances.map(({ data, uid }: { data: InsuranceType; uid: string }) => ({
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
