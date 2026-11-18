import { useState, type ReactNode } from 'react'

export interface DataListProps<T> {
  items: T[]
  keyOf: (item: T) => string
  renderItem: (item: T) => ReactNode
  filters?: Array<(item: T) => boolean>
  sorter?: (items: T[]) => T[]
  pageSize?: number
  loadMoreLabel?: string
  className?: string
}

/**
 * Generic list with pluggable filtering, sorting and incremental ("load more") pagination.
 * Reusable for any collection: offers, bookings, locations, etc.
 */
export function DataList<T>({
  items,
  keyOf,
  renderItem,
  filters = [],
  sorter = (list) => list,
  pageSize = 10,
  loadMoreLabel = 'Load more',
  className,
}: DataListProps<T>) {
  const [visibleCount, setVisibleCount] = useState(pageSize)

  const filtered = filters.reduce((acc, filter) => acc.filter(filter), items)
  const visibleItems = sorter(filtered).slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  return (
    <>
      <ul className={className}>
        {visibleItems.map((item) => (
          <li key={keyOf(item)}>{renderItem(item)}</li>
        ))}
      </ul>
      {hasMore && (
        <button type="button" className="load-more" onClick={() => setVisibleCount((count) => count + pageSize)}>
          {loadMoreLabel}
        </button>
      )}
    </>
  )
}
