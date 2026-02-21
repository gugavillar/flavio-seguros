import { createFileRoute } from '@tanstack/react-router'

import { BASE_URL, STATIC_ROUTES } from '@/constants'
import { getPageData } from '@/lib/prismic'

export const Route = createFileRoute('/sitemap.xml')({
	server: {
		handlers: {
			GET: async () => {
				const insurances = await getPageData({
					data: {
						args: ['insurance'],
						method: 'getAllByType',
					},
				})
				const dynamicRoutes = insurances.map((item: { uid: string }) => `/${item.uid}`)
				const urls = [...STATIC_ROUTES, ...dynamicRoutes]
				const xml = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${urls
						.map(
							(url) => `
                <url>
                  <loc>${BASE_URL}${url}</loc>
                  <changefreq>weekly</changefreq>
                  <priority>${url === '' ? '1.0' : '0.8'}</priority>
                </url>`
						)
						.join('')}
        </urlset>`
				return new Response(xml, {
					headers: {
						'Content-Type': 'application/xml',
					},
				})
			},
		},
	},
})
