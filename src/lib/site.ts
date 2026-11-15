// Single source of truth for personal info used across the site.
export const site = {
  name: 'Chi Le',
  headline: 'Software engineer building backends, data pipelines and cloud services.',
  bio: "I'm a software engineer. I like building systems that keep working when things go wrong: pipelines that can be safely rerun, services with least-privilege access, and cloud infrastructure that costs almost nothing to run.",
  description: 'Personal website and project portfolio.',
  url: 'https://huesofchi.com', // keep in sync with `site` in astro.config.mjs
  repo: 'https://github.com/lhchi04/lhchi04.github.io',
  email: 'lehuechi04@gmail.com',
  // Keep false while content is placeholder so search engines don't index it.
  indexable: false,
  socials: [
    { label: 'GitHub', href: 'https://github.com/lhchi04' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/chile04/' },
  ],
  nav: [
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
  ],
} as const;
