import { validateEmail, validatePhone } from 'validations-br'
import { z } from 'zod'

const MAX_FILE_SIZE = 2 * 1024 * 1024 // 2MB
const ACCEPTED_TYPE = 'application/pdf'

export const formSchema = z.object({
	email: z
		.email({ error: 'Campo obrigatório' })
		.trim()
		.refine((value) => validateEmail(value), { message: 'Email inválido' }),
	file: z
		.any()
		.refine((file) => file !== null, {
			message: 'Arquivo é obrigatório',
		})
		.refine((file) => file instanceof File, {
			message: 'Arquivo inválido',
		})
		.refine((file) => file?.size <= MAX_FILE_SIZE, {
			message: 'O arquivo deve ter no máximo 2MB',
		})
		.refine((file) => file?.type === ACCEPTED_TYPE, {
			message: 'O arquivo deve ser um PDF',
		}),
	message: z.string().trim().max(250, { error: 'Mensagem deve ter no máximo 250 caracteres' }).optional(),
	name: z.string().trim().min(3, { error: 'Campo obrigatório' }),
	phone: z
		.string()
		.trim()
		.refine((value) => validatePhone(value), { error: 'Telefone inválido' }),
})

export type FormSchemaType = z.infer<typeof formSchema>

export type FileDataType = {
	id: string
	title: string
	url_viewer: string
	url: string
	display_url: string
	width: number
	height: number
	size: number
	time: number
	expiration: number
	image: {
		filename: string
		name: string
		mime: string
		extension: string
		url: string
	}
	thumb: {
		filename: string
		name: string
		mime: string
		extension: string
		url: string
	}
	medium: {
		filename: string
		name: string
		mime: string
		extension: string
		url: string
	}
	delete_url: string
}
