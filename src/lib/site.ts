// Single source of truth for personal info used across the site.
// TODO: replace placeholders with real details.
export const site = {
  name: 'Your Name',
  headline: 'Software engineer building fast, reliable systems.',
  bio: 'A short intro about who you are, what you build, and what you care about. Two or three sentences is plenty.',
  description: 'Personal website and project portfolio.',
  url: 'https://huesofchi.com', // keep in sync with `site` in astro.config.mjs
  repo: 'https://github.com/lhchi04/lhchi04.github.io',
  email: 'you@example.com',
  resumePdf: null as string | null, // e.g. '/resume.pdf' once added to public/
  // Keep false while content is placeholder so search engines don't index it.
  indexable: false,
  socials: [
    { label: 'GitHub', href: 'https://github.com/lhchi04' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle' },
  ],
  nav: [
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Resume', href: '/resume' },
  ],
} as const;
