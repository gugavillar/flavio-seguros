import { createServerFn } from '@tanstack/react-start'

const extractDeleteToken = (deleteUrl: string) => {
	const parts = deleteUrl.split('/')
	return parts[parts.length - 1]
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
			const response = await fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${process.env.IMG_BB_API_KEY}`, {
				body: data,
				method: 'POST',
			})
			const json = await response.json()

			return json.data
		} catch {
			throw new Error('Ocorreu um erro ao enviar o arquivo')
		}
	})

export const deleteFile = createServerFn({ method: 'POST' })
	.inputValidator((data: { deleteUrl: string }) => {
		if (!data?.deleteUrl) {
			throw new Error('Ocorreu um erro ao excluir o arquivo')
		}
		return data
	})
	.handler(async ({ data }) => {
		try {
			const token = extractDeleteToken(data.deleteUrl)
			const response = await fetch(`https://ibb.co/delete/${token}`, {
				method: 'GET',
			})
			return {
				status: response.status,
				success: response.ok,
			}
		} catch {
			throw new Error('Ocorreu um erro ao excluir o arquivo')
		}
	})
