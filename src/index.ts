import express, { Application, NextFunction, Request, Response } from "express"
import cors from "cors"
import dotenv from "dotenv"
import adminRoutes from "./routes/adminRoutes"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import { logger } from "./utils/logger"
import CONFIG from "./config/environment"

dotenv.config()
const app: Application = express()

app.use(cors())
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Methods", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// Routes
app.use("/api/admin", adminRoutes)

// Server
app.listen(CONFIG.port, () => {
  logger.info(`Server running on http://localhost:${CONFIG.port}`)
})

export default app
