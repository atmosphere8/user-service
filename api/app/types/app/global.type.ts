import type { Request, Response, NextFunction } from "express";

export type RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void> | void;

export type ErrorRequestHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => void;
