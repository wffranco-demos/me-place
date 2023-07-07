import { z, defineCollection } from 'astro:content';

/** Transform elements before use it */
const zz = {
  /** Transform empty strings or null to undefined */
  undef(format) {
    return z.union([z.literal('').transform(() => undefined), z.literal(null).transform(() => undefined), format.nullable()]);
  },
};

const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.date(),
    author: z.string(),
    // category: z.string(),
    categories: z.array(z.string()),
    tags: z.array(z.string())
  }),
});

const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
  'team': teamCollection,
};
