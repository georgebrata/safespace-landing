/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate a fully static site in `out/` (plain HTML/CSS/JS assets).
  output: "export",

  // Recommended for static hosting (each route becomes `/route/index.html`).
  trailingSlash: true,

  // `next/image` optimization requires a server; disable for static export.
  images: { unoptimized: true },
};

export default nextConfig;
