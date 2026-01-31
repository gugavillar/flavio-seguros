import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'

import '../styles.css'
import 'swiper/css'
import 'swiper/css/pagination'

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
			</body>
		</html>
	)
}
