// Static export so the site can be served from GitHub Pages (or anywhere).
// The site is served from the domain root (v4ishnavi.github.io). Set NEXT_PUBLIC_BASE_PATH only if it moves under a subpath.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
export default {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: {unoptimized: true},
};
