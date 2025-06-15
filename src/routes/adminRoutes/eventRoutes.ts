import express, { Router } from "express"
// import { getEvents, postEvent } from "../../controllers/eventController"
// import { validationRequest } from "../../middlewares/validationRequest"
// import { eventValidation } from "../../validations/eventValidation"

const eventRoutes: Router = express.Router()

// eventRoutes.get("/events", getEvents)
// eventRoutes.post("/events", validationRequest(eventValidation), postEvent)

export default eventRoutes
