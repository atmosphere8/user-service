import type { ErrorRequestHandler } from "$app/types/app/middleware.type";
import AppError from "$middlewares/error/app-error.class";

const error_handler: ErrorRequestHandler = (error, req, res, next) => {
  console.error("🔴", error);

  if (error instanceof AppError) {
    return res
      .status(error.status)
      .json({ status: error.status, message: error.message });
  }

  res.status(500).json({ status: 500, message: "🔴 Internal Server Error" });
};

export default error_handler;
