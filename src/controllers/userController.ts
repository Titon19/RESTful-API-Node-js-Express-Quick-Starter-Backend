import { NextFunction, Request, Response } from "express"

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body)
  } catch (error) {
    console.log(error)
  }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body)
  } catch (error) {
    console.log(error)
  }
}

export const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body)
  } catch (error) {
    console.log(error)
  }
}

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body)
  } catch (error) {
    console.log(error)
  }
}
