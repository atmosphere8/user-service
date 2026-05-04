import remove_user_service from "$services/user/remove_user.service";
import async_handler from "$middlewares/async/async-handler.middleware";

const remove_user_controller = async_handler(async (req, res) => {
  const id = Number(req.params.id);
  const user = await remove_user_service(id);

  res.json(user);
});

export default remove_user_controller;
