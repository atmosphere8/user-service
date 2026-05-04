import get_user_service from "$services/user/get_user.service";
import async_handler from "$middlewares/async/async-handler.middleware";

const get_user_controller = async_handler(async (req, res) => {
  const id = Number(req.params.id);
  const user = await get_user_service(id);

  res.json(user);
});

export default get_user_controller;
