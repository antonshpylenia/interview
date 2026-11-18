import { create } from 'zustand'
import type { Location, Offer } from '../types'

interface SearchState {
  location: Location
  pickupDate: string
  returnDate: string
  selectedOffer: Offer | null
  priceCap: number | null
  setLocation: (location: Location) => void
  setDates: (pickupDate: string, returnDate: string) => void
  selectOffer: (offer: Offer | null) => void
  setPriceCap: (priceCap: number | null) => void
}

// Shared across the page: the header writes the search, checkout reads the selection.
export const useSearchStore = create<SearchState>((set) => ({
  location: 'Lisbon',
  pickupDate: '2026-12-01',
  returnDate: '2026-12-04',
  selectedOffer: null,
  priceCap: null,
  setLocation: (location) => set({ location, selectedOffer: null }),
  setDates: (pickupDate, returnDate) => set({ pickupDate, returnDate }),
  selectOffer: (selectedOffer) => set({ selectedOffer }),
  setPriceCap: (priceCap) => set({ priceCap }),
}))
