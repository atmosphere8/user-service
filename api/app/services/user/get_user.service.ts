import { get_user_model } from "$models/index";
import type { UserPublic } from "$types/user/user.dto";

const get_user_service = async (id: number): Promise<UserPublic> => {
  const result = await get_user_model(id);

  if (!result) throw new Error("🔴 User not found");

  return result;
};

export default get_user_service;
