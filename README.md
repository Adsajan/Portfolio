# Adsajan Portfolio

Production-ready portfolio built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production checks

```bash
npm run lint
npm run build
npm start
```

## Deploy to Vercel

### Option 1: Vercel Dashboard (recommended)

1. Push this project to a GitHub repository.
2. Go to [https://vercel.com/new](https://vercel.com/new).
3. Import your repo.
4. Keep default settings:
   - Framework Preset: `Next.js`
   - Build Command: `next build`
   - Output Directory: `.next` (auto)
5. Click **Deploy**.

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

No environment variables are required for this version.

## Project structure

- `app/` - Next.js app router pages and global styles
- `components/Home/` - Portfolio sections (Hero, Services, Resume, Projects, Skills, Contact)
- `constant/consant.ts` - Navigation and content data
- `public/images/` - Portfolio assets
