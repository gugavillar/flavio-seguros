import { createFileRoute } from '@tanstack/react-router'

import { BASE_URL } from '@/constants'

export const Route = createFileRoute('/robots.txt')({
	server: {
		handlers: {
			GET: async () => {
				return new Response(
					`User-agent: *
            Allow: /
            Sitemap: ${BASE_URL}/sitemap.xml`,
					{
						headers: {
							'Content-Type': 'text/plain',
						},
					}
				)
			},
		},
	},
})
