import { NextFunction, Request, Response } from "express"

export const getEvents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body)
  } catch (error) {
    console.log(error)
  }
}
