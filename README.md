## Project overview

This is the source for the marketing site for **misteddoubleglazing.co.uk**, built with the Next.js App Router and deployed on Vercel.

The site focuses on:

- A high-conversion homepage with a quote form
- Service pages for different types of double glazing repairs
- Location pages for key UK cities and regions
- A simple content structure that is easy to extend

## Getting started

From the project root:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

## Environment configuration

Local configuration is stored in `.env.local` (not committed to git). The following variables are used:

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`, `SMTP_TO` – SMTP settings for the enquiry form email handler.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` – Google Analytics 4 measurement ID (e.g. `G-XXXXXXXXXX`).

When deploying on Vercel, the same variables should be configured in the project’s Environment Variables.

## Email / enquiry form

The homepage quote form (`EnquiryForm`) posts to a server route at `/api/enquiry` and sends enquiries via SMTP using Nodemailer.

- Form component: `src/components/EnquiryForm.tsx`
- API route: `src/app/api/enquiry/route.ts`

The handler validates basic fields (`name`, `phone`, `postcode`, `message`) and sends a text+HTML email to the configured `SMTP_TO` address.

## Pages and routing

Key routes:

- Homepage: `src/app/page.tsx`
- Services index: `src/app/services/page.tsx`
- Service detail pages (slug-based): `src/app/services/[slug]/page.tsx`
- Locations index: `src/app/locations/page.tsx`
- Location detail pages (slug-based): `src/app/locations/[slug]/page.tsx`
- Terms: `src/app/terms/page.tsx`
- HTML sitemap: `src/app/site-map/page.tsx`
- FAQ page: `src/app/faq/page.tsx`

Supporting data:

- Services data: `src/data/services.ts`
- Locations data (including content and SEO fields): `src/data/locations.ts`

## SEO implementation

This project includes several SEO-focused features:

- **Page metadata**
  - Global metadata (title, description, Open Graph) is defined in `src/app/layout.tsx`.
  - Individual pages (services, locations, terms, FAQ) define their own `metadata` objects for page-specific titles and descriptions.

- **Open Graph and social**
  - The global layout metadata defines Open Graph fields for the homepage.
  - Location and service detail routes set page-specific titles/descriptions via `generateMetadata`.

- **XML sitemap**
  - Implemented in `src/app/sitemap.ts` using Next.js `MetadataRoute.Sitemap`.
  - Includes:
    - Core pages: `/`, `/services`, `/locations`, `/terms`, `/site-map`, `/faq`
    - All service detail URLs from `services.ts`
    - All location detail URLs from `locations.ts`
  - The sitemap is served from `/sitemap.xml` and is referenced from `robots.txt`.

- **Robots.txt**
  - Implemented in `src/app/robots.ts`.
  - Currently allows all user agents and points to the generated `/sitemap.xml`:
    - `userAgent: "*", allow: "/"`.

- **HTML sitemap**
  - User-facing sitemap at `/site-map` (`src/app/site-map/page.tsx`).
  - Lists:
    - Core navigation pages (Home, Services, Locations, FAQs, etc.).
    - All services (sorted A–Z).
    - All locations (sorted A–Z).

- **Location-specific SEO**
  - Location content and SEO fields live in `src/data/locations.ts`.
  - Each entry defines:
    - `city`, `region`, `weatherContext`, `intro`, `neighbourhoodsBlurb`
    - `subAreas` (local neighbourhoods)
    - `postcodeAreas` (postcode prefixes)
    - `toneSnippet`
  - `src/app/locations/[slug]/page.tsx` uses this data to:
    - Build a location-specific `<h1>` and on-page copy.
    - Generate a meta description mentioning city, neighbourhoods and postcode areas.
    - Render a location-specific Google Maps iframe as a simple visual aid.

- **Structured data (schema.org)**
  - **Organization schema**
    - Defined in `src/app/layout.tsx` as JSON-LD.
    - Uses `@type: "Organization"` with:
      - `name`: Misted Double Glazing
      - `url`: `https://misteddoubleglazing.co.uk`
      - `address`: full postal address for Alloa Business Centre, including postcode.
  - **Location `Service` schema**
    - Each location page defines a `schema` object and renders it as JSON-LD:
      - `@type: "Service"`
      - `name`: “Misted double glazing repairs in {city}”
      - `serviceType`: “Double glazing repair”
      - `areaServed`:
        - `@type: "City"`
        - `name`: city name
        - `addressRegion`: regional name (e.g. “Central Scotland”, “Merseyside”)
      - `description`: derived from `weatherContext` and city-specific copy.
      - `url`: canonical URL for the location page.
  - **FAQPage schema**
    - The FAQ page at `/faq` (`src/app/faq/page.tsx`) includes JSON-LD with:
      - `@type: "FAQPage"`
      - `mainEntity`: array of `Question` objects with `acceptedAnswer` entries.
    - This is designed to be compatible with Google’s FAQ rich result guidelines.

- **Content and internal linking**
  - Location pages mention:
    - Local neighbourhoods.
    - Postcode areas.
    - Contextual copy about local weather and housing types.
  - Services and locations are interlinked from:
    - The services index.
    - The locations index.
    - The HTML sitemap.

## Analytics

Google Analytics 4 is integrated using the lightweight `gtag.js` approach:

- Defined in `src/app/layout.tsx` via `next/script`:
  - Loads `https://www.googletagmanager.com/gtag/js?id=...` with `strategy="afterInteractive"`.
  - Initializes GA4 and sends a `config` event using `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
- GA only runs when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is present in the environment.

## Text and control files for search engines and AI

The project includes the following relevant files/endpoints:

- **Robots.txt**
  - Configured via `src/app/robots.ts` and served at `/robots.txt`.
  - Currently allows all user agents and links to `/sitemap.xml`.

- **XML sitemap**
  - Generated at `/sitemap.xml` via `src/app/sitemap.ts` and kept in sync with services and locations.

- **Google Search Console verification file**
  - A static HTML verification file is placed under `public/` so GSC can confirm site ownership.

There are currently **no AI-specific control files** such as `ai.txt` or bespoke crawler directives beyond what is defined in `robots.txt`. These can be added later if you want stronger, bot-specific guidance.

