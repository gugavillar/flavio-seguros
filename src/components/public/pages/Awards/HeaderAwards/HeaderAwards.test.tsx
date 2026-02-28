import { render } from '@testing-library/react'

import type { AwardsPrismicType } from '@/routes/(public)/_layout/premiacoes'

import { HeaderAwards } from './HeaderAwards'

const mockData: Pick<AwardsPrismicType, 'awards-badge' | 'awards-description' | 'awards-title'> = {
	'awards-badge': 'any-badge',
	'awards-description': 'any-description',
	'awards-title': 'any-title',
}

describe('<HeaderAwards />', () => {
	it('should render correctly', () => {
		const { getByText } = render(<HeaderAwards {...mockData} />)
		expect(getByText(mockData['awards-badge'])).toBeInTheDocument()
		expect(getByText(mockData['awards-description'])).toBeInTheDocument()
		expect(getByText(mockData['awards-title'])).toBeInTheDocument()
	})
})
