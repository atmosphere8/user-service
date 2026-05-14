import type { UserRow } from "$types/user/user.entity";
import type { RequestHandler } from "$types/app/middleware.type";
import AppError from "$middlewares/error/app-error.class";

const check_role_middleware =
  (required_role: UserRow["role"]): RequestHandler =>
  (req, res, next) => {
    if (!req.user) {
      throw new AppError("🔴 You are not authorized", 401);
    }

    if (req.user.role !== required_role) {
      throw new AppError("🔴 You don't have permission", 403);
    }

    next();
  };

export default check_role_middleware;
