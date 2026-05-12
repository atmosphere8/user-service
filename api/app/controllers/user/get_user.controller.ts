import { get_user_service } from "$services/index.service";
import async_handler from "$middlewares/async/async-handler.middleware";

const get_user_controller = async_handler(async (req, res) => {
  const id = Number(req.params.id);
  const result = await get_user_service(id);

  res.json(result);
});

export default get_user_controller;
