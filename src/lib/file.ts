import { createServerFn } from '@tanstack/react-start'
import { addYears, differenceInSeconds } from 'date-fns'
import { imgbbUpload } from 'imgbb-image-uploader'

const expiration = () => {
	const today = new Date()
	const oneYearLater = addYears(today, 1)
	return differenceInSeconds(oneYearLater, today)
}

export const sendFile = createServerFn({
	method: 'POST',
})
	.inputValidator((data: unknown) => {
		if (!(data instanceof FormData)) {
			throw new Error('Ocorreu um erro ao enviar o arquivo')
		}
		return data
	})
	.handler(async ({ data }) => {
		try {
			const responseData = await imgbbUpload({
				expiration: expiration(),
				image: data.get('image') as File,
				key: process.env.IMG_BB_API_KEY!,
				name: data.get('name') as string,
			})
			return responseData.data.url
		} catch {
			throw new Error('Ocorreu um erro ao enviar o arquivo')
		}
	})
