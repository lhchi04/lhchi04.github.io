// Single source of truth for personal info used across the site.
// TODO: replace placeholders with real details.
export const site = {
  name: 'Your Name',
  headline: 'Software engineer building fast, reliable systems.',
  description: 'Personal website and project portfolio.',
  url: 'https://huesofchi.com', // keep in sync with `site` in astro.config.mjs
  email: 'you@example.com',
  socials: {
    github: 'https://github.com/your-handle',
    linkedin: 'https://www.linkedin.com/in/your-handle',
  },
  nav: [
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Resume', href: '/resume' },
  ],
} as const;
