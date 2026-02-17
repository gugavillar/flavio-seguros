export const formatPhone = (phone: string) => {
	if (!phone) return ''
	if (phone.startsWith('0800') || phone.startsWith('0300')) {
		return `${phone.slice(0, 4)} ${phone.slice(4, 7)} ${phone.slice(7, 11)}`
	}
	return `(${phone.slice(0, 2)}) ${phone.slice(2, 6)}-${phone.slice(6, 10)}`
}

export const nearestLowerMultipleOfFive = (value: number): number => Math.floor(value / 5) * 5
