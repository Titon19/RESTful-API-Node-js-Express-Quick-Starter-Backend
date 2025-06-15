import { z } from "zod"

export const eventValidation = z.object({
  title: z.string().min(3),
  description: z.string().min(3),
  price: z.number().min(1),
  image: z.string().min(1),
})
