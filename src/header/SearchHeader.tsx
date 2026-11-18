import { useSearchStore } from '../store/search'
import { Select } from '../ui/Select'
import { formatPrice } from '../shared/formatPrice'
import type { Location } from '../types'

const LOCATIONS: { value: Location; label: string }[] = [
  { value: 'Lisbon', label: 'Lisbon Airport' },
  { value: 'Porto', label: 'Porto Airport' },
]

export function SearchHeader() {
  const { location, pickupDate, returnDate, priceCap, setLocation, setDates, setPriceCap } = useSearchStore()

  return (
    <header className="search">
      <Select label="Pick-up" value={location} options={LOCATIONS} onChange={(value) => setLocation(value as Location)} />
      <label>
        From
        <input type="date" value={pickupDate} onChange={(e) => setDates(e.target.value, returnDate)} />
      </label>
      <label>
        To
        <input type="date" value={returnDate} onChange={(e) => setDates(pickupDate, e.target.value)} />
      </label>
      <label>
        Max price / day: {priceCap ? formatPrice(priceCap) : 'Any'}
        <input
          type="range"
          min={30}
          max={200}
          step={10}
          value={priceCap ?? 200}
          onChange={(e) => {
            const value = Number(e.target.value)
            setPriceCap(value >= 200 ? null : value)
          }}
        />
      </label>
    </header>
  )
}
