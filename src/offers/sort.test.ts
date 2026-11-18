import { sortOffers } from './sort'
import type { Offer } from '../types'

const offer = (id: string, pricePerDay: number): Offer => ({
  id,
  location: 'Lisbon',
  model: id,
  category: 'Compact',
  transmission: 'manual',
  fuel: 'petrol',
  seats: 5,
  pricePerDay,
  currency: 'EUR',
})

const offers = [offer('a', 49), offer('b', 89), offer('c', 35)]

test('keeps the API order for recommended', () => {
  expect(sortOffers(offers, 'recommended').map((o) => o.id)).toEqual(['a', 'b', 'c'])
})

test('sorts by price, low to high', () => {
  expect(sortOffers(offers, 'price-asc').map((o) => o.id)).toEqual(['c', 'a', 'b'])
})

test('sorts by price, high to low', () => {
  expect(sortOffers(offers, 'price-desc').map((o) => o.id)).toEqual(['b', 'a', 'c'])
})
