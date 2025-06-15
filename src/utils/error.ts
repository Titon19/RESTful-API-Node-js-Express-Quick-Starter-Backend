export class AppError extends Error {
  constructor(
    public statusCode: number,
    public massage: string,
    public isOperational = true
  ) {
    super(massage)
    Object.setPrototypeOf(this, AppError.prototype)
  }
}

export class NotFoundError extends AppError {
  constructor(massage = "Not found") {
    super(404, massage)
  }
}

export class ValidationError extends AppError {
  constructor(massage = "Validation error") {
    super(400, massage)
  }
}

export class UnauthorizedError extends AppError {
  constructor(massage = "Unauthorized") {
    super(401, massage)
  }
}

export class ForbiddenError extends AppError {
  constructor(massage = "Forbidden") {
    super(403, massage)
  }
}

export class InternalServerError extends AppError {
  constructor(massage = "Internal server error") {
    super(500, massage)
  }
}
