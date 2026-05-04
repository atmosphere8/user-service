import type { ErrorRequestHandler } from "$types/app/global.type";
import AppError from "$middlewares/error/app-error.class";

const error_handler: ErrorRequestHandler = (error, req, res, next) => {
  console.error("🔴", error);

  if (error instanceof AppError) {
    return res.status(error.status).json({ error: error.message });
  }

  res.status(500).json({ error: "🔴 Internal Server Error" });
};

export default error_handler;
