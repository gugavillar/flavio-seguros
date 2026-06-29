import { PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { createServerFn } from '@tanstack/react-start'
import z from 'zod'

import { randomUUID } from 'node:crypto'

import { s3 } from './s3'

const MAX_FILE_SIZE = 2 * 1024 * 1024 // 2 MB

const saveFileSchema = z.object({
	file: z
		.any()
		.refine((file) => file !== null, {
			message: 'Arquivo é obrigatório',
		})
		.refine((file) => file instanceof File, {
			message: 'Arquivo inválido',
		})
		.refine((file) => file?.size <= MAX_FILE_SIZE, {
			message: `O arquivo deve ter no máximo ${MAX_FILE_SIZE}KB`,
		})
		.refine((file) => ['application/pdf'].includes(file?.type), {
			message: 'O arquivo deve ser uma imagem',
		}),
	name: z.string(),
})

export const sendFile = createServerFn({
	method: 'POST',
})
	.validator((data: unknown) => {
		if (!(data instanceof FormData)) {
			throw new Error('Ocorreu um erro ao enviar o arquivo')
		}
		return data
	})
	.handler(async ({ data }) => {
		try {
			const rawData = Object.fromEntries(data.entries())
			const file = data.get('file')
			const parsed = saveFileSchema.parse({ ...rawData, file })

			const sanitizedName = parsed.name
				.toLowerCase()
				.replace(/\s+/g, '-')
				.normalize('NFD')
				.replace(/[\u0300-\u036f]/g, '')

			const key = `curriculo/${sanitizedName}-${randomUUID()}`

			const command = new PutObjectCommand({
				Bucket: process.env.AWS_BUCKET as string,
				ContentType: 'application/pdf',
				Key: key,
			})

			const url = await getSignedUrl(s3, command, {
				expiresIn: 60,
			})

			await fetch(url, {
				body: file,
				headers: {
					'Content-Type': 'application/pdf',
				},
				method: 'PUT',
			})

			return key
		} catch {
			throw new Error('Ocorreu um erro ao enviar o arquivo')
		}
	})
