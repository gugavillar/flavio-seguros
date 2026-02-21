import { generateWhatsAppLink, goToHash, transformPath } from './navigation'

const phone = '99999999999'

describe('generateWhatsAppLink', () => {
	it('should generate whatsapp link without message', () => {
		const result = generateWhatsAppLink({ phone })
		expect(result).toStrictEqual(`${import.meta.env.VITE_WHATS_APP}${phone}`)
	})

	it('should generate whatsapp link with message', () => {
		const message = encodeURIComponent('any-message')
		const result = generateWhatsAppLink({ message, phone })
		expect(result).toStrictEqual(`${import.meta.env.VITE_WHATS_APP}${phone}&text=${message}`)
	})
})

describe('transformPath', () => {
	it('should remove "-" or "/" from string', () => {
		const result = transformPath('any-path/any-path')
		expect(result).toStrictEqual('any path any path')
	})
})

describe('goToHash', () => {
	it('should scroll to the element when it exists', () => {
		const scrollIntoViewMock = vi.fn()
		const element = {
			scrollIntoView: scrollIntoViewMock,
		} as unknown as HTMLElement

		const getElementByIdSpy = vi.spyOn(document, 'getElementById').mockReturnValue(element)
		goToHash('section-1')
		expect(getElementByIdSpy).toHaveBeenCalledWith('section-1')
		expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' })
	})
})
