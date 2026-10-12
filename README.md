# Cloud Engineering Portfolio

Responsive React + TypeScript + Vite starter for Abdullah Mohamed's engineering portfolio.

## Sections
- Homepage introduction video slot (YouTube)
- About
- Projects
- Cloud Cost Intelligence case-study preview
- Résumé PDF
- Contact links

## Run locally
Requires Node.js and npm:
```bash
npm install
npm run dev
```
Open the local URL Vite prints, normally http://localhost:5173.

## Configure links
Edit `src/siteConfig.ts`:
- `introVideoId`: YouTube video ID only, not the full URL.
- `email`: professional contact email.
- `linkedin`: LinkedIn profile URL.
- `resumePath`: put your PDF at `public/resume.pdf`.
- `projectDemoUrl`: add when the app is deployed publicly.
- `loomUrl`: optional ordinary Loom share link.
- `loomEmbedUrl`: optional Loom embed URL (for example `https://www.loom.com/embed/VIDEO_ID`) to show the video directly on the project page.

Blank optional links intentionally show a placeholder or remain hidden. Do not publish fake or nonworking links.

## Build
```bash
npm run build
```
The output goes to `dist/`, which can later be uploaded to a private S3 bucket and served through CloudFront.

## Current project status
This portfolio is a local starter. The Cloud Cost Intelligence prototype uses synthetic data. Its public demo URL is not configured yet. AWS hosting is pending resolution of the account-verification restriction for CloudFront.
