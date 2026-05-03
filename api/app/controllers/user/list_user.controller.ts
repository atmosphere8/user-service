import list_user_service from "$services/user/list_user.service";
import async_handler from "$middlewares/async-handler.middleware";

const list_user_controller = async_handler(async (req, res) => {
  const users = await list_user_service();

  res.json(users);
});

export default list_user_controller;
