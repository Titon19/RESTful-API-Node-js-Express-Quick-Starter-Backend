import express from "express"
import { getEvents } from "../../controllers/eventController"

const eventRoutes: express.Router = express.Router()

eventRoutes.get("/events", getEvents)

export default eventRoutes
