import { render } from '@testing-library/react'

import { benefits } from '@/__mocks__/assistance'
import type { AssistancePrismicType } from '@/routes/(public)/_layout/assistencia'

import { HeaderAssistance } from './HeaderAssistance'

const mockData: Pick<AssistancePrismicType, 'assistance-badge' | 'assistance-description' | 'assistance-title'> = {
	'assistance-badge': 'any-badge',
	'assistance-description': 'any-description',
	'assistance-title': 'any-title',
}

describe('<HeaderAssistance />', () => {
	it('should render correctly', () => {
		const { getByText } = render(<HeaderAssistance {...mockData} />)
		expect(getByText(mockData['assistance-badge'])).toBeInTheDocument()
		expect(getByText(mockData['assistance-title'])).toBeInTheDocument()
		expect(getByText(mockData['assistance-description'])).toBeInTheDocument()

		benefits.forEach((benefit) => {
			expect(getByText(benefit.label)).toBeInTheDocument()
		})
	})
})
