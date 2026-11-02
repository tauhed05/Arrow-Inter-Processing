# Arrow Inter Processing

Marketing site for a garment washing and finishing factory. Next.js 14 (App Router), TypeScript, Tailwind CSS 3.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Structure

- `app/` layout, global styles, the single page
- `components/` one component per section, plus shared `ui.tsx` (Container, Section, SectionHeading, Button)
- `lib/data.ts` all copy, stats, services and contact details in one place
- `public/images/` photos and logo
- `tailwind.config.ts` brand colors: primary `#2D6A4F`, accent `#528788`, light `#F0F7F4`, paper `#FAF9F5`

## Contact

There is no contact form. The Contact section shows a "Need help fast?" card with a WhatsApp QR code (`public/images/whatsapp-qr-code.png`) and a "Chat on WhatsApp" button for phone visitors, which opens `https://wa.me/<company.whatsapp>` (the number is set in `lib/data.ts`).

To change the QR code, replace `public/images/whatsapp-qr-code.png` with a new square image of the code (keep a white border around it so it scans).

## To do

- Replace weak or generic photos with real photos of the factory.
- Confirm the numbers in the stats strip.