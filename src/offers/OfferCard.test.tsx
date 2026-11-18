import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { OfferCard } from './OfferCard'
import { useSearchStore } from '../store/search'
import type { Offer } from '../types'

const golf: Offer = {
  id: 'LIS-04',
  location: 'Lisbon',
  model: 'VW Golf',
  category: 'Compact',
  transmission: 'manual',
  fuel: 'diesel',
  seats: 5,
  pricePerDay: 58,
  currency: 'EUR',
}

test('shows the model, details and daily price', () => {
  render(<OfferCard offer={golf} />)
  expect(screen.getByRole('heading', { name: 'VW Golf' })).toBeInTheDocument()
  expect(screen.getByText(/Compact · 5 seats · Manual/)).toBeInTheDocument()
  expect(screen.getByText('€58')).toBeInTheDocument()
})

test('selecting the offer puts it in the booking summary', async () => {
  render(<OfferCard offer={golf} />)
  await userEvent.click(screen.getByRole('button', { name: 'Select' }))
  expect(useSearchStore.getState().selectedOffer?.id).toBe('LIS-04')
})
