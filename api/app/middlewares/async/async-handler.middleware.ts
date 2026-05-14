import type { RequestHandler } from "$app/types/app/middleware.type";

const async_handler_middleware =
  (fn: RequestHandler): RequestHandler =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((error) => next(error));
  };

export default async_handler_middleware;
