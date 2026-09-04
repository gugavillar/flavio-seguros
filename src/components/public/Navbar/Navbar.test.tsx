import { RouterContextProvider, useMatches } from '@tanstack/react-router'
import { act, fireEvent, render } from '@testing-library/react'
import type { Mock } from 'vitest'

import { getRouter } from '@/router'

import { Navbar } from './Navbar'

vi.mock('@tanstack/react-router', async (importOriginal) => {
	const actual = await importOriginal()
	return {
		...(actual as any),
		useMatches: vi.fn(() => []),
	}
})

const Component = (showLinks = true) =>
	render(<Navbar showLinks={showLinks} />, {
		wrapper: ({ children }) => <RouterContextProvider router={getRouter()}>{children}</RouterContextProvider>,
	})

describe('<Navbar />', () => {
	it('should render correctly', () => {
		const { getByText } = Component()
		expect(getByText('Seguros')).toBeInTheDocument()
		expect(getByText('Sobre nós')).toBeInTheDocument()
		expect(getByText('Depoimentos')).toBeInTheDocument()
		expect(getByText('FAQ')).toBeInTheDocument()
		expect(getByText('Fale conosco')).toBeInTheDocument()
	})

	it('should not show menu when showLinks is false', () => {
		const { queryByText } = Component(false)
		expect(queryByText('Seguros')).not.toBeInTheDocument()
		expect(queryByText('Sobre nós')).not.toBeInTheDocument()
		expect(queryByText('Depoimentos')).not.toBeInTheDocument()
		expect(queryByText('FAQ')).not.toBeInTheDocument()
		expect(queryByText('Fale conosco')).not.toBeInTheDocument()
	})

	it('should show menu mobile when click on menu button', () => {
		const { getAllByText, getByRole } = Component()
		const menuButton = getByRole('navigation-button')
		act(() => {
			fireEvent.click(menuButton)
		})
		expect(getAllByText('Seguros')).toHaveLength(2)
		expect(getAllByText('Sobre nós')).toHaveLength(2)
		expect(getAllByText('Depoimentos')).toHaveLength(2)
		expect(getAllByText('FAQ')).toHaveLength(2)
		expect(getAllByText('Fale conosco')).toHaveLength(2)
	})

	it('should close menu mobile when click on menu button', () => {
		const { getAllByText, getByRole } = Component()
		const menuButton = getByRole('navigation-button')
		act(() => {
			fireEvent.click(menuButton)
		})
		act(() => {
			fireEvent.click(menuButton)
		})
		expect(getAllByText('Seguros')).toHaveLength(1)
		expect(getAllByText('Sobre nós')).toHaveLength(1)
		expect(getAllByText('Depoimentos')).toHaveLength(1)
		expect(getAllByText('FAQ')).toHaveLength(1)
		expect(getAllByText('Fale conosco')).toHaveLength(1)
	})

	it('should renders breadcrumbs when have breadcrumbs', () => {
		vi.mocked(useMatches as Mock).mockReturnValueOnce([
			{
				staticData: {
					breadcrumb: 'Home',
				},
			},
		])
		const { getByText } = Component()
		expect(getByText('Home')).toBeInTheDocument()
	})

	it('should renders breadcrumbs when have breadcrumbs and is function', () => {
		vi.mocked(useMatches as Mock).mockReturnValueOnce([
			{
				staticData: {
					breadcrumb: () => 'Home',
				},
			},
		])
		const { getByText } = Component()
		expect(getByText('Home')).toBeInTheDocument()
	})

	it('should close menu mobile when click away', () => {
		const { getAllByText, getByRole } = Component()
		const menuButton = getByRole('navigation-button')
		act(() => {
			fireEvent.click(menuButton)
		})
		act(() => {
			fireEvent.mouseDown(document.body)
		})
		expect(getAllByText('Seguros')).toHaveLength(1)
		expect(getAllByText('Sobre nós')).toHaveLength(1)
		expect(getAllByText('Depoimentos')).toHaveLength(1)
		expect(getAllByText('FAQ')).toHaveLength(1)
		expect(getAllByText('Fale conosco')).toHaveLength(1)
	})
})
