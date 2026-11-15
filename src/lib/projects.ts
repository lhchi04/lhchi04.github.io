import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

/** All projects, newest first. */
export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Projects flagged `featured: true`, newest first. */
export async function getFeaturedProjects(limit = 4): Promise<Project[]> {
  return (await getProjects()).filter((p) => p.data.featured).slice(0, limit);
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', timeZone: 'UTC' });
}

/** "Oct 2025 – Apr 2026", or a single month when there's no distinct end date. */
export function formatPeriod(start: Date, end?: Date): string {
  const a = formatDate(start);
  if (!end) return a;
  const b = formatDate(end);
  return a === b ? a : `${a} – ${b}`;
}
