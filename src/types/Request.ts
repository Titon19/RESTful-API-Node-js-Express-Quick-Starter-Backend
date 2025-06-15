import type { Request } from "express"

type User = {
  id: string
  name: string
  email: string
  role: string
}

export interface UserRequest extends Request {
  user?: User
}
