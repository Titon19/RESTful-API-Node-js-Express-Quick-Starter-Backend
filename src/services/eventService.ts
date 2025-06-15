// import { EventType } from "../types/eventType"
// import { PaginationParams } from "../utils/pagination"

// export const getAllEvents = async (params: PaginationParams) => {
//   const page = params.page || 1
//   const limit = params.limit || 10
//   const skip = (page - 1) * limit

//     const query = Event.find().skip(skip).limit(limit)

//   const [events, total]: [EventType[], number] = await Promise.all({
//     events: [],
//     total: 0,
//   })

//   const totalPages = Math.ceil(total / limit)

//   return {
//     data: events,
//     meta: {
//       total,
//       page,
//       limit,
//       totalPages,
//       hasNext: page < totalPages,
//       hasPrevious: page > 1,
//     },
//   }
// }
