import { defineCollection, z } from 'astro:content';

// -------------------------------------------------------------------
// Members collection — mirrors _members/*.md frontmatter
// -------------------------------------------------------------------
const members = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    image: z.string().optional(),
    description: z.string(),   // role title e.g. "Principal Investigator"
    role: z.enum(['pi', 'postdoc', 'phd', 'ms', 'undergrad', 'staff', 'alumni']),
    group: z.enum(['current', 'alumni']).default('current'),
    aliases: z.array(z.string()).optional(),
    links: z.object({
      email: z.string().optional(),
      orcid: z.string().optional(),
      'google-scholar': z.string().optional(),
      github: z.string().optional(),
      twitter: z.string().optional(),
      linkedin: z.string().optional(),
    }).optional(),
  }),
});

// -------------------------------------------------------------------
// Posts collection — mirrors _posts/*.md frontmatter
// -------------------------------------------------------------------
const posts = defineCollection({
  type: 'content',
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
