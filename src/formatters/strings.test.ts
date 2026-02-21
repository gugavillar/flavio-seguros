import { formatPhone, nearestLowerMultipleOfFive } from './strings'

describe('formatPhone', () => {
	it('should return empty string when no phone', () => {
		const result = formatPhone('')
		expect(result).toBe('')
	})

	it('should return formatted when phone started when "0300"', () => {
		const result = formatPhone('03001234567')
		expect(result).toBe('0300 123 4567')
	})

	it('should return formatted when phone started when "0800"', () => {
		const result = formatPhone('08001234567')
		expect(result).toBe('0800 123 4567')
	})

	it('should return formatted when mobile phone is passed', () => {
		const result = formatPhone('99999999999')
		expect(result).toBe('(99) 99999-9999')
	})

	it('should return formatted when phone is passed', () => {
		const result = formatPhone('9999999999')
		expect(result).toBe('(99) 9999-9999')
	})
})

describe('nearestLowerMultipleOfFive', () => {
	it('should return nearest lower multiple of five', () => {
		const result = nearestLowerMultipleOfFive(10)
		expect(result).toBe(10)
	})
})
