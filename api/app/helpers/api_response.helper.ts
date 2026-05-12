import type { Response } from "express";

const api_response = <T>(
  res: Response,
  status: number,
  message: string,
  data: T,
) => res.status(status).json({ status: status, message: message, data: data });

export default api_response;
