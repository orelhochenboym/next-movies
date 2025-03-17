import { z } from 'zod';

export const movieSchema = z.object({
  id: z.coerce.number(),
  title: z.string(),
  image: z.string().url(),
  synopsis: z.string(),
  rating: z.coerce.number(),
  type: z.union([z.literal('movie'), z.literal('series')]),
  released: z.coerce.number(),
  runtime: z.string(),
  largeimage: z.string().url(),
  unogsdate: z.string().date(),
  imdbid: z.string(),
  download: z.coerce.number(),
});

export type MovieType = z.infer<typeof movieSchema>;
