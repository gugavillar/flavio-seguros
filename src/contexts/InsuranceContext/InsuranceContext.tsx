import { createContext, useContext } from 'react'

import type { translateIcon } from '@/formatters'

export type InsuranceType = {
	'insurance-badge': string
	'insurance-subtitle': string
	'insurance-title': string
	'insurance-icon': keyof typeof translateIcon
	'insurance-path': string
	'insurance-benefits': Array<{
		'insurance-benefit-title': string
		'insurance-benefit-description': string
		'insurance-benefit-icon': string
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

const InsuranceContext = createContext<InsuranceType[] | null>(null)

export const InsuranceProvider = ({
	children,
	insurances,
}: {
	children: React.ReactNode
	insurances: InsuranceType[]
}) => {
	return <InsuranceContext.Provider value={insurances}>{children}</InsuranceContext.Provider>
}

export const useInsuranceContext = () => {
	const context = useContext(InsuranceContext)
	if (!context) {
		throw new Error('useInsuranceContext must be used within an InsuranceProvider')
	}
	return context
}
