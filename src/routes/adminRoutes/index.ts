import express, { Router } from "express"
import eventRoutes from "./eventRoutes"
import { verifyToken, verifyRole } from "../../middlewares/verifyToken"

const adminRoutes: Router = express.Router()

adminRoutes.use(verifyToken)
adminRoutes.use(verifyRole("admin"))
adminRoutes.use(eventRoutes)

export default adminRoutes
