import '@testing-library/dom'
import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

vi.stubEnv('GOOGLE_CLIENT_ID', 'any-google-client-id')
vi.stubEnv('GOOGLE_CLIENT_SECRET', 'any-google-client-secret')

afterEach(() => {
	cleanup()
	vi.resetAllMocks()
})
