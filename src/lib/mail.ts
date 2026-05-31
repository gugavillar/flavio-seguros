import { createServerFn } from '@tanstack/react-start'
import nodemailer from 'nodemailer'
import { validateEmail, validatePhone } from 'validations-br'
import z, { ZodError } from 'zod'

type Data = {
	name: string
	email: string
	phone: string
	file: string
	message?: string
}

const dataSchema = z.object({
	email: z.email().refine((email) => validateEmail(email)),
	file: z.string(),
	message: z.string().optional(),
	name: z.string(),
	phone: z.string().refine((phone) => validatePhone(phone)),
})

export const sendMail = createServerFn({ method: 'POST' })
	.inputValidator(async (data: Data) => {
		try {
			const result = dataSchema.parseAsync(data)
			return result
		} catch (error) {
			if (error instanceof ZodError) {
				throw new Error(error.issues[0].message)
			}
		}
	})
	.handler(async ({ data }) => {
		if (!data) {
			throw new Error('Ocorreu um erro ao enviar o formulário')
		}

		const filePath = data.file
		const url = new URL('https://gravatacorretora.com.br/api/file')
		url.searchParams.set('file', filePath)

		const transporter = nodemailer.createTransport({
			auth: {
				pass: process.env.SEND_MAIL_PASSWORD,
				user: process.env.SEND_MAIL_USER,
			},
			service: 'gmail',
		})
		try {
			await transporter.sendMail({
				from: `"${data.name}" <${data.email}>`,
				subject: 'Currículo',
				text: `
      		Nome: ${data.name}
      		Email: ${data.email}
      		Telefone: ${data.phone}
      		Arquivo: ${url}
      		Mensagem: ${data.message}
      `,
				to: process.env.SEND_MAIL_TO,
			})
			return { message: 'Formulário enviado com sucesso!' }
		} catch {
			throw new Error('Ocorreu um erro ao enviar o formulário')
		}
	})
