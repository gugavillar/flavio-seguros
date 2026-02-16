import { insurances } from './insurances'

export const insurancesLogos = insurances.map((insurance) => ({ alt: insurance.name, src: insurance.image }))
