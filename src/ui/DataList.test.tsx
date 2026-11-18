import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DataList } from './DataList'

const items = Array.from({ length: 15 }, (_, i) => ({ id: String(i), name: `Item ${i}` }))

test('renders a list', () => {
  render(<DataList items={items} keyOf={(item) => item.id} renderItem={(item) => <span>{item.name}</span>} />)
  expect(screen.getByRole('list')).toBeTruthy()
})

test('loads more items', async () => {
  render(<DataList items={items} pageSize={5} keyOf={(item) => item.id} renderItem={(item) => <span>{item.name}</span>} />)
  await userEvent.click(screen.getByRole('button', { name: 'Load more' }))
  expect(screen.getAllByRole('listitem').length).toBeTruthy()
})
