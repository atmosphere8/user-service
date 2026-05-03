import type { ErrorRequestHandler } from "$types/app/global.type";

const error_handler: ErrorRequestHandler = (error, req, res, next) => {
  console.error("🔴", error);

  res.status(500).json({ error: error.message });
};

export default error_handler;
