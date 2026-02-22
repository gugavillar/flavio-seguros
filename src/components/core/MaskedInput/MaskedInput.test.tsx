import { fireEvent, render } from '@testing-library/react'
import { createRef } from 'react'

import { MaskedInput } from './MaskedInput'

describe('<MaskedInput />', () => {
	it('should render correctly', () => {
		const { getByRole } = render(<MaskedInput format='###.###.###-##' />)
		expect(getByRole('textbox')).toBeInTheDocument()
	})

	it('should accept any props and any className', () => {
		const { getByRole } = render(<MaskedInput className='any-className' format='###.###.###-##' name='input' />)
		expect(getByRole('textbox')).toHaveClass('any-className')
		expect(getByRole('textbox')).toHaveAttribute('name', 'input')
	})

	it('should accept ref correctly', () => {
		const ref = createRef<HTMLInputElement>()
		render(<MaskedInput format='###.###.###-##' ref={ref} />)
		expect(ref.current).toBeInTheDocument()
	})

	it('should value is masked on input', () => {
		const { getByRole } = render(<MaskedInput format='###.###.###-##' />)
		const input = getByRole('textbox')
		fireEvent.change(input, { target: { value: '12345678901' } })
		expect(input).toHaveValue('123.456.789-01')
	})
})
