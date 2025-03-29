import { defineCollection, z } from "astro:content";

const news = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
    })
})

const games = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
    })
})

export const collections = { news, games }