# Personal Portfolio

Sai Praneeth Pegada's personal portfolio — [saipraneeth-portfolio.netlify.app](https://saipraneeth-portfolio.netlify.app)

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui · next-themes · EmailJS

Statically exported (`output: "export"`) and deployed to Netlify via git-connected continuous deployment.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` and fill in the EmailJS values for the contact form to work locally.

## Content

Site copy lives in `lib/content/*.ts` as typed data — no CMS, no MDX. Edit those files to update experience, projects, skills, or education.

## Build

```bash
npm run build
```

Outputs a static site to `out/`, matching what Netlify deploys.
