import { render } from '@testing-library/react'
import type { Mock } from 'vitest'

import { useInsuranceContext } from '@/contexts'
import { formatPhone } from '@/formatters'
import type { AssistancePrismicType } from '@/routes/(public)/_layout/assistencia'

import { EmergencePhones } from './EmergencePhones'

const mockData: Pick<
	AssistancePrismicType,
	'assistance-partner-badge' | 'assistance-partner-title' | 'assistance-partner-description'
> = {
	'assistance-partner-badge': 'any-badge',
	'assistance-partner-description': 'any-description',
	'assistance-partner-title': 'any-title',
}

vi.mock('@/contexts', () => ({
	useInsuranceContext: vi.fn(),
}))

const partners = [
	{
		items: [{ 'company-site': 'any-site' }],
		primary: {
			'company-assistance-phone': '99999999998',
			'company-logo': 'any-logo',
			'company-name': 'any-name',
			'company-whatsapp': '99999999999',
		},
	},
]

describe('<EmergencePhones />', () => {
	it('should render correctly', () => {
		;(useInsuranceContext as Mock).mockReturnValue({
			partners,
		})
		const { getByText } = render(<EmergencePhones {...mockData} />)
		expect(getByText(mockData['assistance-partner-badge'])).toBeInTheDocument()
		expect(getByText(mockData['assistance-partner-title'])).toBeInTheDocument()
		expect(getByText(mockData['assistance-partner-description'])).toBeInTheDocument()
		partners.forEach((partner) => {
			expect(getByText(partner.primary['company-name'])).toBeInTheDocument()
			expect(getByText(formatPhone(partner.primary['company-assistance-phone']))).toBeInTheDocument()
			expect(getByText(formatPhone(partner.primary['company-whatsapp']))).toBeInTheDocument()
		})
	})

	it('should render correctly with empty partners', () => {
		;(useInsuranceContext as Mock).mockReturnValue({
			partners: [],
		})
		const { getByText } = render(<EmergencePhones {...mockData} />)
		expect(getByText(mockData['assistance-partner-badge'])).toBeInTheDocument()
		expect(getByText(mockData['assistance-partner-title'])).toBeInTheDocument()
		expect(getByText(mockData['assistance-partner-description'])).toBeInTheDocument()
	})
})
