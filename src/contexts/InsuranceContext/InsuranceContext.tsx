import { createContext, useContext } from 'react'

import type { translateIcon } from '@/formatters'

export type InsuranceType = {
	'insurance-badge': string
	'insurance-subtitle': string
	'insurance-title': string
	'insurance-icon': keyof typeof translateIcon
	'insurance-path': string
	'insurance-description': string
	'insurance-benefits': Array<{
		'insurance-benefit-title': string
		'insurance-benefit-description': string
		'insurance-benefit-icon': keyof typeof translateIcon
	}>
	'insurance-content': Array<{
		'insurance-description-content': string
	}>
	'insurance-faq': Array<{
		'insurance-faq-question': string
		'insurance-faq-answer': string
	}>
	'insurance-indication': Array<{
		'insurance-indication-content': string
	}>
}

export type PartnerType = {
	primary: {
		'company-assistance-phone': string
		'company-logo': object
		'company-name': string
		'company-whatsapp': string
	}
	items: Array<{
		'company-site': string
	}>
}

type InsuranceContextType = {
	insurances: InsuranceType[]
	partners: PartnerType[]
}

const InsuranceContext = createContext<InsuranceContextType | null>(null)

export const InsuranceProvider = ({
	children,
	insurances,
	partners,
}: {
	children: React.ReactNode
	insurances: InsuranceType[]
	partners: PartnerType[]
}) => {
	return <InsuranceContext.Provider value={{ insurances, partners }}>{children}</InsuranceContext.Provider>
}

export const useInsuranceContext = () => {
	const context = useContext(InsuranceContext)
	if (!context) {
		throw new Error('useInsuranceContext must be used within an InsuranceProvider')
	}
	return context
}
