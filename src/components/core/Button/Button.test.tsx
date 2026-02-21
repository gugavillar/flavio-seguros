import { render } from '@testing-library/react'

import { Button } from './Button'

describe('<Button />', () => {
	it('should render correctly button', () => {
		const { getByRole } = render(<Button role='button'>any-text</Button>)
		expect(getByRole('button')).toBeInTheDocument()
	})

	it('should accept any className and any button props', () => {
		const { getByRole } = render(
			<Button className='any-class' role='button'>
				any-text
			</Button>
		)
		expect(getByRole('button')).toHaveClass('any-class')
		expect(getByRole('button')).toHaveAttribute('role', 'button')
	})
})
