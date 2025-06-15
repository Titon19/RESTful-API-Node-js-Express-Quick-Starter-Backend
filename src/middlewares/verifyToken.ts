import { NextFunction, RequestHandler, Response } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"
import { UserRequest } from "../types/Request"

export const verifyToken: RequestHandler = async (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const SECRET_KEY = process.env.SECRET_KEY as string

    if (!SECRET_KEY) {
      console.warn("❌ Secret key not found")
      res.status(401).json({ message: "Unauthorized" })
      return
    }

    const secretToken = req.cookies.secretToken

    const decoded = jwt.verify(secretToken, SECRET_KEY) as JwtPayload
    // const user = await User.findById(decoded.data.id)

    if (!decoded) {
      console.warn("❌ Token not found")
      res.status(401).json({ message: "Unauthorized: Token not found" })
      return
    }

    req.user = {
      id: decoded.id,
      name: decoded.name,
      email: decoded.email,
      role: decoded.role,
    }

    console.log("✅ User terautentikasi:", req.user.email)
    next()
  } catch (error) {
    console.error("❌ Middleware verifyToken error:", error)
    res.status(401).json({ message: "Unauthorized: Token is not valid" })
    return
  }
}

export const verifyRole =
  (type: "admin" | "customer"): RequestHandler =>
  async (req: UserRequest, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        console.warn("❌ User not found")
        res.status(401).json({ message: "Unauthorized" })
        return
      }
      if (req?.user?.role !== type) {
        console.warn("❌ Forbidden: Role is not valid in this route")
        res.status(403).json({ message: "Forbidden" })
        return
      }
      next()
    } catch (error) {
      console.error("❌ Middleware verifyRole error:", error)
      res.status(401).json({ message: "Unauthorized" })
      return
    }
  }
