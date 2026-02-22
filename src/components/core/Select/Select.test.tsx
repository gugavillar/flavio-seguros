import { render } from '@testing-library/react'
import { createRef } from 'react'

import { Select } from './Select'

describe('<Select />', () => {
	it('should render correctly', () => {
		const { getByRole, getByText } = render(<Select options={[{ label: 'any-label', value: 'any-value' }]} />)
		expect(getByRole('combobox')).toBeInTheDocument()
		expect(getByText('any-label')).toBeInTheDocument()
		expect(getByText('Selecione uma opção')).toBeInTheDocument()
	})

	it('should accept any props and className', () => {
		const { getByRole } = render(
			<Select className='any-className' id='any-id' options={[{ label: 'any-label', value: 'any-value' }]} />
		)
		expect(getByRole('combobox')).toHaveClass('any-className')
		expect(getByRole('combobox')).toHaveAttribute('id', 'any-id')
	})

	it('should accept ref correctly', () => {
		const ref = createRef<HTMLSelectElement>()
		render(<Select options={[{ label: 'any-label', value: 'any-value' }]} ref={ref} />)
		expect(ref.current).toBeInTheDocument()
	})
})
