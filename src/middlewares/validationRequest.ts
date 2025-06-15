import { NextFunction, Request, Response } from "express"
import { ZodError, ZodSchema } from "zod"
import { InternalServerError, ValidationError } from "../utils/error"

export const validationRequest =
  (schema: ZodSchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body)
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMassages = error.issues.map((issue) => issue.message).join(", ")

        throw new ValidationError(errorMassages)
      }

      throw new InternalServerError()
    }
  }
