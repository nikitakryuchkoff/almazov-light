# Public assets

Drop static files here — Next.js serves them from the site root.

## Marketing assets that should live here

| File                              | Purpose                           | Spec                                                                                                                                             |
| --------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `og-image.jpg`                    | Open Graph + Twitter card preview | 1200 × 630 px, JPG/PNG, ≤ 1 MB. Must visually represent AlmazovLight (logo + tagline + key visual). Referenced by `src/app/[locale]/layout.tsx`. |
| `favicon.ico`                     | Browser tab icon (legacy)         | 32 × 32 (multi-res ICO). Currently the Next.js placeholder — replace with brand.                                                                 |
| `icon.png` (optional)             | Modern PWA / iOS icon             | 512 × 512 PNG, square, transparent or branded background. Next.js auto-generates `<link rel="icon">` for this file.                              |
| `apple-touch-icon.png` (optional) | iOS home-screen icon              | 180 × 180 PNG.                                                                                                                                   |
| `manifest.webmanifest` (optional) | PWA install metadata              | If created, drop here; Next.js will pick it up automatically.                                                                                    |

## Already shipped

- `hero-bg-premium.png` — hero background photo
- `hero-bg.svg` — generated hero background fallback
- `cases/…` — portfolio case images and gallery photos
- `sponsors/…` — partner logos
