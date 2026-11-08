import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const publications = defineCollection({
  loader: file("src/data/publications.yaml"),
  schema: z.object({
    year: z.number().int(),
    venue: z.string(),
    pages: z.string(),
    title: z.string(),
    authors: z.string(),
    abstract: z.string(),
    doi: z.string(),
    linkLabel: z.string(),
  }),
});

export const collections = { publications };
