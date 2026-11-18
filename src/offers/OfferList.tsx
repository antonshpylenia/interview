import { useState } from 'react'
import { Select } from '../ui/Select'
import { DataList } from '../ui/DataList'
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
  priceCap: number | null
}

export function OfferList({ location, pickupDate, priceCap }: Props) {
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
      <DataList
        className="offer-grid"
        items={offers}
        keyOf={(offer) => offer.id}
        renderItem={(offer) => <OfferCard offer={offer} />}
        filters={[(offer) => priceCap === null || offer.pricePerDay <= priceCap]}
        sorter={(list) => sortOffers(list, sort)}
        pageSize={6}
      />
    </section>
  )
}
