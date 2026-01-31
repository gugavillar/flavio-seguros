import { ClientOnly, createFileRoute, Outlet } from '@tanstack/react-router'
import CookieConsent from 'react-cookie-consent'

import { Footer, Navbar } from '@/components/public'

export const Route = createFileRoute('/(public)/(layout)/_layout')({
	component: PublicLayoutComponent,
})

function PublicLayoutComponent() {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
			<ClientOnly>
				<CookieConsent
					buttonClasses='inline-flex! cursor-pointer! items-center! justify-center! gap-2! whitespace-nowrap! rounded-md! bg-transparent! border! border-gray-200! px-4! py-2! font-medium! text-sm! text-white! ring-offset-primary! transition-all! duration-500! hover:bg-slate-50/20! focus-visible:outline-none! focus-visible:ring-2! focus-visible:ring-ring! focus-visible:ring-offset-2!'
					buttonText='Aceitar'
					containerClasses='justify-center! items-center! bg-primary-gradient! z-[99999]!'
					contentClasses='container mx-auto max-w-[1425px] m-0! px-4 py-2'
					cookieName='cookieConsent'
					location='bottom'
				>
					Usamos cookies essenciais e de análise para garantir o funcionamento do site e melhorar sua experiência. Saiba
					mais na{' '}
					<a
						className='underline underline-offset-4'
						href='/docs/politica-de-cookies.pdf'
						rel='noopener noreferrer'
						target='_blank'
					>
						Política de Cookies
					</a>
					.
				</CookieConsent>
			</ClientOnly>
		</>
	)
}
