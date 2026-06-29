import { act, fireEvent, render } from '@testing-library/react'

import { InsuranceProvider, type InsuranceType, type PartnerType } from '@/contexts'

import { Insurances } from './Insurances'

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

describe('<Insurances />', () => {
	it('should render correctly', () => {
		const { getByText } = render(<Insurances />, {
			wrapper: ({ children }) => (
				<InsuranceProvider insurances={insurances} partners={partners}>
					{children}
				</InsuranceProvider>
			),
		})
		expect(getByText('Seguradoras')).toBeInTheDocument()
		expect(getByText('any-name')).toBeInTheDocument()
		expect(getByText('filter-name')).toBeInTheDocument()
		expect(getByText('Site')).toBeInTheDocument()
	})

	it('should filter insurances correctly', () => {
		const { getByRole, getByText } = render(<Insurances />, {
			wrapper: ({ children }) => (
				<InsuranceProvider insurances={insurances} partners={partners}>
					{children}
				</InsuranceProvider>
			),
		})
		const input = getByRole('searchbox')
		act(() => {
			fireEvent.input(input, { target: { value: 'filter-name' } })
		})
		expect(getByText('filter-name')).toBeInTheDocument()
		expect(getByText('Site 2')).toBeInTheDocument()
	})
})
