import {defineCollection} from "astro:content";
import { z } from "astro/zod";
import {glob} from "astro/loaders";

const imageCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/bilderDefinition/' }),
  schema: ({image}) => z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    publishDate: z.date(),
    order: z.number().default(0),
    hideInCarousel: z.boolean().default(false),
    coverImage: image()
  }),
});

const themeCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/themen' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    text: z.string(),
    img: image(),
    alt: z.string().default(''),
    order: z.number().default(0),
  }),
});

export const collections = { imageCollection, themeCollection };