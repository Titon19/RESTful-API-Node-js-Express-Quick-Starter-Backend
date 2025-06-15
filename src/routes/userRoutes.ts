import express, { Router } from "express"
import { getUsers } from "../controllers/userController"

const userRoutes: Router = express.Router()

userRoutes.get("/users", getUsers)

export default userRoutes
