import { useEffect, useState } from 'react'
import { fetchOffers } from '../api/offers'
import type { Location, Offer } from '../types'

export function useOffers(location: Location, pickupDate: string) {
  const [offers, setOffers] = useState<Offer[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetchOffers({ location, pickupDate })
      .then((page) => setOffers(page.items))
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false))
  }, [location, pickupDate])

  return { offers, loading, error }
}
