// import { NextFunction, Request, Response } from "express"
// import { logger } from "../utils/logger"
// import { getAllEvents } from "../services/eventService"
// import { PaginationParams } from "../utils/pagination"

// export const getEvents = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { page = "1", limit = "10" } = req.query

//     const paginationParams: PaginationParams = {
//       page: parseInt(page as string),
//       limit: parseInt(limit as string),
//     }

//     const { data, meta } = await getAllEvents(paginationParams)

//     logger.info("Successfully got events")
//     return res.status(200).json({
//       data,
//       meta,
//       status: "Success",
//       statusCode: 200,
//       message: "Events fetched successfully",
//     })
//   } catch (error) {
//     logger.error("❌ Error getting events:", error)
//   }
// }

// export const postEvent = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     res.status(201).send("Event created")
//     logger.info("Successfully created event")
//   } catch (error) {
//     logger.error("❌ Error creating event:", error)
//   }
// }
