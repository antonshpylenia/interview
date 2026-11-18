import type { Location, Offer } from '../types'

export interface OfferQuery {
  location: Location
  pickupDate: string
  offset?: number
  limit?: number
}

export interface OfferPage {
  items: Offer[]
  total: number
}

// Stand-in for the offers API: the JSON in public/api has the production response shape.
// Filtering and paging happen here the way the real endpoint does them.
export async function fetchOffers({ location, offset = 0, limit = 100 }: OfferQuery): Promise<OfferPage> {
  await new Promise((resolve) => setTimeout(resolve, 400))
  const res = await fetch('/api/offers.json')
  if (!res.ok) throw new Error(`Offers request failed: ${res.status}`)
  const all: Offer[] = await res.json()
  const matching = all.filter((offer) => offer.location === location)
  return { items: matching.slice(offset, offset + limit), total: matching.length }
}
