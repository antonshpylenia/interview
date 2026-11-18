import { SearchHeader } from './header/SearchHeader'
import { OfferList } from './offers/OfferList'
import { Summary } from './checkout/Summary'
import { useSearchStore } from './store/search'

export function App() {
  const { location, pickupDate, priceCap } = useSearchStore()

  return (
    <>
      <SearchHeader />
      <main className="layout">
        {/* Remount on a new search or price cap so the list starts fresh. */}
        <OfferList key={`${pickupDate}-${priceCap}`} location={location} pickupDate={pickupDate} priceCap={priceCap} />
        <Summary />
      </main>
    </>
  )
}
