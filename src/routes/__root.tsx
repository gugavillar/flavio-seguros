import { type AnyRouteMatch, createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import { Toaster } from 'react-hot-toast'

import '../styles.css'
import 'swiper/css'
import 'swiper/css/pagination'

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
	shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang='pt-BR'>
			<head>
				<HeadContent />
			</head>
			<body className='bg-off-white-2'>
				{children}
				<Scripts />
				<Toaster position='top-right' toastOptions={{ duration: 3000 }} />
			</body>
		</html>
	)
}
