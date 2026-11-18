import { formatPrice } from '../shared/formatPrice'
import { useSearchStore } from '../store/search'
import type { Offer } from '../types'

const TRANSMISSION_LABEL = { automatic: 'Automatic', manual: 'Manual' } as const

export function OfferCard({ offer }: { offer: Offer }) {
  const selectOffer = useSearchStore((state) => state.selectOffer)

  return (
    <article className="card">
      <div className="card-image" aria-hidden="true">{offer.category[0]}</div>
      <h3>{offer.model}</h3>
      <p className="meta">
        {offer.category} · {offer.seats} seats
        {offer.transmission && <> · {TRANSMISSION_LABEL[offer.transmission]}</>}
        {offer.fuel === 'electric' && <> · Electric</>}
      </p>
      <p className="price">
        {formatPrice(offer.pricePerDay)} <span>/ day</span>
      </p>
      <button type="button" onClick={() => selectOffer(offer)}>
        Select
      </button>
    </article>
  )
}
