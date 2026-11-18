import { useSearchStore } from '../store/search'
import { Select } from '../ui/Select'
import type { Location } from '../types'

const LOCATIONS: { value: Location; label: string }[] = [
  { value: 'Lisbon', label: 'Lisbon Airport' },
  { value: 'Porto', label: 'Porto Airport' },
]

export function SearchHeader() {
  const { location, pickupDate, returnDate, setLocation, setDates } = useSearchStore()

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
    </header>
  )
}
