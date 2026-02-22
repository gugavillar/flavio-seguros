import { render } from '@testing-library/react'
import { createRef } from 'react'

import { Input } from './Input'

describe('<Input />', () => {
	it('should render correctly', () => {
		const { getByRole } = render(<Input />)
		expect(getByRole('textbox')).toBeInTheDocument()
	})

	it('should accept any props and any className', () => {
		const { getByRole } = render(<Input className='any-className' name='input' />)
		expect(getByRole('textbox')).toHaveClass('any-className')
		expect(getByRole('textbox')).toHaveAttribute('name', 'input')
	})

	it('should accept ref correctly', () => {
		const ref = createRef<HTMLInputElement>()
		render(<Input ref={ref} />)
		expect(ref.current).toBeInTheDocument()
	})
})
