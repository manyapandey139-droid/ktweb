# KT's Fashion — Website

A premium catalog / showcase website for KT's Fashion (Kanpur, Uttar
Pradesh). There is no online checkout — every product links to a
pre-filled WhatsApp message so customers can order directly.

Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding Products

See [PRODUCT-MANAGEMENT.md](./PRODUCT-MANAGEMENT.md) for a step-by-step,
beginner-friendly guide to adding, editing, and removing products and
images — no code knowledge required.

## Brand Configuration

WhatsApp number, Instagram link, email, and policy text all live in
[`lib/brandConfig.ts`](./lib/brandConfig.ts).

## Project Structure

```
app/                    Pages (routes)
components/             Reusable UI components
data/                   Product & category catalog (edit these to manage content)
lib/                    Brand config, WhatsApp link builder, filtering/sorting helpers
types/                  Shared TypeScript types
contexts/               Client-side wishlist state
public/images/          Brand assets & product photos
```

## Build For Production

```bash
npm run build
npm run start
```

## Deploying

This project deploys cleanly to [Vercel](https://vercel.com/new) (recommended,
same team as Next.js) or any Node.js host that supports Next.js. Just connect
the repository and deploy — no environment variables are required for the
current feature set.
