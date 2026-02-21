import { render } from '@testing-library/react'
import { Anchor } from 'lucide-react'

import { DescriptionCard } from './DescriptionCard'

describe('<DescriptionCard />', () => {
	it('should render correctly', () => {
		const { getByText } = render(<DescriptionCard description='any-description' icon={Anchor} title='any-title' />)
		expect(getByText('any-description')).toBeInTheDocument()
		expect(getByText('any-title')).toBeInTheDocument()
	})

	it('should render icon correctly', () => {
		const { getByTestId } = render(<DescriptionCard description='any-description' icon={Anchor} title='any-title' />)
		expect(getByTestId('description-card-icon')).toBeInTheDocument()
		expect(getByTestId('description-card-icon')).toHaveClass('lucide lucide-anchor')
	})
})
