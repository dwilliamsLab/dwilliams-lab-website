import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const members = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/members' }),
  schema: z.object({
    name: z.string(),
    image: z.string().optional(),
    description: z.string(),
    role: z.string(),
    group: z.string().default('current'),
    hidden: z.boolean().optional(),
    aliases: z.array(z.string()).optional(),
    links: z.object({
      email: z.string().nullable().optional(),
      orcid: z.string().nullable().optional(),
      'google-scholar': z.string().nullable().optional(),
      github: z.string().nullable().optional(),
      twitter: z.string().nullable().optional(),
      linkedin: z.string().nullable().optional(),
    }).optional(),
    cta: z.object({
      text: z.string(),
      href: z.string(),
    }).optional(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    excerpt: z.string().optional(),
  }),
});

export const collections = { members, posts };