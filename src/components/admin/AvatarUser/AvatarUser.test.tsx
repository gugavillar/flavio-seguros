import { act, fireEvent, render } from '@testing-library/react'
import type { Mock } from 'vitest'

import { signOut, useSession } from '@/lib/authClient'

import { AvatarUser } from './AvatarUser'

vi.mock('@/lib/authClient', () => ({
	signOut: vi.fn(),
	useSession: vi.fn(),
}))

vi.mock('@tanstack/react-router', async (importOriginal) => {
	const actual = await importOriginal()
	return {
		...(actual as any),
		useNavigate: vi.fn(),
	}
})

describe('<AvatarUser />', () => {
	it('should render correctly', () => {
		vi.mocked(useSession as Mock).mockReturnValue({
			data: {
				user: {
					email: 'any-email',
					image: 'any-image',
					name: 'any-name',
				},
			},
		})
		const { getByText } = render(<AvatarUser />)
		expect(getByText('any-name')).toBeInTheDocument()
	})

	it('should render null when no data', () => {
		vi.mocked(useSession as Mock).mockReturnValue({
			data: null,
		})
		const { container } = render(<AvatarUser />)
		expect(container).toBeEmptyDOMElement()
	})

	it('should open submenu when click in user name', () => {
		vi.mocked(useSession as Mock).mockReturnValue({
			data: {
				user: {
					email: 'any-email',
					image: 'any-image',
					name: 'any-name',
				},
			},
		})
		const { getByText } = render(<AvatarUser />)
		act(() => {
			getByText('any-name').click()
		})
		expect(getByText('Sair')).toBeInTheDocument()
	})

	it('should call signOut function when click in sair', () => {
		vi.mocked(signOut as Mock).mockImplementationOnce(() => Promise.resolve())
		vi.mocked(useSession as Mock).mockReturnValue({
			data: {
				user: {
					email: 'any-email',
					image: 'any-image',
					name: 'any-name',
				},
			},
		})
		const { getByText } = render(<AvatarUser />)
		act(() => {
			getByText('any-name').click()
		})
		act(() => {
			getByText('Sair').click()
		})
		expect(signOut).toHaveBeenCalled()
	})

	it('should close submenu when click away', () => {
		vi.mocked(useSession as Mock).mockReturnValue({
			data: {
				user: {
					email: 'any-email',
					image: 'any-image',
					name: 'any-name',
				},
			},
		})
		const { queryByText, getByText } = render(<AvatarUser />)
		act(() => {
			getByText('any-name').click()
		})
		act(() => {
			fireEvent.mouseDown(document.body)
		})
		expect(queryByText('Sair')).not.toBeInTheDocument()
	})
})
