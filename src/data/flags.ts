// Test pages (Nosotros) only exist in development (npm run dev) and in the GitHub Pages preview (PREVIEW=true).
// The production build for Railway leaves them out, and every link to them disappears with them.
export const showTestPages = import.meta.env.DEV || process.env.PREVIEW === 'true';
