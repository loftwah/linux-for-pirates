import { defineCollection, z } from 'astro:content';

// Define a schema for the frontmatter
const docsSchema = z.object({
  title: z.string(),
  // Add other properties as needed
});

export const collections = {
  'docs': defineCollection({ schema: docsSchema }),
}; 