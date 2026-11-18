# Pho Bo And Ga — Ordering Partner Website

Next.js 15 mobile-responsive restaurant website. This edition intentionally sends customers to the restaurant's existing providers for ordering and payment. **It does not collect payments, process orders, or connect to Toast POS via API.**

## Pickup
- Toast Online Ordering: https://order.toasttab.com/online/bo-and-ga-35-02-154th-st

## Delivery
- Uber Eats, DoorDash, Grubhub: full URLs provided by the restaurant owner are embedded in `app/page.tsx` unchanged.

## Run
1. Install Node.js 20+.
2. Run `npm install` and `npm run dev`.
3. Open http://localhost:3000.
4. Run `npm run build` before deployment.
5. Deploy to Vercel or another Next.js host and connect your domain.

## Important before launch
- Verify each provider link opens the correct Pho Bo And Ga location and works on mobile.
- Replace emoji art with real, licensed food photographs.
- Confirm descriptions and categories in `lib/menu.ts` match the current menu. **Prices are intentionally not displayed on this site**; the provider is the source of truth.
- Add verified hours, contact information, privacy/accessibility/legal information as appropriate.
- Delivery orders and payment take place on the chosen delivery platform; pickup orders and payment take place on Toast.
- The legacy Stripe/Supabase checkout and admin endpoints were removed to prevent a misleading or conflicting payment path.
