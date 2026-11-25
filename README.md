# Mythfits website

Mythfits is a Vue 3 and Vite single-page site. The production build prerenders the page and adds structured data. Vite serves the local idea form endpoint and writes valid local submissions to the ignored `data/submissions.json` file. The separate Vercel function handles production submissions through Resend.

## Local development

```sh
npm ci
npm run dev
```

Run `npm run preview` to build and serve the prerendered site at `http://127.0.0.1:4173/`. Use synthetic data when testing the local form.

## The Awakening

The hero uses the transparent WebP from the v3 prototype. Vue manages its static, idle, igniting and revealed states. Canvas composites the staged body, wings and coals during ignition, then hands off to the static image. The prerendered page ships with the complete hero copy and links. Once the artwork decodes, visitors who allow motion can light the ember. Reduced motion keeps the static hero. The sticky header preserves access to the rest of the page across all hero states.

See [design](docs/DESIGN.md), [brand](docs/BRAND.md), [vision](docs/VISION.md) and [roadmap](docs/ROADMAP.md). The supplied reference prototype and master artwork were supplied in the local onboarding package.
