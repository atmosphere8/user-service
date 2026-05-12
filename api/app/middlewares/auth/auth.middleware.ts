import jwt, { type JwtPayload } from "jsonwebtoken";
import AppError from "$middlewares/error/app-error.class";
import type { RequestHandler } from "$types/app/middleware.type";
import { jwt_secret } from "$config/env";
import type { UserJWTPayload } from "$types/user/user.type";

const auth_middleware: RequestHandler = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    throw new AppError("🔴 No token provided", 401);
  }

  try {
    const payload = jwt.verify(token, jwt_secret) as UserJWTPayload;

    if (typeof payload === "string" || !payload) {
      throw new Error();
    }

    req.user = payload;

    next();
  } catch (error) {
    throw new AppError("🔴 Invalid token", 401);
  }
};

export default auth_middleware;
