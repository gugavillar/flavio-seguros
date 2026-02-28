import { render } from '@testing-library/react'

import type { InsuranceType } from '@/contexts'

import { DescriptionService } from './DescriptionService'

const mockDescription: Pick<InsuranceType, 'insurance-content' | 'insurance-indication' | 'insurance-description'> = {
	'insurance-content': [
		{ 'insurance-description-content': 'any-content-1' },
		{ 'insurance-description-content': 'any-content-2' },
	],
	'insurance-description': 'any-description',
	'insurance-indication': [
		{ 'insurance-indication-content': 'any-indication-1' },
		{ 'insurance-indication-content': 'any-indication-2' },
	],
}

describe('<DescriptionService />', () => {
	it('should render correctly', () => {
		const { getByText } = render(<DescriptionService {...mockDescription} />)

		expect(getByText(mockDescription['insurance-description'])).toBeInTheDocument()
		for (const item of mockDescription['insurance-content']) {
			expect(getByText(item['insurance-description-content'])).toBeInTheDocument()
		}
		for (const item of mockDescription['insurance-indication']) {
			expect(getByText(item['insurance-indication-content'])).toBeInTheDocument()
		}
	})
})
