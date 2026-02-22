import { render } from '@testing-library/react'

import { WhatsAppIcon } from './WhatsAppIcon'

describe('<WhatsAppIcon />', () => {
	it('should render correctly and accept any props and className', () => {
		const { getByRole } = render(<WhatsAppIcon className='any-className' id='whatsapp-icon' role='whatsapp-icon' />)
		expect(getByRole('whatsapp-icon')).toHaveClass('any-className')
		expect(getByRole('whatsapp-icon')).toHaveAttribute('id', 'whatsapp-icon')
	})
})
