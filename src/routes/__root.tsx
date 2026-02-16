import { type AnyRouteMatch, createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import { Toaster } from 'react-hot-toast'

import '../styles.css'
import 'swiper/css'
import 'swiper/css/pagination'

import { InsuranceProvider, type InsuranceType } from '@/contexts'
import { client } from '@/lib/prismic'

declare module '@tanstack/react-router' {
	interface StaticDataRouteOption {
		breadcrumb?: string | ((ctx: AnyRouteMatch) => string)
	}
}

export const Route = createRootRoute({
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
		const response = await client.getAllByType('insurance')
		const insuranceData = response.map(({ data, uid }) => ({
			...data,
			'insurance-path': `/${uid}`,
		}))
		return {
			insurances: insuranceData,
		}
	},
	shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
	const data = Route.useLoaderData()
	return (
		<html lang='pt-BR'>
			<head>
				<HeadContent />
			</head>
			<InsuranceProvider insurances={data?.insurances as InsuranceType[]}>
				<body className='bg-off-white-2'>
					{children}
					<Scripts />
					<Toaster position='top-right' toastOptions={{ duration: 3000 }} />
				</body>
			</InsuranceProvider>
		</html>
	)
}
