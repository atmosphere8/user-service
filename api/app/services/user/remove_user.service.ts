import AppError from "$middlewares/error/app-error.class";
import type { UserPublic } from "$app/types/user/user.dto";
import remove_user_model from "$models/user/remove_user.model";

const remove_user_service = async (id: number): Promise<UserPublic> => {
  const result = await remove_user_model(id);

  if (!result) throw new AppError("🔴 User not found", 404);

  return result;
};

export default remove_user_service;
