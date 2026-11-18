import { formatPrice } from '../shared/formatPrice'
import { useSearchStore } from '../store/search'

const DAY_MS = 24 * 60 * 60 * 1000

// Owned by the Checkout team; rendered here the way the checkout MFE sits next to the list.
export function Summary() {
  const offer = useSearchStore((state) => state.selectedOffer)
  const pickupDate = useSearchStore((state) => state.pickupDate)
  const returnDate = useSearchStore((state) => state.returnDate)

  if (!offer) return <aside className="summary">Select a car to see your total.</aside>

  const days = Math.max(1, Math.round((Date.parse(returnDate) - Date.parse(pickupDate)) / DAY_MS))
  const total = offer.pricePerDay * days

  return (
    <aside className="summary">
      <h2>Your booking</h2>
      <p>{offer.model}</p>
      <p>
        {days} {days === 1 ? 'day' : 'days'} × {formatPrice(offer.pricePerDay)}
      </p>
      <p className="total">Total {formatPrice(total)}</p>
      <p className="hint">Includes VAT and basic protection.</p>
    </aside>
  )
}
