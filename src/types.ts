export type Transmission = 'automatic' | 'manual'
export type Fuel = 'petrol' | 'diesel' | 'hybrid' | 'electric'
export type Location = 'Lisbon' | 'Porto'

export interface Offer {
  id: string
  location: Location
  model: string
  category: string
  transmission: Transmission | null
  fuel: Fuel
  seats: number
  pricePerDay: number
  currency: 'EUR'
}
