import type { RequestHandler } from "$types/app/global.type";

const async_handler =
  (fn: RequestHandler): RequestHandler =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((error) => next(error));
  };

export default async_handler;
