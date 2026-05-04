import { list_user_model } from "$models/index.model";

const list_user_service = async () => {
  const users = await list_user_model();
  return users;
};

export default list_user_service;
