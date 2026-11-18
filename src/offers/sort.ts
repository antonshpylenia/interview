import type { Offer } from '../types'

export type SortKey = 'recommended' | 'price-asc' | 'price-desc'

const byPrice = (a: Offer, b: Offer) => (a.pricePerDay > b.pricePerDay ? 1 : a.pricePerDay < b.pricePerDay ? -1 : 0)

export function sortOffers(offers: Offer[], key: SortKey): Offer[] {
  if (key === 'recommended') return offers
  const sorted = [...offers].sort(byPrice)
  return key === 'price-desc' ? sorted.reverse() : sorted
}
