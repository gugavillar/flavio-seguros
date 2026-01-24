import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'

import { NotFound } from '@/components/core'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
	head: () => ({
		links: [
			{
				href: appCss,
				rel: 'stylesheet',
			},
			{
				href: 'https://fonts.googleapis.com',
				rel: 'preconnect',
			},
			{
				href: 'https://fonts.gstatic.com',
				rel: 'preconnect',
			},
			{
				href: 'https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap',
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
				title: 'Flávio Seguros',
			},
		],
	}),
	notFoundComponent: NotFound,
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
