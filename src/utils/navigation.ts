export const goToHash = (hash: string) => {
	const el = document.getElementById(hash)
	el?.scrollIntoView({ behavior: 'smooth' })
}

export enum NAVIGATION_HASH {
	SERVICES = 'servicos',
	ABOUT = 'sobre',
	TESTIMONIALS = 'depoimentos',
	FAQ = 'faq',
}

export const transformPath = (path: string) => {
	const formattedPath = path.replace(/-|\//g, ' ')
	return formattedPath
}

export const generateWhatsAppLink = ({ phone = '8135331163', message }: { phone?: string; message?: string }) => {
	if (message) {
		return `${import.meta.env.VITE_WHATS_APP}${phone}&text=${encodeURIComponent(message)}`
	}
	return `${import.meta.env.VITE_WHATS_APP}${phone}`
}
