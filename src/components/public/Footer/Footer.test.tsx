import { RouterContextProvider } from '@tanstack/react-router'
import { render } from '@testing-library/react'

import { company } from '@/__mocks__/footer'
import { InsuranceProvider, type InsuranceType, type PartnerType } from '@/contexts'
import { getRouter } from '@/router'

import { Footer } from './Footer'

const insurances: InsuranceType[] = [
	{
		'insurance-badge': 'any-badge',
		'insurance-benefits': [],
		'insurance-content': [{ 'insurance-description-content': 'any-content' }],
		'insurance-description': 'any-description',
		'insurance-faq': [],
		'insurance-icon': 'Activity',
		'insurance-indication': [{ 'insurance-indication-content': 'any-indication' }],
		'insurance-path': 'any-path',
		'insurance-subtitle': 'any-subtitle',
		'insurance-title': 'any-title',
	},
]

const partners: PartnerType[] = [
	{
		items: [{ 'company-site': 'any-site' }],
		primary: {
			'company-assistance-phone': 'any-phone',
			'company-logo': {},
			'company-name': 'any-name',
			'company-whatsapp': 'any-whatsapp',
		},
	},
	{
		items: [{ 'company-site': 'any-site' }, { 'company-site': 'any-site-2' }],
		primary: {
			'company-assistance-phone': 'any-phone',
			'company-logo': {},
			'company-name': 'filter-name',
			'company-whatsapp': 'any-whatsapp',
		},
	},
]

describe('<Footer />', () => {
	it('should render correctly', () => {
		const { getByText } = render(<Footer />, {
			wrapper: ({ children }) => (
				<RouterContextProvider router={getRouter()}>
					<InsuranceProvider insurances={insurances} partners={partners}>
						{children}
					</InsuranceProvider>
				</RouterContextProvider>
			),
		})
		expect(
			getByText('Há mais de 20 anos protegendo famílias brasileiras com as melhores soluções em seguros.')
		).toBeInTheDocument()
		expect(getByText(company.title)).toBeInTheDocument()
	})
})
