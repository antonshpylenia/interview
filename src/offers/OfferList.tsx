import { useState } from 'react'
import { Select } from '../ui/Select'
import { OfferCard } from './OfferCard'
import { sortOffers, type SortKey } from './sort'
import { useOffers } from './useOffers'
import type { Location } from '../types'

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
]

interface Props {
  location: Location
  pickupDate: string
}

export function OfferList({ location, pickupDate }: Props) {
  const { offers, loading, error } = useOffers(location, pickupDate)
  const [sort, setSort] = useState<SortKey>('recommended')

  if (loading) return <p className="status">Loading offers…</p>
  if (error) return <p className="status error">Could not load offers. {error}</p>

  return (
    <section className="offers">
      <div className="toolbar">
        <span>{offers.length} cars</span>
        <Select label="Sort" value={sort} options={SORT_OPTIONS} onChange={(value) => setSort(value as SortKey)} />
      </div>
      <ul className="offer-grid">
        {sortOffers(offers, sort).map((offer) => (
          <li key={offer.id}>
            <OfferCard offer={offer} />
          </li>
        ))}
      </ul>
    </section>
  )
}
