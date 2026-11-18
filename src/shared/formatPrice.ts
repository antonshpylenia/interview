// Shared with checkout/ (owned by the Checkout team).
export function formatPrice(value: number, currency = 'EUR'): string {
  return new Intl.NumberFormat('en-IE', { style: 'currency', currency, minimumFractionDigits: 2 }).format(value)
}
