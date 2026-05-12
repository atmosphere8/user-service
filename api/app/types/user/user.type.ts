import type { JwtPayload } from "jsonwebtoken";
import type { UserRow } from "./user.entity";

export interface UserTokenData {
  user_id: UserRow["id"];
  role: UserRow["role"];
}

export type UserJWTPayload = JwtPayload & UserTokenData;
