import AppError from "$middlewares/error/app-error.class";
import { get_user_model } from "$models/index.model";
import type { UserPublicResponse } from "$app/types/user/user.dto";

const get_user_service = async (id: number): Promise<UserPublicResponse> => {
  const result = await get_user_model(id);

  if (!result) throw new AppError("🔴 User not found", 404);

  return result;
};

export default get_user_service;
