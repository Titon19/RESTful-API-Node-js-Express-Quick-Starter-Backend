import express, { Application } from "express"
import cors from "cors"
import dotenv from "dotenv"
import adminRoutes from "./routes/adminRoutes"
import cookieParser from "cookie-parser"

dotenv.config()
const app: Application = express()
const PORT: number = 5000

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
)
app.use(express.json())
app.use(cookieParser())
app.use(express.static("public"))

// Routes
app.use("/api/admin", adminRoutes)

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export default app
