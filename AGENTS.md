# Offer list

Car-rental offer list: a search header, the offer list, and the checkout summary.

## Commands

- `npm run dev`: start the app
- `npm test`: unit and component tests (Vitest + Testing Library)
- `npm run typecheck`: TypeScript

## Conventions

- Reuse components from `src/ui/` before writing new ones.
- No new dependencies without asking.
- Test behaviour through the UI (Testing Library queries by role and text), not implementation details.
- `src/store/search.ts` is shared page state: the header writes the search, checkout reads the selected offer.
- `src/shared/` and `src/checkout/` belong to the Checkout team. Tell them before changing anything there.
- Run `npm test` and `npm run typecheck` before calling something done.
