import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(160),
      date: z.coerce.date(), // start date; used for sorting
      endDate: z.coerce.date().optional(), // omit for single-month or ongoing
      tags: z.array(z.string()).default([]),
      role: z.string().optional(),
      repo: z.url().optional(),
      demo: z.url().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      // Extra links beyond repo/demo (dashboards, videos, slides)
      links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
      featured: z.boolean().default(false),
      status: z.enum(['live', 'wip', 'archived']).default('live'),
    }),
});

export const collections = { projects };
