import { remove_user_service } from "$services/index.service";
import async_handler from "$middlewares/async/async-handler.middleware";

const remove_user_controller = async_handler(async (req, res) => {
  const id = Number(req.params.id);
  const result = await remove_user_service(id);

  res.json(result);
});

export default remove_user_controller;
