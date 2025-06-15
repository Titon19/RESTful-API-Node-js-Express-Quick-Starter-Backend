import { Response } from "express"
import { AppError } from "./error"

export const successResponse = <T>(
  res: Response,
  statusCode: 200,
  message = "Success",
  data: T
) => {
  return res.status(statusCode).json({
    status: "Success",
    message,
    data,
  })
}

export const errorResponse = (res: Response, error: Error | AppError) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "Error",
      message: error.message,
    })
  }

  return res.status(500).json({
    status: "Error",
    message: error.message,
  })
}
