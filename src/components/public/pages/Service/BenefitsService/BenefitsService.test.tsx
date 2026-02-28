import { render } from '@testing-library/react'

import type { InsuranceType } from '@/contexts'

import { BenefitsService } from './BenefitsService'

const mockData: Pick<InsuranceType, 'insurance-benefits'> = {
	'insurance-benefits': [
		{
			'insurance-benefit-description': 'any-description',
			'insurance-benefit-icon': 'Heart',
			'insurance-benefit-title': 'any-title',
		},
	],
}

describe('<BenefitsService />', () => {
	it('should render correctly', () => {
		const { getByText } = render(<BenefitsService {...mockData} />)

		mockData['insurance-benefits'].forEach((benefit) => {
			expect(getByText(benefit['insurance-benefit-title'])).toBeInTheDocument()
			expect(getByText(benefit['insurance-benefit-description'])).toBeInTheDocument()
		})
	})
})
