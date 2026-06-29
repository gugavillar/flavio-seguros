import { GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { createFileRoute } from '@tanstack/react-router'

import { s3 } from '@/lib/s3'

export const Route = createFileRoute('/api/file')({
	server: {
		handlers: {
			GET: async ({ request }) => {
				const requestUrl = new URL(request.url)

				const file = requestUrl.searchParams.get('file')

				if (!file) {
					return new Response('Arquivo não informado', {
						status: 400,
					})
				}

				const command = new GetObjectCommand({
					Bucket: process.env.AWS_BUCKET as string,
					Key: file as string,
				})

				const url = await getSignedUrl(s3, command, {
					expiresIn: 60,
				})

				return Response.redirect(url, 302)
			},
		},
	},
})
