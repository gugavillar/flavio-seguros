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
