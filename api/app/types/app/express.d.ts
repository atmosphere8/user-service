import type { UserRow } from "../user/user.entity";
import type { JwtPayload } from "jsonwebtoken";
import type { UserJWTPayload } from "../user/user.type";

declare global {
  namespace Express {
    interface Request {
      user?: UserJWTPayload;
    }
  }
}

export {};
