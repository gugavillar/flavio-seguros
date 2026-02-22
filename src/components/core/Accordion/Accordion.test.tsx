import { Accordion } from '@radix-ui/react-accordion'
import { render } from '@testing-library/react'
import { createRef } from 'react'

import { AccordionItem } from './Accordion'

describe('<Accordion />', () => {
	it('should renders correctly', () => {
		const { getByText } = render(<Accordion type='single'>Accordion</Accordion>)
		expect(getByText('Accordion')).toBeInTheDocument()
	})
})

describe('<AccordionItem />', () => {
	it('should renders correctly', () => {
		const ref = createRef<HTMLDivElement>()
		const { getByText, getByRole } = render(
			<Accordion type='single'>
				<AccordionItem className='any-class' id='any-id' ref={ref} role='item' value='1'>
					AccordionItem
				</AccordionItem>
			</Accordion>
		)
		expect(ref.current).toBeInTheDocument()
		expect(getByRole('item')).toHaveAttribute('id', 'any-id')
		expect(getByRole('item')).toHaveClass('any-class')
		expect(getByText('AccordionItem')).toBeInTheDocument()
	})
})
