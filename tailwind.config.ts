import type { Config } from "tailwindcss";

const config: Config = {
  // Tailwind v4 auto-detect can accidentally crawl build artifacts (like `.next/`)
  // and pick up HTML-escaped classnames (e.g. `&#x27;`), which then breaks CSS url()
  // handling in Next's css-loader. Keep scanning limited to source files.
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./markdown/**/*.{md,mdx}",
  ],
};

export default config;


