import { RouterContextProvider } from '@tanstack/react-router'
import { render } from '@testing-library/react'

import { getRouter } from '@/router'

import { NotFound } from './NotFound'

vi.mock('@tanstack/react-router', async (importOriginal) => {
	const actual = await importOriginal()
	return {
		...(actual as any),
		useMatches: vi.fn().mockReturnValue([]),
	}
})

describe('<NotFound />', () => {
	it('should renders correctly', () => {
		const { getByText } = render(<NotFound />, {
			wrapper: ({ children }) => <RouterContextProvider router={getRouter()}>{children}</RouterContextProvider>,
		})
		expect(getByText('404')).toBeInTheDocument()
		expect(getByText('Página não encontrada')).toBeInTheDocument()
		expect(
			getByText('Parece que você se perdeu no caminho. A página que você está procurando não existe ou foi movida.')
		).toBeInTheDocument()
	})
})
