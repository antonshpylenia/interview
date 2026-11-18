import { SearchHeader } from './header/SearchHeader'
import { OfferList } from './offers/OfferList'
import { Summary } from './checkout/Summary'
import { useSearchStore } from './store/search'

export function App() {
  const { location, pickupDate } = useSearchStore()

  return (
    <>
      <SearchHeader />
      <main className="layout">
        {/* Remount on a new search so the list starts fresh. */}
        <OfferList key={pickupDate} location={location} pickupDate={pickupDate} />
        <Summary />
      </main>
    </>
  )
}
