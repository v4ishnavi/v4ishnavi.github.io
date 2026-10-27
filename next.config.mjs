// Static export so the site can be served from GitHub Pages (or anywhere).
// NEXT_PUBLIC_BASE_PATH is set to "/vaish" by the Pages workflow; leave it empty for a custom domain or Vercel.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
export default {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: {unoptimized: true},
};
