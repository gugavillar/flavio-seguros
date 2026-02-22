import { render } from '@testing-library/react'

import { UserAvatar } from './UserAvatar'

describe('<UserAvatar />', () => {
	it('should render correctly', () => {
		const { getByText } = render(<UserAvatar description='any-description' name='any-name' />)
		expect(getByText('any-name')).toBeInTheDocument()
		expect(getByText('any-description')).toBeInTheDocument()
	})

	it('should render first letters of name and last name', () => {
		const { getByText } = render(<UserAvatar description='any-description' name='John Doe' />)
		expect(getByText('JD')).toBeInTheDocument()
	})

	it('should render first letter when name has only one name', () => {
		const { getByText } = render(<UserAvatar description='any-description' name='John' />)
		expect(getByText('J')).toBeInTheDocument()
	})

	it('should render image when image is passed and not show first letter', () => {
		const { getByRole } = render(<UserAvatar description='any-description' image='any-image' name='any-name' />)
		expect(getByRole('img')).toHaveAttribute('src', 'any-image')
	})
})
